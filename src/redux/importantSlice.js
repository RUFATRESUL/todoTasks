// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const initialState ={
//     important:[],

// }

// export const importantSlice = createSlice({
//     name:"importTask",
//     initialState,
//     reducers:{

//         importantTasks(state,action){
//             const {id} = action.payload;
//             const usersIndex = state.important.findIndex(user => user.id === id)
//             if(usersIndex !== -1){
//                 state.important[usersIndex] = {...action.payload}
//             }else{
//                 state.important.push(action.payload)
//             }
//         },
//         setTasksFilter(state,action){
//             state.important = [...state.important,action.payload]
//         },
//         clearPersist:()=>initialState

//     }
// })

// const persistConfig = {
//     key: "MC:Products",
//     storage,
//     whitelist: ["important"]
// };

// const reducer = persistReducer(
//     persistConfig,
//     importantSlice.reducer
// )

// export default reducer
// export const {importantTasks,clearPersist,setTasksFilter} = importantSlice.actions

