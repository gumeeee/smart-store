import EmptyList from "@/components/global/empty-list";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAdminProducts } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";

export default async function AdminProductsPage() {
  const items = await fetchAdminProducts();
  if (items.length === 0) return <EmptyList />;

  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          total de produtos: {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome do Produto</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const { id, name, company, price } = item;
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`/products/${id}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell className="flex items-center gap-x-2"></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
