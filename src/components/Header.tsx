import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleMode } from "../store/preferencesSlice";

export default function Header() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.preferences.mode);

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          maxWidth: "960px",
          width: "100%",
          mx: "auto",
          py: 2,
          px: { xs: 2, sm: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          sx={{
            color: "text.primary",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          Will Worland
        </Typography>

        <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            color={isActive("/") ? "primary" : "inherit"}
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Resume
          </Button>
          <Button
            component={RouterLink}
            to="/uses"
            color={isActive("/uses") ? "primary" : "inherit"}
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Uses
          </Button>
          <Button
            component={RouterLink}
            to="/projects"
            color={isActive("/projects") ? "primary" : "inherit"}
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Projects
          </Button>
          <Button
            component="a"
            href="https://shop.willworland.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Shop
          </Button>
          <SocialLinks />
          <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
            <IconButton
              color="inherit"
              onClick={() => dispatch(toggleMode())}
              aria-label="Toggle color mode"
            >
              {mode === "light" ? (
                <Brightness4 fontSize="small" />
              ) : (
                <Brightness7 fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
