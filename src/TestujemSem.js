import React, { useState } from 'react';
import $ from "jquery";

function TestujemSem() {
    const { useState } = React;
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            url: form.attr("action"),
            type: "POST",
            dataType: "json",
            success: function(data) {
                console.log('success');
                console.log(data); // will print "message"
            }.bind(this),
            error: function(xhr, status, err) {
                console.log('error');
            }.bind(this)
            });
        }
    return (
        <div className="TestujemSem">
            <form
                action="http://localhost:80/xweb/PHP/server.php"
                method="POST"
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}
  
export default TestujemSem;