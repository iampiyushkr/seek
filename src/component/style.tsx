import styled from 'styled-components';
export const NavContainer = styled.div`
  padding: 24px 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.colors.whiteBackground};
  @media (max-width: 600px) {
    padding: 30px 16px;
  }
`;
export const NavText = styled.p`
margin:0;
  font-weight:800;
  font-size: 24px;
  color:${props => props.theme.colors.text};
  @media (max-width: 600px) {
    font-size: 14px;
  }

`;
export const NavMode = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.whiteBackground};
  cursor: pointer;
`;
export const ModeText = styled.p`
margin:0;
    font-weight:600;
    font-size:16px;
    margin-left:8px;
    color:${props => props.theme.colors.text};
`
