"use client";
import * as React from "react";
import { alpha } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Chip from "@mui/material/Chip";
import GradientText from "@/lib/GradientText";
import Section from "@/lib/Section";
import Link from "@/lib/Link";
import { BlogPost } from "./sourcing";

export const AUTHORS = {
  oliviertassinari: {
    name: "Olivier Tassinari",
    avatar: "https://avatars.githubusercontent.com/u/3165635",
    github: "oliviertassinari",
  },
  mbrookes: {
    name: "Matt Brookes",
    avatar: "https://avatars.githubusercontent.com/u/357702",
    github: "mbrookes",
  },
  eps1lon: {
    name: "Sebastian Silbermann",
    avatar: "https://avatars.githubusercontent.com/u/12292047",
    github: "eps1lon",
  },
  mnajdova: {
    name: "Marija Najdova",
    avatar: "https://avatars.githubusercontent.com/u/4512430",
    github: "mnajdova",
  },
  michaldudak: {
    name: "Michał Dudak",
    avatar: "https://avatars.githubusercontent.com/u/4696105",
    github: "michaldudak",
  },
  siriwatknp: {
    name: "Siriwat Kunaporn",
    avatar: "https://avatars.githubusercontent.com/u/18292247",
    github: "siriwatknp",
  },
  "danilo-leal": {
    name: "Danilo Leal",
    avatar: "https://avatars.githubusercontent.com/u/67129314",
    github: "danilo-leal",
  },
  m4theushw: {
    name: "Matheus Wichman",
    avatar: "https://avatars.githubusercontent.com/u/42154031",
    github: "m4theushw",
  },
  flaviendelangle: {
    name: "Flavien Delangle",
    avatar: "https://avatars.githubusercontent.com/u/3309670",
    github: "flaviendelangle",
  },
  DanailH: {
    name: "Danail Hadjiatanasov",
    avatar: "https://avatars.githubusercontent.com/u/5858539",
    github: "DanailH",
  },
  alexfauquette: {
    name: "Alexandre Fauquette",
    avatar: "https://avatars.githubusercontent.com/u/45398769",
    github: "alexfauquette",
  },
  samuelsycamore: {
    name: "Sam Sycamore",
    avatar: "https://avatars.githubusercontent.com/u/71297412",
    github: "samuelsycamore",
  },
  josefreitas: {
    name: "José Freitas",
    avatar: "https://avatars.githubusercontent.com/u/550141",
    github: "joserodolfofreitas",
  },
  cherniavskii: {
    name: "Andrew Cherniavskyi",
    avatar: "https://avatars.githubusercontent.com/u/13808724",
    github: "cherniavskii",
  },
  mikailaread: {
    name: "Mikaila Read",
    avatar: "https://avatars.githubusercontent.com/u/76401606",
    github: "mikailaread",
  },
  prakhargupta: {
    name: "Prakhar Gupta",
    avatar: "https://avatars.githubusercontent.com/u/92228082",
    github: "prakhargupta1",
  },
  richbustos: {
    name: "Rich Bustos",
    avatar: "https://avatars.githubusercontent.com/u/92274722",
    github: "richbustos",
  },
};

