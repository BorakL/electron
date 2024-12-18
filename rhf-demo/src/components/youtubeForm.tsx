import React from 'react';

import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";

type FormValues = {
    username: string,
    email: string,
    channel: string
}

export const YoutubeForm = () => {
    let renderCount = 0;
    const form = useForm<FormValues>({
        defaultValues: {
            username: "Betman",
            email: "",
            channel:""
        }
    });
    const {register,control, handleSubmit, formState} = form;
    const {errors} = formState;
    const onSubmit = (data: FormValues)=>{
        console.log("Form submited: ", data)
    }

    return (
        <div>
            <h1>Youtube Form</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label>Username</label>
                <input 
                    type="text" 
                    id="username" 
                    {...register("username", {
                        required: 'Username is required',
                    })} /> 
                <p className="error">{errors.username?.message}</p>
                <br/>

                <label>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    {...register("email", {
                        pattern: {
                            value: /^[a-zA-Z0-9]/,
                            message: "The email is required field"
                        },
                        validate: (fieldValue)=>{
                            return fieldValue !== "admin@example.com" || "Enter the different email address"
                        }
                    })}
                /> 
                <p className="error">{errors.email?.message}</p>
                <br/>

                <label htmlFor="channel">Channel</label>
                <input 
                    type="text" 
                    id="channel"
                    {...register("channel", {
                        required: "The channel is required field"
                    })} /> 
                <p className="error">{errors.channel?.message}</p>
                <br/>

                <button>Submit</button>
            </form>     
            <DevTool control={control} />       
        </div>
    )
}