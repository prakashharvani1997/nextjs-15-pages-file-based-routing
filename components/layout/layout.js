import Link from "next/link";
import MainHeader from "./main-header";
 
export default function Layout({children}) {
  return (
   <>
   <MainHeader />

    <main>
        {children}
    </main>

   </>
  );
}
