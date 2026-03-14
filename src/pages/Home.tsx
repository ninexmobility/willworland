import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { resume } from "../data/resume";
import { posts } from "../data/posts";
import SocialLinks from "../components/SocialLinks";

const recentPosts = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 2);

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Stack spacing={8}>
      {/* Hero */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        alignItems={{ xs: "center", sm: "flex-start" }}
        pt={2}
      >
        <Avatar
          alt={resume.name}
          src="/will.png"
          sx={{
            width: { xs: 100, sm: 128 },
            height: { xs: 100, sm: 128 },
            border: `2px solid ${theme.palette.primary.main}`,
            flexShrink: 0,
          }}
        />
        <Stack spacing={2} alignItems={{ xs: "center", sm: "flex-start" }}>
          <Stack spacing={0.5} alignItems={{ xs: "center", sm: "flex-start" }}>
            <Typography component="h1" variant="h3" fontWeight={700}>
              {resume.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight={400}>
              {resume.title}
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, textAlign: { xs: "center", sm: "left" }, lineHeight: 1.7 }}
          >
            Founder of{" "}
            <Box component="span" color="text.primary" fontWeight={500}>
              Oak &amp; Ash Technology
            </Box>
            . I write about enterprise mobility, device management automation, and the tools that
            make modern IT infrastructure work at scale.
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Button
              component={RouterLink}
              to="/blog"
              variant="contained"
              disableElevation
              endIcon={<ArrowForward fontSize="small" />}
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              Read the Blog
            </Button>
            <Button
              component={RouterLink}
              to="/resume"
              variant="outlined"
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              Full Resume
            </Button>
            <SocialLinks />
          </Stack>
        </Stack>
      </Stack>

      <Divider />

      {/* Recent Writing */}
      <Stack spacing={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Typography variant="h5" fontWeight={600}>
            Recent Writing
          </Typography>
          <Button
            component={RouterLink}
            to="/blog"
            size="small"
            endIcon={<ArrowForward fontSize="small" />}
            sx={{ textTransform: "none" }}
          >
            All posts
          </Button>
        </Stack>

        <Stack spacing={2}>
          {recentPosts.map((post) => (
            <Card key={post.slug} variant="outlined">
              <CardActionArea onClick={() => navigate(`/blog/${post.slug}`)}>
                <Stack direction={{ xs: "column", sm: "row" }}>
                  {post.image && (
                    <Box
                      component="img"
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      sx={{
                        width: { xs: "100%", sm: 180 },
                        height: { xs: 140, sm: "auto" },
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <CardContent sx={{ flex: 1 }}>
                    <Stack spacing={1}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={1}
                      >
                        <Typography variant="h6" component="h2" fontSize="1rem">
                          {post.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {post.summary}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={0.75}>
                        {post.tags.map((tag) => (
                          <Chip key={tag} label={tag} size="small" />
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>
                </Stack>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Stack>

      {/* Quick Links */}
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight={600}>
          Explore
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {[
            {
              to: "/projects",
              label: "Projects",
              description: "Things I've built and shipped.",
            },
            {
              to: "/uses",
              label: "Uses",
              description: "Hardware, software, and tools in my daily stack.",
            },
            {
              to: "/resume",
              label: "Resume",
              description: "25+ years of enterprise mobility and systems experience.",
            },
          ].map(({ to, label, description }) => (
            <Card
              key={to}
              variant="outlined"
              sx={{ flex: 1, transition: "border-color 0.15s" }}
            >
              <CardActionArea
                component={RouterLink}
                to={to}
                sx={{ height: "100%" }}
              >
                <CardContent>
                  <Stack spacing={0.5}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle1" fontWeight={600}>
                        {label}
                      </Typography>
                      <ArrowForward fontSize="small" sx={{ opacity: 0.4 }} />
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
