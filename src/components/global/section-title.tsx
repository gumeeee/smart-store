import { Separator } from "../ui/separator";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-tighter capitalize mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
}
