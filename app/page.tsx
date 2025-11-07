import { ThemeToggle } from "@/components/ui/themeToogle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500">
        Welcome to myCourse, your LMS platform
      </h1>
      <ThemeToggle />
    </div>
  );
}
