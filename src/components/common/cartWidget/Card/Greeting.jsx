import "./greeting.css";
export const Greeting = ({ title, hora }) => {
  return (
    <div className="saludo">
      <h1>{title}</h1>
      {/* <h1>son las: {hora} hs.</h1> */}
    </div>
  );
};
