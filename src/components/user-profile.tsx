"use client";
import { UserCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { createClient } from "../../supabase/client";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const supabase = createClient();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="overflow-hidden rounded-full hover:scale-110 transition-transform duration-300"
        >
          <img
            src="https://api.dicebear.com/7.x/pixel-art/svg?seed=aspid&backgroundColor=facc15"
            alt="Profile"
            className="h-8 w-8"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={async () => {
            await supabase.auth.signOut();
            router.refresh();
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
