const {
  experimental_extendTheme: extendTheme,
} = require("@mui/material/styles");
const { withZeroPlugin } = require("@mui/zero-next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {};

const theme = extendTheme({
  cssVarPrefix: "app",
  components: {
    MuiBadge: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: "absolute",
          backgroundColor: (theme.vars || theme).palette.primary.main,
        }),
        badge: {
          display: "block",
        },
      },
    },
  },
});

module.exports = withZeroPlugin(nextConfig, {
  theme,
  cssVariablesPrefix: "app",
  transformLibraries: ["@mui/material"],
});
