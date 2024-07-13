import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "./../../../components/ui/table";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

import { useQuery } from "@tanstack/react-query";

import { getOrders } from "../../../api/get-orders";
import { Pagination } from "../../../components/pagination";
import { OrderTableFilters } from "./order-table-filters";
import { OrderTableRow } from "./order-table-row";

export const Orders = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const customerName = searchParams.get("customerName");
  const status = searchParams.get("status");
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get("page") ?? "1");

  const { data: result } = useQuery({
    queryKey: ["orders", pageIndex, orderId, customerName, status],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        customerName,
        status: status === "all" ? null : status,
      }),
  });

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set("page", (pageIndex + 1).toString());

      return state;
    });
  }

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
              <TableBody>
                {result &&
                  result.orders.map((order) => {
                    return <OrderTableRow key={order.orderId} order={order} />;
                  })}
              </TableBody>
            </Table>
          </div>
          <Pagination
            pageIndex={result?.meta.pageIndex || 0}
            totalCount={result?.meta.totalCount || 1}
            perPage={result?.meta.perPage || 10}
            onPageChange={handlePaginate}
          />
        </div>
      </div>
    </>
  );
};
