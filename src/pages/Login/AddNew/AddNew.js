import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AddNew = () => {
    const { user } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log(data);
        axios.post('https://shielded-retreat-55862.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
        // history.push('/thankyou')
    };

    return (
        <div className='py-5' style={{
            backgroundColor: '#D4E3E5'
        }}>
            <Container>
                <h3>Hey <span className='text-primary'>{user.displayName} ,</span> <small>Please add a new Tour</small></h3>

                <form className="rounded py-5" onSubmit={handleSubmit(onSubmit)}>





                    <input placeholder="Add a tour Title" defaultValue="" {...register("title")} required className='form-control my-3' />
                    <input placeholder="Add a image url" type='url' defaultValue="" {...register("img")} required className='form-control my-3' />

                    <input placeholder="Add a destination for tour" defaultValue="" {...register("destination")} required className='form-control my-3' />
                    <input placeholder="Add a tour duration" defaultValue="" {...register("duration")} required className='form-control my-3' />
                    <input placeholder="Add a tour departure time" defaultValue="" {...register("departure")} required className='form-control my-3' />



                    <textarea placeholder="add a tour description" rows="5" className='my-4 form-control' defaultValue="" {...register("description")} required />

                    <textarea placeholder="add a included option" rows="5" className='my-4 form-control' defaultValue="" {...register("included")} required />
                    <input type="number" placeholder='tour cost' {...register("cost")} required className='form-control my-3' />

                    <input type="submit" value='Book' className=' btn btn-lg my-2 btn-outline-success  fw-bold' />
                </form>

            </Container>

        </div>
    );
};

export default AddNew;