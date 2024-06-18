import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { useSelector } from 'react-redux';
function Account()
{
   let data=useSelector((state)=>{
    return state});
    console.log(data);
    return(
        <div className="info">
           <div id="managet">
            <h2>Account Details</h2>
            <table id="table">
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>Name</th>
                        <th>Account No</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{data.user.balance}</td>
                    <td>{data.user.name}</td>
                    <td>{data.user.acno}</td>

                </tr>  
                    

                </tbody>
            </table>
         </div>   
         <div id="td">   
             <h2>Transaction Details</h2>
             <table id="table1">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Time</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody> 

                {/* <tr>
                    <td>{data.balance}</td>
                    <td>{data.name}</td>
                    <td>{data.acno}</td>

                </tr>   */}
                 {
                    data.transaction.map((tr)=>{
                        return(
                            <tr>
                                <td>{tr.amount}</td>
                                <td>{tr.time.toString()}</td>
                                <td className={`abc${tr.type}`}>{tr.type}</td>

                            </tr>
                        )
                    })

                }
               
                    

                </tbody>
            </table>
         </div>   
      </div>  
    )
}
export default Account;