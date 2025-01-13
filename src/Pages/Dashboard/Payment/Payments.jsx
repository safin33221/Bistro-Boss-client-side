
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const Payments = () => {
    const stripPromice = loadStripe(import.meta.env.VITE_Payment_gayway_pk)
    return (
        <div className="w-11/12 mx-auto">
            <SectionTitle heading="Payment" subheading="Please pay to eat" />
            <Elements stripe={stripPromice}>
                <CheckOutForm/>
            </Elements>
        </div>
    );
};

export default Payments;