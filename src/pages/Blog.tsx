import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function Blog() {
  const { data = posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => posts,
    staleTime: Infinity,
  });

  const navigate = useNavigate();

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography component="h1" variant="h3" fontWeight={700}>
          Blog
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Thoughts on projects, tools, and whatever else is on my mind.
        </Typography>
      </Stack>

      <Stack spacing={2}>
        {data.map((post) => (
          <Card key={post.slug} variant="outlined">
            <CardActionArea onClick={() => navigate(`/blog/${post.slug}`)}>
              <Stack direction={{ xs: "column", sm: "row" }}>
                {post.image && (
                  <Box
                    component="img"
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    sx={{
                      width: { xs: "100%", sm: 200 },
                      height: { xs: 160, sm: "auto" },
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
                      <Typography variant="h6" component="h2">
                        {post.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
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
  );
}
