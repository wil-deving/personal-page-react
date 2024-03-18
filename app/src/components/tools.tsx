"use client";
import { HStack, VStack, Heading, Center, Show, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { SiVisualstudio } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

interface ToolsProps {
  title: string;
}

interface Tool {
  name: String;
  image: String;
  type: "Frontend" | "Backend" | "Mobile" | "DB";
  knowledgeMeasure: number;
}

interface ToolItemUI {
  name: String;
  image: String;
}

const ToolItem: React.FC<ToolItemUI> = ({ name, image }) => {
  const iconSkill = () => {
    switch (name) {
      case "VS Code":
        return <SiVisualstudio color="#0078d7" size={"60px"} />;
      case "Git":
        return <FaGitAlt color="#f1502f" size={"60px"} />;
      case "Github":
        return <SiGithub color="black" size={"60px"} />;
      case "SQL Server":
        return <DiMsqlServer color="gray" size={"60px"} />;
      // Add more icons
      default:
        return null;
    }
  };

  return (
    <>
      <Heading as="h6" size="sm">
        {name}
      </Heading>
      {iconSkill()}
    </>
  );
};

const Tools: React.FC<ToolsProps> = ({ title }) => {
  const toolsMock: Tool[] = [
    { type: "Frontend", image: "", name: "VS Code", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Git", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Github", knowledgeMeasure: 1 },
    { type: "DB", image: "", name: "SQL Server", knowledgeMeasure: 1 },
  ];

  // const [title, setTitle] = useState("Tools");
  // const [description, setDescription] = useState("");
  const [tools, setTools] = useState<Tool[]>(toolsMock);

  const toolsByTypeList = (filteredList: Tool[]) => {
    return (
      <>
        <Show below="sm">
          <VStack>
            {filteredList.map((tool, index) => (
              <HStack key={index} marginBottom={4}>
                <ToolItem name={tool.name} image={tool.image} />
              </HStack>
            ))}
          </VStack>
        </Show>

        <Show above="md">
          <HStack>
            {filteredList.map((tool, index) => (
              <HStack key={index} marginRight={8} marginLeft={8}>
                <ToolItem name={tool.name} image={tool.image} />
              </HStack>
            ))}
          </HStack>
        </Show>

        {/**
   * 
   * 
   * <VStack>
        {filteredList.map((tool, index) => (
          <HStack key={index}>
            <ToolItem name={tool.name} image={tool.image} />
          </HStack>
        ))}
      </VStack>
   */}
      </>
    );
  };

  const toolsByType = (type: String): Tool[] =>
    tools.filter((tool) => tool.type === type);

  return (
    <section>
      <Show below="sm">
        <Heading marginLeft={2} marginBottom={2} as="h4" size="md">
          {title}
        </Heading>
      </Show>
      <Show above="md">
        <Center bg="white" p="4" color="black">
          <Heading marginLeft={6} marginBottom={4} as="h3" size="lg">
            {title}
          </Heading>
        </Center>
      </Show>
      <Box marginBottom={10}>
        <Center bg="white" p="4" color="black">
          {toolsByTypeList(tools)}
        </Center>
      </Box>
      {/**
   * <Center bg="white" p="4" color="black">
        {toolsByTypeList(tools)}
      </Center>
   */}
    </section>
  );
};

export default Tools;
