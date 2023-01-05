import styled from 'styled-components';

export const Btn = styled.button`
  gap: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white}
}
`;
