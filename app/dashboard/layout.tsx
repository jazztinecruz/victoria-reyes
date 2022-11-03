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
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Links from "./links";
import Burger from "./burger";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const links = {
    residents: [
      {
        name: "Dashboard",
        href: "/dashboard/123/",
        Icon: HomeIcon,
      },
      {
        name: "Requests",
        href: "/dashboard/123/requests",
        Icon: DocumentDuplicateIcon,
      },
      {
        name: "Verifcations",
        href: "/dashboard/123/verifications",
        Icon: CheckCircleIcon,
      },
    ],
    statistics: [
      {
        name: "Reports",
        href: "/dashboard/123/reports",
        Icon: PresentationChartLineIcon,
      },
    ],
    administrator: [
      {
        name: "Account",
        href: "/dashboard/123/account",
        Icon: UserIcon,
      },
      {
        name: "Registration",
        href: "/dashboard/123/registration",
        Icon: UserPlusIcon,
      },
      {
        name: "Settings",
        href: "/dashboard/123/settings",
        Icon: Cog6ToothIcon,
      },
    ],
  };

  return (
    <div className="smooth mx-auto grid max-w-screen-television notebook:grid-cols-[auto,auto,1fr]">
      <aside>
        <div className="notebook:space-section smooth flex items-center justify-between p-4 notebook:block desktop:p-6">
          {/* Heading */}
          <section className="flex items-center gap-4">
            <div className="relative aspect-square w-12 flex-none">
              <Image
                alt="Victoria Reyes Logo"
                src="/images/victoria-reyes-logo.svg"
                fill={true}
                blurDataURL="/images/victoria-reyes-logo.svg"
                placeholder="blur"
                priority
                className="object-cover"
              />
            </div>
            <h1 className="notebook:hidden desktop:block">
              Barangay{" "}
              <span className="font-bold">
                <br />
                Victoria Reyes
              </span>
            </h1>
          </section>
          {/* Navigation */}
          <nav className="space-section hidden notebook:block desktop:ml-6">
            <Links name="Resident" list={links.residents} />
            {/* <Links name="Statistic" list={links.statistics} />
            <Links name="Administrator" list={links.administrator} /> */}
          </nav>
          {/* Burger Menu */}
          <Burger />
        </div>
      </aside>

      <div className="ml-0 hidden h-screen w-[1px] bg-slate-200 notebook:block desktop:ml-16" />

      <main className="scrollbar-thumb-rounded-full max-h-screen overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-500">
        <div className="smooth p-4 desktop:p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
