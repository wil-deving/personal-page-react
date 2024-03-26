"use client";

import { Center, HStack, Heading, Image, Show, VStack } from "@chakra-ui/react";
import React from "react";

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
        <Center bg="#2D4356" p="8" color="white">
          <VStack>
            <Heading as="h3" size="lg">
              ¡Hola!, {greeting}
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
        <Center bg="#2D4356" p="16" color="white">
          <HStack>
            <VStack>
              <Heading as="h2" size="xl" marginRight={12}>
                ¡Hola!
              </Heading>
              <Heading as="h1" size="2xl" marginRight={12}>
                {greeting}
              </Heading>
            </VStack>

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
