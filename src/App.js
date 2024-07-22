import './App.scss';

import { Starpoint } from './components/starpoint/starpoint.component';
import { Controls } from './components/controls/controls.component';

function App() {

  return (
    <div className="the-void">

      <Starpoint></Starpoint>

      <Controls></Controls>

	</div>
  );
}

export default App;
