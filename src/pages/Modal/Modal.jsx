import React from "react";

const Modal = () => {
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box text-center">
          <h2 className="font-bold text-2xl text-primary">
            Save 10% Off Your First Cleaning
          </h2>
          <p className="py-4">
            Just fill out the form below and we will reach out to you with a
            discount code for 10% off your first cleaning
          </p>
          <form action="">
            <div>
              <input
                type="email"
                placeholder="Enter you email here"
                className="input input-bordered w-full max-w-md my-8"
              />
            </div>
            <button
              type="submit"
              className="btn w-full bg-primary text-accent max-w-md"
            >
              Submit
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
