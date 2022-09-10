import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AppSearch.css'

const datalistApi = [
  { key: '1', title: '内容1' },
  { key: '2', title: '内容2' },
  { key: '3', title: '内容3' },
  { key: '4', title: '内容4' },
  { key: '5', title: '内容5' },
]
function AppSearch(props: any) {
  const { searchRef, onCloseSearch } = props
  const navigate = useNavigate()
  const [datalist, setDataList] = useState<any>([...datalistApi])
  const [filterDatalist, setFilterDatalist] = useState<any>([])

  const handleSearchWordKey = (e: any) => {
    let keyword = e.target.value
    if (keyword !== '') {
      let data = datalist.filter((item: any) => item.title.includes(keyword))
      setFilterDatalist(data)
    } else {
      setFilterDatalist([])
    }
  }

  const onNavigate = (value: string) => {
    console.log(value);
    
  }

  return (
    <section className="App-search" ref={searchRef}>
      <main className="App-search-container">
        <header className="App-search-header">
          <h3>SEARCH</h3>
          <span onClick={onCloseSearch}>关闭</span>
        </header>
        {/* 搜索input */}
        <article className="App-search-input-container">
          <input type="text" placeholder="请输入内容" onChange={(e) => handleSearchWordKey(e)}/>
        </article>
        {/* 模糊搜索列表 */}
        <article className="App-search-datalist">
          <ul className="">
            {filterDatalist.map((item: any) => (
              <li key={item.key} onClick={() => onNavigate(item)}>
                {item.title}
              </li>
            ))}
          </ul>
          {filterDatalist.length >= 1 ? (
            <footer className="App-search-footer">
              查询到&nbsp;{filterDatalist.length}&nbsp;条结果
            </footer>
          ) : (
            ''
          )}
        </article>
      </main>
    </section>
  )
}

export default AppSearch
