import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageItem = () => {
    const axiosSecure = useAxiosSecure()
    const { data: menus = [],refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu')
            return res.data
        }
    })
    const handleDelete = menu => {
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
                axiosSecure.delete(`/menu/${menu._id}`)
                .then(res =>{
                    console.log(res.data);
                refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                })
            }
        });
    }
    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle heading="Manage All items" subheading="hurry up!" />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 p-2 rounded-2xl">
                        <tr className="rounded-lg">
                            <th></th>

                            <th>Name</th>
                            <th>price</th>
                            <th>Edit</th>
                            <th>Delte</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            menus.map((menu, idx) => <tr key={menu._id}>
                                <td>
                                    <p>{idx + 1}</p>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={menu?.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{menu?.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{menu?.price}</p>
                                </td>
                                <td>
                                    <button className="btn">
                                        <FaEdit />
                                    </button>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(menu)} className="btn btn-ghost btn-xs"><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}

                </table>
            </div >
        </div >
    );
};

export default ManageItem;