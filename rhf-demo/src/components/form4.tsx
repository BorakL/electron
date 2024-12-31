import {useForm} from 'react-hook-form'
import React,{useEffect} from 'react'

type Data = {
    name: string,
    email: string
}

const data:Data = {
    name: "Pera",
    email: "rape@asdf.com"
}

const Form4 = ()=>{
    const {
        register,
        handleSubmit,
        formState: {errors, touchedFields, dirtyFields, isValid, isSubmitting},
        watch,
        getValues,
    } = useForm<Data>();

    const name = watch("name")
    
    const onSubmit = (data:Data)=>{ 
        console.log("Submitted Data: ",data)
    }

    const getAttributes = () => { return {name:"surname", type:"text", id:"surname"} }

    useEffect(()=>{
        console.log("errors",errors)
    },[errors])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{name}</h1>
            {isValid ? <h1>Valid</h1> : <h1>Not Valid!</h1>}
            <div>
                <label htmlFor="surname">Surname: </label>
                <input {...getAttributes()} />
            </div>
            <div className="input-field">
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    {...register("name",{
                        required: {
                            value: true,
                            message: "The name is required"
                        }
                    })}
                    style={{backgroundColor: touchedFields.name ? "green" : "none", color: dirtyFields.name ? "red" : "black"}}
                />
                <span>{errors.name && errors.name.message}</span>
            </div>
            <div className="input-field">
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    id="email" 
                    {...register("email", {
                        required: {
                            value: true,
                            message: "The email is required"
                        }
                    })}
                    style={{backgroundColor: touchedFields.email ? "green" : "none", color: dirtyFields.email ? "red" : "black"}}
                />
                <span>{errors.email && errors.email.message}</span>
            </div>
            <button type="submit" disabled={!isValid}>Submit</button>
            <button type="button" onClick={()=>console.log(getValues())}>Get Values</button>
        </form>
    )
}

export default Form4;