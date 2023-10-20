import React, { FC } from "react";
import { AccordionTitleProps } from "./accordion.types";

const AccordionTitle: FC<AccordionTitleProps> = ({
    status,
    styles
}) => {

    return (
        <div className={styles}>
            {status ? "DONE" : "CHECK!"}
        </div>
    );
};

export default AccordionTitle;