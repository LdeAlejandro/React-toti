import React, { useState, useEffect} from 'react';


export default function ApiRequest(){

    const [id, setId] = useState(2);
    const [data, setData] = useState(null);

    useEffect(() =>{
      console.log('useEffect')
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setData(data))

        console.log(id)

      
    },[])

   
function handleOnChange(event){
 console.log('on change')
 console.log(event.target.value)
  setId(event.target.value);
}
  return (
    <div> 

      <input type="text" onChange={handleOnChange}/>
      <br />
      Title: {data.title}

      </div>
  )
}