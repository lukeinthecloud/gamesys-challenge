import styled, { css } from 'styled-components/macro'
import { maxWidthSM }  from '../../styles/media-queries.styles';

const backgroundLargeUrl = 'https://www.starspins.com/api/content/offer/campaign/welcome-extra-ten/__assets/images/src/apps/welcome-extra-ten/images/starspins/tile/background/scale-2/bg.jpg';
const backgroundSmallUrl = 'https://www.starspins.com/api/content/offer/campaign/welcome-extra-ten/__assets/images/src/apps/welcome-extra-ten/images/starspins/tile/background/scale-1/bg.jpg';

const upperZIndex = 10;
const lowerZIndex = 0;



const addUpperIndex = css`
	position: relative;
	z-index: ${upperZIndex};
`;

export const CountDownTimerContainerStyled = styled.div`
	padding: 2rem 0;		
	position: relative;
	display: flex;
	width: 60%;
    height: 30rem;
    justify-content: space-around;
    
	-webkit-box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.35);
	-moz-box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.35);
	box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.35);
	
	&:after {
		content: "";
		background: url(${backgroundLargeUrl}) no-repeat bottom left;
		background-size: cover;
		opacity: .6;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: ${lowerZIndex};
	}
	
	@media(${maxWidthSM}) {
		width: 90%;
    	height: 15rem;
    
		&:after {
			background: url(${backgroundSmallUrl}) no-repeat bottom left;
			background-size: cover;
		}
  	}
`;

export const CountDownTimerCashValueContainerStyled = styled.div`
	${addUpperIndex};
	width: 100%;
    display: flex;
    align-items: center;
`;


export const CountDownTimerCashValueImageStyled = styled.img`
	width: 50%;
	height: auto;
`;

export const CountDownCashValueMessageStyled = styled.span`
	color: var(--white);
	
	font-size: 2vw;
	font-weight: bold;
	margin: .5rem 0 0 0;
`;

export const CountDownTimerClockContainerStyled = styled.div`
	${addUpperIndex};
`;

export const CountDownTimerValueStyled = styled.span`
	color: var(--white);
	
	font-size: 4vw;
	font-weight: bold;
`;

export const CountDownTimerButtonContainerStyled = styled.div`
	${addUpperIndex};
	width: 50%;
`;

export const CountDownTimerLinkStyled = styled.a`
	display: block;
	width: 100%
`;