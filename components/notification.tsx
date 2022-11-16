import {
  ClipboardDocumentCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  handler: any;
};

const lists = [
  {
    description: "Approved your request",
    emphasize: "Barangay Indigency",
    time: "2 hours ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },

  {
    description: "Approved your request",
    emphasize: "Barangay Cedula",
    time: "30 minutes ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },

  {
    description: "You've requested a",
    emphasize: "Barangay ID",
    time: "1 hour ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },

  {
    description: "Declined your request",
    emphasize: "Barangay Indigency",
    time: "1 minute ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },

  {
    description: "You can now claim your",
    emphasize: "Barangay Cedula",
    time: "5 minutes ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },
];

const Notification = ({ handler }: Props) => {
  return (
    <div className="2xl:w-4/12 absolute right-0 top-0 bottom-0 z-50 h-full animate-appear overflow-y-auto bg-white p-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold leading-6 text-gray-800 focus:outline-none">
            Notifications
          </span>
          <XMarkIcon
            onClick={handler}
            className="h-5 w-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          />
        </div>
        <span className="text-sm">
          All <span className="font-semibold">({lists.length})</span>
        </span>
      </div>

      <div className="mt-8 flex w-full flex-col gap-4 rounded">
        {lists.map((list, index) => (
          <div
            key={index}
            className="group flex cursor-pointer gap-3  px-8 py-4 hover:bg-slate-100">
            <button className="h-5 w-5 group-hover:text-brand">
              {list.Icon}
            </button>
            <div className="flex flex-col gap-2 pl-3">
              <p className="text-sm leading-none focus:outline-none">
                <span className="group-hover:text-brand ">
                  {list.description}
                </span>{" "}
                <span className="font-medium group-hover:text-brand">
                  {list.emphasize}
                </span>
              </p>
              <p className="pt-1 text-xs leading-3 text-gray-500 focus:outline-none">
                {list.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
