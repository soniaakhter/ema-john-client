import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        // console.log(data);
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    clearTheCart();
                    reset();
                }
            })
    }
    return (
        <div>
            <form className="shipping__form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email}  {...register("exampleRequired", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("City")} />
                <input placeholder="Phone Number" defaultValue="" {...register("Phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;