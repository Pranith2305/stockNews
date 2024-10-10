import react from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div className="rootContainer">
        <div className="wrapper">
            {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
