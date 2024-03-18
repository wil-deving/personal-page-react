"use client";

import React, { useState } from "react";
import {
  AbsoluteCenter,
  Box,
  Center,
  HStack,
  Heading,
  Hide,
  Image,
  Show,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";

interface MainArticleProps {
  greeting: string;
}

const MainArticle: React.FC<MainArticleProps> = ({ greeting }) => {
  // const [wellcomeText, setWellcomeText] = useState("");

  /**
   * Here contains...
   * personal photo
   * greeting
   * profile description
   */

  return (
    <article>
      {/** Mobile View */}
      <Show below="sm">
        <Center bg="#0F0F0F" p="4" color="white">
          <VStack>
            <Heading as="h3" size="lg">
              {greeting}
            </Heading>
            <Image
              borderRadius="full"
              boxSize="200px"
              src="/images/profile_01.jpg"
              alt="Personal image"
            />
          </VStack>
        </Center>
      </Show>

      {/** Desktop View */}
      <Show above="md">
        <Center bg="#0F0F0F" p="4" color="white">
          <HStack>
            <Heading as="h2" size="xl">
              {greeting}
            </Heading>
            <Image
              borderRadius="full"
              boxSize="300px"
              src="/images/profile_01.jpg"
              alt="Personal image"
            />
          </HStack>
        </Center>
      </Show>
    </article>
  );
};

export default MainArticle;
