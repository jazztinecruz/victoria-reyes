import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
type contentProps = {
  componentRef: any;
  requestsToPrint: object[];
};
const content = ({ componentRef, requestsToPrint }: contentProps) => {
  return (
    <div className="fixed bottom-[-10555500px] right-[-105555500px]">
      <PDFExport paperSize={"A4"} ref={componentRef}>
        {requestsToPrint.map((request) => {
          return (
            <DocumentTemplateAsBarragayCertificate requestsToPrint={request} />
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
    <div className="relative flex h-[90vh] w-[100%] flex-col items-center justify-evenly p-10">
      <h1 className="mx-auto -mt-[60px] text-2xl font-bold">
        barangay certification
      </h1>

      <div className="flex flex-col items-center justify-evenly gap-5">
        <p className='w-full text-justify after:inline-block tracking-tight'>
          ({requestsToPrint?.documentId})
          aspernatur rerum adipisci saepe, provident, rem recusandae, blanditiis
          sit veritatis quis corrupti est perspiciatis distinctio commodi
        </p>
        

<p className='w-full text-justify after:inline-block tracking-tight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
          aspernatur rerum adipisci saepe, provident, rem recusandae, blanditiis
          sit veritatis quis corrupti est perspiciatis distinctio commodi
        </p>

        <span className="">For OFW/Seafarer</span>

    <p className='w-full text-justify after:inline-block tracking-tight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
          aspernatur rerum adipisci saepe, provident, rem recusandae, blanditiis
          sit veritatis quis corrupti est perspiciatis distinctio commodi
        </p>

        <p className="w-full text-justify after:inline-block">
          issued this <span></span> day of <span></span> at <span></span>
        </p>
      </div>

      <div className="flex w-[90%] justify-between gap-2 text-xs">
        <div className=" flex-1 border-t-2 border-black text-center">
          NAME OF BARANGGAY CHAIRPERSON OR AUTHORIZED BARANGAY OFFICIAL
        </div>

        <div className=" flex-1 border-t-2 border-black text-center">
          DESIGNATION/POSITION
        </div>
      </div>
    </div>
  );
};

export default content;
