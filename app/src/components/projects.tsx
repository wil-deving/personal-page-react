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
  CardHeader,
  Show,
  WrapItem,
  Wrap,
  Box,
} from "@chakra-ui/react";

import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { SiKotlin } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

import React, { useState } from "react";

interface ProjectsProps {
  title: string;
}

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
    <WrapItem>
      <Card maxW="sm">
        <CardHeader>
          <Heading size="md">{name}</Heading>
        </CardHeader>

        <CardBody>
          <Image src={image} alt={name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Text marginTop={3} marginBottom={3}>
              {description}
            </Text>
            <Box>
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  size={"lg"}
                  borderRadius="full"
                  variant="solid"
                  colorScheme={tag.color}
                  margin={1}
                >
                  {tag.name === "Kotlin" ? (
                    <TagLeftIcon boxSize="18px" as={SiKotlin} />
                  ) : null}
                  {tag.name === "Android" ? (
                    <TagLeftIcon boxSize="18px" as={FaAndroid} />
                  ) : null}
                  {tag.name === "Angular" ? (
                    <TagLeftIcon boxSize="18px" as={FaAngular} />
                  ) : null}
                  {tag.name === "Java" ? (
                    <TagLeftIcon boxSize="18px" as={FaJava} />
                  ) : null}
                  {tag.name === "Spring" ? (
                    <TagLeftIcon boxSize="18px" as={SiSpring} />
                  ) : null}
                  {tag.name === "React" ? (
                    <TagLeftIcon boxSize="18px" as={FaReact} />
                  ) : null}
                  {tag.name === "Javascript" ? (
                    <TagLeftIcon boxSize="18px" as={IoLogoJavascript} />
                  ) : null}
                  {tag.name === "PHP" ? (
                    <TagLeftIcon boxSize="18px" as={FaPhp} />
                  ) : null}

                  <TagLabel>{tag.name}</TagLabel>
                </Tag>
              ))}
            </Box>
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
    </WrapItem>
  );
};

const Projects: React.FC<ProjectsProps> = ({ title }) => {
  const projectsMock: Project[] = [
    {
      type: "Frontend",
      image: "/images/py_mi_chat_pdf.png",
      name: "My Bot for PDF's",
      description:
        "Esta es una aplicación Web que permitirá hacerle consultas a un documento PDF en lenguaje humano, obteniendo una respuesta tambien en un lenguaje entendible para las personas.",
      repositoryUrl: "https://github.com/wil-deving/ai-bs-hackaton-demo-ui",
      knowledgeMeasure: 1,
      tags: [
        {
          name: "Angular",
          color: "red",
        },
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
      image: "/images/py_ex_final_sistemas.png",
      name: "App de Inmobiliaria",
      description:
        "Esta es una aplicación web para la gestión de un negocio inmobiliario, dode se pueden registrar bienes en oferta, compras, generar reportes y consultar los bienes disponibles mediante una aplicación Android.",
      repositoryUrl: "https://github.com/wil-deving/frontend-ex-final",
      knowledgeMeasure: 1,
      tags: [
        {
          name: "React",
          color: "blue",
        },
        {
          name: "Javascript",
          color: "yellow",
        },
        {
          name: "Android",
          color: "green",
        },
        {
          name: "PHP",
          color: "blue",
        },
        {
          name: "Java",
          color: "orange",
        },
        {
          name: "Spring",
          color: "orange",
        },
      ],
    },
    /*
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
    */
    {
      type: "Mobile",
      image: "/images/py_mov_app.jpeg",
      name: "My own vocabulary",
      description:
        "Esta es una aplicación móvil Android para incrementar el vocabulario en el idioma inglés, con esta herramienta tu podrás guardar los términos y palabras de este idioma que más utilices y practicarlos.",
      repositoryUrl: "https://github.com/wil-deving/Word-Vault",
      knowledgeMeasure: 1,
      tags: [
        {
          name: "Android",
          color: "green",
        },
        {
          name: "Kotlin",
          color: "orange",
        },
      ],
    },
  ];

  // const [title, setTitle] = useState("Projects");
  // const [description, setDescription] = useState("");
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

  const allProjects = projectsByType("Frontend")
    .concat(projectsByType("Backend"))
    .concat(projectsByType("Mobile"));

  return (
    <section>
      <Show below="sm">
        <Heading marginLeft={2} marginBottom={2} as="h4" size="md">
          {title}
        </Heading>
      </Show>
      <Show above="md">
        <Heading marginLeft={6} marginBottom={4} as="h3" size="lg">
          {title}
        </Heading>
      </Show>
      <Wrap justify="center">{projectsByTypeList(allProjects)}</Wrap>
    </section>
  );
};

export default Projects;
