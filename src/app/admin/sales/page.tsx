import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAdminOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";
import { date } from "zod";

export default async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
    <Table>
      <TableCaption>Total de Pedidos: {orders.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Produtos</TableHead>
          <TableHead>Total da Compra</TableHead>
          <TableHead>Taxa</TableHead>
          <TableHead>Frete</TableHead>
          <TableHead>Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const { id, email, products, orderTotal, tax, shipping, createdAt } =
            order;

          return (
            <TableRow key={id}>
              <TableCell>{email}</TableCell>
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
  );
}
