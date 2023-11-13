import type { ReactNode } from "react";
import { Button, Link } from "@vercel/examples-ui";
import Vercel from "@vercel/examples-ui/icons/vercel";
import App from "@dev/web";

const REPO_URL = "https://github.com/vercel/examples/tree/main";
const VERCEL_CLONE = "https://vercel.com/new/clone";

export interface DeployButtonProps {
  repositoryUrl: string;
  env?: string[];
  projectName?: string;
  repositoryName?: string;
  customDeployUrl?: string;
}

export const DeployButton = (props: DeployButtonProps) => {
  const params = [
    ["repository-url", props.repositoryUrl],
    ["env", props.env?.join(",")],
    ["project-name", props.projectName],
    ["repository-name", props.repositoryName],
  ];
  const query = params
    .reduce<string[]>((arr, [k, v]) => {
      if (v) arr.push(`${k}=${encodeURIComponent(v)}`);
      return arr;
    }, [])
    .join("&");

  return (
    <Button
      Component="a"
      href={
        props.customDeployUrl
          ? props.customDeployUrl
          : `${VERCEL_CLONE}${query ? `?${query}` : ""}`
      }
      target="_blank"
      rel="noreferrer"
    >
      Clone & Deploy
    </Button>
  );
};

export interface NavProps {
  title: string;
  links: string[];
  path: string;
  deployButton?: Partial<DeployButtonProps>;
}

export const Nav = ({ title, links, path, deployButton }: NavProps) => {
  const repositoryUrl = deployButton?.repositoryUrl || `${REPO_URL}/${path}`;

  return (
    <nav className="border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
      <div className="flex items-center lg:px-6 px-8 mx-auto max-w-7xl">
        <div className="flex flex-row items-center">
          <Link href="/">
            <span>
              <svg height="26" viewBox="0 0 75 65" fill="#000">
                <title>{title}</title>
                <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
              </svg>
            </span>
          </Link>
          <ul className="flex items-center content-center">
            <li className="ml-2 text-gray-200">
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
            </li>
            <li className="font-medium" style={{ letterSpacing: ".01px" }}>
              {links.map((link) => (
                <Link
                  key={link}
                  href={`/${link}`}
                  style={{ marginRight: ".5em" }}
                >
                  {link}
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <div className="flex-1 justify-end hidden md:flex">
          <nav className="flex-row inline-flex items-center">
            <span className="ml-2 h-full flex items-center cursor-not-allowed text-accents-5">
              <Button
                variant="ghost"
                Component="a"
                href="https://github.com/vercel/examples/tree/main"
                target="_blank"
                rel="noreferrer"
              >
                More Examples →
              </Button>
            </span>
            <span className="ml-2 h-full flex items-center cursor-not-allowed text-accents-5">
              <DeployButton
                {...deployButton}
                repositoryUrl={repositoryUrl}
                projectName={deployButton?.projectName || path}
                repositoryName={deployButton?.repositoryName || path}
              />
            </span>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export interface LayoutProps extends NavProps {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: LayoutProps) => (
  <div className="mx-auto h-screen flex flex-col">
    <Nav {...props} />

    <div className="flex flex-auto">{children}</div>

    {/* <footer className="py-10 w-full mt-auto border-t flex items-center justify-center bg-accents-1 z-20">
      <span className="text-primary">Created by</span>
      <a
        href="https://vercel.com"
        aria-label="Vercel.com Link"
        target="_blank"
        rel="noreferrer"
        className="text-black"
      >
        <Vercel
          className="inline-block h-6 ml-3 text-primary"
          alt="Vercel.com Logo"
        />
      </a>
    </footer> */}
  </div>
);

export default Object.assign(
  function () {
    return <App />;
  },
  { Layout },
);
