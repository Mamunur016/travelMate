import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const TourAsiaDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [tourDetails, setTourDetails] = useState({});

    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = 'Pending';
        // console.log(data);

        axios.post('https://shielded-retreat-55862.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                    history.push('/thankyou')
                }
            })


    };

    useEffect(() => {
        const url = `https://shielded-retreat-55862.herokuapp.com/asiatours/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTourDetails(data))


    }, []);

    const { img, cost, title, _id, airTicket, notIncluded, cover, country, inclusion, notes } = tourDetails;
    return (
        <div>
            <div className='py-5 bg-light'>
                <Container>
                    <h4 className='text-success'>  {title}</h4>

                    <Row>
                        <Col lg={8} md={12}>
                            <div className='py-2'>
                                <h4>LAND PACKAGE PRICE</h4>
                                <h6>BDT {cost} Per Person</h6>
                            </div>
                            <div className='py-2'>
                                <h6>AIR TICKET:</h6>
                                <p>{airTicket}</p>

                            </div>

                            <div className='py-2'>
                                <h6>INCLUDED IN LAND PACKAGE:</h6>
                                <ul>
                                    {
                                        inclusion?.map(list =>
                                            <li>{list}</li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className='py-2'>
                                <h6>NOT INCLUDED IN LAND PACKAGE:</h6>
                                <p>{notIncluded}</p>
                            </div>
                            <div className='py-2'>
                                <h6> NOTES::</h6>
                                <ul>
                                    {
                                        notes?.map(list =>
                                            <li>{list}</li>
                                        )
                                    }
                                </ul>
                            </div>

                        </Col>



                        <Col lg={4} md={12}>
                            <div className='p-4  text-white rounded text-center' style={{
                                backgroundColor: "#3F955D"
                            }}>
                                {cost} BDT/Person
                            </div>
                            <div>
                                <form className="contract-form rounded py-5" onSubmit={handleSubmit(onSubmit)}>

                                    <input defaultValue={user.displayName} {...register("name")} className='form-control my-3' />

                                    <input defaultValue={user.email} {...register("email", { required: true })} className='form-control my-3' />
                                    {errors.email && <span className="error">This field is required</span>}




                                    <select className='form-control my-3'  {...register("cost", { required: true })} >
                                        <option value={cost}>{cost}</option>


                                    </select>
                                    <select className='form-control my-3'  {...register("destination", { required: true })} >
                                        <option value={title}>{title}</option>


                                    </select>



                                    <input placeholder="Your Phone Number" defaultValue="" {...register("phone")} required className='form-control my-3' />

                                    <input placeholder="Your Address" defaultValue="" {...register("address")} required className='form-control my-3' />

                                    <input type="date" name="" id="" {...register("date")} required className='form-control my-3' />
                                    <textarea placeholder="leave Your Message" rows="5" className='my-4 form-control' defaultValue="" {...register("message")} required />

                                    <input type="submit" value='Book Order' className='form-control my-2 btn-outline-success fw-bold' />
                                </form>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default TourAsiaDetails;



