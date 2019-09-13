import React from 'react';
import {
	CardBodyStyled,
	CardContainerStyled,
	CardFooterStyled,
	CardHeaderStyled
}            from './Card.styles';

export default function Card(props) {
	debugger;
	return (
		<CardContainerStyled>
			<CardHeaderStyled>
				{props.header}
			</CardHeaderStyled>

			<CardBodyStyled>
				{props.body}
			</CardBodyStyled>

			<CardFooterStyled>
				{props.footer}
			</CardFooterStyled>
		</CardContainerStyled>
	);
}