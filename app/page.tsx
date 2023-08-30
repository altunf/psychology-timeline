import { PsyCard } from "@/components/PsyCard";

export default function Home() {
  return (
    <main className="  min-h-screen grid grid-cols-3 items-center justify-between">
      <div className=" min-h-screen">LEFT</div>
      <div className="col-span-2 min-h-screen">
        <PsyCard />
      </div>
    </main>
  );
}
