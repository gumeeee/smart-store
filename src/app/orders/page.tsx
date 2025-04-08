import SectionTitle from "@/components/global/section-title";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchUserOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";

export default async function OrdersPage() {
  const orders = await fetchUserOrders();

  return (
    <>
      <SectionTitle text="Minhas Compras" />
      <Table>
        <TableCaption>Total de compras: {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Produtos</TableHead>
            <TableHead>Total da Compra</TableHead>
            <TableHead>Taxa</TableHead>
            <TableHead>Frete</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const { id, products, orderTotal, tax, shipping, createdAt } =
              order;

            return (
              <TableRow key={id}>
                <TableCell>{products}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{formatCurrency(tax)}</TableCell>
                <TableCell>{formatCurrency(shipping)}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
