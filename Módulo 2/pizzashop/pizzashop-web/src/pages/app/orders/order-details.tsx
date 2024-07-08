import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./../../../components/ui/dialog";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableHead,
  TableFooter,
} from "./../../../components/ui/table";

export const OrderDetails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 4343243423423</DialogTitle>
        <DialogDescription>Detalhes do Pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-2">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    Nathana facion
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    (19) 0000-0000
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    nathanafacion@gmail.com
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
                    Há 3 minutos
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
            <TableRow>
              <TableCell>Pizza Peperoni família</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$70,00</TableCell>
              <TableCell className="text-right">R$140,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Mussarela família</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$50,00</TableCell>
              <TableCell className="text-right">R$100,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="text-right font-medium">R$240,00</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
};
