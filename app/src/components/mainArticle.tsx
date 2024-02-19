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

const MainArticle = () => {
  const [wellcomeText, setWellcomeText] = useState(
    "Hola, soy Williams Gutierrez"
  );

  return (
    <article>
      {/** Mobile View */}
      <Show below="sm">
        <Center bg="#0F0F0F" p="4" color="white">
          <VStack>
            <Heading as="h3" size="lg">
              {wellcomeText}
            </Heading>
            <Image
              borderRadius="full"
              boxSize="200px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </VStack>
        </Center>
      </Show>

      {/** Desktop View */}
      <Show above="md">
        <Center bg="#0F0F0F" p="4" color="white">
          <HStack>
            <Heading as="h2" size="xl">
              {wellcomeText}
            </Heading>
            <Image
              borderRadius="full"
              boxSize="300px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </HStack>
        </Center>
      </Show>

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
