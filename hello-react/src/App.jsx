import Hello from './Hello'
const App = () => {
  const name = 'Vincent'
  const reminder =()=> {alert("Remember to take a break, React is tough!")}
  return (
    <div>
      <main>
        <Hello name={name} reminder={reminder}/>
      </main>
    </div>
  )
}

export default App
