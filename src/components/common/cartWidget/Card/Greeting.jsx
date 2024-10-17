import "./greeting.css";
export const Greeting = ({ title, hora }) => {
  return (
    <div className="container">
      <h1 className="saludo">{title}</h1>
      {/* <h1>son las: {hora} hs.</h1> */}
    </div>
  );
};
