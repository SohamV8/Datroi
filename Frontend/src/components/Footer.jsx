import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* First Section */}
        <FooterSection>
          <LogoContainer>
            <img src={logo} alt="Logo" className="w-[100px] h-auto mb-4" />
          </LogoContainer>
          <h2 className="text-lg md:text-2xl font-medium max-w-2xl font-mono">
            Dedicated to more than just providing a service, we are passionate
            about creating a world of hope, opportunity, and togetherness.
          </h2>
        </FooterSection>

        {/* Links Section */}
        <LinksGrid>
          {[
            {
              title: "Quick Links",
              links: [
                { name: "Courses", href: "/courses" },
                { name: "Combo", href: "/combo" },
                { name: "Gems", href: "/gems" },
                { name: "Books", href: "/books" },
                { name: "Blogs", href: "/blogs" },
              ],
            },
            {
              title: "Helpful Links",
              links: [
                { name: "FAQs", href: "/faqs" },
                { name: "Support", href: "/support" },
                { name: "Live Chat", href: "/chat" },
              ],
            },
            {
              title: "Contact Us",
              links: [
                {
                  name: "Datroi@gmail.com",
                  href: "mailto:astropathshala@gmail.com",
                },
                { name: "+91 98711 30487", href: "tel:+919871130487" },
                {
                  name: "Your Address",
                  href: "https://www.google.com/maps/place/Astro+Pathshala/@28.472658,77.0530522,20z/data=!4m15!1m8!3m7!1s0x390d19ad14b1b05b:0xca3d12601e767509!2s6-C,+Block+C,+Old+DLF+Colony,+Sector+14,+Gurugram,+Haryana+122001!3b1!8m2!3d28.4710506!4d77.0464033!16s%2Fg%2F11fncsktm_!3m5!1s0x390d198fa3f1b1e7:0x6c50eccf3e518447!8m2!3d28.4728116!4d77.0530025!16s%2Fg%2F11rwqpj_t4?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
                },
              ],
            },
          ].map((section, idx) => (
            <LinkSection key={idx}>
              <p>{section.title}</p>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-links">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </LinkSection>
          ))}
        </LinksGrid>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: #fbfbe2;
  padding: 60px 15px;
  color: #3d3d3b;
  z-index: 1000;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const LinkSection = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  p {
    font-weight: bold;
    color: #767522;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 8px 0;

      a {
        text-decoration: none;
        color: #3d3d3b;
        transition: color 0.3s, transform 0.2s;

        &:hover {
          color: #3586ff;
          transform: translateY(-2px);
        }
      }
    }
  }
`;