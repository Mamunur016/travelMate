import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `https://shielded-retreat-55862.herokuapp.com/orders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    // DELETE AN USER
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://shielded-retreat-55862.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(user => user._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }

    }

    // handle btn 
    const handleBtn = (id) => {


        const btn = document.getElementById(id);
        if (btn.innerText === "pending") {



            const url = `https://shielded-retreat-55862.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successful');
                        // window.location.reload();

                    }
                })
        }


    }





    return (
        <div className='py-5 bg-light'>
            <Container>
                <h3>{user.email}</h3>
                <h3> hey {user.displayName}</h3>
                <h2>orders Available: {orders.length} </h2>


                <ul>
                    {
                        orders.map(order => <ol
                            key={order._id}
                        >{order.destination} :: {order.email}

                            <button className='btn btn-outline-success' id={order._id} onClick={() => handleBtn(order._id)}>{order.status}</button>

                            <button className='btn ms-4 btn-outline-danger' onClick={() => handleDeleteOrder(order._id)}>X</button>
                        </ol>)
                    }
                </ul>
            </Container>
        </div>
    );
};

export default MyOrders;