import "../globals.css";
import Header from "@/components/layout/Header";


export default function RootLayout({ children }) {
  return (
    <div>
        <Header />
        <div className="w-full h-[65px]"></div>
        {children}
    </div>

  );
}
