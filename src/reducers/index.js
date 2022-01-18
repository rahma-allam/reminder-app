import { ADD_REMINDER, CLEAR_REMINDER, DELETE_REMINDER } from "../types";



const reminders = (state=[], action) => {
    let reminders =[];

    if(action.type === ADD_REMINDER){
        reminders= [...state , {text : action.text , date : action.date ,id : Math.random()*10}];
       
        return reminders; 
    }
    else if(action.type === CLEAR_REMINDER ){
       return reminders.filter( reminder => reminder.id !== action.id)

    }
    else if (action.type === DELETE_REMINDER){
        return reminders = []
    }
    // else if (action.type === EMPTY_INPUT){
    //     return reminders = [...state]

    // }
    else{
        return state;
    }
    
}


export default reminders;