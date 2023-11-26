import React from 'react'
import '../styles/components/loader.css'
import { Spinner } from 'react-bootstrap'

const PalantirLoader = ({ isLoading }) => {
  return isLoading ? (<div className='loader'><Spinner animation="grow" /></div>) : (<></>)
}

export default PalantirLoader
