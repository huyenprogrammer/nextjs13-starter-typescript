import Link from "next/link";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/facebook'>Facebook</Link>
        </li>

        <li>
          <a href='/youtube'>Youtube</a>
        </li>

        <li>
          <a href='/tiktok'>Tiktok</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
