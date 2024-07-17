import styled, { css } from "styled-components";

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

export const StarEl = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	left: ${props => props.$left || '0'};
	top: ${props => props.$top || '0'};
	transform: ${props => props.$transform || 'translate3d(0px, 0px, 0px)'};
	opacity: ${props => props.$opacity || '0'};
	transition: ${props => props.$transition || 'none'};

	${ ({$graphictype}) => $graphictype === 'windows' && windowsGraphicStyles }

	${ ({$graphictype}) => $graphictype === 'stars' && starsGraphicStyles }
	
`;
