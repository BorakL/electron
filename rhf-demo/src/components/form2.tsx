import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

const Form2 = ()=>{
    type FormValues = {
        username: string,
        email: string,
        social: {
            twitter: string,
            facebook: string
        },
        phoneNumbers: string[],
        age: number,
        dob: string,
        phNumbers: {number:string}[]
    }

    const form = useForm<FormValues>({
        defaultValues:{
            username: "Batman",
            email: "",
            social: {
                twitter: "",
                facebook: ""
            },
            phoneNumbers: ["",""],
            age: 0,
            dob: "",
            phNumbers: [{number:""}]
        }
    });
    
    const onSubmit = (data: FormValues) => {
        console.log("Form sumitted", data)
    }

    const {register, handleSubmit, formState, control} = form;
    const {errors} = formState;
    
    const {fields, append, remove} = useFieldArray({
        name: 'phNumbers',
        control
    })

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <input 
                        type="text"  
                        id="username"
                        {...register("username",{
                          required: {
                                value: true,
                                message: "Username is required"
                            } 
                        })} 
                    />
                    <span>{errors.username?.message}</span>
                </div>
                <div>
                    <input 
                        type="email"  
                        id="email" 
                        {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-0]/,
                                message: "Invalid email format"
                            },
                            validate: (fieldValue)=>{
                                return fieldValue!=="admin@example.com" || "Enter a different email address"
                            }
                        })}
                    />
                    <span>{errors.email?.message}</span>
                </div>
                <div>
                    <input 
                        type="text"
                        id="twitter" 
                        {...register("social.twitter")}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="facebook"
                        {...register("social.facebook")} 
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        id="phoneNumber1" 
                        {...register("phoneNumbers.0")}
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        id="phoneNumber2" 
                        {...register("phoneNumbers.1")}
                    />
                </div>
                <div>
                    <label htmlFor="">List of phone numbers</label>
                    <div>
                        {fields.map((field,index) => {
                            return(
                                <div className="form-control" key={field.id}>
                                    <input type="text" {...register(`phNumbers.${index}.number` as const)} />
                                    {index > 0 && (
                                        <button type="button" onClick={()=>remove(index)}>
                                            Remove
                                        </button>
                                    )}
                                </div>
                            )
                        })}
                        <button type="button" onClick={()=>append({number:""})}>Add number</button>
                    </div>
                </div>
                <div>
                <label htmlFor="">Date of birth</label>
                    <input 
                        type="date" 
                        id="dob" 
                        {...register("dob", {
                            valueAsDate: true,
                            required: {
                                value: true,
                                message: "Age is required"
                            }
                        })} 
                    />
                    <span>{errors.dob?.message}</span>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form2;