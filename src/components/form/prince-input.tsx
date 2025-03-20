import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputNumberProps = {
  defaultValue?: number;
};

export default function PriceInput({ defaultValue }: FormInputNumberProps) {
  const name = "price";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        preço (R$)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}
