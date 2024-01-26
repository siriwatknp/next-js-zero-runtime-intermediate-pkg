const {
  experimental_extendTheme: extendTheme,
} = require("@mui/material/styles");
const { withZeroPlugin } = require("@mui/zero-next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
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
