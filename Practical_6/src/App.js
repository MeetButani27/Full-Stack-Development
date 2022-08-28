import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div className="todo-app">
        <TodoList />
      </div>

      <div className='footer' style={{ 'text-align':'right', 'padding-right':'50px', 'margin-top':'50px', 'margin-bottom': '25px'}}>
        <label style={{'font-weight':'500', 'font-size':'18px'}}>20CS010 - Meet Butani</label>
      </div>
    </>
  );
}

export default App;
