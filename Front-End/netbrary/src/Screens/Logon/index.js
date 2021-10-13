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
} from "@material-ui/core";

const Logon = () => {
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
              <Button component={Link} to={"/register"}variant="contained" fullWidth>
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
