import React, { useState, useCallback, useEffect } from 'react'
import PalantirLoader from './PalantirLoader'
import PalantirNavbar from './PalantirNavbar'
import PalantirTable from './PalantirTable'

const PalantirBody = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState('Filter by Filename')
  const [filesData, setFilesData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8000/files/data')
    .then((response) => response.json())
    .then((body) => {
      setFilesData(body)
      setIsLoading(false)
    })
  }, [setFilesData, setIsLoading])

  const fetchFilteredFilesData = useCallback(async (filename) => {
    setFilter(filename)
    setIsLoading(true)
    fetch(`http://localhost:8000/files/data${filename !== 'Filter by Filename' ? `?fileName=${filename}` : ''}`)
    .then((response) => response.json())
    .then((body) => {
      setFilesData(body)
      setIsLoading(false)
    })
  }, [setFilter, setFilesData])

  return (
    <div>
      <PalantirLoader isLoading={isLoading} />
      <PalantirNavbar filter={filter} fetchFilteredFilesData={fetchFilteredFilesData}/>
      <PalantirTable filesData={filesData} />
    </div>
  )
}

export default PalantirBody
