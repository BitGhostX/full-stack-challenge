import React from 'react'
import '../styles/components/loader.css'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const PalantirLoader = () => {
  const loading = useSelector((state) => state.loading)

  return loading ? (<div className='loader'><Spinner animation="grow" /></div>) : (<></>)
}

export default PalantirLoader
