import Link from 'next/link'
import { navLinks } from '../helpers/navLinks';
import styles from './footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    {
                        navLinks.map(({ name, href }) => (
                            <Link
                                key={href}
                                href={href}
                            >
                                {name}
                            </Link>
                        ))
                    }
                </nav>

                <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}
