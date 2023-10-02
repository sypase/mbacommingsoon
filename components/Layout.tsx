import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Discover the ultimate freelancing and P2P payment solution with My Business App (MBA). Connect with freelancers, post jobs, and securely transact—all in one place. Take your freelancing journey to the next level today!"
      />
      <meta property="og:title" content={`${title} | Themeptation`} />
      <meta
        property="og:description"
        content="Discover the ultimate freelancing and P2P payment solution with My Business App (MBA). Connect with freelancers, post jobs, and securely transact—all in one place. Take your freelancing journey to the next level today!"
      />
      <meta property="og:url" content="https://mybusiness.app/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
