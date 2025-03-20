"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

export default function CheckboxInput({
  name,
  label,
  defaultChecked = false,
}: CheckboxInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <Label
        htmlFor={name}
        className="text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
      >
        {label}
      </Label>
    </div>
  );
}
