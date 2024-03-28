export default function Wrapper({children, className}) {
  return (
    <div className={`mx-auto w-full max-w-screen-xl p-5 md:p-20 ${className}`}>
      {children}
    </div>
  );
}
