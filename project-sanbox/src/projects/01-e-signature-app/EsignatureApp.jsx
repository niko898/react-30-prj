import React, {useState} from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {
    const [name, setName] = useState("Your signature");
    const [date, setDate] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0"
    };
    document.body.style.background = "#eee";
    return (
        <div className='container text-center'>
            {/* <Title classes={"title"} text={"Name"}/> */}
            <Title classes={"title"} text={name}/>
            <Title
                classes={"main-title mb-4"}
                text={!date
                    ? "DoB"
                    : date}/>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure officia aperiam
                blanditiis explicabo exercitationem deleniti iusto id possimus necessitatibus.
                Officia magni aut voluptatem nemo temporibus in pariatur cum asperiores
                doloribus!
            </p>
            <footer
                className='d-flex'
                style={{
                    justifyContent: "space-around",
                    position: "relative",
                    top: "40vh"
                }}>
                <input type="date" 
                  value={date} 
                  style={inputStyle} 
                  onChange={handleDateChange}/>
                <input type="text" 
                  value={name} 
                  style={inputStyle} 
                  onChange={handleNameChange}/>
            </footer>
        </div>
    )
}
