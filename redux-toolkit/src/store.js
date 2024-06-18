import {createSlice,configureStore,combineReducers} from "@reduxjs/toolkit";
const state={
    balance:0,
    name:"",
    acno:null
};
const Transactions=[];
const userslice=createSlice({
    name:"user",
    initialState:state,
    reducers:{
        updatename:(state,action)=>{
            state.name=action.payload
        },
        updateacno:(state,action)=>{
            state.acno=action.payload
        },
        deposit:(state,action)=>{
             state.balance+=+action.payload
        },
        withdraw:(state,action)=>{
            state.balance-=action.payload

        }

    }
})
const transactionslice=createSlice({
    name:"transactions",
    initialState:Transactions,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        }

    }

})
const store=configureStore({
    reducer:{
        user:userslice.reducer,
        transaction:transactionslice.reducer

    },
})
export const {updatename,updateacno,deposit,withdraw}=userslice.actions;
export const {add}=transactionslice.actions;
export default store;
