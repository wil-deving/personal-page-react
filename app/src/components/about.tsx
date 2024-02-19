"use client";
import React, { useState } from "react";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  Text,
  CardHeader,
  Show,
} from "@chakra-ui/react";

interface AboutProps {
  title: String;
  description: String;
}

const About: React.FC<AboutProps> = ({ title, description }) => {
  //const [title, setTitle] = useState("About Me...");
  //const [description, setDescription] = useState("My name is Williams...");

  return (
    <section>
      <Show below="sm">
        <Heading marginLeft={2} marginBottom={2} as="h4" size="md">
          {title}
        </Heading>
        <Text fontSize="md" marginLeft={4} marginRight={4} marginBottom={2}>
          {description}
        </Text>
      </Show>
      <Show above="md">
        <Heading marginLeft={6} marginBottom={4} as="h3" size="lg">
          {title}
        </Heading>
        <Text fontSize="lg" marginLeft={12} marginRight={12} marginBottom={4}>
          {description}
        </Text>
      </Show>

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
