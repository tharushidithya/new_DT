import React from 'react';
import "./Notification.css";
// import React, { useState, useEffect } from "react";


// function Notification(props) {
//     const [tasks, setTasks] = useState([]);
//
//     useEffect(() => {
//         fetch("/api/tasks")
//             .then((response) => response.json())
//             .then((data) => setTasks(data));
//     }, []);
//
//     return (
//         <div>
//             <h2>Notification</h2>
//             <ul>
//                 {tasks.map((task) => (
//                     <li key={task.id}>
//                         {task.title} - Due {task.deadline}
//                         dd1
//                         dd2
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }



const notification = [
    {
        id: 1,
        title: "Task 1",
        deadline: "2023-05-05",
    },
    {
        id: 2,
        title: "Task 2",
        deadline: "2023-05-08",
    },
    {
        id: 3,
        title: "Task 3",
        deadline: "2023-05-15",
    },
];

function Notification(props) {
    return (
        <div>
            <h2 className="Header">Notifications</h2>
            <div className="Notification">
                <div  style={{marginBottom: '0.5rem'}}>
                    <ul>
                        {notification.map((task) => (
                            <li key={task.id}>
                                {task.title} <br/> <div style={{color: "#e10202"}}>Due {task.deadline}</div>
                                {notification.name}
                                {notification.notification}
                            </li>
                        ))}
                    </ul>

                </div>
                <span>{notification.time}</span>

            </div>
        </div>
    );
}




export default Notification;