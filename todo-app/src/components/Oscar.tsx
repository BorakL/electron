type OscarProps = {
    children: React.ReactNode
}

const Oscar = (props: OscarProps)=>{    
    return(
        <div>
            Oscar goes to {props.children}
        </div>
    )
}

export default Oscar;