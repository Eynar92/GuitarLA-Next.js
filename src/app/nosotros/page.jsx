import Image from "next/image"
import styles from './nosotros.module.css'

export const metadata = {
  title: 'Nosotros',
  description: 'Sobre nosotros, GuitarLA, tienda de música'
}

export default function Nosotros() {
  return (
    <section>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget elit tellus. Nunc accumsan scelerisque nunc, eu accumsan erat suscipit non. Nulla eget semper mauris. Vivamus a ligula pellentesque arcu sollicitudin condimentum. Fusce sagittis lectus at orci pharetra, vitae facilisis quam viverra. Cras lacinia tempus risus. Suspendisse nulla arcu, condimentum in velit a, sagittis eleifend tellus.
            </p>
            <p>
              Aliquam maximus iaculis augue, consequat viverra libero pharetra elementum. Nam velit ipsum, tempus et placerat vitae, laoreet ac nisi. Suspendisse eget molestie orci. Donec eu convallis risus. Etiam et risus sed sapien elementum pretium et vehicula odio. Vestibulum sit amet metus in sem aliquam accumsan.
            </p>
          </div>
        </div>
      </main>
    </section>
  )
}
