import { useState } from "react"

function Form() {
    // let [fullName, setFullName] = useState("");
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
    })

    let handleChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    }
    let handleSUbmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: ""
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSUbmit}>
                <label htmlFor="fullname">Full name</label>
                <input type="text" value={formData.fullName} required name="fullName" onChange={handleChange} placeholder="name" />
                <label htmlFor="username"></label>
                <input type="text" value={formData.userName} required name="userName" onChange={handleChange} placeholder="name" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form