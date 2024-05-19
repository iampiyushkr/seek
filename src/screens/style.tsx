import styled from 'styled-components';
export const CountryName = styled.div`
font-weight:800;
font-size: 18px;
margin-bottom: 12px;
margin-Top:20px
`;
export const TextContainer = styled.p`
margin:0;
margin-left: 24px
`;
export const Ctext = styled.p`
margin:0;
font-weight:300;
font-size: 14px;
margin-top:5px

`;
export const Ctextlight = styled.span`
margin:0;
font-weight:300;
font-size: 14px;
color:grey

`;
export const CountryDetail = styled.div`
width:264px;
height:336px;
 box-shadow: 0px 0px 7px 2px #00000008;
 cursor:pointer;
`;
export const HomeContainer = styled.div`
padding:0px 80px;
background-color:#fafafa;
padding-top:45px;

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
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  gap: 45px;
  background-color: #fafafa;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for large tablets */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for small tablets */
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
  background-color:#ffff;
  box-shadow: 0px 2px 9px 0px #0000000E;
  width: 480px;
 
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
background-color: #ffff;
padding: 18px 24px;
  
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  background-image: none;
`;

export const BackBtn = styled.div`
  width:120px;
  height:40px;
  background: #FFFFFF;
  box-shadow: 0px 0px 7px 0px #0000004B;
  text-align: center;
  display: flex;
  align-items: center;

`;
export const Arrow = styled.p`
margin:0px;
font-size: 30px;
margin-left: 20px;
    margin-bottom: 10px;

`;
export const BackText = styled.p`
margin:0px;
font-size: 16px;
margin-left: 10px;
cursor:pointer;


`;
export const FlagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:80px
`;
export const DetailContainer = styled.div`
width:45%;
margin-top:40px

`;
export const Container = styled.div`
display: flex;
justify-content: space-between;

`;
export const ChiledContainer = styled.div`
width:45%;
`;
export const BoundriesC = styled.div`
display: flex;
margin-top:60px;
`;
export const BoundriesCntryNameC = styled.div`
display: flex;
`;
export const BoundriesCntryName = styled.div`
width:90px;
height:28px;
background: #FFFFFF;
box-shadow: 0px 0px 4px 1px #0000001B;
text-align:center;
margin-left: 10px;
`;

export const BorderText = styled.p`
margin:0px;
margin-top:4px;
font-size: 14px;
color: #111517;


`;

