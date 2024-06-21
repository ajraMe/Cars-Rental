const Container = ({children, className}) => {
    return (
        <div className={className} style={{padding: "0 15px"}}>
            {children}
        </div>
    )
}

export default Container;