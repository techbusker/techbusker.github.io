<template>
  <div id="app">
   
    <nav>
      <div id="nav-show" @click="showNav()" :class="{navShow: navToggle}" class="nav-icon">
          <span></span>
      </div>
      <div :class="{navToggle: navToggle}" class="nav-overlay" @click="showNav()">
          <div  id="nav" class="nav-overlay--container">
              <ul>
                  <li>
                      <router-link ref="dropdownLinks" to="/"><i class="fas fa-home"></i></router-link>
                      <ul>
                          <li class="nav-dropDownText">
                              <router-link to="/">Home</router-link> 
                          </li>
                      </ul>
                  </li>
                  <li>
                      
                      <router-link to="/"><i class="fas fa-briefcase" ref="dropdownLinks"></i></router-link>
                      <ul>
                          <li class="nav-dropDownText">
                              <router-link to="/">Work</router-link> 
                          </li>
                      </ul>
                  </li>
                  <li>
                      
                      <router-link to="/profile"><i class="fas fa-user" ref="dropdownLinks"></i> </router-link>
                      <ul>
                          <li class="nav-dropDownText">
                              <router-link to="/profile">About</router-link> 
                          </li>
                      </ul>
                  </li>
                  <li>
                     
                      <router-link to="/skills"><i class="fas fa-code" ref="dropdownLinks"></i></router-link>
                      <ul>
                          <li class="nav-dropDownText">
                              <router-link to="/skills">Skills</router-link> 
                          </li>
                      </ul>
                  </li>
                  <li>
                      
                      <router-link to="/"><i class="fas fa-phone" ref="dropdownLinks"></i></router-link>
                      <ul class="dropDownLast">
                          <li class="nav-dropDownTextLast">
                              <router-link to="/">Contact</router-link> 
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import Index from './components/Index'
// import Skills from './components/Skills'
// import Profile from './components/Profile'

export default {
  name: 'app',
  data () {
    return {
        navToggle: false,
        // selectedComponent: 'app-index'
    }
  },
  methods: {
      showNav() {
          this.navToggle = !this.navToggle
      }
    //   documentClick(e) {
    //       let links = this.$refs.dropdownLinks
    //       let el = this.$refs.dropdownMenu
    //       let target = e.target
    //       if (el == target) {
    //           this.navToggle = !this.navToggle
    //       }
    //   }
  },
//   components: {
//       appIndex: Index,
//       appSkills: Skills,
//       appProfile: Profile
//   }
//   created() {
//       document.addEventListener('click', this.documentClick)
//   },
//   destroyed() {
//       //important to clean up!!
//       document.removeEventListener('click', this.documentClick)
//   }
}
</script>

<style lang="scss">
@import './sass/_styles.scss';
#app {
    min-height: 100vh;
     background: linear-gradient(to left, rgba(54, 209, 220, 0.98), rgba(91, 135, 229, 0.8));
     background-position: center;
     background-size: cover;
}

a {
  text-decoration: none;
}

.nav-icon {
    height: 3rem;
    width: 3.5rem;
    top: 0;
    right: 0;
    position: fixed;
    background-color: transparent;
    cursor: pointer;
    z-index: 11;
    & span,
    &::before,
    &::after {
        content: '';
        position: fixed;
        right: 1rem;
        width: 1.5em;
        height: .1rem;
        background-color: #fff;
        border-radius: 10px;
        transition: transform .4s ease;
        z-index: 55;
        // @include respond(tab-port) {
        //     width: 3rem;
        //     height: .23rem;
        //     right: 3rem;
        // }
    }
    // .navShow,
    &:hover {
        position: fixed;
        background-color: rgba(9, 3, 23, 0.18);
        width: 4rem;
        height: 3rem;
    }
    & span {
        top: 1.6rem;
    }
    &::before {
        top: 1.2rem;
    }
    &::after {
        top: 1.98rem;
    }

    &:hover span {
        transform: translateX(.2rem);
    }
  
    &:hover::before {
        // top: 6.6rem;
        // transform: rotate(-135deg) !important;
        transform: translateX(-.2rem);
    }

    &:hover::after {
        // top: 6.6rem;
        // transform: rotate(135deg) !important;
        transform: translateX(-.2rem);
    }
}

