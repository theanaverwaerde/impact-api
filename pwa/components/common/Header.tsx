import Link from "next/link";

export default () => {
  return (
    <header className="p-4 flex items-center gap-10">
      <div className="w-52">
        <p className="text-5xl font-black">IMPACT</p>
        <p className="text-sm uppercase">
          Initiative for Minoritized Pioneers and Achievements in Computer
          Technology
        </p>
      </div>

      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/people/create">Add a woman</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
