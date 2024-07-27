import styled, { css, keyframes } from "styled-components";

const windowsGraphicStyles = css`
	height: 86px;
	width: 71px;

	path {
		fill: ${props => props.$starStyles.fill || '#f0f'};
	}
`;

const starsGraphicStyles = css`
	background-color: white;
	height: 3px;
	width: 3px;

	svg {
		display: none;
		visibility: hidden;
	}
`;

const moveStarAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(0px, 0px, 0px);
	}
	50% {
		opacity: 1;
	}
	100% {
		transform: translate3d(0px, 0px, 16in);
	}
`;

export const StarEl = styled.div.attrs(props => ({
	style: {
		left: props.$starStyles.left || '0px',
		top: props.$starStyles.top || '0px',
		animationDuration: props.$starStyles.animationDuration ? `${props.$starStyles.animationDuration}s` : '30s',
		animationDelay: props.$starStyles.animationDelay ? `${props.$starStyles.animationDelay}ms` : '1000ms',
	},
}))`
	position: absolute;
	opacity: 0;
	animation-fill-mode: initial;
	animation-iteration-count: 1;
	animation-name: ${moveStarAnimation};
	animation-play-state: running;
	animation-timing-function: linear;


	${ ({$graphictype}) => $graphictype === 'windows' && windowsGraphicStyles }

	${ ({$graphictype}) => $graphictype === 'stars' && starsGraphicStyles }

`;
