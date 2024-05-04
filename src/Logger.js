
const Logger = (props) => {
    const arr = props.logs
    return(
        arr?.map((el)=> {
           return <div>
              <div>{el}</div>
              <hr></hr>
            </div>
        })
    )
}
export default Logger;