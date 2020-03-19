import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function Index() {
  return (
    <React.Fragment>
    <Header/ >
      <Container>
        <Box my={2}>
          {[...new Array(5000)]
            .map(
              () => `pepper `,
            )
            .join('\n')}
        </Box>
      </Container>
      <Footer/ >
  </React.Fragment>
  )
}