function PostPreview(props: BlogPost) {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", gap: 1, mb: 1.5 }}>
        {props.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={[
              (theme) => ({
                fontWeight: 500,
                color: (theme.vars || theme).palette.primary[600],
                background: (theme.vars || theme).palette.primary[50],
                border: "1px solid",
                borderColor: (theme.vars || theme).palette.primary[100],
                "&:hover": {
                  background: (theme.vars || theme).palette.primary[50],
                },
              }),
              (theme) =>
                theme.applyDarkStyles({
                  color: (theme.vars || theme).palette.primary[100],
                  background: alpha(theme.palette.primary[900], 0.4),
                  borderColor: alpha(theme.palette.primary[800], 0.5),
                  "&:hover": {
                    background: alpha(theme.palette.primary[900], 0.4),
                  },
                }),
            ]}
          />
        ))}
      </Box>
      <Typography
        component="h2"
        fontWeight="bold"
        variant="subtitle1"
        sx={{
          mb: 0.5,
        }}
      >
        <Link
          aria-describedby={`describe-${props.slug}`}
          href={`/blog/${props.slug}`}
          sx={{
            color: "text.primary",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {props.title}
        </Link>
      </Typography>
      <Typography color="text.secondary" sx={{ mb: "auto" }}>
        {props.description}
      </Typography>
      {props.authors && (
        <AvatarGroup
          sx={[
            (theme) => ({
              mt: 2,
              mb: 1,
              alignSelf: "flex-start",
              "& .MuiAvatar-circular": {
                width: 28,
                height: 28,
                border: 3,
                borderColor: "#FFF",
                backgroundColor: (theme.vars || theme).palette.grey[100],
                color: (theme.vars || theme).palette.grey[800],
                fontSize: theme.typography.pxToRem(13),
                fontWeight: 500,
              },
            }),
            (theme) =>
              theme.applyDarkStyles({
                "& .MuiAvatar-circular": {
                  borderColor: (theme.vars || theme).palette.primaryDark[800],
                  backgroundColor: (theme.vars || theme).palette
                    .primaryDark[700],
                  color: (theme.vars || theme).palette.primaryDark[100],
                },
              }),
          ]}
        >
          {(props.authors as Array<keyof typeof AUTHORS>).map((author) => (
            <Avatar
              key={author}
              alt=""
              src={`${AUTHORS[author].avatar}?s=${28}`}
              srcSet={`${AUTHORS[author].avatar}?s=${28 * 2} 2x, ${
                AUTHORS[author].avatar
              }?s=${28 * 3} 3x`}
            />
          ))}
        </AvatarGroup>
      )}
      <Box
        sx={{
          display: { sm: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Box sx={{ position: "relative" }}>
          {props.authors && (
            <Typography variant="body2" fontWeight="500">
              {props.authors
                .slice(0, 3)
                .map((userId) => {
                  const name = AUTHORS[userId as keyof typeof AUTHORS]?.name;
                  if (name) {
                    if (props.authors && props.authors.length > 1) {
                      // display only firstName
                      return name.split(" ")[0];
                    }
                    return name;
                  }
                  return userId;
                })
                .join(", ")}
              {props.authors.length > 2 && ", and more."}
            </Typography>
          )}
          {props.date && (
            <Typography
              variant="caption"
              fontWeight="400"
              color="text.secondary"
            >
              {new Date(props.date).toDateString()}
            </Typography>
          )}
        </Box>
        <Button
          component={Link}
          aria-describedby={`describe-${props.slug}`}
          href={`/blog/${props.slug}`}
          id={`describe-${props.slug}`}
          endIcon={<KeyboardArrowRightRoundedIcon />}
          sx={(theme) => ({
            mt: { xs: 1, md: 0 },
            mb: { xs: -1, md: 0 },
            color: (theme.vars || theme).palette.primary[600],
            "& .MuiButton-endIcon": {
              ml: 0,
            },
            ...theme.applyDarkStyles({
              color: (theme.vars || theme).palette.primary[300],
            }),
          })}
        >
          Read more
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default function HomeIndex() {
  return (
    <Box
      sx={(theme) => ({
        background: `linear-gradient(180deg, #FFF 50%,
          ${(theme.vars || theme).palette.primary[50]} 100%)
        `,
        ...theme.applyDarkStyles({
          background: `linear-gradient(180deg, ${
            (theme.vars || theme).palette.primaryDark[900]
          } 50%,
          ${alpha(theme.palette.primary[800], 0.2)} 100%)
          `,
        }),
      })}
    >
      <Section bg="transparent" cozy>
        <Typography
          variant="body2"
          color="primary.main"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Blog
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          textAlign="center"
          sx={{ mb: { xs: 5, md: 10 } }}
        >
          The <GradientText>latest</GradientText> about MUI
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "grid",
            m: 0,
            p: 0,
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {[
            {
              title: "MUI X v7 is now in beta",
              description:
                "Check out what's new and what's next for v7 stable.",
              date: "2024-01-29T00:00:00.000Z",
              authors: ["josefreitas"],
              tags: ["MUI X", "Product", "News"],
              card: "true",
              components: [],
              hooks: [],
              slug: "mui-x-v7-beta",
              image: "",
            },
            {
              title: "The road to Material UI v6 and beyond",
              description:
                "We're tightening up the Material UI release schedule and shipping two major versions in 2024. Here's what to expect.",
              date: "2023-12-23T00:00:00.000Z",
              authors: ["mnajdova"],
              card: "true",
              tags: ["MUI Core", "News"],
              components: [],
              hooks: [],
              slug: "2023-material-ui-v6-and-beyond",
              image: "",
            },
          ].map((post) => (
            <Paper
              key={post.slug}
              component="li"
              variant="outlined"
              sx={[
                {
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "all ease 120ms",
                  "&:hover, &:focus-within": {
                    borderColor: "grey.300",
                    boxShadow: "0px 4px 20px rgba(170, 180, 190, 0.3)",
                  },
                  "&:focus-within": {
                    "& a": {
                      outline: 0,
                    },
                  },
                },
                (theme) =>
                  theme.applyDarkStyles({
                    "&:hover, &:focus-within": {
                      borderColor: "primary.600",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                    },
                  }),
              ]}
            >
              {post.image && (
                <Box
                  component="img"
                  src={post.image}
                  sx={{
                    aspectRatio: "16 / 9",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              )}
              <PostPreview {...post} />
            </Paper>
          ))}
        </Box>
      </Section>
    </Box>
  );
}
