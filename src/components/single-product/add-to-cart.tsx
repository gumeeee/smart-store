"use client";

import { addToCartAction } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import SubmitButton, { ProductSignInButton } from "../form/buttons";
import FormContainer from "../form/form-container";
import SelectProductAmount, { Mode } from "./select-product-amount";

export default function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();

  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton text="adicionar ao carrinho" className="mt-8" />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}
