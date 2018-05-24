<template>
    <!-- <transition name="fade" mode="out-in">  -->
  <div class="profile">
       
    <div class="profile-container">
      <h2 class="heading-secondary">About</h2>
            <p class="heading-secondary--text">I'm a Junior Front-end Developer who loves to build vibrant and engaging websites which focuses on a clean and
                maintainable code.</p>
            <p class="heading-secondary--text">I enjoy building minimalistic designs as I'm a fan of minimalism, where less is more.</p>
            <p class="heading-secondary--text">I want to work on remote front-end jobs either part-time or full-time. It would be nice if I can work long term.</p>
            <p class="heading-secondary--text">Take a peek at my works, skills, or get in touch.</p>
            <p class="heading-secondary--text">You can find me on Facebook, Github, FreeCodeCamp, and Slack.</p>
            <router-link class="btn" to="/skills">View Skills</router-link>
    </div>
  </div>
  <!-- </transition> -->
</template>

<style lang="scss" scoped>
.profile {
    // font-size: 1.7rem;
    // letter-spacing: .1rem;
    color: var(--primary-clr);
    min-height: 100vh;
    padding: 0 1rem;
    // background-color: var(--bg-primary);
    &-container {
        padding-top: 5rem;
        // margin: 0 auto;
    }
}


.heading-secondary {
    // font-size: 2rem;
    font-weight: 300;
    // letter-spacing: -5px;
    // margin-bottom: 1.6rem;
    &--text {
        // font-size: 1.3rem;
        color: var(--primary-clr);  
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
        &:nth-child(6) {
            margin-bottom: 2.5rem;
        }
    }
}

// Media Query

// Phone Landscape
@media all and (min-width: 30em) {
  .profile {
      max-width: 32em;
      padding: 0 12.5%;
      &-container {
          width: 100%;
      }
  }
}
// Tablet Portrait
@media all and (min-width: 48em) {

}
// Tablet Landscape
@media all and (min-width: 64em) {
  .profile {
      max-width: 64em;
      padding-left: 8%;
      &-container {
          width: 60%;
      }
  }
}
// Large Desktop
@media all and (min-width: 80em) {
    .profile {
        max-width: 75em;
        font-size: 2rem;
        padding-top: 0;
        padding-left: 20rem;
        &-container {
            padding: 10rem 0;
            max-width: 43%;
        }
        //  .heading-secondary {
        //     // margin: 0;
        // }
         .heading-secondary--text {
            font-size: 1.41rem;
        }

        a {
        font-size: 1.2rem;
        }
    }
   
}
</style>
