"use client";
import React, { useState } from "react";

const About = () => {
  const [title, setTitle] = useState("About Me...");
  const [description, setDescription] = useState("My name is Williams...");

  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      {/**
       * Here contains...
       * personal info
       * professional description
       * who i am
       */}
    </section>
  );
};

export default About;
