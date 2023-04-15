import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decreaseNumber } from '../store/actions/action';
const DecreaseComp = () => {
  const data = useSelector(store => store.comp);
console.log(typeof(data) + data)
 const dispatch = useDispatch();
 const onClickHandler = () => {
    dispatch(decreaseNumber(data))
 }

  return (
    <div>
        <button onClick={onClickHandler}>Decrease</button>
    </div>
  )
}

export default DecreaseComp
