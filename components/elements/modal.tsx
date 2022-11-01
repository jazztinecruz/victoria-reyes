import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  as?: "div" | "form";
  open: boolean;
  onClose: () => void;
};

const Modal = ({
  children,
  size = "medium",
  as = "div",
  open,
  onClose,
}: Props) => {
  let sizeStyle = "";

  switch (size) {
    case "small":
      sizeStyle = "max-w-md";
      break;
    case "medium":
      sizeStyle = "max-w-xl";
      break;
    case "large":
      sizeStyle = "max-w-3xl";
      break;
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="grid min-h-full items-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                as={as}
                className={`${sizeStyle} mx-auto w-full transform space-y-4 overflow-hidden rounded bg-white p-6 shadow transition-all duration-100`}>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
