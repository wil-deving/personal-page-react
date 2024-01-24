// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, ButtonGroup } from "@chakra-ui/react";
import MainArticle from "./src/components/mainArticle";
import About from "./src/components/about";
import Projects from "./src/components/projects";
import Skills from "./src/components/skills";
import SoftSkills from "./src/components/softSkills";
import Tools from "./src/components/tools";
import Contacts from "./src/components/contacts";
import Footer from "./src/components/footer";

export default function Page() {
  return (
    <main>
      <MainArticle />
      <p>------------------------------------</p>
      <Contacts />
      <p>------------------------------------</p>
      <About />
      <p>------------------------------------</p>
      <Projects />
      <p>------------------------------------</p>
      <Skills />
      <p>------------------------------------</p>
      {/*<SoftSkills />*/}
      <Tools />
      <p>------------------------------------</p>
      <Footer phoneNumber="76527336" />

      {/**
 * Chakra ui components
 * <Button colorScheme="blue">Button DEV</Button>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
 */}
    </main>
  );
}
