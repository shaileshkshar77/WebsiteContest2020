import Header from "../components/Header";
import Footer from "../components/Footer";
import S from "../components/Sponsor";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';

export default function Abou() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <S />
      </Container>
      <Footer />
    </React.Fragment>
  )
}
