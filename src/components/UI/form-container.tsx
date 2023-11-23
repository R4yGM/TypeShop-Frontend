import { ReactNode } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import DefaultLayout from '../layouts/default-layout';

type FormTypes = {
  children: ReactNode;
  title: string;
  image?: string;
  meta?: string;
};

const FormContainer = (props: FormTypes) => {
  return (
    <DefaultLayout title={props.meta}>
      <Container>
        <Row className=' justify-content-center py-6'>
          <Col md={6}>
            <Card>
              <h1 style={{ color: 'black', fontWeight:"bold" }} className='mt-8 mb-4 text-center my-3'>
              <MDBIcon fas icon="sign-in-alt" /> {props.title}
              </h1>
              <Card.Body>{props.children}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default FormContainer;
