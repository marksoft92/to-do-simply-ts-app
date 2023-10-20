import React, { FC, memo } from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import styles from "../../assets/styles/components/common/header.module.scss";
const githubUrl = "https://www.github.com/marksoft92";
const linkedinUrl = "https://www.linkedin.com/in/dawid-bie%C5%84kowski/";


const Header: FC = () => {
    return (
        <header className={`${styles["header"]} flex align-items-center justify-content-center`}>
            <h1>Dawid Bienkowski</h1>
            <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <GithubOutlined />
            </a>
            <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinOutlined />
            </a>
        </header>
    );
};

export default memo(Header);
