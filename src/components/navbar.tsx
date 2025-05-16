import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold">
          Logo
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href="/dashboard"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <Button className="animate-pulse-subtle hover:animate-none">
              Dashboard
            </Button>
          </Link>
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}
