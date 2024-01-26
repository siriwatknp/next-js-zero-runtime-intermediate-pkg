import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import BrandingCssVarsProvider from "@/BrandingCssVarsProvider";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <BrandingCssVarsProvider>
        <Component {...pageProps} />
      </BrandingCssVarsProvider>
    </AppCacheProvider>
  );
}
