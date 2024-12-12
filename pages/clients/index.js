import Link from "next/link";

export default function Clients() {

  const cliets = [{
    id:'manu' , name : 'Manual'
  },{
    id:'max' , name : 'Maximilian'
  }]
    return (
      <div>
        <h1> Clients page</h1>

        <ul>
          {
            cliets.map((x)=>(<li key={x.id}>
              <Link href={'/clients/'+x.id}> {x.name} </Link>
            </li>))
          }
        
       
      </ul>

      </div>
         
    );
  }
  