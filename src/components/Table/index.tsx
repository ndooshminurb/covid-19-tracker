import { useMemo } from 'react';
import { CircularProgress, Box, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { COUNTRIES } from '../../types';

type PROPS = {
  countries: COUNTRIES[];
  isLoading: boolean;
};

const TableWrapper = styled('div')(() => ({
  marginTop: '20px',
  color: '#6a5d5d',
  backgroundColor: 'white',
  height: '60vh',
}));

function Table({ countries = [], isLoading }: PROPS) {
  const columns = [
    { field: 'Country', headerName: 'Country', flex: 1 },
    {
      field: 'TotalConfirmed',
      headerName: 'Infected',
      type: 'number',
      flex: 1,
    },
    {
      field: 'TotalRecovered',
      headerName: 'Recovered',
      type: 'number',
      flex: 1,
    },
    {
      field: 'TotalDeaths',
      headerName: 'Deaths',
      type: 'number',
      flex: 1,
    },
  ];

  const rows = useMemo(
    () =>
      countries.map((item) => {
        return {
          ...item,
          id: item.ID,
        };
      }),
    [countries],
  );

  return (
    <TableWrapper>
      {isLoading ? (
        <Box display='flex' justifyContent={'center'} alignItems='center' height='100%'>
          <CircularProgress color='secondary' />
        </Box>
      ) : (
        <div style={{ height: '60vh', width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            rowsPerPageOptions={[10]}
          />
        </div>
      )}
    </TableWrapper>
  );
}

export default Table;
