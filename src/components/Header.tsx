import logo from '../assets/Logo.svg';

import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo Todo" />
		</header>
	);
};
