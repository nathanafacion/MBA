import { Dialog, DialogTrigger } from "./../../../components/ui/dialog";
import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "./../../../components/ui/button";
import { TableCell, TableRow } from "./../../../components/ui/table";
import { OrderDetails } from "./order-details";

export const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3" />
              <span className="sr-only"> Detalhes do Pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        3232wqwdqwdq32
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="item-center flex gap-2">
          <span className="mt-2 h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Nathana Facion</TableCell>
      <TableCell className="font-mediun">R$ 180,00</TableCell>

      <TableCell>
        <Button variant="ghost" size="sm">
          <ArrowRight className="mr-2 h-3 w-3" />
          Approvar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
};
