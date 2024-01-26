import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import BrandingCssVarsProvider from "@/BrandingCssVarsProvider";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <BrandingCssVarsProvider>{props.children}</BrandingCssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
