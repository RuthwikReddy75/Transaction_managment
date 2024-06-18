import { useState } from 'react'

import './App.css'
import Form from "./form";
import Account from "./account";
function App() {
  

  return (
    <div className='entire'>
      <div className='heading'><h1><span id="s1">Transaction</span> <span id="s2">Managment</span>  <span id="s3">System</span></h1></div>
     <div className="sentire"> 
      <Form></Form>
      <Account></Account>
     </div> 
    </div>
  )
}

export default App
