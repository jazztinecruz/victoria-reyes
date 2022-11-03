import "../styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={poppins.className}>
      <head></head>
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
};

export default RootLayout;
