import {
  Select,
  SelectValue,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "./../../../components/ui/select";
import { Search } from "lucide-react";

import { Button } from "./../../../components/ui/button";
import { Input } from "./../../../components/ui/input";

export const OrderTableFilters = () => {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos sttus</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="cancelled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="sm">
        <Search className="mr-2 h-4 w-4" />
        Filtrar Resultados
      </Button>
      <Button type="button" variant="outline" size="sm">
        <Search className="mr-2 h-4 w-4" />
        Remover Filtros
      </Button>
    </form>
  );
};
