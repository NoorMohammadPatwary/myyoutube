import { useDispatch, useSelector } from 'react-redux';
import { decrementNumber, incrementNumber } from './actions';
import './App.css';



function App() {
  const myvalue= useSelector((state)=>state.counterNumber)
  const dispatch=useDispatch()
  return (
   <>
   <div>
      <button className='btn btn-danger' onClick={()=> dispatch(decrementNumber())}> ➖ </button>
      <input type="text"  value={myvalue} />
      <button className='btn btn-success' onClick={()=> dispatch(incrementNumber())} > ➕ </button>
    </div>
  </>
  );
}

export default App;
