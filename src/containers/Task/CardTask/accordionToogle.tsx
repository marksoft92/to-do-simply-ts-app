import React, { FC } from "react";
import { AccordionToogleProps } from "./accordion.types";

const AccordionToogle: FC<AccordionToogleProps> = ({
    checkedStatus,
    className,
    name
}) => {

    return (
        <input
            className={className}
            type="radio"
            name={name}
            checked={checkedStatus}
        />
    );
};

export default AccordionToogle;