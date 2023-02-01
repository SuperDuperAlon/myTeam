import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

import { AppHeader } from "../views/app-header";
import { HomeAbilities } from "../views/home/home-abilities";
import { HomeHero } from "../views/home/home-hero";
import { HomeReviews } from "../views/home/home-reviews";
import { AppFooter } from "../views/app-footer";
import { HomeCta } from "../views/home/home-cta";

export function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 687);
  // const [width, setWidth] = useState(window.innerWidth);

  const MOBILE_WIDTH = 687;

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  function updateDimensions() {
    setIsMobile(window.innerWidth < MOBILE_WIDTH);
  }

  //   if (!stay) return console.log('loading');
  //   else
  return (
    <section className="main-layout full">
      {!isMobile && (
        <>
          <AppHeader />
          <HomeHero />
          <HomeAbilities />
          <HomeReviews />
          <HomeCta />
          <AppFooter />
        </>
      )}

      {isMobile && (
        <>
          <AppHeader />
          <HomeHero />
          <HomeAbilities />
          <HomeReviews />
          <AppFooter />
        </>
      )}
    </section>
  );
}
