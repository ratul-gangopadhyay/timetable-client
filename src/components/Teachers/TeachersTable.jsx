import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TeachersTable = ({
  columns,
  rows,
  pageSize,
  setPageSize,
  openTeacher,
}) => (
  <DataGrid
    sx={{
      height: 450,
      backgroundColor: '#313437',
      color: '#fff',
      boxShadow: 2,
      border: 2,
      m: 2,
      borderColor: '#313437',
      '& .MuiDataGrid-row:hover': {
        color: '#318588',
        cursor: 'pointer',
      },
      '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': {
        color: '#fff'
      }
    }}
    onRowClick={openTeacher}
    rows={rows}
    columns={columns}
    pageSize={pageSize}
    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
    rowsPerPageOptions={[5, 10, 15, 20]}
    density='standard'
  />
);

export default TeachersTable;
