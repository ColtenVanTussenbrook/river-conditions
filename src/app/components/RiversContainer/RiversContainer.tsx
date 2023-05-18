import type { River } from '@/types'
import { RiverCard } from '../RiverCard'

const RiversContainer = ({ riverData }: { riverData: River[] | 'no data' }) => {
  return (
    <>
      <h2>Rivers</h2>
      {riverData.map((river) => {
        return <RiverCard key={river.id} river={river} />
      })}
    </>
  )
}

export default RiversContainer
