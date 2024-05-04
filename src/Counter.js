import { Paper, Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import Logger from "./Logger"

const Counter = () => {
    // стейт не можна міняти напряму
    const [count, setCount] = useState(0)
    const [logs, setLogs] = useState([])
    // монутвання = це useEffect без масива залежностей

    useEffect(()=> {
        const date = new Date()
         setLogs((prev) => {
           const newLogs = [...prev]
           newLogs.push("Я змонтувався" + date.toUTCString())
           return newLogs
         })
        setLogs(prev => {
           const newLogs = [...prev]
           newLogs.push(("Я оновився" + date.toUTCString()))
           return newLogs
         })
        return function unMount () {
         setLogs(prev => {
           const newLogs = [...prev]
           newLogs.push("Я розмонтувався" + date.toUTCString())
           return newLogs
         })
        }
    },[count])

    const onClick =  () => {
        setCount(prevState => prevState + 1)
    }
    
    return (
      <Paper sx={{padding: '2rem', width: '30%', marginBottom: '20px'}} elevation={12}>
        <TextField sx={{marginRight: '1rem'}}value={count} id="standard-basic" label="" variant="standard" />
        <Button sx={{marginBottom: '2rem'}} onClick={onClick} variant="contained">Increment</Button>
        <Logger logs={logs}/>
      </Paper>
    )
}
export default Counter