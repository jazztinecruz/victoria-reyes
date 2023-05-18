"use client";

import Image from "next/image";
import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserPlusIcon,
  CheckCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Links from "./links";
import Burger from "./burger";
import {
  CircleStackIcon,
  DocumentTextIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Admin } from "@prisma/client";

const Sidebar = ({ admin }: { admin: Admin }) => {
  const links = {
    residents: [
      {
        name: "Dashboard",
        href: `/${admin.id}/dashboard`,
        Icon: HomeIcon,
      },
      {
        name: "Requests",
        href: `/${admin.id}/dashboard/requests`,
        Icon: DocumentDuplicateIcon,
      },
    ],
    administrator: [
      {
        name: "Registration",
        href: `/${admin.id}/dashboard/registration`,
        Icon: UserPlusIcon,
      },
      {
        name: "Verifications",
        href: `/${admin.id}/dashboard/verifications`,
        Icon: CheckCircleIcon,
      },
    ],
    maintenance: [
      {
        name: "Documents",
        href: `/${admin.id}/dashboard/document-maintenance`,
        Icon: DocumentTextIcon,
      },
      {
        name: "Payments",
        href: `/${admin.id}/dashboard/payment-maintenance`,
        Icon: CircleStackIcon,
      },
      {
        name: "Signatories",
        href: `/${admin.id}/dashboard/signatories-maintenance`,
        Icon: UserCircleIcon,
      },
      {
        name: "Logout",
        href: "/",
        Icon: ArrowLeftOnRectangleIcon,
      },
    ],
  };

  return (
    <div className="notebook:space-section smooth flex flex-col items-center justify-between p-4 notebook:block desktop:p-6">
      {/* Heading */}
      <section className="relative z-40 flex items-center gap-4">
        <Image
          alt="Victoria Reyes Logo"
          src="/images/victoria-reyes-logo.svg"
          blurDataURL="/images/victoria-reyes-logo.svg"
          placeholder="blur"
          priority
          width={48}
          height={48}
          className="object-cover"
        />
        <h1 className="notebook:hidden desktop:block">
          Barangay{" "}
          <span className="font-bold">
            <br />
            Victoria Reyes
          </span>
        </h1>
      </section>

      {/* name */}
      <div className="flex flex-col">
        <div className="font-bold uppercase">{admin.name}</div>
        <div className="text-xs">{admin.id}</div>
      </div>

      {/* Navigation */}
      <nav className="space-section hidden notebook:block">
        <Links name="Resident" list={links.residents} />
        <Links name="Administrator" list={links.administrator} />
        <Links name="Maintenance" list={links.maintenance} />
      </nav>
      {/* Burger Menu */}
      <Burger />
    </div>
  );
};

export default Sidebar;
