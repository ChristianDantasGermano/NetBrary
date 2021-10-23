import React from "react";
import { Link } from "react-router-dom";

import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import {
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  makeStyles,
} from "@material-ui/core";

import NavbarAdmin from "../../../../../Components/NavbarAdmin/navbar";

const useStyles = makeStyles({
  root: {
    minWidth:650,
    alignContent:"center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

const RegisterBooks = () => {

  const [selectedDate, handleDateChange] = React.useState(new Date());
  const classes = useStyles();

  return (
    <div>
      <NavbarAdmin/>
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item >
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              variant="h2"
            >
              Novo Cadastro de livro
            </Typography>
            <Box mx={6} mt={1}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={2}
                alignItems="stretch"
              >
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Título"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Gênero"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                <TextField
          id="outlined-multiline-static"
          label="Sinopse"
          multiline
          rows={5}
          variant="standard"
          fullWidth
        />
                </Grid>
                <Grid item>
                  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                    <DatePicker
                      disableFuture
                      openTo="year"
                      format="dd/MM/yyyy"
                      label="Data de lançamento"
                      views={["month", "year", "date"]}
                      value={selectedDate}
                      onChange={handleDateChange}
                      fullWidth
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Imagem de capa"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Arquivo do livro"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Box mx={8} my={4}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={"/admin"}
                fullWidth
              >
                Cadastrar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
};
export default RegisterBooks;
