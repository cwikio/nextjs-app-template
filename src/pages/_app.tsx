import type { AppType } from "next/app";
import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

//INFO: tailwind UI configuration: https://clerk.com/docs/components/customization/overview#using-tailwind

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps} appearance={{ baseTheme: dark }}>
      <Component {...pageProps} />;
    </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);
