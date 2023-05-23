import type { River } from '@/types'
import { RiverCard } from '../RiverCard'

const RiversContainer = ({ riverData }: { riverData: River[] }) => (
  <>
    {riverData.map((river) => {
      return <RiverCard key={river.id} river={river} />
    })}
  </>
)

export default RiversContainer
