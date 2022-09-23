import { useState, useEffect } from 'react'

export default function useHttp(fn: Function) {
  const [error, setError] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [datalist, setDatalist] = useState<[]>([])

  const getDatalist = async () => {
    let { data } = await fn()
    setDatalist(data)
    setIsLoaded(true)
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      getDatalist()
      setIsLoaded(true)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    ;(error: any) => {
      setIsLoaded(true)
      setError(error)
    }
  }, [])

  return { error, isLoaded, datalist }
}
