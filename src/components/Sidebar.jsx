import "../styles/Sidebar.css";
import img_mobile from "../assets/images/bg-sidebar-mobile.svg";
import img_desktop from "../assets/images/bg-sidebar-desktop.svg";
import { FormProgress } from "./FormProgress";

export const Sidebar = () => {
    return (
        <div className="Sidebar">
            <picture>
                <source media="(min-width: 1080px)" srcset={img_desktop} />
                <img src={img_mobile} alt="" />
            </picture> 

            <FormProgress />
        </div>
    );
}