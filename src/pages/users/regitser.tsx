import {useEffect} from 'react';
import FormContainer from '../../components/UI/form-container';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import publicAxios from '../../utils/public-axios';
import { useAppSelector } from '../../redux';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';
import { Helmet } from 'react-helmet';


type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state: any) => state.login);
  
  useEffect(() => {
    if (userInfo) {
      navigate(`/profile/${userInfo._id}`);
    }
  }, [userInfo, navigate]);
  
 
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    publicAxios
      .post('/users/register', data)
      .then((res) => {
        toast.success('you have been registred , please login');
        navigate('/login');
      })
      .catch((err) => toast.error(setError(err)));
  };

  return (
    <>
      <Helmet>
        <title>Registrati - w2c.space</title>
        <meta name="description" content="Registra il tuo account" />
        <meta name="keywords" content="login, Registrati, account, accedi, profilo, w2c.space" />
        <meta name="author" content="w2c.space" />
        <meta property="og:title" content="Registrati - w2c.space" />
        <meta property="og:description" content="Registra il tuo account" />
        <meta property="og:image" content="src/round.png" />
        <meta property="og:url" content="src/round.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Registrati - w2c.space" />
        <meta name="twitter:description" content="Registra il tuo account" />
        <meta name="twitter:image" content="src/round.png" />
      </Helmet>
    <FormContainer
      meta='Registrati'
      title='Registrati'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='name'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder='Inserisci un username'
            {...register('name')}
            className={errors.name?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.name?.message}</p>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>

          <Form.Control
            type='email'
            placeholder='Inserisci un email'
            {...register('email')}
            className={errors.email?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.email?.message}</p>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>

          <Form.Control
            type='password'
            placeholder='*******'
            {...register('password')}
            className={errors.password?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.password?.message}</p>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Conferma Password</Form.Label>

          <Form.Control
            type='password'
            placeholder='*******'
            {...register('confirmPassword')}
            className={errors.confirmPassword?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.confirmPassword?.message}</p>
          <Link to='/login' className='float-end me-2 mt-1'>
            Hai già un account ? Accedi
          </Link>
        </Form.Group>

        <Button
          style={{ backgroundColor: '#16192c', color: '#fff' }}
          variant='outline-none'
          type='submit'
          className='mt-4 w-full'
        >
          Registrati!
        </Button>
      </Form>
    </FormContainer>
    </>
  );
};

export default Register;
