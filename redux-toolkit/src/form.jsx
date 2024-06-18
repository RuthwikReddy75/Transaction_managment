import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { useDispatch } from 'react-redux';
import { updatename,updateacno,deposit,withdraw,add} from './store';
function Form()
{
    let dispatch=useDispatch();
    const [Amount,setAmount]=useState(0);
    const [name,setname]=useState("");
    const [acno,setacno]=useState("");

    return(
        <div className='form'>
            <h2>Manage Transactions</h2>
            <div id="amount">
                <input type="number" value={Amount} onChange={(e)=>{
                    let v=e.target.value;
                    setAmount(v);
                }}></input>
            </div>
            <div id="buttons">
                  
                  <button onClick={()=>{
                    dispatch(deposit(Amount));
                    dispatch(add({
                        amount:Amount,
                        time:new Date(),
                        type:"credit"
                    }))
                    setAmount(0);
                  }}>deposit</button>
                  <button onClick={()=>{
                    dispatch(withdraw(Amount));
                    dispatch(add({
                        amount:Amount,
                        time:new Date(),
                        type:"debit"
                    }))
                    setAmount(0);
                  }}>withdraw</button><br></br><br></br>
              </div>
              <div id="iname"> 
                <label htmlFor="name">Name </label>
                <input type="text" id="name" value={name} onChange={(e)=>{
                    let v=e.target.value;
                    setname(v);
                }}></input>
                <button onClick={()=>{
                    dispatch(updatename(name));
                    setname("");
                }}>update</button><br></br><br></br>
            </div>
            <div id="iacno">
                <label htmlFor="acno">Account No </label>
                <input type="text" id="acno" value={acno} onChange={(e)=>{
                    let v=e.target.value;
                    setacno(v);
                }}></input>
                <button onClick={()=>{
                    dispatch(updateacno(acno));
                    setacno("");
                }}>update</button>


            </div>
        </div>
        
    )
}
export default Form;