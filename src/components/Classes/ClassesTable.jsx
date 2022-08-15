import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ClassesTable = ({ columns, rows, pageSize, setPageSize }) => (
  <DataGrid
    sx={{
      height: 450,
      backgroundColor: '#313437',
      color: '#fff',
      fontWeight: 'bold',
      boxShadow: 2,
      border: 2,
      m : 2,
      borderColor: '#313437',
      '& .MuiDataGrid-cell:hover': {
        color: 'black',
      },
    }}
    rows={rows}
    columns={columns}
    pageSize={pageSize}
    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
    rowsPerPageOptions={[5, 10, 15, 20]}
    checkboxSelection
    density='compact'
  />
);

export default ClassesTable;
