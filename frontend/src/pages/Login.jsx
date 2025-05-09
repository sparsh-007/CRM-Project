// src/pages/Login.tsx
import { Container, Paper, Stack, Typography } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login() {

    function parseJwt(token) {
      const base64Url = token.split(".")[1]; // grab the middle section
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const json = atob(base64); // decode from Base64
      return JSON.parse(json); // parse JSON
    }
  const navigate = useNavigate();

  /** 1️⃣  TEMP: only log the raw data and store it so we can inspect later */
  const handleSuccess = ({ credential }) => {
    if (!credential) return;
    const payload = parseJwt(credential);
    console.log("Google ID:", payload);
    // For quick inspection you can keep the full token in memory too:
    sessionStorage.setItem("googleIdToken", credential);

    // Skip the backend call for now — just drop the user inside the app
    // and use a fake token so ProtectedRoute lets them through.
    localStorage.setItem("token", "DEV_FAKE_TOKEN");
    navigate("/dashboard", { replace: true });
  };
 console.log("Google ID:", import.meta.env.VITE_GOOGLE_ID);
  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" fontWeight={600}>
            Xeno CRM
          </Typography>

          {/* Google Identity button */}
          <GoogleLogin
            type="standard"
            theme="outline"
            size="large"
            onSuccess={handleSuccess}
            onError={() => console.error("Google login failed")}
          />
        </Stack>
      </Paper>
    </Container>
  );
}
