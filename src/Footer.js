import React from "react";

function Footer({ length }) {
    let today = new Date();

    return (
        <footer>
            <p>{length} List {length === 1 ? "Item" : "Items"}</p>
            <p>Copyright &copy; {today.getDate()}</p>
        </footer>
    )
}

export default Footer;