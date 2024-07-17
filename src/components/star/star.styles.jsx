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

export const StarEl = styled.div.attrs(props => ({
		style: {
			left: props.$left || '0',
			top: props.$top || '0',
			transform: props.$transform || 'translate3d(0px, 0px, 0px)',
			opacity: props.$opacity || '0',
			transition: props.$transition || 'none',
		}
	}))`
	position: absolute;
	left: 0;
	top: 0;

	${ ({$graphictype}) => $graphictype === 'windows' && windowsGraphicStyles }

	${ ({$graphictype}) => $graphictype === 'stars' && starsGraphicStyles }
	
`;
