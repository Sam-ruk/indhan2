import { useCountUp } from 'react-countup';
import {useRef,useEffect} from 'react';

function Counter (props) {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: props.time,
    delay: 0.1,
    duration: 1,
  });

  useEffect(() => { 
    pauseResume();
  },[]);

  return (
    <h1 style={{color:"red"}} ref={countUpRef}/>
  );
}

export default Counter;
