import { useRouter } from "next/router";

export default function Clients() {
  const router = useRouter();

  function loadRoute() {
    // router.push('/clients/max/projecta')
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "max",
        clientprojectid: "project1"
      }
    });

    // with replace user will not go to back page
    // router.replace('/clients/max/projecta')
  }

  return (
    <div>
      <h1> Perticuler Client page</h1>
      <button onClick={loadRoute}>Load project 1</button>
    </div>
  );
}
