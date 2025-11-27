import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnnouncementBanner from "./components/AnnouncementBanner";
import { announcement } from "./data/announcement";

export default function App() {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <AnnouncementBanner announcement={announcement} />
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: { xs: 6, md: 8 } }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
