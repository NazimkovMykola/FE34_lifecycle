import { Paper, Button} from "@mui/material"
import { useState } from "react"
import Counter from "./Counter"

const Wrapper = () => {
  // стейт не можна міняти напряму
  const [isViewCounter, setIsViewCounter] = useState(false)

  const onClick = () => {
    setIsViewCounter((prevState)=> !prevState)
  }

  return (
    <Paper sx={{ padding: "2rem", width: "30%" }} elevation={12}>
      {isViewCounter && <Counter />}
      <Button onClick={onClick} variant="contained">
        View Counter
      </Button>
    </Paper>
  )
}
export default Wrapper
