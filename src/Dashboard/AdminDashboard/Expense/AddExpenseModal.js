import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from "react-modal";
import { IoMdAddCircleOutline } from 'react-icons/io';


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


export default function AddExpenseModal({ todo }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }


    const handleSubmit = (todo) => {

        // setIsReload(true);
        closeModal();
    }


    return (
        <div className='mt-8'>
            {/* <button onClick={openModal}>
                <FontAwesomeIcon className='text-right text-xl ml-2' icon={faEdit}></FontAwesomeIcon>
            </button> */}
            <div onClick={openModal} className='bg-accent py-5 flex items-center justify-center rounded-2xl border-dashed border-2 cursor-pointer'>
                <div>
                    <h1 className='font-bold text-2xl'>Add Expense</h1>
                    <IoMdAddCircleOutline className='text-3xl font-bold mx-auto mt-2' />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <div className="text-xl font-bold border-b-[1px] border-[#8f8f8f66] pb-1">Add Expense</div>

                <div>
                    <div className=" mt-3">
                        <div class="form-control w-full  bg-accent">
                            <label class="label">
                                <span class="label-text">Source Name</span>
                            </label>
                            <input type="text" placeholder="Enter The Name of Expense Source" class="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className=" mt-3 ">
                        <div class="form-control w-full  bg-accent">
                            <label class="label">
                                <span class="label-text">Amount</span>
                            </label>
                            <input type="number" placeholder="Enter The Amount of Expense" class="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className=" mt-3">
                        <div class="form-control w-full  bg-accent">
                            <label class="label">
                                <span class="label-text">Expense Date</span>
                            </label>
                            <input type="date" class="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className=" mt-3">
                        <div class="form-control w-full  bg-accent">
                            <label class="label">
                                <span class="label-text">Upload File</span>
                            </label>
                            <input type="file" placeholder="Write Any Message For This Income" class="input w-full focus:outline-none h-full pl-0 rounded-none shadow-none border-none" />
                        </div>
                    </div>


                    <div className="flex gap-2 mt-12">
                        <div>
                            <button onClick={closeModal} className="btn btn-sm btn-error bg-red-400 px-3 py-1 rounded-md text-white">
                                close
                            </button>
                        </div>
                        <div className="text-end">
                            <button
                                onClick={() => handleSubmit(todo)}
                                className="btn bg-green-500 px-3 py-1 rounded-md cursor-pointer btn-sm">Submit</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};