import React, { useState, useRef, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  Grid,
  MenuItem,
  Select,
  styled,
  CardContent,
  FormControl,
  CircularProgress,
} from '@mui/material';
import { FixedSizeList } from 'react-window';
import { useQueryClient } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';

import { ALL_COUNTRIES, useAllCountriesQuery } from '../../api';
import { COUNTRIES_DATA } from '../../types';

const List = styled(FixedSizeList)``;

const options = [
  {
    name: 'default',
    value: 'default',
  },
  {
    name: 'All',
    value: 'All',
  },
  {
    name: 'Africa',
    value: 'Africa',
  },
  {
    name: 'Americas',
    value: 'Americas',
  },
  {
    name: 'Asia',
    value: 'Asia',
  },
  {
    name: 'Europe',
    value: 'Europe',
  },
];

const ModalSelectCountries = () => {
  const list = useRef<FixedSizeList<HTMLButtonElement | unknown>>(null);
  const [originData, setOriginData] = useState<COUNTRIES_DATA[]>([]);
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState<string>('default');
  const { data, isLoading, refetch } = useAllCountriesQuery(open);
  // Get access to query client instance
  const queryClient = useQueryClient();

  useEffect(() => {
    if (region && list) {
      list?.current?.scrollToItem(0);
    }
  }, [region, list]);

  useEffect(() => {
    if (!isLoading) {
      setOriginData(data);
    }
  }, [isLoading]);

  const optionChangeHandler = (value: string) => {
    if (value !== 'default') {
      queryClient.setQueryData([ALL_COUNTRIES], () => {
        const newData = originData.filter((obj) => obj.region === value);
        console.log('newData', newData);
        return newData;
      });
    }
    if (value === 'All' || value === 'default') {
      refetch();
    }

    setRegion(value);
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    optionChangeHandler('default');
    setOpen(false);
    setRegion('default');
  };

  const MultiRows = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const renderItems = [];

    for (let i = index * 3; i < index * 3 + 3; i++) {
      if (currentData[i] !== undefined) {
        renderItems.push(
          <Grid key={uuidv4()} item xs={4}>
            <Card>
              <Grid container>
                <Grid item xs={12}>
                  <CardMedia
                    component='img'
                    alt={currentData[i].name.official}
                    height='140'
                    image={currentData[i].flags.png}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='div'
                      fontSize={16}
                      fontWeight={700}
                    >
                      {currentData[i].name.official}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Population: {currentData[i].population}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Region: {currentData[i].region}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Capital: {currentData[i].capital}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>,
        );
      }
    }
    return (
      <Grid container style={style} spacing={2}>
        {renderItems}
      </Grid>
    );
  };

  const currentData = useMemo(() => data, [data, region]);

  return (
    <div>
      <Button onClick={handleOpen} endIcon={<SearchIcon />}>
        Countries
      </Button>
      <Dialog fullWidth maxWidth='lg' open={open} onClose={handleClose}>
        <DialogContent>
          <Box>
            <FormControl sx={{ mb: 1, minWidth: 120 }}>
              <Select
                value={region}
                onChange={(e) => optionChangeHandler(e.target.value)}
                displayEmpty
              >
                {options.map((item, i) => (
                  <MenuItem key={i} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {isLoading ? (
              <Box display='flex' height='500px' alignItems='center' justifyContent={'center'}>
                <CircularProgress color='secondary' />
              </Box>
            ) : (
              <List
                ref={list}
                height={500}
                itemCount={currentData?.length / 3}
                itemSize={300}
                width='100%'
                overscanCount={6}
              >
                {MultiRows}
              </List>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalSelectCountries;
