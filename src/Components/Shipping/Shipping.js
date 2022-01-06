import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import useAuthProvider from '../../Hooks/UseAuth';
import { useHistory } from 'react-router-dom';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuthProvider();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data)
        history.push('/place_order')
    };


    return (
        <div className='container mt-5 w-50 m-auto shipping-form'>
            <h2>This is my sipping</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Your Country' {...register("country", { required: true })} />
                {errors.password && <span className='error'>This Field is Required</span>}

                <input placeholder='Your City' {...register("city", { required: true })} />
                {errors.password && <span className='error'>This Field is Required</span>}

                <input placeholder='Your Address' {...register("address", { required: true })} />
                {errors.password && <span className='error'>This Field is Required</span>}

                <input defaultValue={user.displayName} placeholder='Your Name' {...register("name", { required: true })} />
                {errors.name && <span className='error'>This Field is Required</span>}

                <input defaultValue={user.displayName ? user.email : ''} placeholder='Your Email' {...register("email", { required: true })} />
                {errors.email && <span className='error'>This Field is Required</span>}

                <input placeholder='Your phone' {...register("phone", { required: true })} />
                {errors.password && <span className='error'>This Field is Required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;