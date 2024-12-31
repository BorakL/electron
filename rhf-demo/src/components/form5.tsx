import React from 'react'
import {useForm} from "react-hook-form"

type Data = {
    task: string,
    time: string
}

const Form5 = () => {
    const data: Data = {
        task:"",
        time:""    
    }

    const {
        register,
        formState: {errors, touchedFields, dirtyFields, isDirty, isValid},
        handleSubmit
    } = useForm<Data>({defaultValues:data});

    const onSubmit = (data)=>{
        console.log("HI this form is submited")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" id="task" {...register("task", {
                    required: {
                        value: true,
                        message: "The task field is required."
                    }
                })}/>
                {errors.task && errors.task.message && <span>{errors.task.message}</span> }
            </div>
            <div>
                <input type="date" id="date" {...register("time", {
                    required: {
                        value: true,
                        message: "The data field is required"
                    }
                })}/>
                {errors.task && errors.time.message && <span>{errors.time.message}</span>}
            </div>
            <div>
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}

export default Form5