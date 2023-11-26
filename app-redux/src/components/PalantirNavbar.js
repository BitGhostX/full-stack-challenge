import React, { useEffect, useCallback } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../redux/filterSlice'
import { changeList } from '../redux/listSlice'
import { changeData } from '../redux/dataSlice'
import { toggleLoading } from '../redux/loadingSlice'

const PalantirNavbar = () => {
  const filter = useSelector((state) => state.filter)
  const list = useSelector((state) => state.list)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:8000/files/list')
    .then((response) => response.json())
    .then((body) => {
      dispatch(changeList(body))
    })
  }, [dispatch])

  const fetchFilteredFilesData = useCallback(async (filename) => {
    dispatch(changeFilter(filename))
    dispatch(toggleLoading(true))
    fetch(`http://localhost:8000/files/data${filename !== 'Filter by Filename' ? `?fileName=${filename}` : ''}`)
    .then((response) => response.json())
    .then((body) => {
      dispatch(changeData(body))
      dispatch(toggleLoading(false))
    })
  }, [dispatch])

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>React Test App</Navbar.Brand>
        <Nav className="ms-auto">
          <NavDropdown title={filter} id="filter-dropdown" onSelect={fetchFilteredFilesData}>
            {
              list.files.map((file) => (
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