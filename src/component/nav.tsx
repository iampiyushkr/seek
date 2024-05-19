import React from 'react';
import { ModeText, NavContainer, NavMode, NavText } from './style';
import { useTheme } from '../contextApi/themeContext';

const Nav: React.FC = () => {
    const { toggleTheme, isDarkMode } = useTheme();
    return (
        <NavContainer>
            <NavText>
                Where in the world?
            </NavText>
            <NavMode onClick={() => { toggleTheme() }}>
                <img src={isDarkMode ? "/assets/night-mode.svg" : "/assets/day-mode.svg"} alt="Night Mode" style={{ width: '15px', height: '13px' }} />
                <ModeText>
                    Dark Mode
                </ModeText>
            </NavMode>
        </NavContainer>
    );
}

export default Nav;