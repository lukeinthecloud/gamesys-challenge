import styled, { css }                        from 'styled-components/macro'
import { maxWidthSM, maxWidthMD, maxWidthXS } from '../../styles/media-queries.styles';

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
	
	@media(${maxWidthMD}) {
		width: 80%;
    	height: 15rem;
  	}
  	
  	@media(${maxWidthSM}) {
		width: 90%;
    	height: 15rem;
		&:after {
			background: url(${backgroundSmallUrl}) no-repeat bottom left;
			background-size: cover;
		}
  	}
  	
  	@media(${maxWidthXS}) {
		width: 100%;
    	height: 100vh;
        justify-content: center;
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
	
	@media(${maxWidthXS}) {
		width: 100%;
  	}
`;

export const CountDownCashValueMessageStyled = styled.span`
	color: var(--white);
	
	font-size: 2vw;
	font-weight: bold;
	margin: .5rem 0 0 0;
	
	@media(${maxWidthXS}) {
		font-size: 2rem;
  	}
`;

export const CountDownTimerClockContainerStyled = styled.div`
	${addUpperIndex};
	
	@media(${maxWidthXS}) {
		margin-top: 2rem;
  	}
`;

export const CountDownTimerValueStyled = styled.span`
	color: var(--white);
	
	font-size: 4vw;
	font-weight: bold;
	
	@media(${maxWidthXS}) {
		font-size: 3rem; 
  	}
`;

export const CountDownTimerLinkContainerStyled = styled.div`
	${addUpperIndex};
	width: 50%;
	
	@media(${maxWidthMD}) {
		margin-top: .5rem;
  	}
  	
  	@media(${maxWidthSM}) {
		width: 90%;
		margin-top: 2rem;
  	}
`;

export const CountDownTimerLinkStyled = styled.a`
	display: block;
	width: 100%
`;