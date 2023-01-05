import styled from "styled-components";

export const Statlist = styled.ul`
  
  display: flex;
  flex-wrap: wrap;
  
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StatItem = styled.li`
gap: ${p => p.theme.space[3]}px;
`;