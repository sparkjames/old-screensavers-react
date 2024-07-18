import './control-group-graphic.styles.scss';
import { useContext } from 'react';
import { GraphicTypeContext } from '../../contexts/graphicType.context';

export const ControlGroupGraphic = () => {

	const { graphicType, setGraphicType } = useContext(GraphicTypeContext);

	const graphicTypeOnChange = (e) => {
		// console.log( 'graphicTypeOnChange()');
    // console.log( e.target.value );

    const allowedGraphicTypes = [
      'windows',
      'stars',
    ];

    if ( allowedGraphicTypes.indexOf(e.target.value) >= 0 ){
      setGraphicType( e.target.value );
    }
	};

	return (
		<div className="controls-group controls-group--graphic">
			<h2 className="controls-heading">Graphic</h2>

			<ul className="controls-list">
				<li className="controls-list-item">
					<label htmlFor="graphic-windows"><input type="radio" className="controls-radio controls-radio--graphic" name="graphic" id="graphic-windows" value="windows" defaultChecked={graphicType==='windows'} onChange={graphicTypeOnChange} />Windows</label>
				</li>
				<li className="controls-list-item">
					<label htmlFor="graphic-stars"><input type="radio" className="controls-radio controls-radio--graphic" name="graphic" id="graphic-stars" value="stars" defaultChecked={graphicType==='stars'} onChange={graphicTypeOnChange} />Stars</label>
				</li>
			</ul>
			
		</div>
	);

};

export default ControlGroupGraphic;
