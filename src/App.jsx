import './App.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import React, { useEffect , useState } from 'react'

function App() {
  const [fetchingData , setData] = useState([])
  useEffect(()=>{
    const FetchingData = async ()=>{
      const URL = await fetch('https://jsonplaceholder.typicode.com/posts')
      const Response = await URL.json()
      console.log(Response.data)
      setData(Response)
    }
    FetchingData()
  } , [])
  return (
    <>
      <Navbar/>
      {fetchingData.map((items)=>{
        return(
          <>
          <div key={items._id}>
            
            <h1>{items.title}</h1>
            <p>{items.message}</p>
          </div>

          </>
        )
      })}
    </>
  )
}

export default App
