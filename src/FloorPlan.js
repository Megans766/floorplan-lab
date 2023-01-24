


function FloorPlan(props) {
  console.log(props.house.kitchen);
  return (
    <>
        {props.house.kitchen}
        {props.house.bedroomOne}
        {props.house.fullBath}
        {props.house.livingRoom}
        {props.house.bedroomTwo}
        {props.house.halfBath}
        {props.house.bedroomThree}
    </>
  )
}

export default FloorPlan