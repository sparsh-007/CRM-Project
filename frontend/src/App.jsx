import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import { Outlet, Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

export default function AppShell() {
  const { pathname } = useLocation();
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top bar */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Xeno CRM
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side nav */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          /* shift the drawer below the AppBar */
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            top: theme.spacing(8), // 64px by default
          },
        }}
      >
        {/* optional spacer if you prefer */}
        <Toolbar />
        <List>
          {[
            { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
            { label: "Campaigns", path: "/campaigns", icon: <CampaignIcon /> },
          ].map((item) => (
            <ListItemButton
              key={item.label}
              component={Link}
              to={item.path}
              selected={pathname.startsWith(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* pushes below AppBar */}
        <Outlet />
      </Box>
    </Box>
  );
}
