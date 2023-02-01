import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";


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
      <section className="details-layout full">
        {!isMobile && (
          <>

          </>
        )}

        {isMobile && (
          <>


          </>
        )}
      </section>
    );
}
