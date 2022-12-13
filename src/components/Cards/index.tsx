import { Card, CardContent, Typography, Grid, CircularProgress, Box, styled } from '@mui/material';
import { infected, recover, death } from '../../images';
import { SUMMARY_DATA } from '../../types';

const CardItem = styled(Grid)(({ borderColor }) => ({
  borderBottom: `10px solid ${borderColor}`,
}));

const SmallImage = styled('img')(() => ({
  width: '64px',
  height: '64px',
}));

const Cards = ({ data, isLoading }: SUMMARY_DATA) => {
  const { Global: { NewConfirmed = 0, NewRecovered = 0, NewDeaths = 0 } = {} } = data || {};

  return (
    <>
      {isLoading ? (
        <Box display='flex' height='100%' justifyContent={'center'}>
          <CircularProgress color='secondary' />
        </Box>
      ) : (
        <Grid container justifyContent={'space-between'}>
          <CardItem item xs={12} md={3.8} borderColor='rgba(255, 173, 31, 0.5)'>
            <Card>
              <CardContent>
                <SmallImage src={infected} alt='infected' />
                <Typography color='textSecondary' gutterBottom>
                  Infected
                </Typography>
                <Typography variant='h5'>{NewConfirmed}</Typography>
                <Typography color='textSecondary'>{new Date(data.Date).toDateString()}</Typography>
                <Typography variant='body2'>Number of active cases of COVID-19</Typography>
              </CardContent>
            </Card>
          </CardItem>
          <CardItem item xs={12} md={3.8} borderColor='rgba(0, 255, 0, 0.5)'>
            <Card>
              <CardContent>
                <SmallImage src={recover} alt='recover' />
                <Typography color='textSecondary' gutterBottom>
                  Recovered
                </Typography>
                <Typography variant='h5'>{NewRecovered}</Typography>
                <Typography color='textSecondary'>{new Date(data.Date).toDateString()}</Typography>
                <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
              </CardContent>
            </Card>
          </CardItem>
          <CardItem item xs={12} md={3.8} borderColor='rgba(255, 0, 0, 0.5)'>
            <Card>
              <CardContent>
                <SmallImage src={death} alt='death' />
                <Typography color='textSecondary' gutterBottom>
                  Deaths
                </Typography>
                <Typography variant='h5'>{NewDeaths}</Typography>
                <Typography color='textSecondary'>{new Date(data.Date).toDateString()}</Typography>
                <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
              </CardContent>
            </Card>
          </CardItem>
        </Grid>
      )}
    </>
  );
};

export default Cards;
