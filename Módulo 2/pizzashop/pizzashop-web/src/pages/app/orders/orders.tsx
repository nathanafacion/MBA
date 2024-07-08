import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
} from "./../../../components/ui/table";
import { Helmet } from "react-helmet-async";

import { Pagination } from "../../../components/pagination";
import { OrderTableFilters } from "./order-table-filters";
import { OrderTableRow } from "./order-table-row";

export const Orders = () => {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="m-[64px]"></TableHead>
                  <TableHead className="m-[140px]">Identificador</TableHead>
                  <TableHead className="m-[180px]">Realizado há</TableHead>
                  <TableHead className="m-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="m-[140px]">Total do pedido</TableHead>
                  <TableHead className="m-[164px]"></TableHead>
                  <TableHead className="m-[132px]"></TableHead>
                </TableRow>
              </TableHeader>

              <OrderTableRow />
              <OrderTableRow />
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  );
};
