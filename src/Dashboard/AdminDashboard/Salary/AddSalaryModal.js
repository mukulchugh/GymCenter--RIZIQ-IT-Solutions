import React, { useState } from 'react';
import Modal from "react-modal";
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { useEffect } from 'react';
// import './AddIncomeModal.css'


export default function AddSalaryModal({ refetch }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const { token } = AuthUser();
    const [user, setUser] = useState([])
    const [selectedUser, setSelectedUser] = useState('')




    function closeModal() {
        setIsOpen(false);
    }


    const onSubmitForm = (data) => {

        const expense = {
            amount: data.amount,
            expense_date: data.expense_date,
            // image: data.image,
            name: data.name || "Staff",
            message: data.message,
            image: data.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            // make unique id
            id: Math.random().toString(36).substr(2, 9),
            status: true
        }
        // console.log(expense)
        // post data to database 
        fetch(`https://gym-management97.herokuapp.com/api/salary_overview/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(expense)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                reset()
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                setUser(data)
            }).catch(err => console.log(err))
    }, [])

    // console.log(user)

    return (

        <div className='my-5 '>
            <div>
                <label for="my-modal-5" class="btn btn-success text-white font-bold modal-button">  <IoMdAddCircleOutline className='sm:text-2xl text-xl font-bold  mr-1' /> Add Salary</label>
            </div>
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <label for="my-modal-5" class="modal pt-20 z-50">
                <label class="modal-box lg:w-[60%] relative" for="">
                    <form onSubmit={handleSubmit(onSubmitForm)} id="my-modal-5">
                        <label for="my-modal-5" class="btn btn-sm text-white btn-error btn-circle absolute right-2 top-2">✕</label>
                        <div className=" mt-3">
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Source Name</span>
                                </label>
                                <select type="text" placeholder="Enter The Name of Salary Source" class="input input-bordered w-full focus:outline-none text-black">

                                    {
                                        user?.map((item, index) => {
                                            return item.is_staff && (<option onClick={() => setSelectedUser(item?.email)} key={index} value={item?.email}>{item?.email}</option>)


                                        })
                                    }
                                </select>
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.user?.message}</small>
                            </div>
                        </div>
                        <div className="">
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Amount</span>
                                </label>
                                <input type="number" placeholder="Enter The Amount of Salary" class="input input-bordered w-full focus:outline-none"
                                    {...register("amount", {
                                        required: 'Amount is required',
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('amount');
                                    }}
                                />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.amount?.message}</small>
                            </div>
                        </div>
                        <div className="">
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Salary Date</span>
                                </label>
                                <input type="date" class="input input-bordered w-full focus:outline-none"
                                    {...register("expense_date", {
                                        required: 'Date is required',
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('expense_date');
                                    }}
                                />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.expense_date?.message}</small>
                            </div>
                        </div>

                        <div className="">
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <input placeholder="Enter your Message" type="text" class="input input-bordered w-full focus:outline-none"
                                    {...register("message", {
                                        required: 'Message is required',
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('message');
                                    }}
                                />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.message?.message}</small>
                            </div>
                        </div>

                        {/* <div className=" mt-3">
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Upload File</span>
                            </label>
                            <input type="file" placeholder="Write Any Message For This Income" class="input w-full focus:outline-none h-full pl-0 rounded-none shadow-none border-none"
                                {...register("image", {
                                    required: 'Image is required',
                                })}
                                onKeyUp={(e) => {
                                    trigger('image');
                                }}
                            />
                            <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.image?.message}</small>
                        </div>
                    </div> */}

                        <div className="flex gap-2 relative">
                            <div>
                                <label for="my-modal-5" class="btn btn-error text-white font-bold btn-sm">Close</label>
                            </div>
                            <div className="text-end">
                                <button
                                    type='submit'
                                    className="btn  bg-green-500 text-white font-bold px-3 py-1 rounded-md cursor-pointer btn-sm">Submit</button>
                            </div>
                        </div>
                    </form>
                </label>
            </label>
        </div>
    );
};