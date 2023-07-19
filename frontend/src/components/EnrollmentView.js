import React, {Component} from "react";
import './Calendar.styles.css';
export class EnrollmentView extends Component{
    render(){
        return (this.props.trigger && this.props.events.length>0)?
        (
            <div id = "enroll-view">
                <h1 id = "title">{this.dateToTitle(this.props.date)}</h1>
                 <div id = 'sessions-table'>
                 <form >
                    <table >
                       <tbody >
                       <tr><th>Time</th><th>Level ID</th><th>Location</th><th>instructor</th><th>Capacity</th><th className = "enroll-column" >Enroll</th><th className = "unenroll-column">Unenroll</th></tr>
                        <this.EventsToSubmit events = {this.props.events}/>
                       </tbody>
                    </table>
                </form>
                 </div>
                 <button className="submit-btn" onClick = {()=> this.props.setTrigger(false)}>Submit</button>
                 <button className="close-btn" onClick = {()=> this.props.setTrigger(false)}>Close</button>
            </div>
        ): '';
    }

    EventsToSubmit = (props) =>{
        var inputs = [];
        var count =0 ;
        props.events.forEach(e =>{
            
            inputs.push(<tr key = {count++}><td>{e.start.toLocaleTimeString()}</td><td>{e.levelID}</td><td>{e.location}</td><td>{e.instructorID}</td><td>{e.capacity}</td><td className = "enroll-column"><input type = 'checkbox'/></td><td className = "unenroll-column"><input type = 'checkbox'/></td></tr>)
        });
        return inputs;
    }

     dateToTitle =(date)=> {
        return  (date.getMonth() + 1) + "/" + date.getDate() + '/'  + date.getUTCFullYear();
        
    }
}

