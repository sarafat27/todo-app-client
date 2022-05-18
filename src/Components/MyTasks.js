import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [user] = useAuthState(auth);

    const deleteTask = id => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/myTask/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const rest = tasks.filter(task => task._id !== id);
                    setTasks(rest);
                })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myTask?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div>
            <h2 className='text-center mb-5'>These are your added tasks</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Task name</th>
                        <th>Task description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => <tr
                            key={index}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{task.taskName}</td>
                            <td>{task.taskDescription}</td>
                            <td onClick={() => deleteTask(task._id)}>X</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyTasks;