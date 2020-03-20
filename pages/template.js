import Header from "../components/Header";
import Footer from "../components/footer";
import Temp from "../components/E_temp";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Excer() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Header />
    <Container>
     <Temp />
    </Container>
    <Footer />
    </React.Fragment>
  )
}
