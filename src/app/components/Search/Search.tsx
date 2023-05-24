interface SearchProps {
  searchTerm: string
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ searchTerm, searchQuery, setSearchQuery }: SearchProps) => {
  let searchWord = 'Popular'

  if (searchTerm) {
    searchWord = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
  }

  return (
    <form action="/" method="get" className="mt-8">
      <label htmlFor="river-search">
        <span className="visually-hidden">{`Search ${searchWord} Rivers`}</span>
      </label>
      <input
        value={searchQuery}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(event.target.value)
        }}
        type="text"
        placeholder={`Search ${searchWord} Rivers`}
        className="h-10 w-full rounded-md px-6 bg-slate-100 text-slate-700"
      />
    </form>
  )
}

export default Search
