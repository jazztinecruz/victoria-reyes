//@ts-ignore
//@ts-nocheck

import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Image from "next/image";
type contentProps = {
  componentRef: any;
  requestsToPrint: any[];
};
const content = ({ componentRef, requestsToPrint }: contentProps) => {
  return (
    <div className="fixed bottom-[-10555500px] right-[-105555500px]">
      <PDFExport paperSize={"A4"} ref={componentRef}>
        {requestsToPrint.map((request) => {
          return (
            <DocumentTemplateAsBarragayCertificate
              requestsToPrint={request}
              key={request.id}
            />
          );
        })}
      </PDFExport>
    </div>
  );
};

type DocumenTemplateProps = {
  requestsToPrint: any;
};

const DocumentTemplateAsBarragayCertificate = ({
  requestsToPrint,
}: DocumenTemplateProps) => {
  return (
    <div className="relative flex h-[90vh] w-[100%] flex-col items-center gap-1 p-2">
      <header className="flex w-full flex-col items-center border-b-2 border-black">
        <div className="flex items-center justify-evenly">
          <img
            src="/images/logo1.png"
            width={'70px'}
            height={'70px'}
            
            alt=""
          />
          <span className="flex flex-1 flex-col">
            <h1>Repulic of the Philippines</h1>
            <h2>Province of cavite</h2>
            <h2>City of damarinas</h2>
          </span>
          <img
            src="/images/logo2.png"
            width={'70px'}
            height={'70px'}
            
            alt=""
          />
        </div>
        <h1 className="text-2xl">OFFICE OF THE SANGGUNIANG BARANGAY</h1>
      </header>
      <main className="flex h-full gap-1 border-t-2 border-black">
        <div className="flex h-[100%] w-[35%] flex-col gap-3 border-r-2 border-black">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold">HON. LEONILA C. BUCAO</span>
            <span className="text-[0.6em]">PUNONG BARANGGAY</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold">
              HON. JOSEPHINE D. ARDA
            </span>
            <span className="text-[0.6em]">KAGAWAD</span>
            <span className="text-[0.6em]">
              {" "}
              chairman: APPROPRATION COMMITEE
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold">HON. LERMA C. GARCIA</span>
            <span className="text-[0.6em]">KAGAWAD</span>
            <span className="text-[0.6em]">
              {" "}
              chairman: WOMEN & FAMILY / YOUTH SPORTS COMMITEE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold">
              HON. DOROTEO C. MAGDARAOG
            </span>
            <span className="text-[0.6em]">KAGAWAD</span>
            <span className="text-[0.6em]">
              {" "}
              chairman: HUMAN RIGHTS COOPERATIVE COMMITEE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold">
              HON. REYNALDO L. BOBADILLA
            </span>
            <span className="text-[0.6em]">KAGAWAD</span>
            <span className="text-[0.6em]">
              {" "}
              chairman: RULES AND PRIVILEGES INFASTRUCTURE COMMITEE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold">HON. NENA R. HERMAN</span>
            <span className="text-[0.6em]">KAGAWAD</span>
            <span className="text-[0.6em]"> chairman: HEALTH COMMITEE</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold">
              HON. LILIBETH T. PANABE
            </span>
            <span className="text-[0.6em]">KAGAWAD</span>
            <span className="text-[0.6em]">
              {" "}
              chairman: ENVIRONMENTAL & EDUCATION COMMITEE
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold">MARK EDUARD ILANO</span>
            <span className="text-[0.6em]"> chairman: SANGUNIANG KABATAAN</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold">MARK EDUARD ILANO</span>
            <span className="text-[0.6em]"> BARANGAY SECRETARY</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold">HELEN GRACE B. BEGIL</span>
            <span className="text-[0.6em]"> BARANGAY TREASURER</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold">CELERINA M. VIRAY</span>
            <span className="text-[0.6em]"> BARANGAY RECORD KEEPING</span>
          </div>
        </div>

        <div className="flex min-h-[100%] w-[65%] flex-col border-l-2 border-black">
          <h1 className="m-10 font-bold underline">CERTIFICATION</h1>

          <span className="m-2  text-start text-xs">
            DATE: &nbsp;{new Date().toLocaleDateString()}
          </span>

          <span className=" m-2  text-start text-xs">
            TO WHOM IT MAY CONCERN:
          </span>

          <p className=" mt-2 p-2 text-center text-xs tracking-tighter">
            This is to certify that{" "}
            <strong className="font-bold capitalize">
              {requestsToPrint?.user?.givenName}{" "}
              {requestsToPrint?.user?.middleName}{" "}
              {requestsToPrint?.user?.familyName}
            </strong>
            isa resident of block{" "}
            <span>{requestsToPrint?.user?.fullAddress}</span>Lot &nbsp;
            <span>{requestsToPrint?.user?.purok}</span>&nbsp; Barangay victoria
            Reyes, City of Dasmarifas, Cavite for . 1S a qualified availee of
            RA11261 &nbsp; or the First Time Job Seeker`s Act Of 2019.
            <br />
            <br />I further certify that the holderibearer was informed of
            his/her rights, including the duties and responsibilities accorded
            by RA 11261 through the <strong> OATH OF UNDERTAKING </strong>{" "}
            &nbsp; &nbsp; &nbsp; he/she has signed and executed in the presence
            of Barangay Official
            <br />
            <br />
            Signed this{" "}
            <span>
              {new Date().getDate()}
              <sup>th</sup>{" "}
            </span>{" "}
            day of <span>June</span>, <span>{new Date().getFullYear()}</span> in
            the City of Dasmarifias, Cavite
            <br />
            <br />
            The certification is valid only 1 (one year from the date of
            issuance)
          </p>

          <span className="m-2 text-start text-xs">Thank you very much.</span>

          <span className="m-2 text-start text-xs">Truly yours,</span>

          <div className="m-2 mt-10 flex flex-col text-start">
            <strong className="underlined text-sm text-black">
              Hon.Leonila C. Bucao
            </strong>
            <span className="text-xs">Punong Baranggay</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default content;
