import { useQuery } from "@tanstack/react-query";
import { Box, Stack, Typography, Paper, Avatar, useTheme } from "@mui/material";
import { resume } from "../data/resume";
import ResumeSection from "../components/ResumeSection";

export default function Home() {
  const { data: resumeData = resume } = useQuery({
    queryKey: ["resume"],
    queryFn: async () => resume,
    staleTime: Infinity,
  });
  const theme = useTheme();

  return (
    <Stack spacing={6}>
      <Paper
        variant="outlined"
        sx={{
          p: { xs: 3, sm: 4 },
          backgroundColor: "background.paper",
        }}
      >
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={3}
        >
          <Avatar
            alt={resumeData.name}
            src="/will.png"
            sx={{
              width: { xs: 120, sm: 220 },
              height: { xs: 120, sm: 220 },
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          />

          <Stack spacing={1.5} alignItems={{ xs: "center", sm: "flex-start" }}>
            <Typography component="h1" variant="h3" fontWeight={700}>
              {resumeData.name}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {resumeData.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 720, textAlign: { xs: "center", sm: "left" } }}
            >
              {resumeData.summary}
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Box>
        <Stack spacing={5}>
          {resumeData.sections.map((section) => (
            <ResumeSection key={section.title} section={section} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
