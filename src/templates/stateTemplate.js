import axios from "axios";
import React from "react";

class StateListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const stateCode = this.props.usState;

    axios.get(` https://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=${stateCode}&parameterCd=00060,00065&siteStatus=all`).then(
      (response) => {
        this.setState({ data: response.data });
      });

    return this.state;
  }

  statesMapping(state) {
    
    const states = {
      'ut': 'Utah',
      'wy': 'Wyoming',
      'mt': 'Montana',
      'or': 'Oregon',
    }

    for (const name in states) {
      if (name === state) {
        return states[name];
      }
    }
  }

  addRiverData(data) {
    let value = data.value;
    let rivers = [];

    if (value) {
      let riverData = value.timeSeries;
      let keyCounter = 1;

      riverData.forEach(river => {
        console.log(river);
        let riverObj = {};
        
        if (river.variable.variableDescription === "Discharge, cubic feet per second") {
          riverObj['name'] = river.sourceInfo.siteName;

          if (riverObj['discharge'] = river.values[0].value[0].value === "-999999" ) {
            riverObj['discharge'] = 'N/A';
          } else {
            riverObj['discharge'] = river.values[0].value[0].value;
          }
          
          riverObj['key'] = keyCounter; 
          keyCounter++;
        }
        
        if (Object.keys(riverObj).length !== 0) {
          rivers.push(riverObj);
        }
        
      })
    }

    return rivers;
  }

  render() {
    const { data } = this.state;
    const { usState } = this.props;
    const stateName = this.statesMapping(usState);
    const rivers = this.addRiverData(data);

    return (
      <div>
        <h1>{stateName} River Conditions</h1>
        <div>
        {
          rivers.map(river => {
            console.log(river);
            return( 
              <div key={river.key} id={river.key}>
                <div>
                  River Name: {river.name}
                </div>
                <div>
                  River Discharge (cfs): {river.discharge}
                </div>
              </div>
            )
          })
        }
        </div>
      </div>

    )
  }
}

export default ({ pageContext: { state } }) => (
  <StateListComponent usState={state} />
);