import celsiusToFarenheit from '../../../utils'
import type { River } from '@/types'

const RiverCard = ({ river }: { river: River }) => (
  <div className="container mx-auto bg-white text-black p-6 m-4 rounded-md">
    <h3 className="font-semibold mb-2">{river.name.toUpperCase()}</h3>
    <p>
      <span className="font-semibold">Flow:</span>{' '}
      {river.discharge?.value ? `${river.discharge.value} cfs` : 'n/a'}
    </p>
    <p>
      <span className="font-semibold">River Height:</span>{' '}
      {river.height?.value ? `${river.height.value} ft` : 'n/a'}
    </p>
    <p>
      <span className="font-semibold">Temperature:</span>{' '}
      {river.temperature?.value
        ? `${celsiusToFarenheit(river.temperature?.value)} F`
        : 'n/a'}
    </p>
  </div>
)

export default RiverCard
