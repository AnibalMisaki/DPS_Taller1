import React from "react";
//import Todo from "./Todo";
import Catalogo from "../catalogo.json"
import { Form, Button, Table } from "react-bootstrap";
import { useState } from "react";

const Cart = () => {
    var total = 0

    const [producto, setProducto] = useState([{
        id: 0, nombre: '', precio: 0, cantidad: 1
    }])

    const [productos, setProductos] = useState([{
        id: 0, nombre: '', precio: 0, cantidad: 1
    }])

    const handleClick = e => {
        if (Object.keys(producto.id).length === 0) {
            alert('No hay nada seleccionado')
        }
        Catalogo.Productos.map((prod) => {
                if (prod.id == producto.id) {
                    producto.nombre = prod.nombre
                    producto.precio = prod.precio
                    producto.cantidad = 1
                    setProductos([...productos, producto])
                }
            }
        )
    }

    const deleteProd = indice => {
        const nuevoProductos = [...productos]
        nuevoProductos.splice(indice, 1)
        setProductos(nuevoProductos)
    }

    const changeCant = (indice, cant) => {
        productos[indice].cantidad = cant
        setProductos([...productos])
    }

    return (
        <>
            <br />
            <h1>Lista de compras</h1>
            <Form onSubmit = {e => e.preventDefault()}>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mb-3">
                            <Form.Label>Producto:</Form.Label>
                                <select id="cboProducto" className="form-control" onChange={(ev) => setProducto({id: ev.target.value})} >
                                    <option disabled value="">Selecciona un producto</option>
                                    {
                                        Catalogo.Productos.map((result) => (<option key={result.id} value={result.id}>{result.nombre}</option>))
                                    }
                                </select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <br />
                        <Button variant="primary" onClick={handleClick} >Agregar</Button>
                    </div>
                </div>
                
            </Form>
            
            <Table responsive>
                <thead></thead>
                <tbody>
                    {
                        productos.map((result, index) => (
                            <tr>
                                <td>
                                    {result.nombre}<br></br>$ {result.precio}
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col">
                                            <input type="number" min={1} step={1} max={100} className="form-control" defaultValue={result.cantidad} onChange={(ev) => changeCant(index, ev.target.value )} />
                                        </div>
                                        <div className="col">
                                            <Button variant="danger" className="text-right" onClick={ () => deleteProd(index)} >X</Button>
                                        </div>
                                    </div>
                                </td>
                                    <input type="hidden" value={total = total + (result.precio * result.cantidad)} />
                            </tr>      
                        ))    
                    }
                    <tr>
                        <p className="text-end fw-bold">Total: $ {total.toFixed(2)}</p>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Cart