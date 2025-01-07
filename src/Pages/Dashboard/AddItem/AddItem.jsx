import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='w-10/12 mx-auto'>
            <SectionTitle heading="add item" subheading="nothign" />

            <div className="max-w-4xl mx-auto p-6 border rounded-md shadow-md bg-gray-50">
                <h2 className="text-lg font-semibold mb-4">Add New Recipe</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Recipe Name */}
                    <div>
                        <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">
                            Recipe name*
                        </label>
                        <input
                            type="text"
                            id="recipeName"
                            {...register('recipeName', { required: true })}
                            placeholder="Recipe name"
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Category and Price */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category*
                            </label>
                            <select
                                id="category"
                                {...register('category', { required: true })}

                                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value=" " disabled>
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
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price*
                            </label>
                            <input
                                type="number"
                                id="price"
                                {...register('price', { required: true })}

                                placeholder="Price"
                                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div>
                        <label htmlFor="recipeDetails" className="block text-sm font-medium text-gray-700">
                            Recipe Details*
                        </label>
                        <textarea
                            id="recipeDetails"
                            {...register('recipeDetails', { required: true })}

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
                            {...register('fileUpload', { required: true })}

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