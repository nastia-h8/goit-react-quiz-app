import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
width: 400px;
display: flex;
flex-direction:column;
gap: 12px;

`

export const LabelName = styled.span`
display: block;
font-weight: bold;
`

export const Input = styled(Field)`
width: 100%;
padding: 10px; 
`

export const SelectInput = styled(Field)`
width: 100%;
padding: 10px; 
cursor: pointer;
`

export const Button = styled.button`
margin: 0 auto;
  min-width: 120px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #ccc;
  }
`

export const Message = styled(ErrorMessage)`
font-size:14px;

`