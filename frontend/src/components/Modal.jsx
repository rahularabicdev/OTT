"use client";

import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

import { hideModal } from "@/store/slices/modalSlice";

const Modal = ({ title = "Modal Title", children }) => {
  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(hideModal());

  return (
    <div className="fixed top-0 left-0 h-full w-full z-50 bg-[#00000091] backdrop-blur-sm">
      <div className="absolute top-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-11/12 max-w-[800px] bg-darkAlt p-10 rounded-lg">
        <button
          className="absolute top-3 -right-8 w-8 h-8 flex items-center justify-center bg-primary rounded-e-lg text-dark text-lg"
          onClick={handleModalClose}
        >
          <RxCross2 />
        </button>
        <h4 className="text-2xl font-bold text-light">{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default Modal;
