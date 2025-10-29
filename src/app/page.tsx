import Header from '@/components/layout/header';
import Avatar from '@/components/ui/avatar';
import SectionContent from '@/components/section-content';
import SectionTitle from '@/components/section-title';
import SocialLink from '@/components/ui/social-link';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import SkillBoard from '@/components/skill-board';
import Footer from '@/components/layout/footer';
import ContactRow from '@/components/contact-row';
import FadeInSection from '@/components/motion/fade-in-section';
import InfoComponent from '@/components/info-component';
import ProjectCarousel from '@/components/project-carousel';
import MyInfo from '@/data/me.json';
import { ProfileInfo, SocialPlatform } from '@/types';
import { FaXTwitter } from 'react-icons/fa6';

export default function Home() {
  const info: ProfileInfo = (MyInfo as ProfileInfo) || {};

  const removeHttpsFromSocialLink = (link: string) => {
    return link.replace('https://', '').replace('http://', '');
  };

  const getSocialIcon = (platform: string) => {
    const ICON_SIZE = 30;
    switch (platform as SocialPlatform) {
      case SocialPlatform.YOUTUBE:
        return <FaYoutube size={ICON_SIZE} />;
      case SocialPlatform.FACEBOOK:
        return <FaFacebookF size={ICON_SIZE} />;
      case SocialPlatform.TWITTER:
        return <FaXTwitter size={ICON_SIZE} />;
      case SocialPlatform.INSTAGRAM:
        return <FaInstagram size={ICON_SIZE} />;
      case SocialPlatform.TIKTOK:
        return <FaTiktok size={ICON_SIZE} />;

      default:
        return null;
    }
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
          {/* social link */}
          {info?.socialLinks && (
            <div className="absolute w-full container px-10 md:px-20 bottom-10 left-1/2 -translate-x-1/2 social-link flex gap-6 ">
              {info.socialLinks.map((social) => (
                <SocialLink key={social.platform} href={social.url}>
                  {getSocialIcon(social.platform)}
                </SocialLink>
              ))}
            </div>
          )}
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
