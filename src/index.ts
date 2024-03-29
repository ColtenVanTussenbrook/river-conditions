import type { USGSdata, River } from './types'

// Hardcoded values that reference USGS data.
const cfsCode = '00060'
const heightCode = '00065'
const tempCode = '00010'

const cfsDescription = 'Discharge, cubic feet per second'
const heightDescription = 'Gage height, feet'
const tempDescription = 'Temperature, water, degrees Celsius'

// List of rivers to show on popular rivers. Get additional values from USGS url param.
export const popularRivers = [
  '09234500', // Green River (A Section)
  '09211200', // Green River (Below Fontanelle)
  '13042500', // Henrys Fork (Box Canyon)
  '09223000', // Ham's Fork
  '10163000', // Provo River
  '10109000', // Logan River
  '06040000', // Madison River
  '10086000', // Oneida Narrows
]
/**
 * Converts the messy USGS data into a nice clean array of objects.
 * Each river location will be a new object with site name, id, discharge, temp, and height.
 *
 * @param jsonResponse
 * @returns array
 */
export const convertDataToRiverObject = (jsonResponse: USGSdata) => {
  const externalLink = 'https://waterdata.usgs.gov/monitoring-location/'
  const { timeSeries } = jsonResponse.value
  const rivers: River[] = []

  timeSeries.forEach((river) => {
    const riverValue = river.variable.variableCode[0].value
    const dataValue = river.values[0].value[0].value
    if (!rivers.some((r) => r.name === river.sourceInfo.siteName)) {
      rivers.push({
        name: river.sourceInfo.siteName,
        id: river.sourceInfo.siteCode[0].value,
        discharge: {
          value: riverValue === cfsCode ? dataValue : '',
          description: cfsDescription,
        },
        temperature: {
          value: riverValue === tempCode ? dataValue : '',
          description: tempDescription,
        },
        height: {
          value: riverValue === heightCode ? dataValue : '',
          description: heightDescription,
        },
        link: externalLink + river.sourceInfo.siteCode[0].value,
      })
    } else {
      const riverToUpdate = rivers.find((r) => {
        return r.name === river.sourceInfo.siteName
      })
      if (riverToUpdate) {
        if (!riverToUpdate?.discharge?.value) {
          riverToUpdate.discharge = {
            value: riverValue === cfsCode ? dataValue : '',
            description: cfsDescription,
          }
        }
        if (!riverToUpdate?.temperature?.value) {
          riverToUpdate.temperature = {
            value: riverValue === tempCode ? dataValue : '',
            description: tempDescription,
          }
        }
        if (!riverToUpdate?.height?.value) {
          riverToUpdate.height = {
            value: riverValue === heightCode ? dataValue : '',
            description: heightDescription,
          }
        }
      }
    }
  })

  return rivers
}
