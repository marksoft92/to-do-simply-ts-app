export interface AccordionPartitionProps {
    category: string;
    isPending: boolean;
    isDone: boolean;
    icon: string;
    status: boolean;
    description: string;
    handleDelete: () => void;
}

export interface AccordionTitleProps {
    status: boolean;
    styles: string
}

export interface AccordionToogleProps {
    checkedStatus: boolean;
    className: string;
    name: string;
}