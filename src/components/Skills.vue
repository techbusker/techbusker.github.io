<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <div class="skills">
    <div class="skills-container">
      <h2 class="heading-secondary">Skills</h2>
      <p class="heading-secondary--text">I'm focusing on understanding and getting a good grasp on its foundation instead of just copying and pasting code.
      </p>
      <p class="heading-secondary--text">I usually spend my days reading or watching videos about web development's best practices, and applying it to my existing
        projects.</p>
      <p class="heading-secondary--text">Here are the techonologies that I have experience with:</p>
      <div class="skills-wrapper">
        <div class="skills-list">
          <h3 class="skills-list--title">Languages | Scripting | Markdown</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3 (SASS/SCSS)</li>
            <li>Javascript</li>
            <li>Php</li>
          </ul>
        </div>

        <div class="skills-list">
          <h3 class="skills-list--title">Frameworks | Libraries</h3>
          <ul>
            <li>Bootstrap 4</li>
            <li>Vue Js</li>
            <li>jQuery</li>
            <li>Vuetify</li>
            <li>Bulma</li>
            <!-- <li>Laravel</li> -->
          </ul>
        </div>


        <div class="skills-list">
          <h3 class="skills-list--title">Taskrunners | Tools</h3>
          <ul>
            <li>Npm</li>
            <!-- <li>Composer</li> -->
            <li>Webpack</li>
            <li>Gulp</li>
          </ul>
        </div>

        <div class="skills-list">
          <h3 class="skills-list--title">CMS</h3>
          <ul>
            <li>Wordpress</li>

          </ul>
        </div>
      </div>
      <router-link class="btn" to="/profile">View Profile</router-link>

      
    </div>
  </div>
  <!-- </transition> -->
</template>

<style lang="scss" scoped>
.skills {
    color: var(--primary-clr);
    padding: 0rem 3rem;
    &-container {
      max-width: 1200px;
      padding-top: 5rem;
    }
    &-container:last-child {
      padding-bottom: 5rem;
    }
    .heading-secondary {
      font-weight: 300;
    }
    .heading-secondary--text {
        font-weight: 300;
        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }
    &-list:last-child {
      margin-bottom: 2rem;
    }
}

.skills-list {
    display: block;
    & ul:not(:last-child) {
        margin-bottom: 2.7rem;
    }
    &--title {
        font-weight: 300;
        position: relative;
        margin-bottom: .5rem;
    }
}

.skills-list--title {
  // font-size: 1.4rem;
  text-transform: uppercase;
    ~ ul {
        // font-size: 4.1rem;
        margin: 0;
        li {
            // font-size: 1.3rem;
            position: relative;
            list-style: none;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -2.5rem;
                bottom: 0;
                margin: auto;
                width: 1.4rem;
                height: .1rem;
                background-color: white;
            }
        }
    }
}

// Media Query

// Tablet Portrait
@media all and (min-width: 30em) {
  .skills {
      padding: 0 12.5%;
  } 
}

// Tablet Landscape
@media all and (min-width: 48em) {
  .skills {
    margin: 0 auto;
    padding-left: 10%;
    .heading-secondary--text {
      width: 70%;
    }
    &-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      // width: 50%;
    }
  }
}
@media all and (min-width: 64em) {
  .skills {
    padding: 0 0 0 8%;
    &-container {
      width: 80%;
    }
  }
}

@media all and (min-width: 80em) {
  .skills {
    font-size: 2rem;
    // max-width: 75em;
    padding-left: 20rem;
    &-container {
      // margin: 0 auto;
      padding-top: 10rem;
      width: 85%;
    }
    .heading-secondary--text {
      font-size: 1.41rem;
      width: 65%;
    }
    &-list--title {
      font-size: 1.5rem;
    }
    &-list ul {
      font-size: 1.41rem;
    }
    &-wrapper {
      grid-template-columns: repeat(4, 1fr);
      max-width: 45em;
      width: 90%;
      grid-column-gap: 3rem;
      background-color: rgba(33, 77, 153, .2);
      margin-top: 3rem;
      padding: 2rem 5rem;
    }
    a {
        margin-top: 4rem;
        margin-bottom: 2rem;
        font-size: 1.2rem;
      }
  }
}
//965511
// 8271



</style>

