import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import VideoTeaser from "../components/VideoTeaser";
import Layout from "../components/Layout";
import ButtonsBanner from "../components/ButtonsBanner";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const titleParts = [
    { text: "Generate " },
    { text: "more leads", color: "theme" },
    { text: " with social media marketing" },
  ];
  const subtitleParts = [
    {
      text: "Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida ",
    },
    { text: "aliquet tortor undo aliquet an egestas", color: "black" },
    { text: " in magna egestas sapien quaerat" },
  ];
  return (
    <Layout>
      <main>
        <HomepageFeatures />
      </main>
      <VideoTeaser
        titleParts={titleParts}
        subtitleParts={subtitleParts}
        videoSrc="https://www.youtube.com/embed/SZEflIVnhH8"
        imageSrc="/images/testGif.gif"
      />
      <ButtonsBanner
        firstButtonUrl="#"
        firstButton="Get started"
        secondButtonUrl="#"
        secondButton="Download"
        subtitle="Available for Linux, Windows and MacOS"      
      />
    </Layout>
  );
}
