import "../styles/Sidebar.css";
import img_mobile from "../assets/images/bg-sidebar-mobile.svg";
import img_desktop from "../assets/images/bg-sidebar-desktop.svg"; 

export const Sidebar = ({children}) => {
    return (
        <div className="Sidebar">
            <h1>Sidebar</h1>

            <picture>
                <source media="(min-width: 1080px)" srcSet={img_desktop} />
                <img src={img_mobile} alt="" />
            </picture>

            {children}
        </div>
    );
}