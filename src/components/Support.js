import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

  let navigate = useNavigate();


  function clickHandler(){
    navigate("/labs");
  }

  function backHandler(){
    navigate(-1)
  }
  return (

    <div>
  <div>
       This is Support page
    </div>
    <button onClick={clickHandler}> move to labs page</button>
    <button onClick={backHandler}>go back</button>
    </div>
    
  )
}

export default Support
