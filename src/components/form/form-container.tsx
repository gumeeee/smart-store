"use client";

import { actionFunction } from "@/utils/types";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const initialState = {
  message: "",
};

export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  useEffect(() => {
    if (state.message) {
      toast("Sucesso ✅", { description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
