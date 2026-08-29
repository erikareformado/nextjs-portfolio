import PersonalDetails from "@/components/PersonalDetails";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-100 px-4 py-16 font-sans dark:bg-black sm:px-8">
      <main className="flex w-full flex-col items-center">
        <PersonalDetails />
      </main>
    </div>
  );
}
