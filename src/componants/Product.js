import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import add from '../action/action';

export default function Product() {

    const cart = useSelector(state => state.updateCart)

    const dispatch = useDispatch()
    
    console.log(cart);
    const [data, SetData] = useState([])
    console.log(data);
    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
        SetData(response)
    }
    const send = (v) => {
        dispatch(add(v))
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className='ms-5 mt-5 row d-flex gap-5'>
                {
                    data && data.map(v => (
                        <Card style={{ width: '15rem', height: "fit-content" }}>
                            <Card.Img style={{ width: '10rem', height: '10rem' }} variant="top" src={v.image} />
                            <Card.Body>
                                <Card.Title className="add">{v.title}</Card.Title>
                                <Card.Text>{v.category}</Card.Text>
                                <Card.Text>Price -${v.price}</Card.Text>
                                <Card.Text>Rating {v.rating.rate}</Card.Text>
                                <Button variant="primary" onClick={() => send(v)}>Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>

        </div>
    )
}
