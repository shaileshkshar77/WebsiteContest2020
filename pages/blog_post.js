import { useRouter } from 'next/router';

import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Template from '../components/BlogPostTemplate';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Page() {
  const router = useRouter();
  return (
    <React.Fragment>
    <CssBaseline />
    <Header />
    <Container>
      <Template
      title={router.query.title}
      author={router.query.author}
      date={router.query.date}
      content={router.query.content}
    />
    </Container>
    <Footer />
    </React.Fragment>
  );
}
