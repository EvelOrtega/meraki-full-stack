import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import useNavigate from "react-router-dom";
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link to="/">
        <span className="text">Meraki</span>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    background: {
      default: "#19123b",
    },
  },
});

export default function Login() {
  const [user, setUser] = React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const senha = data.get("password");

    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ email, senha }),
    })
      .then(console.log(JSON.stringify({ email, senha })))
      .then((response) => response.json())
      .then((userForm) => {
        setUser(userForm);
        console.log(user._id);
        window.localStorage.setItem("mykey", JSON.stringify({ user }));
      });
  };

  return (
    <Box className="background">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="Card"
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#212042",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Conectar
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              style={{ margin: "20px 0px" }}
            >
              <Box
                container
                sx={{
                  bgcolor: "#2a284d",
                  width: "90px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#1775f1",
                }}
              >
                <FacebookIcon />
              </Box>
              <Box
                container
                sx={{
                  bgcolor: "#2a284d",
                  width: "90px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#56abec",
                }}
              >
                <TwitterIcon />
              </Box>
              <Box
                container
                sx={{
                  bgcolor: "#2a284d",
                  width: "90px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#cb5048",
                }}
              >
                <GoogleIcon />
              </Box>
            </Grid>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                className="text"
                required
                fullWidth
                id="email"
                placeholder="E-mail: "
                name="email"
                autoComplete="email"
                autoFocus
                style={{ backgroundColor: "#EEE9E9", borderRadius: "10px" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Senha: "
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ backgroundColor: "#EEE9E9", borderRadius: "10px" }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Manter conectado"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "white" }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/dashboard">
                    <span className="text">Esqueci minha senha</span>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/dashboard" className="text">
                    <span className="text">Cadastre-se</span>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Box>
  );
}
