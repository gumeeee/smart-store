"use client";

import { type actionFunction } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import FormContainer from "./form-container";
import ImageInput from "./image-input";
import SubmitButton from "./buttons";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

export default function ImageInputContainer({
  name,
  image,
  action,
  text,
  children,
}: ImageInputContainerProps) {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  return (
    <div className="mt-8">
      <Image
        src={image}
        width={200}
        height={200}
        className="rounded object-cover mb-4 w-[300px]"
        alt={name}
        priority
      />
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size="sm" text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
