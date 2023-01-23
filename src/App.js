import './App.css';
import FloorPlan from './FloorPlan'

function App() {
  const house = [
    {kitchen: 'Kitchen'}, 
    {livingRoom: 'LivingRoom'}, 
    {bedroomOne: 'Bedroom One'}, 
    {fullBath: 'Full Bath'},
    {halfBath: 'Half Bath'},
    {bedroomTwo: 'Bedroom Two'},
    {bedroomThree: 'Bedroom Three'},
]
  return (
    <div className="App">
      <FloorPlan house={house}/>
    </div>
  );
}

export default App;
