import { OrderStatus } from "./order-status";
import { render } from "@testing-library/react";

describe("Order Status", () => {
  it("should display the right text when order status is pending", () => {
    const wrapper = render(<OrderStatus status="pending" />);

    // wrapper.debug();

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    // console.log(statusText.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
    // find : retorna uma promisse
    // get: se nao eh encontrado  da erro
    // query: se nao eh encontrado da null
    // https://levelup.gitconnected.com/the-difference-between-get-find-query-react-testing-library-bcd996ba3baa
  });

  it("should display the right text when order status is canceled", () => {
    const wrapper = render(<OrderStatus status="canceled" />);

    const statusText = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  it("should display the right text when order status is delivering", () => {
    const wrapper = render(<OrderStatus status="delivering" />);

    const statusText = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  it("should display the right text when order status is processing", () => {
    const wrapper = render(<OrderStatus status="processing" />);

    const statusText = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  it("should display the right text when order status is delivered", () => {
    const wrapper = render(<OrderStatus status="delivered" />);

    const statusText = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
