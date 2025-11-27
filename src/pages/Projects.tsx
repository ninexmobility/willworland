import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const { data = projects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => projects,
    staleTime: Infinity,
  });

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography component="h1" variant="h3" fontWeight={700}>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A mix of engineering and personal projects, builds, software, etc.
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {data.map((project) => (
          <Grid key={project.title} size={{ xs: 12, sm: 6 }}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Stack spacing={1.5}>
                  {project.coverImage && (
                    <Box
                      component="img"
                      src={project.coverImage.src}
                      alt={project.coverImage.alt}
                      sx={{
                        width: "100%",
                        borderRadius: 1,
                        border: 1,
                        borderColor: "divider",
                        objectFit: "cover",
                        maxHeight: 140,
                      }}
                    />
                  )}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    <Typography variant="h6" component="h2">
                      {project.title}
                    </Typography>
                    {project.timeframe && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        {project.timeframe}
                      </Typography>
                    )}
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={0.75}>
                    {project.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    {project.link &&
                      (project.link.startsWith("/") ? (
                        <MuiLink
                          component={RouterLink}
                          to={project.link}
                          variant="body2"
                        >
                          Details
                        </MuiLink>
                      ) : (
                        <MuiLink
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="body2"
                        >
                          Details
                        </MuiLink>
                      ))}
                    {project.repo && (
                      <MuiLink
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                      >
                        Repo
                      </MuiLink>
                    )}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
