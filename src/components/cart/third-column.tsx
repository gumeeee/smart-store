"use client";

import { useState } from "react";
import SelectProductAmount, {
  Mode,
} from "../single-product/select-product-amount";
import FormContainer from "../form/form-container";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import SubmitButton from "../form/buttons";
import { toast } from "sonner";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast("Realizando ação 😴", { description: "Atualizando quantidade..." });
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    toast("Ação Realizada!", {
      description: result.message,
    });
    setIsLoading(false);
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="Remover" />
      </FormContainer>
    </div>
  );
}

export default ThirdColumn;
