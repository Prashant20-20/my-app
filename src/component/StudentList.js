const Student = (props) =>{
    return (
        <tr>
            <td>{props.detail.id}</td>
            <td>{props.detail.name}</td>
            <td>{props.detail.email}</td>
        </tr>
    );
}

const StudentList = () =>{
    let Students = [
        {
            id:"1",
            name:"Raj1",
            email:"test@gmail.com",

        },
        {
            id:"2",
            name:"Raj2",
            email:"test2@gmail.com",

        },
        {
            id:"3",
            name:"Raj3",
            email:"test3@gmail.com",

        },
        {
            id:"4",
            name:"Raj4",
            email:"test4@gmail.com",

        }
    ];

    return (
        <>
        <h1>Student List</h1>
         <table>
            <tr>
                <td><strong>ID</strong></td>
                <td><strong>name</strong></td>
                <td><strong>Email</strong></td>
            </tr>
            {Students.map((data)=> <Student key={data.id} detail={data}/>)}
        </table>    
        </>
    );
} 

export default StudentList;