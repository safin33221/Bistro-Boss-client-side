import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrash, FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data

        }
    })
    const handleDelte = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });

    }
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "Change user Role",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/${user._id}`)
                    .then(res => {
                    
                        refetch()
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Admin!",
                                text: `${user.name} is an admin now!`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className=' w-10/12 mx-auto my-10'>
            <div className='flex justify-between '>
                <h1 className="text-2xl">All Users</h1>
                <h1 className="text-2xl">Total Users: {users.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) =>
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user?.role === 'admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className=" bg-orange-500 text-white rounded-lg  duration-200 ease-in btn-sm"><FaUsers /></button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelte(user)} className=" hover:text-red-500 duration-200 ease-in btn-lg"><FaTrashAlt /></button>
                                    </td>
                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;