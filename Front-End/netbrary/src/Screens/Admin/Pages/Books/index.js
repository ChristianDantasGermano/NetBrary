import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Box, Button, Typography } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const columns = [
  { id: "title", label: "Título", minWidth: 170 },
  { id: "registerDate", label: "Data de registro", minWidth: 100 },
  {
    id: "releaseDate",
    label: "Data de lançamento",
    minWidth: 170,
    align: "right",
  },
  {
    id: "genre",
    label: "Gênero",
    minWidth: 170,
    align: "right",
  },
  {
    id: "operations",
    label: "Gêrencia dos dados",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(title, registerDate, releaseDate, genre, operations) {
  return { title, registerDate, releaseDate, genre, operations };
}

function buttonOperations() {
  return (
    <div>
      <IconButton key="love" aria-label="delete" size="small">
        <CreateIcon color="primary" />
      </IconButton>
      <IconButton key="love" aria-label="delete" size="small">
        <DeleteIcon color="secondary" />
      </IconButton>
    </div>
  );
}

const rows = [
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
  createData(
    "Os Grande revoltados",
    "04/08/2021",
    "12/03/2017",
    "Ação",
    buttonOperations()
  ),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 640,
  },
  title: {
    textAlign: "center",
  },
});

export default function Books() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Box m={8}>
        <Box m={2}>
          <Typography className={classes.title} variant="h2">
            Livros
          </Typography>
          <Button component={Link} to={"/registerBooks"} variant="contained" color="primary">
            Adicionar novo Livro
          </Button>
        </Box>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
}
