import "./Drower.css";

interface DrowerInterface {
  children: React.ReactNode;
}

const Drower: React.FC<DrowerInterface> = ({ children }) => {
  return <div className="drower-container"> {children}</div>;
};

export default Drower;
