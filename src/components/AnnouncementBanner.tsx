import { Box, Container, Link as MuiLink, Typography } from "@mui/material";
import type { Announcement } from "../data/announcement";

interface Props {
  announcement: Announcement;
}

export default function AnnouncementBanner({ announcement }: Props) {
  if (!announcement.enabled || !announcement.message) return null;

  const content = (
    <Typography variant="body1" color="inherit" sx={{ fontWeight: 600 }}>
      {announcement.message}
    </Typography>
  );

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        py: 1,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {announcement.link ? (
          <MuiLink
            href={announcement.link}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
          >
            {content}
          </MuiLink>
        ) : (
          content
        )}
      </Container>
    </Box>
  );
}
