import {React ,Component } from "react";
import {add_reminder , clear_reminder , delete_reminders} from "../actions";
import {connect} from "react-redux";
import {reminders} from "../reducers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import moment from "moment"

class App extends Component{
    state = {
        text : "",
        date : new Date()
    }

    render_reminders(){
    const {reminders} = this.props
    return (
        <ul className="list-group">
            {
            reminders.map(reminder => {
                return (
                <li className="list-group-item d-flex justify-content-between " key={reminder.id}> 
                       <div>{reminder.text} </div>   
                       <div>{moment(new Date(reminder.date)).fromNow()} </div>   
                       <div className="btn btn-danger " onClick={(id)=>this.props.clear_reminder(reminder.id)}>x</div>
                </li>
                )
            })
            }
        </ul>
    )
    }
render(){
    return(
        <div className="app ">
            <img src=""  alt=""/>
            <div className="reminder-title">
                <h2>What should You Do ? </h2>
            </div>
            <input type="text" value={this.state.text} placeholder="Enter what you think" className="form-control" onChange={(e)=>this.setState({text:e.target.value})}></input>
            <DatePicker
            selected={this.state.date}
            value={this.state.date} 
            className="form-control" 
            onChange={(date)=>{this.setState({date})}}
            showTimeSelect
            timeFormat="HH:MM"
            dateFormat="dd,MM,yyyy  h:m aa"
            timeCaption ="Time" 
            
            />
             <button className=" btn btn-primary d-block " onClick={()=>
                {
                   
                     if(this.state.text === "" || this.state.date === ""){
                        return false
                     }
                     else{
                        this.props.add_reminder(this.state.text, this.state.date)
                        this.setState({ text : "", date : new Date() })
                     }
                }
                }>Add Reminder</button>
            {this.render_reminders()}
            <button className=" btn btn-danger d-block " onClick={()=> this.props.delete_reminders()}>Delete Reminders</button>
            
            
        </div>
    )
}
}
//  function mapDispatchToProps (dispatch){
//      return(

//          add_reminders = ()=>dispatch(add_reminders())
//      )
// //  }
// function mapStateToProps(state){
//     return {
//         reminders : state
//     }
// }

export default connect((state)=>{
    return {
        reminders : state
    }
}, {add_reminder,
    clear_reminder ,
    delete_reminders })(App);