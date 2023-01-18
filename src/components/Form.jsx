import { useState } from "react";
import "../styles/Form.css";
import { FormGroup } from "./FormGroup";
import { FormProgress } from "./FormProgress";
import { Sidebar } from "./Sidebar";

export const Form = () => {

    const [formStep, setFormStep] = useState(0);

    return (
        <div className="Form">
            <Sidebar />
            <FormProgress />
            <FormGroup step={formStep} />
        </div>
    );
}