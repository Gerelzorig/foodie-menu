import Link from "next/link";

import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
          <span className={classes.highlight}>NextLevel Food</span> is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
          <span className={classes.highlight}>NextLevel Food</span> is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
        
          <p>
          <span className={classes.highlight}>NextLevel Food</span> is your go-to platform for sharing and discovering culinary delights. Whether you're a seasoned chef or an enthusiastic home cook, NextLevel Food offers a vibrant community where you can showcase your favorite recipes and find inspiration from others. Connect with fellow food lovers, explore diverse cuisines, and elevate your cooking skills by discovering new dishes every day. Join us and become part of a passionate community that celebrates the joy of food.
          </p>
        </section>
      </main>
    </>
  );
}
