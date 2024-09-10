import { Link } from "react-router-dom";

const items = [
  { title: "부천", locate: "심곡본동", createAt: "2일전" },
  { title: "부천", locate: "심곡본동", createAt: "2일전" },
  { title: "부천", locate: "심곡본동", createAt: "2일전" },
];

export function Home() {
  return (
    <div className="w-screen h-screen">
      Home입니다
      <Link to="detail">detail로 이동</Link>
      <ul className="flex flex-col justify-center items-center gap-5">
        {items.map(({ title, locate, createAt }) => (
          <li className="">
            <p>{title}</p>
            <p>{locate}</p>
            <p>{createAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
