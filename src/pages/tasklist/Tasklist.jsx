import "./tasklist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Tasks from "../../components/tasks/Tasks"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Tasks/>
      </div>
    </div>
  )
}

export default List