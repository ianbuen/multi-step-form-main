import { useState } from "react";
import "../styles/Form.css";
import { FormStep } from "./FormStep";
import { Sidebar } from "./Sidebar";

export const Form = () => {

    const [formStep, setFormStep] = useState(0);

    return (
        <div className="Form">
            <Sidebar />
            <FormStep step={formStep} />
        </div>
    );
}