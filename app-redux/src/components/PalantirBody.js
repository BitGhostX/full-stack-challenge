import React from 'react'
import PalantirLoader from './PalantirLoader'
import PalantirNavbar from './PalantirNavbar'
import PalantirTable from './PalantirTable'

const PalantirBody = () => {
  return (
    <div>
      <PalantirLoader />
      <PalantirNavbar />
      <PalantirTable />
    </div>
  )
}

export default PalantirBody
