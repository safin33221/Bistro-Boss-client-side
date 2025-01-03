import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';
import Swal from 'sweetalert2';

const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const navigete = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const { name, image, price, recipe, _id } = item
    const handleCartAdd = food => {
        if (user && user?.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                recipe,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    Swal.fire({
                        title: "Add success!",
                        icon: "success",
                        
                    });
                    refetch()
                })
        }
        else {
            navigete('/login', { state: { from: location } })
        }
    }
    return (
        <div className=' border-2 bg-base-200 flex items-center relative rounded-t-lg flex-col'>
            <img src={image} alt="" className='w-full rounded-t-lg ' />
            <p className='text-yellow-600 btn bg-[#000000] absolute right-4 top-4'>${price}</p>
            <div className='m-4'>
                <h1 className='uppercase font-bold'>{name}</h1>
                <p>{recipe}</p>
            </div>
            <div>
                <button onClick={() => handleCartAdd(item)} className="btn btn-outline border-0 border-b-4 text-black block mx-auto">Add Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;