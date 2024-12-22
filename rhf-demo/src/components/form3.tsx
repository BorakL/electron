import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

//Create form with next fields:
// - name (string)
// - email (email)
// - age (number)
// - measurements ({height, weight})
// - nicknames (dinamic field - string[])
// - social networks (dinamic field - {facebook:"www.face..."}[])
// - phone numbers (dinamic field -  string[])
// - three best movies (string[])

type Data = {
    name: string,
    email: string,
    age: number,
    measurements: {height: number, weight: number},
    socialNetworks: {}[],
    phoneNumbers: string[],
    threeBestMovies: string[]
}

const data = {
    name: "",
    email: "",
    age: 0,
    measurements: {
        height: 0,
        weight: 0
    },
    socialNetworks: [{}],
    phoneNumbers: [],
    bestMovies: []
}


const Form3 = ()=> {
    const form = useForm<Data>({defaultValues: data});
    const {register, handleSubmit, formState, control} = form;
    const {fields, append, remove} = useFieldArray({
        name: 'socialNetworks',
        control
    })


    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        {...register("name", {
                            required: {
                                value: true,
                                message: "The name is required"
                            }
                        })}
                    />
                    <span>{formState.errors?.name}</span>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register("email", {
                            required: {
                                value: true,
                                message: "The email is required"
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+@w+/,
                                message: "Inccorect format of email!"
                            }
                        })}
                    />
                    <span>{formState.errors?.email}</span>
                </div>
                <div>
                    <label htmlFor="height">Height: </label>
                    <input 
                        type="number" 
                        id="height" 
                        {...register("measurements.height",{
                            max: {
                                value:200,
                                message: "You are too tall"
                            }
                        })} 
                    />
                    <span>{formState.errors?.measurements?.height}</span>
                </div>
                <div>
                    <label htmlFor="weight">Weight: </label>
                    <input 
                        type="number" 
                        id="weight"
                        {...register("measurements.weight",{
                            max: {
                                value: 100,
                                message: "You are overweight"
                            }
                        })}
                    />
                    <span>{formState.errors?.measurements?.weight}</span>
                </div>
                <div>
                    {/* <label htmlFor="socialNetworks">Social Networks: </label>
                    {fields.map((field,index) => {
                        return (
                            <div>
                                <input 
                                    type="text"  
                                    id="socialNetworks"
                                    {...register(`socialNetworks.${index}`)}
                                />
                                {index > 0 && (
                                    <button type="button" onClick={()=>remove(index)}>
                                        Remove
                                    </button>
                                )}
                            </div>
                        )
                    })}
                    <button type="button" onClick={()=>append({})}>Add socialNetworks</button> */}
                </div>
            </form>
        </div>
    )
}

export default Form3;