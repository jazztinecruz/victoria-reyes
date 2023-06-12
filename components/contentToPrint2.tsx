
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
            <DocumentTemplateAsBarragayCertificate requestsToPrint={request} key={request.id} />
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
    <div className="relative flex h-[90vh] w-[100%] flex-col items-center p-2 gap-1">
      <header className="flex flex-col w-full items-center border-b-2 border-black">
        <div className="flex justify-evenly items-center">
          <Image src="/images/logo1.png" width={70} height={70} alt="logo" />
          <span className="flex flex-col flex-1">
            <h1>Repulic of the Philippines</h1>
            <h2>Province of cavite</h2>
            <h2>City of damarinas</h2>
          </span>
          <Image src="/images/logo2.png" width={70} height={70} alt="logo"  />
        </div>
        <h1 className="text-2xl">OFFICE OF THE SANGGUNIANG BARANGAY</h1>
      </header>
      <main className="flex border-t-2 border-black h-full gap-1">
        <div className="flex flex-col gap-3 w-[35%] h-[100%] border-r-2 border-black">

            <div className="flex flex-col gap-1">
              <span className="font-bold text-[10px]">HON. LEONILA C. BUCAO</span>
              <span className="text-[0.6em]">PUNONG BARANGGAY</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-[10px]">HON. JOSEPHINE D. ARDA</span>
              <span className="text-[0.6em]">KAGAWAD</span>
              <span className="text-[0.6em]"> chairman: APPROPRATION COMMITEE</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-[10px]">HON. LERMA C. GARCIA</span>
              <span className="text-[0.6em]">KAGAWAD</span>
              <span className="text-[0.6em]"> chairman: WOMEN & FAMILY / YOUTH SPORTS COMMITEE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[10px]">HON. DOROTEO C. MAGDARAOG</span>
              <span className="text-[0.6em]">KAGAWAD</span>
              <span className="text-[0.6em]"> chairman: HUMAN RIGHTS COOPERATIVE COMMITEE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[10px]">HON. REYNALDO L. BOBADILLA</span>
              <span className="text-[0.6em]">KAGAWAD</span>
              <span className="text-[0.6em]"> chairman: RULES AND PRIVILEGES INFASTRUCTURE COMMITEE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[10px]">HON. NENA R. HERMAN</span>
              <span className="text-[0.6em]">KAGAWAD</span>
              <span className="text-[0.6em]"> chairman: HEALTH COMMITEE</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-[10px]">HON. LILIBETH T. PANABE</span>
              <span className="text-[0.6em]">KAGAWAD</span>
              <span className="text-[0.6em]"> chairman: ENVIRONMENTAL & EDUCATION COMMITEE</span>
            </div>


            <div className="flex flex-col">
              <span className="font-bold text-[10px]">MARK EDUARD ILANO</span>
              <span className="text-[0.6em]"> chairman: SANGUNIANG KABATAAN</span>
            </div>  

            <div className="flex flex-col">
              <span className="font-bold text-[10px]">MARK EDUARD ILANO</span>
              <span className="text-[0.6em]"> BARANGAY SECRETARY</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-[10px]">HELEN GRACE B. BEGIL</span>
              <span className="text-[0.6em]"> BARANGAY TREASURER</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-[10px]">CELERINA M. VIRAY</span>
              <span className="text-[0.6em]"> BARANGAY RECORD KEEPING</span>
            </div>

        </div>

        <div className="w-[65%] min-h-[100%] flex flex-col border-l-2 border-black">
            <h1 className="m-10 underline font-bold">CERTIFICATION</h1>
            
            <span className="m-2  text-start text-xs">DATE: {new Date().toLocaleDateString()}</span>

            <span className=" m-2  text-start text-xs">TO WHOM IT MAY CONCERN:</span>

            <p className=" text-xs mt-2 text-center p-2 tracking-tighter">This is to certify that <strong className="font-bold capitalize">{requestsToPrint?.user?.givenName} {requestsToPrint?.user?.middleName} {" "} {requestsToPrint?.user?.familyName}</strong>
              isa resident of block <span>{requestsToPrint?.user?.fullAddress}</span>Lot <span>{requestsToPrint?.user?.purok}</span> Barangay victoria Reyes,
              City of Dasmarifas, Cavite for . 1S a qualified availee of RA11261  or the First Time Job Seeker`s Act Of 2019.
              <br/>
              <br />
              I further certify that the holderibearer was informed of his/her rights,
              including the duties and responsibilities accorded by RA 11261 through
              the <strong> OATH OF UNDERTAKING </strong>    he/she has signed and executed in the
              presence of Barangay Official

              <br />
              <br />
              Signed this <span>{new Date().getDate()}<sup>th</sup> </span> day of <span>June</span>, <span>{new Date().getFullYear()}</span> in
              the City of Dasmarifias, Cavite

              <br />
              <br />
              The certification is valid only 1 (one year from the date of issuance)
            </p>

            <span className="text-start text-xs m-2">Thank you very much.</span>

            <span className="text-start text-xs m-2">Truly yours,</span>

            <div className="flex flex-col m-2 mt-10 text-start">
              <strong className="text-sm underlined text-black">Hon.Leonila C. Bucao</strong>
              <span className="text-xs">Punong Baranggay</span>
            </div>
        </div>
      </main>
    </div>
  );
};

export default content;
