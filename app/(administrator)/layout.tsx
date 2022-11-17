"use client";

import Image from "next/image";
import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserPlusIcon,
  PresentationChartLineIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  UserIcon,
  // Bars3Icon,
  // XMarkIcon,
} from "@heroicons/react/24/solid";
import Links from "./links";
import Burger from "./burger";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const links = {
    residents: [
      {
        name: "Dashboard",
        href: "/dashboard",
        Icon: HomeIcon,
      },
      {
        name: "Requests",
        href: "/dashboard/requests",
        Icon: DocumentDuplicateIcon,
      },
      {
        name: "Verifcations",
        href: "/dashboard/verifications",
        Icon: CheckCircleIcon,
      },
    ],
    statistics: [
      {
        name: "Reports",
        href: "/dashboard/reports",
        Icon: PresentationChartLineIcon,
      },
    ],
    administrator: [
      {
        name: "Account",
        href: "/dashboard/account",
        Icon: UserIcon,
      },
      {
        name: "Registration",
        href: "/dashboard/registration",
        Icon: UserPlusIcon,
      }
    ],
  };

  return (
    <div className="smooth mx-auto grid max-w-screen-television notebook:grid-cols-[auto,auto,1fr]">
      <aside>
        <div className="notebook:space-section smooth flex items-center justify-between p-4 notebook:block desktop:p-6">
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
          {/* Navigation */}
          <nav className="space-section hidden notebook:block">
            <Links name="Resident" list={links.residents} />
            <Links name="Statistic" list={links.statistics} />
            <Links name="Administrator" list={links.administrator} />
          </nav>
          {/* Burger Menu */}
          <Burger />
        </div>
      </aside>

      <div className="ml-0 hidden h-screen w-[1px] bg-slate-200 notebook:block" />

      <main className="scrollbar-thumb-rounded-full max-h-screen overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-500">
        <div className="smooth p-4 desktop:p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
