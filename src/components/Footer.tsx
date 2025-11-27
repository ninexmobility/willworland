import { Box, Container, Stack, Typography, Button } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        borderTop: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Container sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Will Worland
          </Typography>
          <Button
            href="/resume.pdf"
            download
            variant="text"
            color="primary"
            size="small"
          >
            Download PDF Resume
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
