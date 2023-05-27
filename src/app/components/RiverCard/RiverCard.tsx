import celsiusToFarenheit from '../../../utils'
import type { River } from '@/types'

const RiverCard = ({ river }: { river: River }) => (
  <div className="container mx-auto bg-gradient-to-r from-slate-100 to-slate-200 text-black p-6 m-4 rounded-md">
    <h3 className="font-semibold mb-2">{river.name.toUpperCase()}</h3>
    <p>
      <span className="font-semibold">Flow:</span>{' '}
      {river.discharge?.value ? `${river.discharge.value} cfs` : 'n/a'}
    </p>
    {river.height?.value && (
      <p>
        <span className="font-semibold">River Height:</span>{' '}
        {`${river.height.value} ft`}
      </p>
    )}

    {river.temperature?.value && (
      <p>
        <span className="font-semibold">Temperature:</span>{' '}
        {`${celsiusToFarenheit(river.temperature?.value)} F`}
      </p>
    )}
  </div>
)

export default RiverCard
