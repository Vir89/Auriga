import { ApiContext } from "../../context/ApiContext";
import getSuscriptionPlanFromObject from "../../utils/getSuscriptionPlanFromObject";
import H3 from "../atoms/H3";
import { Link } from "react-router-dom";
import React, { useContext } from "react";


const SuscriptionType = (props) => {
    const context = useContext(ApiContext);

    return (
        <Link style={{ textDecoration: "none" }} to={"/suscripciones"}>
            <H3 home>
                {context.user
                 ? getSuscriptionPlanFromObject(context.user)
                 : "No está suscrito"}
            </H3>
           
        </Link>
    );
};
export default SuscriptionType;