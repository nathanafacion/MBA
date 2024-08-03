import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { SignIn } from "../auth/sign-in";
import { queryClient } from "../../lib/react-query";
import { render } from "@testing-library/react";

describe("SignIn", () => {
  it("should set default email input value if email is present on search params", () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter initialEntries={["/sign-in?email=test@example.com"]}>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        );
      },
    });

    const emailInput = wrapper.getByLabelText("Seu e-mail") as HTMLInputElement;
    expect(emailInput.value).toEqual("test@example.com");
  });
});
