import type { River } from '@/types'

const RiversCard = ({ river }: { river: River }) => (
  <div>
    <h3>{river.name}</h3>
  </div>
)

export default RiversCard
