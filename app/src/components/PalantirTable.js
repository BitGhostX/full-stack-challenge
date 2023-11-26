import React from 'react'
import { Table } from 'react-bootstrap'

const generateKey = (filename, index) => {
  return `${filename}-${index}`
}

const BootstrapTable = ({ filesData }) => {
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
          filesData.map((file) => {
            if (filesData.length === 1 && file.lines.length === 0) {
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
