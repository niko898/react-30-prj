import { useEffect, useRef, useState } from "react";
import React from "react";
import Title from "../components/Title";
import ContactData from "./Data.json";
import Contact from "./Contact";

export default function FilterContactsApp() {

    let inputSearch = useRef(null);
    useEffect(() => {
        inputSearch.current.focus();
    }, []);

    const [searchContent, setSearchContent] = useState("");

  return (
    <div className="text-center">
        <Title text={"Filter Contacts App"} />
        <input 
            type="text" 
            placeholder="Search by first name" 
            className="mb-2" 
            style={{ padding: ".3rem .5rem" }}
            ref={inputSearch}
            onChange={(e) => setSearchContent(e.target.value)}
        />
        <section 
            className="d-flex" 
            style={{ gap: 15, maxWidth: "1600", margin: "auto", flexWrap: "wrap" }}
        >
            {ContactData.filter((contact) => {
                if(searchContent === "") {
                    return contact;
                } else if (contact.first_name.toLocaleLowerCase().includes(searchContent.toLocaleLowerCase())) {
                    return contact;
                }
            }).map((contact) => (
                <Contact contact={contact} cardColor={"card-danger"} textColor={"text-dark"} />
            ))}
        </section>
    </div>
  );
}
