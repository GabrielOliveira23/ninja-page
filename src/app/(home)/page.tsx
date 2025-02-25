import AboutMe from './about-me'
import Contact from './contact'
import DescriptionHero from './description-hero'
import MyExperiences from './my-experiences'
import MyProjects from './my-projects'
import MySkills from './my-skills'

export default function Home() {
  return (
    <div className="flex flex-col">
      <section>
        <DescriptionHero />
      </section>
      <section className="bg-gray-50">
        <AboutMe />
      </section>
      <section>
        <MySkills />
      </section>
      <section className="bg-gray-50">
        <MyExperiences />
      </section>
      <section>
        <MyProjects />
      </section>
      <section className="bg-gray-50">
        <Contact />
      </section>
    </div>
  )
}
