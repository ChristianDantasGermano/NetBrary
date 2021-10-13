import "./styles.css";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button, Typography } from "@material-ui/core";

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
                      component={Link}
                      to={"/logon"}
                      style={{ "min-width": "150px" }}
                      size="large"
                      variant="contained"
                    >
                      Entrar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      to={"/register"}
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
