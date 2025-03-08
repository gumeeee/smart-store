import { cn } from "@/lib/utils";

export default function EmptyList({
  heading = "No items  found.",
  classname,
}: {
  heading?: string;
  classname?: string;
}) {
  return <h2 className={cn("text-xl", classname)}>{heading}</h2>;
}
