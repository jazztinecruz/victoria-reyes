import {
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const lists = [
  {
    description: "Resident request a new document",
    emphasize: "Barangay Indigency",
    time: "2 hours ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },

  {
    description: "Resident request a new document",
    emphasize: "Barangay Cedula",
    time: "30 minutes ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },

  {
    description: "Resident request a new document",
    emphasize: "Barangay ID",
    time: "1 hour ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },

  {
    description: "You've just declined someones request document",
    emphasize: "Barangay Indigency",
    time: "1 minute ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },

  {
    description: "Resident request a new document",
    emphasize: "Barangay Cedula",
    time: "5 minutes ago",
    Icon: <ClipboardDocumentCheckIcon />,
  },
];

const NotificationsPage = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 overflow-y-auto">
      <span className="text-sm">
        All <span className="font-semibold">({lists.length})</span>
      </span>

      <div className="mt-8 flex w-full flex-col gap-4 rounded">
        {lists.map((list, index) => (
          <div
            key={index}
            className="group flex cursor-pointer gap-3  px-8 py-4 hover:bg-slate-100 rounded-md">
            <button className="h-5 w-5 group-hover:text-brand">
              {list.Icon}
            </button>
            <div className="flex w-full flex-col gap-2 pl-3">
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

export default NotificationsPage;
