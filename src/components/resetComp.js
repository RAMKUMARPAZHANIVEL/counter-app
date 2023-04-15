import React from 'react'
import { useDispatch } from 'react-redux';
import { resetItem } from '../store/actions/action';
import { useSelector } from 'react-redux';
const ResetComp = () => {
   const dispatch = useDispatch();
   const onClickHandler = () => {
      dispatch(resetItem())
   }
  
    return (
      <div>
          <button onClick={onClickHandler}>Reset</button>
      </div>
  )
}

export default ResetComp