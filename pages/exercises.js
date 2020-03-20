import Header from "../components/Header";
import Footer from "../components/Footer";
import ExerciseBoxes from "../components/Exercise";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Excercises() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Header />
    <Container>
     <ExerciseBoxes/>
    </Container>
    <Footer />
    </React.Fragment>
  )
}
