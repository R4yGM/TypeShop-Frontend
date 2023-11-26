import DefaultLayout from '../../components/layouts/default-layout';
import {
    Container } from 'react-bootstrap';

import {
        MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <DefaultLayout title='cart shop' >
          <Container className='mt-5'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <div className='section-title text-center' style={{ margin: 'auto', maxWidth: '600px' }}>
        <h2 style={{ fontWeight: 'bold' }}>
          404 Pagina non trovata!
        </h2>
        <h3 style={{ fontWeight: 'normal' }} className='mt-3'>
          <MDBIcon fas icon="external-link-alt" />
          <Link to='/home' className='mx-3'>
            Torna alla home
          </Link>
        </h3>
      </div>
    </div>
            </Container>
        </DefaultLayout>
    );

}

export default NotFound;
