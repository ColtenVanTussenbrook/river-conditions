interface SortSelectProps {
  selection: string
  setSelection: React.Dispatch<React.SetStateAction<string>>
}

const SortSelect = ({ selection, setSelection }: SortSelectProps) => {
  const onOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(event.target.value)
  }

  return (
    <div className="flex justify-center mb-4">
      <div className="mr-4">
        <input
          type="radio"
          name="riverSortSelect"
          value="popularSel"
          id="regular"
          checked={selection === 'popularSel'}
          onChange={onOptionChange}
          className="mx-1"
        />
        <label htmlFor="regular">Popular Rivers</label>
      </div>

      <div>
        <input
          type="radio"
          name="riverSortSelect"
          value="stateSel"
          id="stateSel"
          checked={selection === 'stateSel'}
          onChange={onOptionChange}
          className="mx-1"
        />
        <label htmlFor="stateSel">State</label>
      </div>
    </div>
  )
}

export default SortSelect
