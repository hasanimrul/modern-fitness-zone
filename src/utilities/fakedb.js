const storeInLS = (time) =>{
    localStorage.setItem('break-time', time) 
  }

  const getFromLs = () =>{
    localStorage.getItem('break-time')
  }

  export{storeInLS, getFromLs}