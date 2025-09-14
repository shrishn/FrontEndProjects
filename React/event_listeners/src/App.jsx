function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }
  
  /**
   * Challenge: add our new function to the button
   */
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}
export default App
