import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => 
{
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () =>
{
    render(<CheckoutForm />);

    const firstnameInput = screen.getByLabelText('First Name:');
    console.log(firstnameInput);
    const firstName = "Vasilii";
    userEvent.type(firstnameInput, firstName);

    const lastnameInput = screen.getByLabelText('Last Name:');
    const lastName = "Garanin";
    userEvent.type(lastnameInput, lastName);

    const addressInput = screen.getByLabelText('Address:');
    const myAddress = "12345 st";
    userEvent.type(addressInput, myAddress);

    const cityInput = screen.getByLabelText('City:');
    const myCity = "McKin";
    userEvent.type(cityInput, myCity);

    const stateInput = screen.getByLabelText('State:');
    const myState = "Tx;";
    userEvent.type(stateInput, myState);

    const zipInput = screen.getByLabelText('Zip:');
    const myZip = "12345";
    userEvent.type(zipInput, myZip);

    const checkoutButton = screen.getByRole("button");
    userEvent.click(checkoutButton);

    await waitFor(() =>
    {
        const firstNameRender = screen.queryByText(firstName);
        const lastNameRender = screen.queryByText(lastName);
        const addressRender = screen.queryByText(myAddress);
        const cityRender = screen.queryByText(myCity);
        const stateRender = screen.queryByText(myState);
        const zipRender = screen.queryByText(myZip);
        const messageRender = screen.queryAllByTestId("successMessage");

        expect(firstNameRender).toBeInTheDocument();
        expect(lastNameRender).toBeInTheDocument();
        expect(addressRender).toBeInTheDocument();
        expect(cityRender).toBeInTheDocument();
        expect(stateRender).toBeInTheDocument();
        expect(zipRender).toBeInTheDocument();
        expect(messageRender).not.toBeInTheDocument();
    });

});
