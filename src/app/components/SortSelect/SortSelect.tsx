interface SortSelectProps {
  selection: string
  setSelection: React.Dispatch<React.SetStateAction<string>>
}

const SortSelect = ({ selection, setSelection }: SortSelectProps) => {
  const onOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(event.target.value)
  }

  return (
    <div className="App">
      <h3>Sort river data by:</h3>

      <input
        type="radio"
        name="riverSortSelect"
        value="popularSel"
        id="regular"
        checked={selection === 'popularSel'}
        onChange={onOptionChange}
      />
      <label htmlFor="regular">Popular Rivers</label>

      <input
        type="radio"
        name="riverSortSelect"
        value="stateSel"
        id="stateSel"
        checked={selection === 'stateSel'}
        onChange={onOptionChange}
      />
      <label htmlFor="stateSel">State</label>
    </div>
  )
}

export default SortSelect
