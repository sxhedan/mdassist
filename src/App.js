import './App.css';
import SplitPane from 'react-split-pane';
import Editor from './editor.js';

function App() {
  return (
    <div className="App">
      <SplitPane split="vertical" defaultSize="50%">
        <div className="editor-pane">
          <Editor />
        </div>
        <div className="view-pane">
          Hello
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
