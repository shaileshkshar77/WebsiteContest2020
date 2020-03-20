import Header from "../components/Header";
import Footer from "../components/Footer";
import E from "../components/Exercise";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Excer() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Header />
    <Container>
     <E />
    </Container>
    <Footer />
    </React.Fragment>
  )
}
