import { useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  Typography,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import type { ProjectDetail } from "../data/projects/hf-mini-toolbox";
import { hfMiniToolboxDetail } from "../data/projects/hf-mini-toolbox";

type GalleryImage = NonNullable<ProjectDetail["images"]>[number];
type InlineImage = NonNullable<ProjectDetail["inlineImages"]>[number];

const projectDetails: Record<string, ProjectDetail> = {
  [hfMiniToolboxDetail.slug]: hfMiniToolboxDetail,
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const detail = slug ? projectDetails[slug] : undefined;
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [inlineImage, setInlineImage] = useState<InlineImage | null>(null);

  const handleSummaryClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest(
      "a[data-inline-image]"
    ) as HTMLAnchorElement | null;
    if (!anchor || !detail?.inlineImages) return;
    event.preventDefault();
    const id = anchor.getAttribute("data-inline-image");
    const match = detail.inlineImages.find((img) => img.id === id);
    if (match) {
      setInlineImage(match);
    }
  };

  if (!detail) {
    return (
      <Box py={6}>
        <Typography variant="h4" gutterBottom>
          Project not found
        </Typography>
        <Typography color="text.secondary" paragraph>
          The project you are looking for does not exist yet.
        </Typography>
        <Button component={RouterLink} to="/projects" variant="contained">
          Back to Projects
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Stack spacing={3} py={2}>
        <Stack spacing={1}>
          <Typography component="h1" variant="h3" fontWeight={700}>
            {detail.title}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            color="text.secondary"
            onClick={handleSummaryClick}
            dangerouslySetInnerHTML={{ __html: detail.summary }}
          />
        </Stack>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {detail.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>

        <Stack spacing={2}>
          {detail.images && detail.images.length > 0 && (
            <Box>
              <Box
                component="img"
                src={detail.images[0].src}
                alt={detail.images[0].alt}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  border: 1,
                  borderColor: "divider",
                  objectFit: "cover",
                  maxHeight: 420,
                }}
              />
              {detail.images[0].caption && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mt={0.5}
                >
                  {detail.images[0].caption}
                </Typography>
              )}
            </Box>
          )}

          <Stack spacing={1}>
            {detail.highlights.map((item) => {
              if (typeof item === "string") {
                return (
                  <Typography key={item} variant="body1">
                    • {item}
                  </Typography>
                );
              }
              return (
                <Stack key={item.text} spacing={0.5}>
                  <Typography variant="body1">• {item.text}</Typography>
                  {item.subpoints && (
                    <Stack component="ul" spacing={0.25} pl={3} m={0}>
                      {item.subpoints.map((sub) => (
                        <Typography
                          key={sub}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ listStyle: "disc" }}
                        >
                          {sub}
                        </Typography>
                      ))}
                    </Stack>
                  )}
                </Stack>
              );
            })}
          </Stack>

          {detail.images && detail.images.length > 1 && (
            <Stack spacing={1}>
              <Typography variant="subtitle2" color="text.secondary">
                Gallery
              </Typography>
              <Grid container spacing={2}>
                {detail.images.slice(1).map((image) => (
                  <Grid key={image.src} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                      component="button"
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      sx={{
                        p: 0,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        display: "block",
                      }}
                    >
                      <Box
                        component="img"
                        src={image.src}
                        alt={image.alt}
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          border: 1,
                          borderColor: "divider",
                          objectFit: "cover",
                          height: 220,
                          display: "block",
                        }}
                      />
                      {image.caption && (
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                          mt={0.5}
                        >
                          {image.caption}
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          )}
        </Stack>

        <Button component={RouterLink} to="/projects" variant="outlined">
          Back to Projects
        </Button>
      </Stack>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
            aria-label="Close image"
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box>
              <Box
                component="img"
                src={selectedImage.src}
                alt={selectedImage.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "75vh",
                  objectFit: "contain",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
              />
              {selectedImage.caption && (
                <Box px={2} py={1.5}>
                  <Typography variant="body2" color="text.secondary">
                    {selectedImage.caption}
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(inlineImage)}
        onClose={() => setInlineImage(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={() => setInlineImage(null)}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
            aria-label="Close image"
          >
            <CloseIcon />
          </IconButton>
          {inlineImage && (
            <Box>
              <Box
                component="img"
                src={inlineImage.src}
                alt={inlineImage.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "75vh",
                  objectFit: "contain",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
              />
              {(inlineImage.caption || inlineImage.link) && (
                <Box px={2} py={1.5}>
                  {inlineImage.caption && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {inlineImage.caption}
                    </Typography>
                  )}
                  {inlineImage.link && (
                    <MuiLink
                      href={inlineImage.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body2"
                    >
                      View on Instagram
                    </MuiLink>
                  )}
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
