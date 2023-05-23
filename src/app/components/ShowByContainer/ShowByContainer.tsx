import type { UsState } from '@/types'
import { SortSelect } from '../SortSelect'
import { StateSelect } from '../StateSelect'

interface ShowByContainerProps {
  selection: string
  usState: UsState
  setSelection: React.Dispatch<React.SetStateAction<string>>
  setUsState: React.Dispatch<React.SetStateAction<UsState>>
}

const ShowByContainer = ({
  selection,
  usState,
  setSelection,
  setUsState,
}: ShowByContainerProps) => {
  return (
    <div className="">
      <p className="font-bold">Show data by:</p>
      <div>
        <SortSelect selection={selection} setSelection={setSelection} />
        <div>
          {selection === 'stateSel' && (
            <StateSelect usState={usState} setUsState={setUsState} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ShowByContainer
