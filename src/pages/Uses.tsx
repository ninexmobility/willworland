import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { usesData } from "../data/uses";

export default function Uses() {
  const { data = usesData } = useQuery({
    queryKey: ["uses"],
    queryFn: async () => usesData,
    staleTime: Infinity,
  });

  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        <Typography component="h1" variant="h3" fontWeight={700}>
          What I Use
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hardware, software, and tools that power my daily workflow. Inspired
          by{" "}
          <Link href="https://uses.tech" target="_blank" rel="noopener noreferrer">
            uses.tech
          </Link>
          .
        </Typography>
      </Stack>

      {data.map((category) => (
        <Stack
          key={category.title}
          component="section"
          spacing={2.5}
          borderBottom={1}
          borderColor="divider"
          pb={3}
        >
          <Typography variant="h5" component="h2" fontWeight={700}>
            {category.title}
          </Typography>

          {category.description && (
            <Typography variant="body2" color="text.secondary">
              {category.description}
            </Typography>
          )}

          <Grid container spacing={2}>
            {category.items.map((item) => (
              <Grid key={item.name} size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      {item.url ? (
                        <Link
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name} →
                        </Link>
                      ) : (
                        item.name
                      )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      ))}
    </Stack>
  );
}
