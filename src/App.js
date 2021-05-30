import TodoComponent from './component/todo/todo' ;


function App() {
  return (
    <div className = 'h-screen' >
      <header className="bg-black w-screen h-10 flex justify-around tracking-wide text-sm text-indigo-500 font-semibold">
        <div className = 'inline-flex sm:w-1/2 w-full items-center justify-center '>
          <h2 className = 'flex-1 text-center'>ToDo</h2>
          <h2 className = 'flex-1 text-center'> Potfolio </h2>
          <h2 className = 'flex-1 text-center'> Calculator </h2>
          <h2 className = 'flex-1 text-center'> Weather  </h2>
        </div >
        <div className = 'sm:inline-flex sm:w-1/3 items-center hidden'>Contact section</div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:justify-items-center h-5/6 bg-purple-400">
        <TodoComponent />
      </div>
    </div>
  );
}

export default App;
