import { useState } from "react";
import styles from "../component/Contactform.css"; 

const Contactform = () => {
  const [name, setName] = useState("Raj");
  const [email, setEmail] = useState("test@getDefaultNormalizer.com");
  const [text, setText] = useState("dummy test");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

         
    };
    return(
        <>
        <div className={styles.Contactform}>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
             <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="name" />
            </div>
             <div className="form-control">
                <label htmlFor="name">Message</label>
                <textarea type="text" />
            </div>

           <div className="form-control"><button text="Submit">Submit</button></div> 
            <div>{name + " " + email + " " + text}</div>
           <div>
            
           </div>
        </form>
        </div>
        </>
    );
}


export default Contactform;