import Header from '@/components/layout/header';
import Avatar from '@/components/ui/avatar';
import SectionContent from '@/components/section-content';
import SectionTitle from '@/components/section-title';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import SkillBoard from '@/components/skill-board';
import Footer from '@/components/layout/footer';

// Utility function to remove 'https://' from social media links for display
const removeHttpsFromSocialLink = (url: string): string => {
  if (!url) return '';
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '');
};

import ContactRow from '@/components/contact-row';
import FadeInSection from '@/components/motion/fade-in-section';
import InfoComponent from '@/components/info-component';
import ProjectCarousel from '@/components/project-carousel';
import MyInfo from '@/data/me.json';
import { ProfileInfo } from '@/types';
import { FiDownload, FiMail } from 'react-icons/fi';

export default function Home() {
  const info: ProfileInfo = (MyInfo as ProfileInfo) || {};

  const handleDownloadCV = () => {
    // Replace with your actual CV URL or file path
    const cvUrl = '/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'BRYTON_KILONZO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
  
    window.location.href = 'mailto:brytonkilonzo@gmail.com';
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main className="min-h-screen">
        <section
          id="home"
          className="w-full h-screen bg-[url(/images/background-mobile.jpg)] lg:bg-[url(/images/background-pc.jpg)] bg-fixed bg-no-repeat bg-cover bg-center relative"
        >
          {/* info */}
          <div className="container px-10 md:px-20 mx-auto h-full flex items-center justify-start z-10 ">
            <InfoComponent lastName={info.lastName} firstName={info.firstName} role={info.role} />
          </div>
          {/* Social Links */}
          <div className="absolute w-full container px-10 md:px-20 bottom-28 left-1/2 -translate-x-1/2 flex justify-center gap-6">
            <a 
              href="https://github.com/bryton90" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/bryton-kilonzo-983171170" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
          
          {/* Action Buttons */}
          <div className="absolute w-full container px-10 md:px-20 bottom-10 left-1/2 -translate-x-1/2 flex gap-6 justify-center">
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FiDownload size={20} />
              <span>Download CV</span>
            </button>
            <button
              onClick={handleHireMe}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <FiMail size={20} />
              <span>Hire Me</span>
            </button>
          </div>
        </section>

        {/* about me */}
        <section id="about" className="h-[820px] bg-black px-10 md:px-20">
          <SectionContent className="flex-wrap justify-center items-center">
            <div className="mt-20 lg:mt-0 w-full lg:w-1/2 h-fit flex justify-center">
              <FadeInSection>
                <Avatar src={info.avatar} />
              </FadeInSection>
            </div>
            <div className="w-full lg:w-1/2">
              <FadeInSection>
                <SectionTitle>About me</SectionTitle>
              </FadeInSection>
              <FadeInSection>
                <p className=" text-white leading-relaxed">{info.description}</p>
              </FadeInSection>
            </div>
          </SectionContent>
        </section>

        {/* skill */}
        <section id="skills" className="h-[800px] bg-black px-10 md:px-20 py-20">
          <SectionContent className="flex-col justify-center">
            <FadeInSection>
              <SectionTitle>My skills</SectionTitle>
            </FadeInSection>
            <SkillBoard amountYear={info.experienceNum} skills={info.skills} />
          </SectionContent>
        </section>

        {/* project */}
        <section id="project" className="h-[800px] bg-black px-10 md:px-20">
          <SectionContent className="h-full  flex-col justify-center">
            <FadeInSection>
              <SectionTitle>Project</SectionTitle>
            </FadeInSection>
            <FadeInSection>
              <div className="w-full h-96 flex overflow-auto gap-6">
                <ProjectCarousel data={info.projects} />
              </div>
            </FadeInSection>
          </SectionContent>
        </section>
        {/* show your contact here */}
        {info?.contact && (
          <section id="contact" className="h-[900px] bg-black px-10 md:px-20 py-20">
            <SectionContent className="flex-col justify-center gap-2 ">
              <SectionTitle>Contact me</SectionTitle>
              <ContactRow title="Phone" content={info.contact.phone} />
              <ContactRow title="Email" content={info.contact.email} href={`mailto:${info.contact.email}`} />
              <ContactRow title="LinkedIn" content={removeHttpsFromSocialLink(info.contact.linkedin)} href={info.contact.linkedin} />
              <ContactRow title="Github" content={removeHttpsFromSocialLink(info.contact.github)} href={info.contact.github} />
            </SectionContent>
          </section>
        )}
      </main>

      {/* footer */}
      <Footer username="Bryton Kilonzo" />
    </div>
  );
}
