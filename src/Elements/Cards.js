import styled from 'styled-components';
import { elevation, transition } from 'Utilities';

export const Card = styled.div`
 background-color: whitesmoke;
 border-radius: 5px;
 padding: 15px;
 ${elevation[2]}
 ${transition({})}
 &:hover {
  ${elevation[5]}
 }
`;
