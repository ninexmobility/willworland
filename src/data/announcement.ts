export interface Announcement {
  enabled: boolean;
  message: string;
  link?: string;
}

export const announcement: Announcement = {
  enabled: true,
  message:
    "Click Here! Visit *NeuroNomadStudios* for some amazing art and photography!",
  link: "https://www.neuronomadstudios.com",
};