.navShow {
    position: fixed;
    background-color: rgba(9, 3, 23, 0.18);
    width: 4rem;
    height: 3rem;
    & span {
         transform: translateX(.2rem);
    }
    &::before {
        transform: translateX(-.2rem);
    }
    &::after {
        transform: translateX(-.2rem);
    }
}

.nav-overlay {
        position: fixed;
        top: 3rem;
        right: 0;
        width: 4rem;
        z-index: 154;
        transform: translateY(-200rem);
        // border-left: 1px solid transparent;
        opacity: 0;
        transition: transform 1.5s cubic-bezier(1,.02,.81,1.13), background-color 2000ms ease, opacity 750ms ease; //
    &--container {
        & ul {
            padding-bottom: 1rem;
            list-style-type: none;
            background-color: rgba(9, 3, 23, 0.18);
            text-align: center;
            padding-left: 0;
            margin: 0;
        }
        & ul li {
            line-height: 3.5;
            position: relative;
            width: 100%;
            // padding-top: 1rem;
            // &:not(:last-child) {
            //     margin-bottom: .5rem;
            // }
        }
        & ul li a {
            display: block;
        }
    }
    &--container > ul li ul {
        display: none;
    }
}

.svg-inline--fa {
    font-size: 1.2rem;
    height: 1.2rem;
    color: var(--primary-clr);
    cursor: pointer;
    margin: 0rem;
}

.navToggle {
    opacity: 1;
    //.47,.09,.83,.67
    transition: cubic-bezier(1,.62,.98,.5), background-color 200ms ease, opacity 450ms ease;
    transform: translateY(0rem); //
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
    // transition: opacity .9s ease-in;
  opacity: 0;
}


// MEDIA QUERIES
@media all and (min-width: 48em) {
    .nav-icon {
        height: 5rem;
        width: 5.5rem;

        & span,
        &::before,
        &::after {
            right: 1.85rem;
            width: 1.8em;
            height: .1rem;
        }
        .navShow,
        &:hover {
        width: 5.5rem;
        height: 5rem;
        }
        &::before {
        top: 1.97rem;
        }
        & span {
        top: 2.45rem;
        }   
        &::after {
        top: 2.93rem;
        }
    }
    .nav-overlay {
        width: 5.5rem;
        top: 6.5rem;
        // height: 400px;
    }
    .svg-inline--fa {
    font-size: 1.7rem;
    height: 1.7rem;
    }

.nav-overlay--container ul {
    padding-top: 1.5rem;
}


    // HOVER EFFECT NAV TITLES
.nav-overlay--container > ul li {
        & ul {
            display: block;
            margin: 0;
            position: absolute;
            left: -136px;
            top: -8px;
            list-style: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 16px;
            background-color: transparent;
            padding: 0px 20px;
            transform: translate3d(70px, 0, 0);
            opacity: 0;
            transition: all 0.3s ease;
        }

        .dropDownLast {
            left: -170px
        }

        &:hover > ul {
            opacity: 1;
            transform: translate3d(40px, 0, 0);
        }

        & ul li a {
            color: #fff;
        }
    }

.nav-dropDownText {
    font-weight: 400;
    font-size: 14px;
    background-color: rgba(9, 3, 23, 0.18);
    padding: 0 1rem;
    &Last {
        background-color: rgba(9, 3, 23, 0.18);
        padding: 0 1rem;
        }
    }
}
@media all and (min-width: 80em) {
    .nav-icon {
        // right: 3.5rem;
        height: 6.5rem;
        width: 9rem;

        & span,
        &::before,
        &::after {
            right: 3.5rem;
            width: 2.5rem;
            height: .2rem;
        }
        .navShow,
        &:hover {
        width: 5.5rem;
        height: 5rem;
        }
        &::before {
        top: 2.5rem;
        }
        & span {
        top: 3.2rem;
        }   
        &::after {
        top: 3.91rem;
        }

        .navShow,
        &:hover {
        width: 9rem;
        height: 6.5rem;
        }

    }
    .nav-overlay {
        width: 9rem;
         & ul li {
            line-height: 4.5;
        }
    }
    
}

</style>
