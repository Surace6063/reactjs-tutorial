import HeroSection from "../components/home/HeroSection"
import ToolsList from "../components/home/ToolsList"
import TodoList from "../components/TodoList"
import UserList from "../components/UserList"

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      {/* <HeroSection />
      <ToolsList /> */}

      <TodoList />

      <UserList />
    </div>
  )
}
export default HomePage