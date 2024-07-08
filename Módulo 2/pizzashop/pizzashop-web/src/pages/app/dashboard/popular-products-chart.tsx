import {
  CardHeader,
  Card,
  CardTitle,
  CardContent,
} from "./../../../components/ui/card";
import { BarChart } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import colors from "tailwindcss/colors";

interface labelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  index: number;
}

export const PopularProductsChart = () => {
  const data = [
    { product: "Marguerita", amount: 100, color: colors.blue["500"] },
    { product: "Corn & Bacon", amount: 140, color: colors.violet["500"] },
    { product: "Americana", amount: 300, color: colors.violet["900"] },
    { product: "Portuguesa", amount: 100, color: colors.yellow["100"] },
    { product: "Brócolis", amount: 10, color: colors.green["400"] },
    {
      product: "Frango com Catupiry",
      amount: 190,
      color: colors.orange["400"],
    },
    { product: "4 Queijos", amount: 60, color: colors.fuchsia["400"] },
  ];

  const generateLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: labelProps) => {
    const RADIAN = Math.PI / 180;
    const radius = 12 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        className="fill-muted-foreground text-xs"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index].product.length > 12
          ? data[index].product.substring(0, 12).concat("...")
          : data[index].product}{" "}
        ({value})
      </text>
    );
  };

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos Populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              dataKey="amount"
              nameKey="product"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={44}
              strokeWidth={3}
              labelLine={false}
              label={generateLabel}
            >
              {data.map((product) => {
                return (
                  <Cell
                    key={product.color}
                    fill={product.color}
                    className="stroke-background hover:opacity-80"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
