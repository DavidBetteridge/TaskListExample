import './App.css';
import WordPressPage from './components/wordpress_page'
import {TaskContextProvider} from './components/task_provider'

function App() {
  return (
    <TaskContextProvider>
        <WordPressPage />
    </TaskContextProvider>
  );
}

export default App;
