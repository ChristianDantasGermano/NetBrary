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
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
  makeStyles,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    minWidth: 450,
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
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [selectedDate, handleDateChange] = React.useState(new Date());
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              variant="h2"
            >
              Cadastro
            </Typography>
            <Box mx={4} mt={1}>
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
                    label="Nome"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Usuário"
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
                      label="Data de nascimento"
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
                    label="Email"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box mx={6} my={4}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={"/"}
                fullWidth
              >
                Cadastrar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default RegisterBooks;
