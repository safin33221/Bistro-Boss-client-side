import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosOpen from '../../../Hooks/useAxiosOpen';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddItem = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosOpen = useAxiosOpen()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data);
        //upload the image in imgbb
        const imageFile = { image: data.image[0] }
        const res = await axiosOpen.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        console.log(res.data);
        if (res.data.success) {
            //now we can send data in the database
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            axiosSecure.post('/menu',menuItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item has been add successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      reset()
                }
            })

        }

    }
    return (
        <div className='w-10/12 mx-auto'>
            <SectionTitle heading="add item" subheading="nothign" />

            <div className="max-w-4xl mx-auto p-6 border rounded-md shadow-md bg-gray-50">
                <h2 className="text-lg font-semibold mb-4">Add New Recipe</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Recipe Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Recipe name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            placeholder="Recipe name"
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Category and Price */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                category*
                            </label>
                            <select
                                id="category"
                                {...register('category', { required: true })}

                                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="" aria-readonly>
                                    Select Category
                                </option>

                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                price*
                            </label>
                            <input
                                type="number"
                                id="price"
                                {...register('price', { required: true })}

                                placeholder="price"
                                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Recipe Details*
                        </label>
                        <textarea
                            id="recipe"
                            {...register('recipe', { required: true })}

                            placeholder="Recipe Details"
                            rows="4"
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    {/* File Upload */}
                    <div className="flex items-center gap-4">
                        <input
                            type="file"
                            id="fileUpload"
                            {...register('image', { required: true })}

                            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100"
                        />
                        <span className="text-gray-500">No file chosen</span>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center justify-center"
                    >
                        Add Item
                        <span className="ml-2">🍴</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;