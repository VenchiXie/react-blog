function AppSearch(props: any) {
  const { searchRef, onCloseSearch } = props
  return (
    <>
      <section className="App-search" ref={searchRef}>
        <article className="App-search-container">
          search
          <button onClick={onCloseSearch}>close</button>
        </article>
      </section>
    </>
  )
}

export default AppSearch
