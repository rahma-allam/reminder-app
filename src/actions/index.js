import { ADD_REMINDER, CLEAR_REMINDER , DELETE_REMINDER } from "../types";


export const add_reminder = (text , date) => {
    
    
      const   action ={
            type: ADD_REMINDER,
            text ,
            date
        }
        return action

}

export const clear_reminder = (id) =>{
    const  action = {
        type : CLEAR_REMINDER,
        id
    }

    return action 
}

export const delete_reminders = () =>{
    const  action = {
        type : DELETE_REMINDER
    }

    return action 
}