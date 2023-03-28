import '../styles/globals.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/core/Header/Header';
import Footer from '@/components/core/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='m-auto flex flex-col'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default MyApp;
