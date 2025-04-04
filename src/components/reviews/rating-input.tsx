import { SelectValue } from "@radix-ui/react-select";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

function RatingInput({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) {
  const numbers = Array.from({ length: 5 }, (_, index) => {
    const numberValue = index + 1;
    return numberValue.toString();
  }).reverse();

  return (
    <div className="mb-2 max-w-xs">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Select defaultValue={numbers[0]} name={name} required>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {numbers.map((number) => (
            <SelectItem key={number} value={number}>
              {number}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default RatingInput;
