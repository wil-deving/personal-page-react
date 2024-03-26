// app/page.tsx
"use client";
import About from "./src/components/about";
import Contacts from "./src/components/contacts";
import Footer from "./src/components/footer";
import MainArticle from "./src/components/mainArticle";
import Projects from "./src/components/projects";
import Skills from "./src/components/skills";
import Tools from "./src/components/tools";
import ViewData from "./src/configurations/viewData.json";

export default function Page() {
  const { about, mainArticle, projects, skills, tools, footer } = ViewData;

  return (
    <main>
      <MainArticle greeting={mainArticle.greeting} />
      {/**<p>------------------------------------</p>**/}

      <Contacts />
      {/**<p>------------------------------------</p>**/}

      <About title={about.title} description={about.description} />
      {/**<p>------------------------------------</p>**/}

      <Projects title={projects.title} />
      {/**<p>------------------------------------</p>**/}

      <Skills title={skills.title} />
      {/**<p>------------------------------------</p>**/}

      {/*<SoftSkills />*/}

      <Tools title={tools.title} />
      {/**<p>------------------------------------</p>**/}

      <Footer
        lastUpdateData={footer.lastUpdateData}
        location={footer.location}
        phoneNumber={footer.phone}
        email={footer.email}
      />
    </main>
  );
}
