import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Row } from "react-bootstrap";
import Product from "../components/Product.jsx";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";

import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1> Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
