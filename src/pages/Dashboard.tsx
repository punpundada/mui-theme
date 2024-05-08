import { sayHello } from "@/services/admission/user"
import { Link } from "react-router-dom"

const Dashboard = () => {

  return (
    <div onClick={sayHello}>Dashboard
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export default Dashboard