"use client";

import React, { useState } from "react";

const MainArticle = () => {
  const [wellcomeText, setWellcomeText] = useState("Hello, I am Will");

  return (
    <article>
      <h1>{wellcomeText}</h1>
      {/**
       * Here contains...
       * personal photo
       * greeting
       * profile description
       */}
    </article>
  );
};

export default MainArticle;
