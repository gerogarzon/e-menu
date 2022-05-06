import React, { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial);
  function restar() {
    if (contador > 1) {
      setContador(contador - 1);
    }
    console.log("suma");
  }
  function sumar() {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  return (
    <>
      <ButtonToolbar
        aria-label="Toolbar with button groups"
        className="group-count"
      >
        <ButtonGroup className="group-counter">
          <Button variant="outline-dark" onClick={() => restar()}>
            -
          </Button>
          {/* <input className="form-control" value={contador} readOnly /> */}
          <Button
            variant="outline-dark"
            className="btn-counter"
            disabled
            readOnly
          >
            {contador}
          </Button>
          <Button variant="outline-dark" onClick={() => sumar()}>
            +
          </Button>
        </ButtonGroup>
      </ButtonToolbar>

      <Button
        variant="success"
        className="mt-2 btn-agregar"
        onClick={() => onAdd(contador)}
      >
        Agregar
      </Button>
      <br></br>
    </>
  );
};

export default ItemCount;
