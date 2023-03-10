import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan(props) {
  return (
    <div calssName='floorPlan'>
      <Kitchen/>
      <Bath size='Half'/>
      <LivingRoom/>
      <Bath size='Full'/>
      <Bedroom bedNum={'One'}/>
      <Bedroom bedNum={'Two'}/>
      <Bedroom bedNum={'Three'}/>
    </div>
  )
}

export default FloorPlan