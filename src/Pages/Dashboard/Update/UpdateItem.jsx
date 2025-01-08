import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosOpen from "../../../Hooks/useAxiosOpen";
import Swal from "sweetalert2";


const img_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const UpdateItem = () => {
    const { register, handleSubmit } = useForm()
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const axiosOpen = useAxiosOpen()
    const { data: menu = {} ,refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5050/update/${id}`)
            return res.data
        }
    })
    console.log(menu._id);
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosOpen.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            axiosOpen.patch(`/menu/${menu?._id}`, menuItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount >0 ) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Item has been Update successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })

        }


    }
    return (
        <div className='w-10/12 mx-auto'>
            <SectionTitle heading="Update item" subheading="hurry up!" />

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
                            defaultValue={menu?.name}
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
                                defaultValue={menu?.category}
                                id="category"
                                {...register('category', { required: true })}
                                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="" disabled>
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
                                defaultValue={menu?.price}

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
                            defaultValue={menu?.recipe}
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
                            defaultValue={menu?.image}
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
                        UPdate Item
                        <span className="ml-2">🍴</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;