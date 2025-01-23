import type { AppProps } from "next/app";
import type { ReactNode, ComponentType } from "react";
import type { LayoutProps } from ".";
import "@vercel/examples-ui/globals.css";

const Noop = ({ children }: { children?: ReactNode }) => <>{children}</>;

export const getLayout = <LP extends {} = LayoutProps>(
  Component: any,
): ComponentType<LP> => Component?.Layout || Noop;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component);

  return (
    <Layout
      title="Monorepo"
      links={[
        "audio",
        "box",
        "budget",
        "design",
        "floors",
        "inspirations",
        "map",
        "rooms",
        "sketch",
        "tools",
        "video",
      ]}
      path="solutions/monorepo"
    >
      <Component {...pageProps} />
    </Layout>
  );
}
