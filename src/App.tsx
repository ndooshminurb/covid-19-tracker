import { Card, CardContent, Grid, Typography } from '@mui/material';
import Cards from './components/Cards';
import Table from './components/Table';
import Chart from './components/Chart';

import './App.css';

import { useSummaryQuery } from './api';

import { logo } from './images';
import ModalSelectCountries from './components/ModalSelectCountries';

const App = () => {
  const { data, isLoading } = useSummaryQuery();

  return (
    <Grid container p={5} spacing={3}>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <img src={logo} alt='COVID-19' />
      </Grid>
      <Grid item container xs={12} md={7} display='flex' direction='column' gap={7}>
        <Cards data={data} isLoading={isLoading} />
        <Chart data={data} isLoading={isLoading} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid
                item
                xs={12}
                display='flex'
                justifyContent='space-between'
                alignContent='center'
              >
                <Typography color='textSecondary' display='flex' alignItems='center'>
                  Live Cases by Country
                </Typography>
                <ModalSelectCountries />
              </Grid>
              <Grid item xs={12}>
                <Table countries={data?.Countries} isLoading={isLoading} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default App;
