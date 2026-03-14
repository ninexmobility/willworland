import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Button, Chip, Link, Stack, Typography } from "@mui/material";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Box py={6}>
        <Typography variant="h4" gutterBottom>
          Post not found
        </Typography>
        <Typography color="text.secondary" paragraph>
          The post you are looking for does not exist.
        </Typography>
        <Button component={RouterLink} to="/blog" variant="contained">
          Back to Blog
        </Button>
      </Box>
    );
  }

  return (
    <Stack spacing={3} py={2}>
      <Stack spacing={1}>
        <Typography component="h1" variant="h3" fontWeight={700}>
          {post.title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>
      </Stack>

      <Stack direction="row" flexWrap="wrap" gap={0.75} useFlexGap>
        {post.tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" />
        ))}
      </Stack>

      {post.image && (
        <Box>
          <Box
            component="img"
            src={post.image}
            alt={post.imageAlt ?? post.title}
            sx={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 2 }}
          />
          {post.imageCredit && (
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.5 }}>
              Photo by{" "}
              <Link href={post.imageCredit.url} target="_blank" rel="noopener noreferrer">
                {post.imageCredit.name}
              </Link>{" "}
              on{" "}
              <Link href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                Unsplash
              </Link>
            </Typography>
          )}
        </Box>
      )}

      {post.contentHtml ? (
        <Box dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      ) : (
        <Stack spacing={2}>
          {post.content.split("\n\n").map((paragraph, i) => (
            <Typography key={i} variant="body1">
              {paragraph}
            </Typography>
          ))}
        </Stack>
      )}

      <Button component={RouterLink} to="/blog" variant="outlined" sx={{ alignSelf: "flex-start" }}>
        Back to Blog
      </Button>
    </Stack>
  );
}
