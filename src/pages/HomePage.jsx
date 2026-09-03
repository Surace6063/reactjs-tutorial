import HeroSection from "../components/home/HeroSection";
import ToolsList from "../components/home/ToolsList";
import TodoList from "../components/TodoList";
import { Button } from "@/components/ui/button";
import UserList from "../components/UserList";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      {/* <HeroSection />
      <ToolsList /> */}

      {/* <TodoList />

      <UserList /> */}

      <div className="space-x-6">
        <Button>Login</Button>

        <Button variant="secondary">Register</Button>

        <Button variant="outline">explore</Button>

        <Button variant="destructive">explore</Button>

        <div className="mt-6">
          <AlertDialog>
            <AlertDialogTrigger
              render={<Button variant="outline">Show Dialog</Button>}
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Do you want to delete?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
