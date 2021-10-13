import "./styles.css";

import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Authentication = () => {
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
        <Card variant="outlined" sx={{ minWidth: 500 }}>
          <CardContent>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "45vh" }}
            >
              <Grid item xs={3}>
                <Typography sx={{ textAlign: "center" }} variant="h1">
                  NetBrary
                </Typography>

                <Grid
                  container
                  marginTop={2}
                  direction="row"
                  justifyContent="center"
                  spacing={2}
                  alignItems="stretch"
                >
                  <Grid item>
                    <Button
                      style={{ "min-width": "150px" }}
                      size="large"
                      variant="contained"
                    >
                      Entrar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      style={{ "min-width": "150px" }}
                      size="large"
                      variant="outlined"
                    >
                      Cadastro
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Authentication;
