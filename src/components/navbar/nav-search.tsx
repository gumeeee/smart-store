import { Input } from "../ui/input";

export default function NavSearch() {
  return (
    <Input
      type="search"
      placeholder="Pesquisar produto..."
      className="max-w-xs dark:bg-muted"
    />
  );
}
