import styled from 'styled-components';

export const Container = styled.div`
position: relative;
padding: 10px;
`

export const Title = styled.h2`
text-align:center;
margin-bottom: 10px;
`

export const Button = styled.button`
position: absolute;
right:5px;
bottom:5px;
padding:6px 12px; 
display: flex;
align-items:center;
justify-content:center;


border:none;
border-radius:3px;
cursor: pointer;
transition: background-color 250ms linear;



&:hover{
  background-color:#ccc;
}
`

export const Label = styled.span`
font-weight:bold;
`