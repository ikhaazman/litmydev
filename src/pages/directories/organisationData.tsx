interface OrganisationDataItems {
  is_active: boolean;
  name: string;
  intro: string;
  site_url?: string;
  discord_url?: string;
  twitter_url?: string;
  youtube_url?: string;
  tiktok_url?: string;
  img_url: string;
}

const OrganisationData: OrganisationDataItems[] = [
  {
    is_active: true,
    name: "DevTalkMY",
    intro: "Tech people assembles",
    site_url: "https://devtalk.club/",
    discord_url: "https://invite.devtalk.club",
    twitter_url: "https://www.x.com/devtalk_my",
    youtube_url: "https://www.youtube.com/@devtalk-my",
    img_url: "/logo/devtalk.svg",
  },
  {
    is_active: true,
    name: "Malaysia AI",
    intro:
      "A non profit organization to gather open source artificial intelligence for Malaysia.",
    site_url: "https://malaysia-ai.org/",
    img_url: "https://img.litmy.dev/MYAI-HD.png",
  },
  {
    is_active: true,
    name: "Wanita Data",
    intro: "Data ladies in the house.",
    twitter_url: "https://www.x.com/WanitaData",
    tiktok_url: "https://www.youtube.com/@coderbelle5858",
    img_url: "https://img.litmy.dev/maxresdefault.jpg",
  },
];

export default OrganisationData;
