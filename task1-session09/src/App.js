import Car from "./components/Car"
import Bicycle from "./components/Bicycle";
import Truck from "./components/Truck";
import Bus from "./components/Bus";
import Skateboard from "./components/Skateboard";

export default function App() {
  return (
    <div className="App">
      <Car numberOfWheels="4"/>
      <Bicycle Name="Bicycle" numberOfWheels="2"/>
      <Truck Name="Truck" numberOfWheels="8"/>
      <Bus Name="Bus" numberOfWheels="6"/>
      <Skateboard Name="Skateboard" numberOfWheels="4"/>
    </div>
  );
}