import React from "react";
import { Link } from "react-router-dom";

import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DesktopDatePicker from "@material-ui/lab/DesktopDatePicker";

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
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

const Register = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const [date, setDate] = React.useState(new Date());

  const handleChangeDate = (newDate) => {
    setDate(newDate);
  };

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
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" }} variant="h2">
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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Data de nascimento"
                      inputFormat="dd/MM/yyyy"
                      value={date}
                      onChange={handleChangeDate}
                      renderInput={(params) => (
                        <TextField variant="standard" {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
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
              <Button component={Link} to={"/"} variant="contained" fullWidth>
                Cadastrar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Register;
