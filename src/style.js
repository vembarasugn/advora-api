
import styled, {css} from "styled-components";

export const Button = styled.button`
  display:inline-block;
  border-radius:3px;
  padding:0.5rem 0;
  margin: 2rem 0.2rem;
  margin-left:4rem;
  width:11rem;
  background:transparent;
  color:grey;
  border:2px solid #59CE8F;
  margin-top:2em;
  text-decoration:none;
  Text-align:center;
  
  &:hover {
    background-color:Transparent;
    ${props => props.primary && css`
    color:white;
    border:1px solid white;
    `}
`;

export const ButtonInside = styled.button`
  display:inline-block;
  border-radius:3px;
  padding:0.5rem 0;
  margin: 2rem 0.2rem;
  margin-left:4rem;
  width:11rem;
  background:transparent;
  color:grey;
  border:2px solid #716F81;
  margin-top:5em;
  text-decoration:none;
  Text-align:center;
  
  &:hover {
    background-color:Transparent;
    ${props => props.primary && css`
    color:white;
    border:1px solid white;
    `}
`;

export const Text = styled.p`
   font-size:2.8em;
   color:grey;
   padding-top:0;
   font-style:10px;
   font-family:monospaced;
   padding:1em;

  @media screen and (max-width:770px){
   justify-content:center;
   align-items:center;
   margin-left:0.4em;
   margin-top:0.2em;
  }
 `;

 export const TextInside = styled.p`
   font-size:3em;
   color:grey;
   font-family:monospaced;
   margin-left:2px;
   text-align: justify;
   padding:1em;

  @media screen and (max-width:770px){
   justify-content:center;
   align-items:center;
   margin-left:0.4em;
   margin-top:0.2em;
  }
 `;
   
 export const SubText = styled.p`
   font-size:1.8em;
   color:grey;
   padding-top:0;
   font-style:10px;
   font-family:monospaced;
   padding:1em;
   margin-left:1.1rem;

  @media screen and (max-width:770px){
   justify-content:center;
   align-items:center;
   margin-left:0.4em;
   margin-top:0.6em;
  }
 `;

export const HeaderText =styled.div`
  background:#E7F6F2;
  justy-content:center;
  color:darkgrey;
  width:100%;
  height:3.2em;
  display:flex;
  align-items:center;
  font-size:1.5em;
`;

export const FooterText =styled.div`
  color:darkgrey;
  font-size:1.2em;
  width:100%;
  background:#E7F6F2;
  height:6em;
  display:flex;
  align-items:center;
  justify-self:center;
`;

