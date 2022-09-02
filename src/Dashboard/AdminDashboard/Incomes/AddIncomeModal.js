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
        width: '50%',
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "30px",
        backgroundColor: "#f3f4f6",
        border: "1px solid #8f8f8f66",
    },
};

Modal.setAppElement("#root");


export default function AddIncomeModal({ refetch }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const { token } = AuthUser()


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

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
                closeModal()
            }).catch(err => console.log(err))
    }


    return (

        <div className='mt-10'>
            {/* <button onClick={openModal}>
                <FontAwesomeIcon className='text-right text-xl ml-2' icon={faEdit}></FontAwesomeIcon>
            </button> */}
            <div onClick={openModal} className='bg-accent py-5 flex items-center justify-center rounded-2xl border-dashed border-2 cursor-pointer'>
                <div>
                    <h1 className='font-bold text-2xl'>Add Income</h1>
                    <IoMdAddCircleOutline className='text-3xl font-bold mx-auto mt-2' />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
                >
                
                <div className="text-xl font-bold border-b-[1px] border-[#8f8f8f66] pb-1">Add Expense</div>

                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div className=" mt-3">
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Source Name</span>
                            </label>
                            <input type="text" placeholder="Enter The Name of Expense Source" class="input input-bordered w-full focus:outline-none"
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
                            <input type="number" placeholder="Enter The Amount of Expense" class="input input-bordered w-full focus:outline-none"
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
                                <span class="label-text">Expense Date</span>
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


                    <div className="flex gap-2 mt-12">
                        <div>
                            <button onClick={closeModal} className="btn btn-sm btn-error bg-red-400 px-3 py-1 rounded-md text-white">
                                close
                            </button>
                        </div>
                        <div className="text-end">
                            <button
                                type='submit'
                                className="btn bg-green-500 px-3 py-1 rounded-md cursor-pointer btn-sm">Submit</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};