import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import '../pages/Imp/Style.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
