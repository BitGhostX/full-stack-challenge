import React from 'react'
import { Table } from 'react-bootstrap'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeData } from '../redux/dataSlice'
import { toggleLoading } from '../redux/loadingSlice'

const generateKey = (filename, index) => {
  return `${filename}-${index}`
}

const BootstrapTable = () => {
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleLoading(true))
    fetch('http://localhost:8000/files/data')
    .then((response) => response.json())
    .then((body) => {
      dispatch(changeData(body))
      dispatch(toggleLoading(false))
    })
  }, [dispatch])

  return (
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((file) => {
            if (data.length === 1 && file.lines.length === 0) {
              return (
                <tr key={ generateKey(file.file, '-1') }>
                  <td colSpan={4}>No Data</td>
                </tr>
              )
            }
            return file.lines.map((line, index) => (
              <tr key={ generateKey(file.file, index) }>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          })
        }
      </tbody>
    </Table>
  )
}

export default BootstrapTable
