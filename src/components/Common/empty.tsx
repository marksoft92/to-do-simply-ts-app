import React, { FC } from "react";
import styles from '../../assets/styles/components/common/empty.module.scss'
import emptyImage from '../../assets/images/6598519.png';
import ImageComponents from "./image";

const EmptyComponent: FC = () => {
    return (
        <div className={`${styles["empty-container"]} flex-center flex-direction-column`}>
            <ImageComponents src={emptyImage} alt="icon" />
            <p>Brak zadań ! Dodaj Nowe.</p>
        </div>

    );
};

export default EmptyComponent;
