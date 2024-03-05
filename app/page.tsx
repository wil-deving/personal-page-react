// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  ButtonGroup,
  Hide,
  Show,
  Text,
  Flex,
  Spacer,
  CardBody,
  Stack,
  Heading,
  Image,
  Card,
  Divider,
  CardFooter,
  Wrap,
  Center,
  WrapItem,
} from "@chakra-ui/react";
import MainArticle from "./src/components/mainArticle";
import About from "./src/components/about";
import Projects from "./src/components/projects";
import Skills from "./src/components/skills";
import SoftSkills from "./src/components/softSkills";
import Tools from "./src/components/tools";
import Contacts from "./src/components/contacts";
import Footer from "./src/components/footer";
import ViewData from "./src/configurations/viewData.json";

export default function Page() {
  const { about, mainArticle, projects, skills, tools, footer } = ViewData;

  return (
    <main>
      <MainArticle greeting={mainArticle.greeting} />
      <p>------------------------------------</p>

      <Contacts />
      <p>------------------------------------</p>

      <About title={about.title} description={about.description} />
      <p>------------------------------------</p>

      <Projects title={projects.title} />
      <p>------------------------------------</p>

      <Skills title={skills.title} />
      <p>------------------------------------</p>

      {/*<SoftSkills />*/}

      <Tools title={tools.title} />
      <p>------------------------------------</p>

      <Footer
        lastUpdateData={footer.lastUpdateData}
        location={footer.location}
        phoneNumber={footer.phone}
        email={footer.email}
      />
    </main>
  );
}
