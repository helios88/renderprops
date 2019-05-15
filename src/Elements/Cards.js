import styled from 'styled-components';
import { elevation, transition, colors } from 'Utilities';

export const Card = styled.div`
 background-color: whitesmoke;
 border-radius: 5px;
 padding: 15px;
 color: ${colors.lightGrey}
 ${elevation[2]}
 ${transition({})}
 &:hover {
  ${elevation[5]}
 }
`;
