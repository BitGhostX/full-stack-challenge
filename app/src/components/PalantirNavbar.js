import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

const PalantirNavbar = ({ filter, fetchFilteredFilesData }) => {
  const [filesList, setFilesList] = useState({ files: [] })

  useEffect(() => {
    fetch('http://localhost:8000/files/list')
    .then((response) => response.json())
    .then((body) => {
      setFilesList(body)
    })
  }, [setFilesList])

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>React Test App</Navbar.Brand>
        <Nav className="ms-auto">
          <NavDropdown title={filter} id="filter-dropdown" onSelect={fetchFilteredFilesData}>
            {
              filesList.files.map((file) => (
                <NavDropdown.Item key={file} eventKey={file}>
                  {file}
                </NavDropdown.Item>
              ))
            }
          </NavDropdown>
          <Button variant="dark" onClick={() => { fetchFilteredFilesData('Filter by Filename') }}>Reset Filter</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default PalantirNavbar