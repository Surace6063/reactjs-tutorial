import HeroSection from "../components/home/HeroSection";
import ToolsList from "../components/home/ToolsList";
import TodoList from "../components/TodoList";
import Button from "../components/ui/button";
import UserList from "../components/UserList";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      {/* <HeroSection />
      <ToolsList /> */}

      {/* <TodoList />

      <UserList /> */}

      <div className="space-x-6">
        <Button>
          Login
        </Button>

        <Button variant="secondary" size="sm">
          Register
        </Button>

        <Button variant="outline">
          explore
        </Button>

      </div>

    </div>
  );
};
export default HomePage;
