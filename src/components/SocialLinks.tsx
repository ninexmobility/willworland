import { IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, MailOutline, PhoneOutlined } from "@mui/icons-material";

const links = [
  { href: "https://github.com/ninexmobility", icon: GitHub, label: "GitHub" },
  {
    href: "https://linkedin.com/in/willworland",
    icon: LinkedIn,
    label: "LinkedIn",
  },
  { href: "mailto:me@willworland.com", icon: MailOutline, label: "Email" },
  { href: "tel:+19162585651", icon: PhoneOutlined, label: "Phone" },
];

export default function SocialLinks() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {links.map(({ href, icon: Icon, label }) => {
        const isExternal = href.startsWith("http");
        return (
          <IconButton
            key={label}
            href={href}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={label}
            color="inherit"
            size="small"
          >
            <Icon fontSize="small" />
          </IconButton>
        );
      })}
    </Stack>
  );
}
