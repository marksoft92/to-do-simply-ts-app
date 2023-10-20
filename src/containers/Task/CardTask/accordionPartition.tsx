import React, { FC } from "react";
import DeleteButton from "../../../components/Buttons/DeleteButton";
import styles from "../../../assets/styles/containers/Task/card.module.scss";
import { AccordionPartitionProps } from "./accordion.types";



const AccordionPartition: FC<AccordionPartitionProps> = ({
    category,
    isPending,
    isDone,
    icon,
    description,
    status,
    handleDelete
}) => {

    return (
        <div className={styles["accordion__wrapper"]}>
            <dl className={styles["accordion__box"]}>
                <dt className={styles["accordion__patition"]}>
                    <span className={styles["accordion__number"]}>
                        <img src={icon} width={50} alt="" />
                    </span>
                    <span className={styles["accordion__title"]}>
                        {category}
                        {isPending && (
                            <div
                                className={`${styles["rubber_stamp"]} ${styles.pending} `}
                            >
                                Pending
                            </div>
                        )}
                        {isDone && (
                            <div className={`${styles["rubber_stamp"]} ${styles.done} `}>
                                Done
                            </div>
                        )}
                    </span>
                </dt>

                <dd className={styles["accordion__text"]}>
                    {description}
                    {!status && <DeleteButton onHandleClick={handleDelete} />}
                </dd>
            </dl>
        </div>
    );
};

export default AccordionPartition;