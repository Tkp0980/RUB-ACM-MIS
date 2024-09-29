"use client";
import Link from "next/link";
import {
  Grid,
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  useTheme,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";

const Login2 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          lg={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: "100%", maxWidth: "500px", textAlign: "center" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <Logo />
            </Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={1}
              color="primary.main"
            >
              Sign in to ACM-MS
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" mb={3}>
              Please enter your details below
            </Typography>
            <Box component="form" noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Stack direction="row" justifyContent="space-between" mt={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">
                    <Typography color="textSecondary" variant="body2">
                      Remember me
                    </Typography>
                  </label>
                </Stack>
                <Link href="/authentication/forgot-password" passHref>
                  <Typography
                    color="primary.main"
                    variant="body2"
                    sx={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    Forgot password?
                  </Typography>
                </Link>
              </Stack>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Log in
              </Button>
              <Typography variant="body2" color="textSecondary" mb={2}>
                or
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ mb: 3, color: "inherit" }}
              >
                Sign in with Google
              </Button>
            </Box>
            <Typography variant="body2" color="textSecondary">
              Don't have an account?{" "}
              <Link href="/authentication/register" passHref>
                <Typography
                  component="span"
                  color={theme.palette.secondary.main}
                  fontWeight="500"
                  sx={{ cursor: "pointer", textDecoration: "none" }}
                >
                  Sign up for free
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",
            backgroundImage: "url('/images/backgrounds/CSTHostel.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 40,
              left: 20,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              p: 2,
              top: "70%",
            }}
          >
            <Box display="flex" alignItems="center" mb={1}>
              <Box sx={{ width: 80, height: 80 }}>
                <img
                  src="/images/logos/cstlogo.png"
                  alt="CST Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={theme.palette.secondary_blue.main}
                sx={{ display: "inline" }}
              >
                ACM CHAPTER
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="white"
                sx={{ display: "inline", ml: 1 }}
              >
                MANAGEMENT SYSTEM
              </Typography>
            </Box>
            <Typography variant="h2" fontWeight="bold" color="white">
              College of Science and Technology
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login2;
