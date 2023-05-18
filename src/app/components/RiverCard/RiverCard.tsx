'use client'

import { CardContent, Typography } from '@mui/material'
import type { River } from '@/types'

const RiversCard = ({ river }: { river: River }) => (
  <CardContent>
    <Typography variant="h3">{river.name}</Typography>
  </CardContent>
)

export default RiversCard
