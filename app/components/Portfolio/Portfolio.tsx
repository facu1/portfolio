import { PContainer, PTitles } from "app/components";
import styles from "./Portfolio.module.css";
import { ProjectCard } from "./components";
import Image from "next/image";

function Portfolio() {
  return (
    <div id="projects" className={styles.section}>
      <PContainer>
        <div className={styles.content}>
          <PTitles section="PORTFOLIO" title="Here are some project I done." />
          <ProjectCard
            liveDemo="https://movie-catalog-gamma.vercel.app/"
            title="Movie Catalog"
            desc="A movie catalog website, a place to see and search some information like rating, duration, genres, etc. about popular, now playing or upcoming movies. The information is retrive thanks to themoviedb api."
            stack={["React", "TMDB API"]}
            code="https://github.com/facu1/movie-catalog"
          >
            <Image
              src="/imgs/movie-catalog.png"
              alt="movie catalog preview"
              width={1000}
              height={1000}
              className={`${styles.img} ${styles.img1}`}
            />
          </ProjectCard>
          <ProjectCard
            reverse
            liveDemo="https://wedding-invitation-demo.vercel.app/"
            title="Online Invitations"
            desc="Online invitations, a personal project to make invitations for parties. The invitations are customizable to fit the event. Currently, 3 invitations have been delivered successfully and a 4th is on the way."
            stack={["React"]}
            code="https://github.com/facu1/xv-invitation"
          >
            <Image
              src="/imgs/wedding-invitation.png"
              alt="wedding invitation preview"
              width={1000}
              height={1000}
              className={`${styles.img} ${styles.img2}`}
            />
          </ProjectCard>
        </div>
      </PContainer>
    </div>
  );
}

export default Portfolio;
