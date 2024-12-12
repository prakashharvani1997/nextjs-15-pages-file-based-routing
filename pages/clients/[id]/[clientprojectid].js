import { useRouter } from "next/router";

export default function SelectedClientProject() {


  const router = useRouter();

  console.log('---query--r',router.query)
    return (
      <div>
        <h1> Selected Client Project page</h1>
      </div>
         
    );
  }
  