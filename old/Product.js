const Product = (props)=>{
    console.log(props.productData)
    return(
        <>
            <h1>{props.title}</h1>
            <p>Price :- {props.price}</p>
            <p>Brand := {props.Brand}</p>
            {props.children}    
            <ProfileBox/>
        </>
    );
}

const ProfileBox = ()=>{
    const demo = ()=>{
        console.log("Popup Box Open");
    }
    const demo1 = ()=>{
        console.log("dummy contnet popup");
    }

    return(
        <>
            <h1>This is profile box</h1>
            <p>dumy profile</p>
            <button onClick={demo}>Popup</button>
            <button onClick={demo1}>Test content</button>
        </>
    )
}

export default Product;