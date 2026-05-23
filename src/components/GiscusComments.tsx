import Giscus from "@giscus/react";
import { Box } from "@mui/material";

export default function GiscusComments() {
  return (
    <Box sx={{ mt: 2 }}>
      <Giscus
        repo="ninexmobility/willworland"
        repoId="R_kgDONGoSrQ"
        category="General"
        categoryId="DIC_kwDONGoSrc4C61YI"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </Box>
  );
}
