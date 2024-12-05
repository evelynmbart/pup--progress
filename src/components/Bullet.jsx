import "../css/Bullet.css";
export default function Bullet({ children }) {
  return (
    <div className="bullet">
      <div>• {children}</div>
    </div>
  );
}
