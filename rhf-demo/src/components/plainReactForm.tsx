import React, {useState} from 'react'

const PlainReactForm = ()=>{
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        age: 0
    }) 

    const onChangeHandler = (e) => { 
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("formData",formData)
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" onChange={onChangeHandler}/> 
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" onChange={onChangeHandler}/> 
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input type="number" id="number" name="age" onChange={onChangeHandler}/> 
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default PlainReactForm;