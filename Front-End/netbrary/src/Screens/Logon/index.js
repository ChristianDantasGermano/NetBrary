import { Link } from "react-router-dom";
import "./styles.css";

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


const useStyles = makeStyles({
  root: {
    minWidth: 400,
  },
  title: {
    textAlign: "center",
  },
});

const Logon = () => {
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
      <Grid item >
        <Card className={classes.root} >
          <CardContent>
            <Typography className={classes.title} variant="h2">
              Login
            </Typography>
            <Box mx={4}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing="center"
                alignItems="stretch"
              >
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Senha"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Box mx={6} my={4}>
              <Button
                component={Link}
                to={"/"}
                variant="contained"
                color="primary"
                fullWidth
              >
                Logar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Logon;
