import React from 'react';
import { ModeText, NavContainer, NavMode, NavText } from './style';

// Define the component as a functional component using React.FC type
const Nav: React.FC = () => {
    return (
        <NavContainer>
            <NavText>
                Where in the world?
            </NavText>
            <NavMode>
                <img src="/assets/night-mode (1).svg" alt="Night Mode" style={{ width: '15px', height: '13px' }} />
                <ModeText>
                    Dark Mode
                </ModeText>
            </NavMode>
        </NavContainer>
    );
}

export default Nav;