const Client = (props) =>{
    return (
        <tr>
            <td>{props.detail.id}</td>
            <td>{props.detail.name}</td>
            <td>{props.detail.address}</td>
            <td>{props.detail.email}</td>
        </tr>
    );
}

const ClientList = () =>{
    let Clients = [
        {
            id:"1",
            name:"Raj1",
            address:"test  tst test test",
            email:"test@gmail.com",

        },
        {
            id:"2",
            name:"Raj2",
            address:"test2 tst2 test2 test2",
            email:"test2@gmail.com",

        },
        {
            id:"3",
            name:"Raj3",
            address:"test3  tst3 test3 test3",
            email:"test3@gmail.com",

        },
        {
            id:"4",
            name:"Raj4",
            address:"test4 tst4 test4 test4",
            email:"test4@gmail.com",

        }
    ];

    return (
        <>
        <div className="main-page"> 
        <h1>Client List</h1>
         <table>
            <tr>
                <td><strong>ID</strong></td>
                <td><strong>name</strong></td>
                <td><strong>Address</strong></td>
                <td><strong>Email</strong></td>
            </tr>
            {Clients.map((data)=> <Client key={data.id} detail={data}/>)}
        </table>   
        </div> 
        </>
    );
} 

export default ClientList;