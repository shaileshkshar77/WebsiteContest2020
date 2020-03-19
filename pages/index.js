import Header from "../components/Header";
import Footer from "../components/footer";
import Welcome from "../components/Welcome";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Index() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/ >
        <Container>
          <Welcome />
          {[...new Array(5000)]
              .map(
                () => `pepper `,
              )
              .join('\n')}
        </Container>
        <Footer/ >
        </React.Fragment>
        )
}
