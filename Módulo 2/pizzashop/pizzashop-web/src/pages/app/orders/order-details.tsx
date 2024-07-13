import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./../../../components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./../../../components/ui/table";

import { OrderStatus } from "../../../components/ui/order-status";
import { formatDistanceToNow } from "date-fns";
import { getOrderDetails } from "../../../api/get-order-details";
import { ptBR } from "date-fns/locale";
import { useQuery } from "@tanstack/react-query";

export interface OrderDetailsProps {
  orderId: string;
  open: boolean;
}

export const OrderDetails = ({ orderId, open }: OrderDetailsProps) => {
  const { data: order } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open,
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: {orderId}</DialogTitle>
        <DialogDescription>Detalhes do Pedido</DialogDescription>
      </DialogHeader>
      {order && (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <OrderStatus status={order.status} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">
                      {order.customer.name}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">
                      {order.customer.phone}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">
                      {order.customer.email}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado há
                </TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">
                      {formatDistanceToNow(order?.createdAt, {
                        locale: ptBR,
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right"> Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.orderItems.map((item: any) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell></TableCell>
                    <TableCell className="text-right">
                      {item.product.name}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.product.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {(item.priceInCents / 100).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      {(
                        (item.priceInCents * item.quantity) /
                        100
                      ).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableCell colSpan={4}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                {(order.totalInCents / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
            </TableFooter>
          </Table>
        </div>
      )}
    </DialogContent>
  );
};
