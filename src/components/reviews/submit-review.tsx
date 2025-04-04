"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import RatingInput from "./rating-input";
import TextAreaInput from "../form/text-area-input";
import SubmitButton from "../form/buttons";

function SubmitReview({ productId }: { productId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();

  return (
    <div>
      <Button
        size={"lg"}
        className="capitalize"
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        deixar comentário
      </Button>

      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <input type="hidden" name="productId" value={productId} />
          <input
            type="hidden"
            name="authorName"
            value={user?.firstName || "usuário"}
          />
          <input type="hidden" name="authorImageUrl" value={user?.imageUrl} />
          <RatingInput name="avaliação" />
          <TextAreaInput
            name="comment"
            labelText="feedback"
            defaultValue="Excelente Produto!"
          />
          <SubmitButton className="mt-4" />
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
