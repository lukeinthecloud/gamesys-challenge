import styled from 'styled-components/macro'

const backgroundLargeUrl = 'https://www.starspins.com/api/content/offer/campaign/welcome-extra-ten/__assets/images/src/apps/welcome-extra-ten/images/starspins/tile/background/scale-1/bg.jpg';

export const CountDownTimerContainerStyled = styled.div`
	display: flex;
	width: 60%;
	min-height: 20rem;

	background: url(${backgroundLargeUrl}) no-repeat top left;
	background-size: contain;
`;

export const CountDownTimerCashValueContainerStyled = styled.div`
	width: 100%;
    display: flex;
    align-items: center;
`;

export const CountDownTimerCashValueImageStyled = styled.img`
	width: 40%;
	height: auto;
`;

export const CountDownCashValueMessageStyled = styled.div``;

export const CountDownTimerClockContainerStyled = styled.div``;
export const CountDownTimerValueStyled = styled.span``;

export const CountDownTimerButtonContainerStyled = styled.div``;
export const CountDownTimerButtonStyled = styled.button``;