import React from 'react';
import Modal from "react-modal";
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
// import './AddIncomeModal.css'


const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        width: '80%',
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "30px",
        backgroundColor: "#f3f4f6",
        border: "1px solid #8f8f8f66",
    },
};


Modal.setAppElement("#root");


export default function AddSalaryModal({ refetch }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const { token } = AuthUser()




    function closeModal() {
        setIsOpen(false);
    }


    const onSubmitForm = (data) => {

        const expense = {
            amount: data.amount,
            expense_date: data.expense_date,
            // image: data.image,
            name: data.name,
            message: data.message,
            // make unique id
            id: Math.random().toString(36).substr(2, 9)
        }
        // console.log(expense)
        // post data to database 
        fetch(`https://gym-management97.herokuapp.com/api/income/`, {
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


    return (

        <div className='my-5'>
            <div>
                <label for="my-modal-5" class="btn btn-success text-white font-bold modal-button">  <IoMdAddCircleOutline className='sm:text-2xl text-xl font-bold  mr-1' /> Add Salary</label>
            </div>
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <label for="my-modal-5" class="modal">
                <label class="modal-box lg:w-[60%] relative" for="">
                    <form onSubmit={handleSubmit(onSubmitForm)} id="my-modal-5">
                        <label for="my-modal-5" class="btn btn-sm text-white btn-error btn-circle absolute right-2 top-2">✕</label>
                        <div className=" mt-3">
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Source Name</span>
                                </label>
                                <input type="text" placeholder="Enter The Name of Salary Source" class="input input-bordered w-full focus:outline-none"
                                    {...register("name", {
                                        required: 'Name is required',
                                        minLength: {
                                            value: 3,
                                            message: 'Name must be at least 3 characters'
                                        }
                                    })}
                                    onKeyUp={(e) => {
                                        trigger('name');
                                    }} />
                                <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.name?.message}</small>
                            </div>
                        </div>
                        <div className=" mt-3 ">
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
                        <div className=" mt-3">
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

                        <div className=" mt-3">
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

                        <div className="flex gap-2 mt-12 relative">
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