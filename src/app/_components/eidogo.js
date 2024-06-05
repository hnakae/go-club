"use client";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const Eidogo = () => {
  return (
    <>
      <Script src="/public/player/js/all.compressed.js" />
      <Head>
        <title>Your Page Title</title>
        {/* Any other meta tags or header elements you need */}
        <link rel="stylesheet" href="public/player/css/player.css" />
      </Head>
      <div>
        <div className="eidogo-player-auto" sgf="public/sgf/file.sgf"></div>
      </div>
    </>
  );
};

export default Eidogo;
