"use client";
import {
  Center,
  Stack,
  VStack,
  Text,
  Show,
  Box,
  Hide,
  Heading,
} from "@chakra-ui/react";
import React from "react";

interface FooterProps {
  phoneNumber: string;
  location: string;
  lastUpdateData: string;
  email: string;
}

const Footer: React.FC<FooterProps> = ({
  phoneNumber,
  location,
  lastUpdateData,
  email,
}) => {
  return (
    <footer>
      {/** Mobile View */}
      <Show below="sm">
        <Center bg="#2D4356" p="4" color="#FFF">
          <VStack>
            <Text fontSize="sm">{lastUpdateData}</Text>
            <Text fontSize="sm">{location}</Text>
            {phoneNumber ? <Text fontSize="sm">{phoneNumber}</Text> : null}
            {email ? <Text fontSize="sm">{email}</Text> : null}
          </VStack>
        </Center>
      </Show>

      {/** Desktop View */}
      <Show above="md">
        <Center bg="white" p="16" color="black">
          <VStack>
            <Heading as="h4" size="md">
              {lastUpdateData} | {location}
            </Heading>
            {phoneNumber ? <Text fontSize="lg">{phoneNumber}</Text> : null}
            {email ? <Text fontSize="lg">{email}</Text> : null}
          </VStack>
        </Center>
      </Show>

      {/**
       * 
       *  <div className="container-footer">
        <div className="foot-left">
          <span className="text-body">©2020 Williams Gutierrez</span>
        </div>
        <div className="foot-right">
          <address className="text-body">
            La Paz, Bolivia
            <br />
            Contacto: {phoneNumber}
          </address>
        </div>
      </div>
       */}
    </footer>
  );
};

export default Footer;
