import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen(props) {
  return (
    <div className='Kitchen'>
      <h3>Kitchen</h3>
      <Oven/>
      <Sink/>
    </div>
  )
}

export default Kitchen