"use client";
import { HStack, VStack, Heading, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { SiVisualstudio } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

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
        return <SiVisualstudio color="blue" size={"60px"} />;
      case "Git":
        return <FaGitAlt color="orange" size={"60px"} />;
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

const Tools = () => {
  const toolsMock: Tool[] = [
    { type: "Frontend", image: "", name: "VS Code", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Git", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Github", knowledgeMeasure: 1 },
    { type: "DB", image: "", name: "SQL Server", knowledgeMeasure: 1 },
  ];

  const [title, setTitle] = useState("Tools");
  const [description, setDescription] = useState("");
  const [tools, setTools] = useState<Tool[]>(toolsMock);

  const toolsByTypeList = (filteredList: Tool[]) => {
    return (
      <VStack>
        {filteredList.map((tool, index) => (
          <HStack key={index}>
            <ToolItem name={tool.name} image={tool.image} />
          </HStack>
        ))}
      </VStack>
    );
  };

  const toolsByType = (type: String): Tool[] =>
    tools.filter((tool) => tool.type === type);

  return (
    <section>
      <h4>{title}</h4>
      <Center bg="white" p="4" color="black">
        {toolsByTypeList(tools)}
      </Center>
    </section>
  );
};

export default Tools;
