import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState ={
    data:[],
    tasks:[],
    important:[],
    planned:[],
    assigned:[]
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
            console.log(action.payload);
            const {id} = action.payload;
            const usersIndex = state.tasks.findIndex(user => user.id === id)
            if(usersIndex !== -1){
                state.tasks[usersIndex] = {...action.payload}
            }else{
                state.tasks.push(action.payload)
            }
        },
        importantTasks(state,action){
            const {id} = action.payload;
            const usersIndex = state.important.findIndex(user => user.id === id)
            if(usersIndex !== -1){
                state.important[usersIndex] = {...action.payload}
            }else{
                state.important.push(action.payload)
            }
        },
        plannedTasks(state,action){
            const {id} = action.payload;
            const usersIndex = state.planned.findIndex(user => user.id === id)
            if(usersIndex !== -1){
                state.planned[usersIndex] = {...action.payload}
            }else{
                state.planned.push(action.payload)
            }
        },
        assignedTasks(state,action){
            const {id} = action.payload;
            const usersIndex = state.assigned.findIndex(user => user.id === id)
            if(usersIndex !== -1){
                state.assigned[usersIndex] = {...action.payload}
            }else{
                state.assigned.push(action.payload)
            }
        },
        removeHomeTask(state,action){
            const filteredBasket = state.tasks.filter(item => item.id !== action.payload);
            state.tasks = filteredBasket; 
        },
        setTasksFilter(state,action){
            state.tasks = [...state.tasks,action.payload]
            state.important = [...state.important,action.payload]
            state.planned = [...state.planned,action.payload]
            state.assigned = [...state.assigned,action.payload]
        },
        clearPersist:()=>initialState

    }
})

const persistConfig = {
    key: "MC:Products",
    storage,
    whitelist: ["data","tasks","important","planned","assigned"]
};

const reducer = persistReducer(
    persistConfig,
    registerSlice.reducer
)

export default reducer
export const {countUsersItem,addUsers,addTasks,clearPersist,setTasksFilter,importantTasks,plannedTasks,assignedTasks,removeHomeTask} = registerSlice.actions

