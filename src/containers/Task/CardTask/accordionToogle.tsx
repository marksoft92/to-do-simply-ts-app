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
            onChange={() => {
                // Non-standard use: Switching radio buttons on mouse enter and leave.
                // This is done intentionally for mouse-based interaction.
            }}
        />
    );
};

export default AccordionToogle;