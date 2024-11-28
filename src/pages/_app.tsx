import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import EmptyLayout from "@/components/Layouts/EmptyLayout";
import { AppPropsWithLayout } from "@/models";
import StoreProviders from "@/stores/StoreProvider";
import { AppContextProvider } from "@/context/AppContextProvider";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [loadLib, setLoadLib] = useState<boolean>(false);

  const Layout = Component.Layout ?? EmptyLayout;

  useEffect(() => {
    setLoadLib(false);
    require("antd/lib");
    require("@ant-design/icons");
    setLoadLib(true);
  }, []);

  return (
    <>
      <StoreProviders>
        <AppContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextProvider>
      </StoreProviders>
    </>
  );
}
