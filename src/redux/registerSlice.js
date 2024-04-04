import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState ={
    data:[],
    tasks:[]
}

export const registerSlice = createSlice({
    name:"register",
    initialState,
    reducers:{
        countUsersItem(state,action){
            state.data = action.payload
        },
        addUsers(state,action){
            const {id} = action.payload;
            const usersIndex = state.data.findIndex(user => user.id === id)
            if(usersIndex !== -1){
                state.data[usersIndex] = {...action.payload}
            }else{
                state.data.push(action.payload)
            }
        },
        addTasks(state,action){
            const {id} = action.payload;
            const usersIndex = state.tasks.findIndex(user => user.id === id)
            if(usersIndex !== -1){
                state.tasks[usersIndex] = {...action.payload}
            }else{
                state.tasks.push(action.payload)
            }
        },
        setTasksFilter(state,action){
            state.basket = [...state.tasks,action.payload]
        },
        clearPersist:()=>initialState

    }
})

const persistConfig = {
    key: "MC:Products",
    storage,
    whitelist: ["data","tasks"]
};

const reducer = persistReducer(
    persistConfig,
    registerSlice.reducer
)

export default reducer
export const {countUsersItem,addUsers,addTasks,clearPersist,setTasksFilter} = registerSlice.actions

