import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function UserIcon() {
  const user = await currentUser();

  const hasImage = user?.hasImage;

  if (user) {
    if (hasImage) {
      return (
        <Image
          src={user.imageUrl}
          alt={user.username ?? "User profile"}
          className="w-7 h-7 rounded-full object-cover"
          width={20}
          height={20}
        />
      );
    }
  }

  return <LuUser className="w-7 h-7 bg-primary rounded-full text-white" />;
}
