import Navigation from '../navigation/Navigation'
import styles from './Sidebar.module.scss'

const Sidebar = ({
	sidebarRef
}: {
	sidebarRef: React.MutableRefObject<HTMLBaseElement | null>
}) => {
	return (
		<aside ref={sidebarRef} className={styles.sidebar} data-nav='nav'>
			<Navigation type='navigation' />
		</aside>
	)
}

export default Sidebar
