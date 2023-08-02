'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from './header.module.css'
import { navLinks } from '../helpers/navLinks';


export default function Header() {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                    <Image src='/img/logo.svg' width={300} height={40} alt='Imagen logotipo' />
                </Link>
                <nav className={styles.navegacion}>
                    {
                        navLinks.map(({ name, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={pathname === href ? styles.active : ''}
                            >
                                {name}
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}
