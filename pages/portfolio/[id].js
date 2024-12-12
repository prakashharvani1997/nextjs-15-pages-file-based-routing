import { useRouter } from "next/router";

export default function PortfolioProject({}) {

    const router = useRouter();

    console.log('---query--r',router.query)
    console.log('--router.pathname---r',router.pathname)

    return (
      <div>
        <h1>Portfolio Project Page</h1>
      </div>
         
    );
  }
  
  