"use client";
import { Center, Stack, VStack, Text, Show, Box, Hide } from "@chakra-ui/react";
import React from "react";

interface FooterProps {
  phoneNumber: string;
  location: string;
  lastUpdateData: string;
}

const Footer: React.FC<FooterProps> = ({
  phoneNumber,
  location,
  lastUpdateData,
}) => {
  return (
    <footer>
      {/** Mobile View */}
      <Show below="md">
        <Center bg="#0F0F0F" p="4" color="#FFF">
          <VStack>
            <Text fontSize="sm">{lastUpdateData}</Text>
            <Text fontSize="sm">{location}</Text>
            <Text fontSize="sm">{phoneNumber}</Text>
          </VStack>
        </Center>
      </Show>

      {/** Desktop View */}
      <Show above="sm">
        <Center bg="white" p="4" color="black">
          <VStack>
            <Text fontSize="lg">
              {lastUpdateData} | {location}
            </Text>
            <Text fontSize="lg">{phoneNumber}</Text>
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
