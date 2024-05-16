"use client";
import React from "react";

import { Box, Heading, Show, Text } from "@chakra-ui/react";

interface AboutProps {
  title: String;
  description: Array<String>;
}

const About: React.FC<AboutProps> = ({ title, description }) => {
  //const [title, setTitle] = useState("About Me...");
  //const [description, setDescription] = useState("My name is Williams...");

  return (
    <section>
      <Show below="sm">
        <Box marginBottom={8}>
          <Heading marginLeft={2} marginBottom={2} as="h4" size="md">
            {title}
          </Heading>
          {description.map((item, index) => {
            return (
              <Text
                key={index}
                fontSize="md"
                marginLeft={4}
                marginRight={4}
                marginBottom={4}
              >
                {item}
              </Text>
            );
          })}
        </Box>
      </Show>
      <Show above="md">
        <Box marginBottom={8}>
          <Heading marginLeft={6} marginBottom={4} as="h3" size="lg">
            {title}
          </Heading>
          {description.map((item, index) => {
            return (
              <Text
                key={index}
                fontSize="lg"
                marginLeft={20}
                marginRight={20}
                marginBottom={4}
              >
                {item}
              </Text>
            );
          })}
        </Box>
      </Show>
    </section>
  );
};

export default About;
