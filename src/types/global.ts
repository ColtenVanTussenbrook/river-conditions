export type River = {
    sourceInfo: {
        siteName: string
        siteCode: [
            {
                value: string
            }
        ]
    },
    variable: {
        variableCode: [
            {
                value: string
            }
        ],
        variableName: string
        variableDescription: string
        unit: {
            unitCode: 'ft3/s'
        }
    }
}

export type USGSdata = {
    name: string
    declaredType: string
    scope: string
    value: {
        timeSeries: River[]
    }
}