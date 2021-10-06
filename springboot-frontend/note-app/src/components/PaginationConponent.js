import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default function PaginationComponent() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5,10,15]}
      component="div"
      count={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      //rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
