import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { add, remove, removeOne } from '../action/action';


export default function Headers() {
  const dispatch = useDispatch()

  const [total, setTotal] = useState(0)

  const { cart } = useSelector(state => state.updateCart)
  
  const getTotal = () => {
    let price = 0
    cart.map(product =>
      price = product.price * product.rating.count + price
    )
    setTotal(price)
  }
  useEffect(() => {
    getTotal()
  });


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div> <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{fontSize:"25px"}} href="#home">Add to Cart Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <NavLink to="/" className={"text-decoration-none"} style={{ flex: "1", color: "black",fontSize:"20px" }}>Product</NavLink>
            <NavLink className='w-100 text-decoration-none' style={{ flex: "1", maxWidth: "43px" }}> <Badge style={{ float: "right" }} badgeContent={cart.length} color="primary"><ShoppingCartIcon onClick={handleClick} /></Badge></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
          {
            cart.length === 0 ? <div>your Cart is Empty</div> : <div style={{ width: "50rem" }}>
              <div style={{ width: "40rem" }} >
                <Table className='striped bordered hover'>
                  <thead>
                    <tr>
                      <td>
                        photos
                      </td>
                      <td>
                        Details
                      </td>
                    </tr>
                  </thead>
                  {
                    cart.map(product => {
                      return (
                        <tbody>
                          <tr>
                            <td>
                              <img style={{ width: "5rem", height: "5rem" }} src={product.image} alt="" />
                            </td>
                            <td>
                              <p>{product.title}</p>
                              <p>price:${product.price}</p>
                              <p>rating:{product.rating.rate}</p>
                              <div className='d-flex justify-content-between w-20'>
                                <p onClick={product.rating.count === 1 ? () => dispatch(remove(product)) : () => dispatch(removeOne(product))}>-</p>
                                <p>x{product.rating.count}</p>
                                <p onClick={() => dispatch(add(product))}>+</p>
                              </div>
                            </td>
                            <td>
                              <DeleteIcon onClick={() => dispatch(remove(product))} style={{ fontSize: "3rem", cursor: "pointer", color: "red" }} />
                            </td>
                          </tr>
                        </tbody>
                      )
                    })
                  }
                  <tfoot>
                    <tr>
                      <div className='text-center'>Total :${total.toFixed(2)}</div>
                    </tr>
                  </tfoot>
                </Table>

              </div>
            </div>
          }
        </MenuItem>
      </Menu>
    </div>
  )
}