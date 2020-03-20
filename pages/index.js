import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Boxes from "../components/Boxes";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';

import BlogRoll from '../components/BlogRoll';
import LatestPost from '../components/LatestPost';

function Spacing() {
  return (
    <Box mb={6} mt={6}>
      <Divider />
    </Box>
  )
}

export default function Index() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/ >
        <Container>
          <Welcome />
          <Spacing />
          <LatestPost />
          <Spacing />
          <Boxes />
        </Container>
        <Footer/ >
      </React.Fragment>
  );
}
