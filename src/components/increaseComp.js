import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseNumber } from '../store/actions/action';
import { useSelector } from 'react-redux';
const IncreaseComp = () => {
const data = useSelector(store => store.comp);
console.log(typeof(data) + data)
 const dispatch = useDispatch();
 const onClickHandler = () => {
    dispatch(increaseNumber(data))
 }

  return (
    <div>
        <button onClick={onClickHandler}>Increase</button>
    </div>
  )
}

export default IncreaseComp