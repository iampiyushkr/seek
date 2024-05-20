import styled from 'styled-components';
export const CountryName = styled.div`
font-weight:800;
font-size: 18px;
margin-bottom: 12px;
margin-Top:20px;
width:90%;
color: ${props => props.theme.colors.text};
`;
export const TextContainer = styled.p`
margin:0;
margin-left: 24px;
`;
export const Ctext = styled.p`
margin:0;
font-weight:600;
font-size: 14px;
margin-top:5px;
color:${props => props.theme.colors.text};
`;

export const CtextD = styled.p`
margin:0;
font-weight:600;
font-size: 16px;
margin-top:5px;
color:${props => props.theme.colors.text};

`;
export const Ctextlight = styled.span`
margin:0;
font-weight:300;
font-size: 14px;
color:${props => props.theme.colors.text};

`;
export const CtextlightD = styled.span`
margin:0;
font-weight:300;
font-size: 16px;
color:${props => props.theme.colors.text};

`;
export const CountryDetail = styled.div`
width:264px;
height:336px;
 box-shadow: 0px 0px 7px 2px #00000008;
 cursor:pointer;
 background-color: ${props => props.theme.colors.whiteBackground};
 border-radius: 6px;
 transition: transform 0.5s ease-in-out;
 &:hover {
    transform: scale(1.1);
    background-color: ${props => props.theme.colors.whiteBackground};
}

`;
export const HomeContainer = styled.div`
padding:45px 80px;
background-color: ${props => props.theme.colors.lWhiteBackground};


@media (max-width: 900px) {
    padding:0px 18px;
    padding-top:40px;   
  }

  @media (max-width: 600px) {
    padding:0px 18px;
    padding-top:40px; 
  }

`;
export const CountryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;
  background-color: ${props => props.theme.colors.lWhiteBackground};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    display: flex;
        flex-direction: column;
    align-items: center
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:45px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column    
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column  
  }
`;
export const InputBoxContainer = styled.div`
  display: flex;
  align-items: center;
  background-color:${props => props.theme.colors.whiteBackground};
  box-shadow: 0px 2px 9px 0px #0000000E;
  width: 480px;
  border-radius: 6px;
  @media (max-width: 900px) {
    width: 343px; 
  }

  @media (max-width: 600px) {
    width: 343px;   
  }
`;
export const InputBox = styled.input`
border: none;
outline: none;
margin-left: 15px;
height: 56px;
background-color:${props => props.theme.colors.whiteBackground};
color: ${props => props.theme.colors.text};
border-radius: 6px;
  
&::placeholder {
  color: ${props => props.theme.colors.text};
}

`;
export const SelectBox = styled.select`



`;
export const StyledSelectContainer = styled.div`
  display: inline-block;
  width: 200px;
  @media (max-width: 900px) {
    margin-top: 40px  
  }

  @media (max-width: 600px) {
    margin-top: 40px  
  }
`;

export const StyledSelect = styled.select`
border: none;
outline: none;
height: 56px;
width: 200px;
box-shadow: 0px 2px 9px 0px #0000000E;
background-color: ${props => props.theme.colors.whiteBackground};
color: ${props => props.theme.colors.text};
border-radius: 6px;
padding: 18px 24px;
  
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  background-image: none;
`;

export const BackBtn = styled.div`
  width:120px;
  height:40px;
  background: ${props => props.theme.colors.whiteBackground};
  box-shadow: 0px 0px 7px 0px #0000004B;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 6px;
  cursor:pointer;
  transition: transform 0.5s ease-in-out;
 &:hover {
    transform: scale(1.1);
 }

`;
export const HeaderText = styled.h1`
    color:${props => props.theme.colors.text};

`;
export const Arrow = styled.p`
margin:0px;
font-size: 30px;
margin-left: 20px;
    margin-bottom: 10px;
    color:${props => props.theme.colors.text};

`;
export const BackText = styled.p`
margin:0px;
font-size: 16px;
margin-left: 5px;
color:${props => props.theme.colors.text};


`;
export const FlagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:40px;
  @media (max-width: 600px) {
   flex-direction:column; 
  }
`;
export const FlagImg = styled.img`
width: 48%;
border-radius: 8px;

@media (max-width: 600px) {
    width:100%;
    height:auto
  }

`;
export const DetailContainer = styled.div`
width:45%;
margin-top:40px;
@media (max-width: 600px) {
    width:100%;
  }

`;
export const Container = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 600px) {
    flex-direction:column;
  }

`;
export const ChiledContainer = styled.div`
width:45%;
@media (max-width: 600px) {
    width:100%;
  }
`;
export const ChiledContainer2 = styled.div`
width:45%;
@media (max-width: 600px) {
    width:100%;
    margin-top:30px;
  }
`;
export const BoundriesC = styled.div`
display: flex;
margin-top:60px;
@media (max-width: 600px) {
    flex-direction:column;
  }
`;
export const BoundriesCntryNameC = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
margin-left: 10px;
@media (max-width: 600px) {
    margin-left: 0px;
  }


`;
export const BoundriesCntryName = styled.div`
width:90px;
padding-top: 2px;
padding-bottom: 5px;
background: ${props => props.theme.colors.whiteBackground};
box-shadow: 0px 0px 4px 1px #0000001B;
text-align:center;
display: flex;
align-items: center;
justify-content: center;
cursor:pointer;
transition: transform 0.5s ease-in-out;
 &:hover {
    transform: scale(1.1);
 }
@media (max-width: 600px) {
    margin: 15px 0px 10px 0px
  }
`;

export const BorderText = styled.p`
margin:0px;
margin-top:4px;
font-size: 14px;
color: ${props => props.theme.colors.text};
@media (max-width: 600px) {
    font-size: 12px;
  }

`;
export const HomeFlag = styled.img`
width: 100%; 
height: 160px;
border-top-left-radius: 6px;
border-top-right-radius: 6px;

`;
export const LoaderC = styled.div`
display: flex; 
justify-content: center;
 align-items: center; 
 height: 50vh;

`;
export const LoaderB = styled.div`
display: flex; 
justify-content: center;
 align-items: center; 
 height: 30px;

`;
export const ErrorDiv = styled.div`
 height: 70vh;
 display: flex;
 align-items: center;
 justify-content: center;
 color:${props => props.theme.colors.text};

`;

