import React from 'react';
import OrdersList from './OrdersList';
import { Container, Row, Col, Table, Jumbotron } from 'react-bootstrap';
import ButtonNew from './ButtonNew'

const OrdersTable = props => {
  if (props.orders) {
    return(
      <Container>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col>
                <h1 className="mt-5 d-flex justify-content-between">
                  Orders
                  <ButtonNew url="/orders/new" text="Create order" />
                </h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Kind</th>
              <th>Reference</th>
              <th>Status</th>
              <th>Price</th>
              <th>Created</th>
              <th>Shipments</th>
            </tr>
          </thead>
          <tbody>
            <OrdersList orders={props.orders} />
          </tbody>
        </Table>
      </Container>
    )
  } else {
    return <div>No orders yet</div>
  }
}

export default OrdersTable;