import styled                       from 'styled-components/macro'

export const ParticleContainerStyled = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   z-index: 0;
   & > div {
    width :100%;
    height: 100%;
   }
`;
