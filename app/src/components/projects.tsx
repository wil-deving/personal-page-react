"use client";
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
} from "@chakra-ui/react";

import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { SiKotlin } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

import React, { useState } from "react";

interface Project {
  name: string;
  description: string;
  repositoryUrl: string;
  image: string;
  type: "Frontend" | "Backend" | "Mobile";
  knowledgeMeasure: number;
  tags: Array<Tag>;
}

interface Tag {
  name: string;
  color: string;
}

interface ProjectItemProp {
  name: string;
  image: string;
  description: string;
  repositoryUrl: string;
  tags: Array<Tag>;
}

const openUrl = (targetUrl: string) => {
  //console.log("DEV", targetUrl);
  window.open(targetUrl, "_blank");
};

const ProjectItem: React.FC<ProjectItemProp> = ({
  name,
  image,
  description,
  repositoryUrl,
  tags,
}) => {
  return (
    <Card maxW="sm">
      <Heading size="md">{name}</Heading>

      <CardBody>
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Text>{description}</Text>
          <HStack spacing={4}>
            {tags.map((tag, index) => (
              <Tag
                key={index}
                size={"lg"}
                borderRadius="full"
                variant="solid"
                colorScheme={tag.color}
              >
                {tag.name === "Kotlin" ? (
                  <TagLeftIcon boxSize="18px" as={SiKotlin} />
                ) : null}
                {tag.name === "Android" ? (
                  <TagLeftIcon boxSize="18px" as={FaAndroid} />
                ) : null}

                <TagLabel>{tag.name}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup variant="outline" spacing="6">
          <Button onClick={() => openUrl(repositoryUrl)}>
            {/** Add redirect ro repo */}
            <DiGithubBadge />
            Repositorio
          </Button>
        </ButtonGroup>

        {/**
               * <Button
                leftIcon={<EmailIcon />}
                colorScheme="teal"
                variant="solid"
              >
                Email
              </Button>
               * 
 * <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
 */}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projectsMock: Project[] = [
    {
      type: "Mobile",
      image: "/images/mov_app.jpeg",
      name: "My own vocabulary",
      description: "This is an app to learn english",
      repositoryUrl: "www.facebook.com",
      knowledgeMeasure: 1,
      tags: [
        {
          name: "Kotlin",
          color: "orange",
        },
        {
          name: "Android",
          color: "green",
        },
      ],
    },
    {
      type: "Backend",
      image: "/images/mov_app.jpeg",
      name: "API",
      description: "Api desc",
      repositoryUrl: "www.facebook.com",
      knowledgeMeasure: 1,
      tags: [
        {
          name: "Java",
          color: "orange",
        },
        {
          name: "Spring",
          color: "green",
        },
      ],
    },
    {
      type: "Frontend",
      image: "/images/mov_app.jpeg",
      name: "React py",
      description: "Front UI",
      repositoryUrl: "https://github.com/wil-deving/dev-tools-api",
      knowledgeMeasure: 1,
      tags: [
        {
          name: "Typescript",
          color: "blue",
        },
        {
          name: "Javascript",
          color: "yellow",
        },
      ],
    },
  ];

  const [title, setTitle] = useState("Projects");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState<Project[]>(projectsMock);

  const projectsByTypeList = (filteredList: Project[]) =>
    filteredList.map((project, index) => (
      <ProjectItem
        key={index}
        name={project.name}
        image={project.image}
        description={project.description}
        repositoryUrl={project.repositoryUrl}
        tags={project.tags}
      />
    ));

  const projectsByType = (type: String): Project[] =>
    projects.filter((project) => project.type === type);

  return (
    <section>
      <h4>{title}</h4>
      <Center bg="white" p="4" color="white">
        {projectsByTypeList(projectsByType("Mobile"))}
      </Center>
    </section>
  );
};

export default Projects;
