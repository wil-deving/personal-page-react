"use client";
import { Link } from "@chakra-ui/next-js";
import {
  AbsoluteCenter,
  Box,
  Center,
  HStack,
  Image,
  Show,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface Contact {
  name: string;
  url: string;
  src: string;
}

const Contacts: React.FC = () => {
  const contacts: Contact[] = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/wil_uh_ah94/?hl=es-la",
      src: "/images/instagram_logo.jpg",
    },
    {
      name: "GitHub",
      url: "https://github.com/wil94",
      src: "/images/github_logo.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/williams-gutierrez-chavez-2317a11a8/",
      src: "/images/linkedin_logo.png",
    },
  ];

  return (
    <div>
      <h1>Contactos</h1>
      <Show below="md">
        <Center bg="white" p="4" color="white">
          <VStack>
            {contacts.map((contact, index) => (
              <Link key={index} href={contact.url} isExternal target="_blank">
                <Image
                  borderRadius="full"
                  boxSize="80px"
                  src={contact.src}
                  alt={contact.name}
                />
              </Link>
            ))}
          </VStack>
        </Center>
      </Show>
      <Show above="md">
        <Center bg="white" p="4" color="white">
          <HStack>
            {contacts.map((contact, index) => (
              <Link key={index} href={contact.url} isExternal target="_blank">
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={contact.src}
                  alt={contact.name}
                />
              </Link>
            ))}
          </HStack>
        </Center>
      </Show>
    </div>
  );
};

export default Contacts;
