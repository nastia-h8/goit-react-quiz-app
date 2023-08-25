import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content: center;
  gap:20px;
`

export const Item = styled.li`
  /* flex-basis: calc((100% - 2*40px)/3); */
  width: 240px;
  border: 1px solid #cecece;
 box-shadow: 0;
 transition: box-shadow 250ms linear;
 cursor: pointer;

&:hover{
  box-shadow:0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
            1px 4px 6px rgba(0, 0, 0, 0.16);

}
`