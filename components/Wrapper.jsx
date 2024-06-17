import Nav from "./Nav";

export default function Wrapper({ children, className }) {
  return (
    <div className={`w-full p-4 md:px-64 ${className}`}>
      <Nav />
      {children}
    </div>
  );
}
