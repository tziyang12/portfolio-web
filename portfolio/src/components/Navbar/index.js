import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink, ThemeToggleButton, DarkButton } from './NavbarStyledComponent'
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

const Navbar = ({setDarkMode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        {/* button on click change theme */}
        <DarkButton
          onClick={() => setDarkMode(prev => !prev)}
        >
          <svg height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 56 56" xmlSpace="preserve">
          <path style={{ fill:'#A5A5A4' }} d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
            s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"/>
          </svg>
        </DarkButton>
        <ThemeToggleButton
          darkMode={setDarkMode}
          onClick={() => setDarkMode(prev => !prev)}
        >
          <svg class="sun-and-moon" aria-hidden="true" width="100" height="100" viewBox="0 0 24 24">
            <circle class="sun" cx="12" cy="12" r="6"/>
            <g class="sun-beams" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </ThemeToggleButton>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <Span>Tzi</Span>
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