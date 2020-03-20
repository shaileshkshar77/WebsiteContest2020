import Header from "../components/Header";
import Footer from "../components/Footer";
import BmiWidget from "../components/BmiWidget";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';

export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container p={4}>
        <BmiWidget />
      </Container>
      <Footer />
    </React.Fragment>
  )
}
