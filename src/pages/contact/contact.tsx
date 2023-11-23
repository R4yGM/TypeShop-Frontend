import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../components/layouts/default-layout';
import './contact.css';
import { useAppDispatch, useAppSelector } from '../../redux';
import { sendSuggestion } from '../../redux/suggestions/suggest';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(sendSuggestion(data));
  };

  return (
    <DefaultLayout>
      <section id='contact' className='contact'>
        <Container data-aos='fade-up'>
          <div className='section-title'>
            <h2 className='text-center' style={{ fontWeight: 'bold' }}>
            <MDBIcon fas icon="lightbulb" /> Suggerimenti
            </h2>
            <p className='mt-4 mb-4'>
              Puoi inviarci un suggerimento di un qualsiasi prodotto su pandabuy
              che vorresti listato qui su w2c.space, appena riceveremo la tua
              richiesta la elaboreremo e aggiungeremo il tuo prodotto!
            </p>
          </div>
          <Col md={6} className='mt-2 w-full'>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className='php-email-form bg-white'
            >
              <Row>
                <div className='col form-group'>
                  <Form.Control
                    type='email'
                    className='bg-surface-secondary'
                    {...register('email')}
                    placeholder='Inserisci la tua Email (opzionale)'
                  />
                </div>
              </Row>
              <div className='form-group'>
                <Form.Control
                  as={'textarea'}
                  className='bg-surface-secondary'
                  {...register('message', { required: 'Questo campo è obbligatorio' })}
                  rows={5}
                  placeholder='Inserisci un messaggio'
                  required
                  defaultValue={''}
                />
                {errors.message && (
                  <p className='text-danger'>{errors.message.message}</p>
                )}
              </div>
              <div className='my-3'>
                <div className='loading'>Loading</div>
                <div className='error-message' />
              </div>
              <div className='text-center'>
                <button type='submit' style={{ backgroundColor: '#16192c' }}>
                  Invia
                </button>
              </div>
            </Form>
          </Col>
        </Container>
      </section>
    </DefaultLayout>
  );
};

export default Contact;
