'use client'

import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import React, { useState } from 'react'

type UsState = {
  name: string
  abbv: string
  key?: string
}
const StateSelect = () => {
  const [usState, setUsState] = useState('Utah')

  const handleChange = (event: SelectChangeEvent) => {
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="state-select-input-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          value={usState}
          label="State"
          onChange={handleChange}
          variant="filled"
          sx={{ backgroundColor: 'white' }}
        >
          {/* using st as a variable here since the word state is so widely used in React */}
          {usStates.map((st) => {
            return (
              <MenuItem value={st.name} key={st.abbv}>
                {st.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}

export default StateSelect
