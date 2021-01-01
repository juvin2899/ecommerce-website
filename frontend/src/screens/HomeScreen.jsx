import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from "../products.js"
import Product from "../components/Product.jsx"

const HomeScreen = () => {
    return (
        <>
        
            <h1> Latest Products</h1>
            <Row>
                {products.map(product=>
                {return <Col sm={12} md={6} lg={3}>
                       <Product product={product} />
                    </Col>
                })}
            </Row>
        </>
    )
}

export default HomeScreen
