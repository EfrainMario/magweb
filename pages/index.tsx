import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Home from '../src/components/Home/Home';

const HomePage: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Home/>
    </Container>
  );
};

export default Home;
