import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const Modal = (props) => {
  const { handleClose, children, title } = props;
  const [isOpenModal, setIsOpen] = useState(false);
  return (
    <Dialog
      as="div"
      static
      className="relative z-50 bg-white"
      open={isOpenModal}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full bg-white border  max-w-2xl transform overflow-hidden rounded-lg modal-bg text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="leading-6 my-5 px-4 border-b pb-4 border-gray-400 font-bold text-2xl text-black dark:text-white mb-4 flex items-center justify-between "
            >
              {title}
              <div
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-500 hover:text-black  hover:bg-white p-1 rounded-full transition duration-150 ease-in-out"
                onClick={() => handleClose(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                  className="icon icon-tabler icon-tabler-x hover:text-black"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </Dialog.Title>
            <div className="mx-6 my-4">{children}</div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
