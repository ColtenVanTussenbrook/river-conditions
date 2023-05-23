export type VariableDescription = {
  value: string
  description?: string
}

export type River = {
  name: string
  id: string
  discharge?: VariableDescription
  height?: VariableDescription
  temperature: VariableDescription
}

export type RiverUsgs = {
  sourceInfo: {
    siteName: string
    siteCode: [
      {
        value: string
      }
    ]
  }
  variable: {
    variableCode: [
      {
        value: string
        variableID: number
      }
    ]
    variableName: string
    variableDescription: string
    unit: {
      unitCode: 'ft3/s'
    }
  }
  values: [
    {
      value: [
        {
          value: string
          dateTime: string
        }
      ]
    }
  ]
}

export type USGSdata = {
  name: string
  declaredType: string
  scope: string
  value: {
    timeSeries: RiverUsgs[]
  }
}

export type UsState = {
  name: string
  abbv: string
}
