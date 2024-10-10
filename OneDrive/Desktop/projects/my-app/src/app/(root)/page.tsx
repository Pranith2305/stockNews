import { UserButton } from "@clerk/nextjs";
import react from "react";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <p>Home</p>
      <UserButton/>
    </main>
  );
};

export default Home;