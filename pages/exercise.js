import { useRouter } from 'next/router';

import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
//import Template from '../components/ExerciseTemplate';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Template from '../components/ExercisePostTemplate';
import exerciseData from '../components/ExerciseData';

export default function Page() {
  const router = useRouter();
  const technique  = router.query.technique;
  const benefits = router.query.benefits;
  return (
    <React.Fragment>
    <CssBaseline />
    <Header />
    <Template 
      title={router.query.title}
      author={router.query.author}
      date={router.query.date}
      content={router.query.content}
      technique={router.query.technique}
      benefits={router.query.benefits}
  />
    <Footer />
    </React.Fragment>
  );
}
