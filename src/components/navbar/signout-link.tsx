"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignOutLink() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(() => {
        router.push("/");
        toast.success("Logout realizado com sucesso");
      });
    } catch (error) {
      toast.error("Falha ao sair da conta");
    }
  };

  return (
    <button onClick={handleLogout} className="w-full text-left">
      Sair
    </button>
  );
}
