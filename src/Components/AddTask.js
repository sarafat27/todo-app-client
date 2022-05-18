import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';

const Addtask = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const myTasks = () => {
        navigate('/myTasks')
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = user?.email
        const taskName = event.target.name.value;
        const taskDescription = event.target.description.value;
        const task = { email, taskName, taskDescription }


        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                toast('task added')
                event.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-center mb-5'>This is Add Task page</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Control type="text" name="name" placeholder="Task name" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicDescription">
                    <Form.Control type="text" name='description' placeholder="Description" required />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Add task
                </Button>
            </Form>
            <Button onClick={myTasks} className='w-25 mt-5 d-block mx-auto' variant="primary" type="submit">
                My tasks
            </Button>
            <Button onClick={() => signOut(auth)} className='w-25 mt-5 d-block mx-auto' variant="primary" type="submit">
                sign out
            </Button>
        </div>
    );
};

export default Addtask;