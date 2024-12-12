import { useRouter } from "next/router";

export default function Slug() {

  const router = useRouter();

  console.log('---query--r',router.query)
    return (
      <div>
        <h1> Slug page</h1>
      </div>
         
    );
  }
  