import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-screen h-screen">
      Home입니다
      <Link to="detail">detail로 이동</Link>
    </div>
  );
}
