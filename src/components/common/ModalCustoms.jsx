const ModalCustoms = ({ title, children }) => {
  console.log(children);
  return (
    <div style={{ border: "2px solid black", width: "200px", height: "100px" }}>
      <h2>{title}</h2>
      <h3>algo mas</h3>
      {children}
    </div>
  );
};

export default ModalCustoms;
