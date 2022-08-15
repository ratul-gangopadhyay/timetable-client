import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TeachersTable = ({ columns, rows, pageSize, setPageSize }) => (
  <DataGrid
    sx={{
      height: 450,
      backgroundColor: '#313437',
      color: '#fff',
      boxShadow: 2,
      border: 2,
      m: 2,
      borderColor: '#313437',
      '& .MuiDataGrid-cell:hover': {
        color: 'black',
      },
    }}
    getRowHeight={() => 'auto'}
    rows={rows}
    columns={columns}
    pageSize={pageSize}
    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
    rowsPerPageOptions={[5, 10, 15, 20]}
    checkboxSelection
    density='comfortable'
  />
);

export default TeachersTable;
