import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import VideoTeaser from "../components/VideoTeaser";
import Layout from "../components/Layout"

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <Layout title={`${siteConfig.title}`}>
    <Layout>
      <main>
        <HomepageFeatures />
      </main>
      <VideoTeaser
        logoSrc="/images/square-logo.png"
        title="Generate more leads with social media marketing"
        subtitle="Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida aliquet tortor undo aliquet an egestas in magna egestas sapien quaerat"
        videoSrc="https://www.youtube.com/embed/SZEflIVnhH8"
        imageSrc="/images/dashboard-03.png"
      />
    </Layout>
  );
}
