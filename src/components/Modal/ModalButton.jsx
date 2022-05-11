import React from 'react'
import { Button, } from 'react-bootstrap';
import './ModalButton.css'
import { Link } from 'react-router-dom';



export const ModalRegister = () => {
  return (
    <>
      <Button variant="light"  className="ms-2 mb-2">
      <Link to="/register" variant=""> Register </Link>
      </Button>
    </>
  )
}