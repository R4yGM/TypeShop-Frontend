import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../../components/layouts/default-layout';
import Loader from '../../components/UI/loader';
import { useAppDispatch, useAppSelector } from '../../redux';
import { getUserBydId } from '../../redux/users/user-details';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import authAxios from '../../utils/auth-axios';
import toast from 'react-hot-toast';
import { setError } from '../../utils/error';

type FormValues = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.userDetails);
  const { orders, loading: orderLoading } = useAppSelector(
    (state) => state.userOrder
  );

  const { id } = useParams();
  const [refresh, setRefresh] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Confirm Password does not match'
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    const update = {
      name: data.name,
      email: data.email,
      password: data.password === '' ? null : data.password,
    };
    authAxios
      .put(`/users/${user?._id}`, update)
      .then((res) => {
        toast.success('user has been updated');
        setRefresh((prev) => (prev = !prev));
      })
      .catch((err) => toast.error(setError(err)));
  };

  const onDelete = (id: string | number) => {
    if (window.confirm('are you sure?')) {
      authAxios
        .delete(`/orders/${id}`)
        .then((res) => {
          toast.success(res.data);
          setRefresh((prev) => (prev = !prev));
        })
        .catch((e) => toast.error(setError(e)));
    }
  };

  useEffect(() => {
    dispatch(getUserBydId(id));
  }, [dispatch, id, refresh]);


  return (
    <DefaultLayout title={`Profilo di ${user?.name}`}>
      <Helmet>
        <title>{`Profilo di ${user?.name}`}</title>
        <meta name="description" content={`Pagina profilo di ${user?.name}. Aggiorna le tue informazione e visualizza i tuoi prodotti salvati`} />
        <meta name="keywords" content={`${user?.name}, Profilo, prodotti, w2c.space, pandabuy, prodotti pandabuy, finds, reps`} />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content={`${user?.name} Profilo`} />
        <meta property="og:description" content={`Pagina profilo di ${user?.name}. Aggiorna le tue informazione e visualizza i tuoi prodotti salvati`} />
        <meta property="og:image" content="src/round.png" />
        <meta property="og:url" content="src/round.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${user?.name} Profile`} />
        <meta name="twitter:description" content={`Pagina profilo di ${user?.name}. Aggiorna le tue informazione e visualizza i tuoi prodotti salvati`} />
        <meta name="twitter:image" content="src/round.png" />
      </Helmet>

      <Container>
        {loading || !user || orderLoading || !orders ? (
          <Loader />
        ) : (
          <Row>
            
            <Col  md={6} >
              <br/>
              <h2>Profilo utente</h2>
              <br/>
              <Card>
                <Card.Body>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId='name'>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        {...register('name', {
                          value: user?.name,
                        })}
                        placeholder='Enter name'
                        className={errors.name?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>{errors.name?.message}</p>
                    </Form.Group>

                    <Form.Group controlId='email'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        {...register('email', {
                          value: user?.email,
                        })}
                        placeholder='Enter email'
                        className={errors.email?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.email?.message}
                      </p>
                    </Form.Group>

                    <Form.Group controlId='password'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        {...register('password')}
                        type='password'
                        placeholder='********'
                        className={errors.password?.message && 'is-invalid'}
                      />
                      <p className='invalid-feedback'>
                        {errors.password?.message}
                      </p>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                      <Form.Label>Conferma Password</Form.Label>
                      <Form.Control
                        {...register('confirmPassword')}
                        type='password'
                        placeholder='********'
                        className={
                          errors.confirmPassword?.message && 'is-invalid'
                        }
                      />
                      <p className='invalid-feedback'>
                        {errors.confirmPassword?.message}
                      </p>
                    </Form.Group>

                    <Button
                      style={{ backgroundColor: '#332D2D', color: '#fff' }}
                      variant='outline-none'
                      type='submit'
                      className='mt-3 w-full'
                    >
                      Aggiorna
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default Profile;
