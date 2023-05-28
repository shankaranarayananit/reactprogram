
function App() {
  function handleNameChange(){
    const name = ['learn','grow','give'];
    const int = Math.floor(Math.random()*3);
    return name[int];

  }
  const name = 'shankara narayanan'
  return (
    <div>Learn React
      <p>lets {handleNameChange()} money</p>
    </div>
    
  );
}

export default App;
