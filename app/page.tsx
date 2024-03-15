import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-3xl">
      Intern Assignment
      <div className="mt-4 flex gap-3">
        <Link href="/home" className="p-2 bg-[#CBD5E1] rounded-xl">
          Home
        </Link>
        <Link href="/management" className="p-2 bg-[#CBD5E1] rounded-xl">
          Management
        </Link>
      </div>
    </div>
  );
}
