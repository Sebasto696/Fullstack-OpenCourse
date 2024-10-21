const App = () => {
  const friends = [
    { name: "Sebas", age: 19 },
    { name: "Camilo", age: 19 },
  ]
  return (
    <div>
      <p>{friends[0].name}, {friends[0].age}</p>
      <p>{friends[1].name}, {friends[1].age}</p>
    </div>
  )
}

export default App