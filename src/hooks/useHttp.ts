import { useState, useEffect } from 'react'

function useHttp(axios: any) {
  const [error, setError] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [datalist, setDatalist] = useState<[]>([])

  const getDatalist = async () => {
    let { data } = await axios
    setDatalist(data)
    setIsLoaded(true)
  }

  useEffect(() => {
    getDatalist(),
      (err: any) => {
        setIsLoaded(true)
        setError(err)
      }
  }, [])

  return { error, isLoaded, datalist }
}
