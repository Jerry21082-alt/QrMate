import Nav from "./Nav";

export default function Wrapper({children, className}) {
  return (
    <div className={`w-full p-2 md:p-20 ${className}`}>
      <Nav />
      {children}
    </div>
  );
}
