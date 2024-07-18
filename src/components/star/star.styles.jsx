import styled, { css, keyframes } from "styled-components";

const windowsGraphicStyles = css`
	height: 86px;
	width: 71px;

	path {
		fill: ${props => props.$color || '#f0f'};
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

const enableMoveStarAnimation = css`
	animation-name: ${moveStarAnimation};
`;

export const StarEl = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0;
	animation-timing-function: linear;
	animation-duration: 10s;
	animation-delay: 1s;
	animation-fill-mode: revert-layer;
	animation-iteration-count: 1;
	animation-play-state: running;

	${ ({$runAnimation}) => $runAnimation && enableMoveStarAnimation }

	${ ({$graphictype}) => $graphictype === 'windows' && windowsGraphicStyles }

	${ ({$graphictype}) => $graphictype === 'stars' && starsGraphicStyles }

`;
