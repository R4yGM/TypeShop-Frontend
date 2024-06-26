import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import FormContainer from '../../components/UI/form-container';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../redux';
import { userLogin } from '../../redux/users/login-slice';
import { Form, Button } from 'react-bootstrap';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.login);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    dispatch(userLogin(data));
  };

  useEffect(() => {
    if (userInfo) return navigate('/');
  }, [userInfo]);

  return (
    <>
      <Helmet>
        <title>Accedi - w2c.space</title>
        <meta name="description" content="Accedi sul tuo account" />
        <meta name="keywords" content="login, account, accedi, profilo, w2c.space" />
        <meta name="author" content="w2c.space" />
        <meta property="og:title" content="Login - w2c.space" />
        <meta property="og:description" content="Accedi sul tuo account" />
        <meta property="og:image" content="src/round.png" />
        <meta property="og:url" content="src/round.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accedi - w2c.space" />
        <meta name="twitter:description" content="Accedi sul tuo account" />
        <meta name="twitter:image" content="src/round.png" />
      </Helmet>
    <FormContainer
      meta='Accedi'
      title='Accedi'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='email'>
          <Form.Label style={{fontWeight:"bolder"}}>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Inserisci un email'
            {...register('email')}
            className={errors.email?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.email?.message}</p>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label style={{fontWeight:"bolder"}}>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='*******'
            {...register('password')}
            className={errors.password?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.password?.message}</p>
          <Link to='/register' className='float-end me-2 mt-1'>
            Non hai un account? Registrati
          </Link>
        </Form.Group>

        <Button
          type='submit'
          className='mt-4 w-full'
          style={{ backgroundColor: '#16192c', color: '#fff' }}
        >
          Accedi
        </Button>
      </Form>
      {/* 
      <Row className='mt-3'>
        <Col>
          <Link to='/forgot-password' className='text-decoration-none'>
            Forgot Password?
          </Link>
        </Col>
      </Row>
      */}
    </FormContainer>
    </>
  );
};

export default Login;
