import Nav from "./Nav";

export default function Wrapper({children, className}) {
  return (
    <div className={`w-full p-5 md:p-20 ${className}`}>
      <Nav />
      {children}
    </div>
  );
}
