'use client'

import React, { useState } from 'react'

type UsState = {
  name: string
  abbv: string
  key?: string
}

interface StateSelectProps {
  usState: string
  setUsState: React.Dispatch<React.SetStateAction<string>>
}

const StateSelect = ({ usState, setUsState }: StateSelectProps) => {
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setUsState(event.target.value as string)
  }

  const usStates: UsState[] = [
    { name: 'Alabama', abbv: 'AL' },
    { name: 'Alaska', abbv: 'AK' },
    { name: 'Arizona', abbv: 'AZ' },
    { name: 'Arkansas', abbv: 'AR' },
    { name: 'California', abbv: 'CA' },
    { name: 'Colorado', abbv: 'CO' },
    { name: 'Connecticut', abbv: 'CT' },
    { name: 'Delaware', abbv: 'DE' },
    { name: 'Florida', abbv: 'FL' },
    { name: 'Georgia', abbv: 'GA' },
    { name: 'Hawaii', abbv: 'HI' },
    { name: 'Idaho', abbv: 'ID' },
    { name: 'Illinois', abbv: 'IL' },
    { name: 'Indiana', abbv: 'IN' },
    { name: 'Iowa', abbv: 'IA' },
    { name: 'Kansas', abbv: 'KS' },
    { name: 'Kentucky', abbv: 'KY' },
    { name: 'Louisiana', abbv: 'LA' },
    { name: 'Maine', abbv: 'ME' },
    { name: 'Maryland', abbv: 'MD' },
    { name: 'Massachusetts', abbv: 'MA' },
    { name: 'Michigan', abbv: 'MI' },
    { name: 'Minnesota', abbv: 'MN' },
    { name: 'Mississippi', abbv: 'MS' },
    { name: 'Missouri', abbv: 'MO' },
    { name: 'Montana', abbv: 'MT' },
    { name: 'Nebraska', abbv: 'NE' },
    { name: 'Nevada', abbv: 'NV' },
    { name: 'New Hampshire', abbv: 'NH' },
    { name: 'New Jersey', abbv: 'NJ' },
    { name: 'New Mexico', abbv: 'NM' },
    { name: 'New York', abbv: 'NY' },
    { name: 'North Carolina', abbv: 'NC' },
    { name: 'North Dakota', abbv: 'ND' },
    { name: 'Ohio', abbv: 'OH' },
    { name: 'Oklahoma', abbv: 'OK' },
    { name: 'Oregon', abbv: 'OR' },
    { name: 'Pennsylvania', abbv: 'PA' },
    { name: 'Rhode Island', abbv: 'RI' },
    { name: 'South Carolina', abbv: 'SC' },
    { name: 'South Dakota', abbv: 'SD' },
    { name: 'Tennessee', abbv: 'TN' },
    { name: 'Texas', abbv: 'TX' },
    { name: 'Utah', abbv: 'UT' },
    { name: 'Vermont', abbv: 'VT' },
    { name: 'Virginia', abbv: 'VA' },
    { name: 'Washington', abbv: 'WA' },
    { name: 'West Virginia', abbv: 'WV' },
    { name: 'Wisconsin', abbv: 'WI' },
    { name: 'Wyoming', abbv: 'WY' },
  ]

  return (
    <div>
      {/* <InputLabel
        disableAnimation
        sx={{ color: 'white' }}
        id="state-select-input-label"
      >
        State
      </InputLabel>
      <FormControl fullWidth>
        <Select
          labelId="state-select-label"
          id="state-select"
          value={usState}
          label="State"
          onChange={handleChange}
          sx={{ bgcolor: 'white' }}
          variant="outlined"
        >\
    //   </FormControl> */}
      <div className="form-block">
        <div className="relative w-full md:w-64">
          <select
            onChange={handleChange}
            className="dropdown-select"
            value={usState}
          >
            {usStates.map((st) => {
              return (
                <option value={st.name} key={st.abbv}>
                  {st.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default StateSelect
