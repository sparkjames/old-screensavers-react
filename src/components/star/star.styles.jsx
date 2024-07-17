import styled from "styled-components";

export const StarEl = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 86px;
	width: 71px;
	left: ${props => props.$left || '0'};
	top: ${props => props.$top || '0'};
	transform: ${props => props.$transform || 'translate3d(0px, 0px, 0px)'};
	opacity: ${props => props.$opacity || '0'};
	transition: ${props => props.$transition || 'none'};

	path {
		fill: ${props => props.$color || '#f0f'};
	}
`;
