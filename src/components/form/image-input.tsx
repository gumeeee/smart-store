import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ImageInput() {
  const name = "image";
  return (
    <div className="mb-2 ">
      <Label htmlFor={name} className="capitalize">
        imagem
      </Label>
      <Input id={name} name={name} type="file" required accept="image/*" />
    </div>
  );
}
