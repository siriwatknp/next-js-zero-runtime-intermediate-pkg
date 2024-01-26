const {
  experimental_extendTheme: extendTheme,
} = require("@mui/material/styles");
const { withZeroPlugin } = require("@mui/zero-next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

const theme = extendTheme({
  cssVarPrefix: "app",
  components: {
    MuiBadge: {
      defaultProps: {
        color: "primary",
      },
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

// module.exports = withZeroPlugin(nextConfig, {
//   theme,
//   cssVariablesPrefix: "app",
//   transformLibraries: ["@mui/material"],
// });

module.exports = nextConfig;
