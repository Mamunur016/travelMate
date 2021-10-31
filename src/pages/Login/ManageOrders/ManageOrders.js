import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `https://shielded-retreat-55862.herokuapp.com/orders`
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
        if (btn.innerText === "Pending") {



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

                <h3 className='text-success'> Hey {user.displayName}</h3>
                <h2 className='py-3 text-primary'>Orders Available: {orders.length} </h2>


                {
                    (orders.length > 0) && <div>
                        <div className="table-responsive">
                            <table class="table ">

                                <thead>
                                    <tr>
                                        <th scope="col">Email</th>
                                        <th scope="col">Destination</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Handler  </th>

                                    </tr>
                                    {
                                        orders.map(order => <Tabel key={order._id}
                                            order={order}
                                            handleBtn={handleBtn}
                                            handleDeleteOrder={handleDeleteOrder}
                                        ></Tabel>)
                                    }
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </Container>
        </div>
    );
};

const Tabel = (props) => {
    const { status, cost, date, destination, email, _id } = props.order;
    const handleDeleteOrder = props.handleDeleteOrder;
    const handleBtn = props.handleBtn;
    return (

        <tr>
            <th>{email}</th>
            <td>{destination}</td>
            <td>{cost}</td>
            <td>{date}</td>
            <td><button className='btn btn-outline-success' id={_id} onClick={() => handleBtn(_id)} >{status}</button>

            </td>
            <td> <button className='btn  btn-outline-danger ' onClick={() => handleDeleteOrder(_id)}>Remove</button></td>
        </tr>
    )
}


export default ManageOrders;


