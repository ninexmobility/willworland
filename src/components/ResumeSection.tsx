import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import type { ResumeSection as ResumeSectionType } from "../data/resume";

interface Props {
  section: ResumeSectionType;
}

export default function ResumeSection({ section }: Props) {
  return (
    <Stack component="section" spacing={3}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5" component="h2">
          {section.title}
        </Typography>
        <Divider flexItem />
      </Stack>

      <Stack spacing={2.5}>
        {section.items.map((item, index) => (
          <Card
            key={`${section.title}-${item.heading ?? index}`}
            variant="outlined"
            sx={{ borderColor: "divider", boxShadow: "none" }}
          >
            <CardContent>
              <Stack spacing={1.5}>
                {item.heading && (
                  <Stack
                    direction="row"
                    alignItems="baseline"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Typography variant="h6" component="h3">
                      {item.heading}
                    </Typography>
                    {item.meta && (
                      <Typography variant="caption" color="text.secondary">
                        {item.meta}
                      </Typography>
                    )}
                  </Stack>
                )}

                {item.subheading && (
                  <Typography variant="subtitle1" color="text.primary">
                    {item.subheading}
                  </Typography>
                )}

                {item.description && (
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                )}

                {item.bullets && (
                  <List sx={{ pt: 0 }}>
                    {item.bullets.map((bullet) => (
                      <ListItem
                        key={bullet}
                        sx={{
                          px: 0,
                          py: 0.5,
                          display: "list-item",
                          listStyleType: "disc",
                          ml: 2,
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {bullet}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
