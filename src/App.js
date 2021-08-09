import './App.css';
import TasklistContainer from './components/tasklist_container'
import {TaskContextProvider} from './components/task_provider'

function App() {
  return (
    <TaskContextProvider>
        <TasklistContainer />
    </TaskContextProvider>
  );
}

export default App;
