import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = targetElement.offsetTop - 70; // Adjusted offset
      window.scrollTo({
        top: offset,
        behavior: "smooth" // Optional: Add smooth scrolling effect
      });
    } else {
      console.error("Target element not found.");
    }
  }

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
            <NavLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("about"); }}>About</NavLink>
            <NavLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("skills"); }}>Skills</NavLink>
            {/* Add when have work */}
            {/* <NavLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("experience"); }}>Experience</NavLink> */}
            <NavLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("projects"); }}>Projects</NavLink>
            <NavLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("education"); }}>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("about"); }}>About</MobileLink>
            <MobileLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("skills"); }}>Skills</MobileLink>
            {/* Add when have work */}
            {/* <MobileLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("experience"); }}>Experience</MobileLink> */}
            <MobileLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("projects"); }}>Projects</MobileLink>
            <MobileLink href="#" onClick={(e) => { e.preventDefault(); scrollToTarget("education"); }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar