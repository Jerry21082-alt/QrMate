import Nav from "./Nav";

export default function Wrapper({ children, className }) {
  return (
    <div className={`w-full p-4 md:px-96 ${className}`}>
      <Nav />
      {children}
    </div>
  );
}
