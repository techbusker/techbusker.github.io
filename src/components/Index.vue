<template>
    <!-- <transition name="fade" mode="out-in"> -->

      <div class="heading">
          <div class="heading-container">
            <h1 class="heading-primary"> {{ firstName }} {{ lastName }}, <br> Front-end Developer </h1>
            <p class="heading-text">I make harmonic, optimized, and inviting user experiences. Currently looking for an internship position.</p>
            <!-- <a class="btn">Explore Work</a>
            <a class="btn">View Profile</a> -->
            <router-link class="btn" to="/">Explore Work</router-link>
            <router-link class="btn" to="/profile">View Profile</router-link>
          </div>

          <div class="image--wrapper">
           <img class="img--profile" src="https://lh3.googleusercontent.com/Dj67fg5vYxYK4v11ChYt3jSe7vxU9SEIkoUaAV4tpunyqRaXvzbgE9yy0yPVhS0jNn7pf4ztwTkoIMGubAMnGuS2IHp9ZVRH3s16f-TQk1xRBhiNw1miQ6NF8zNKupRu43iRJI0gFqovtwwXiGVQ0BcTNdRIgXCb9RBShqPxpdIypSbAoIeWW4vtrDtGx_M1f_AOizeR-NfETfVvj9xCPwhBHsjffbpiWZEaehDZR7RvL1Jn1udcmuhYvdfJqXjbJrpfV1jHX8vCBeUpM8UfdM03CLPlpfwhjxUjUDPnAlAS-CA8NT15ku3RY5wKLlnBE1tKOt3WquF9CTmZh3e9MM3EkRnIIqFRnAusKSNtOkrJ8ENnrFkIovJ7Lx_tOxtT9Od8nh_E_dZUaVh_AVY-nEArt4EaAs253u4RMOOzivMhc7eiZvV2u8qXNBvrDC9oVneKULcpm2lgiQ2BRVaJWij8_lZQMeDrUjocEKtnKexez6SSI4FXmjuXABBLs08la5--JdQnmxcYKzk7u-xylKkho7O9ZyUglzusZHTVw4WyWbkex4AmpQD29-WAMz3xpWCWibv2KYUKC2PqpJXiPnK6sMF95v9FQhhvSHE=w1308-h910-no" alt="">
          </div>
      </div>

    <!-- </transition> -->
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Tamayo',
    }
  }
}
</script>

<style lang="scss" scoped>
// @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
.heading {

    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: relative;
    // background-color: var(--bg-primary);
    &-container {
      // min-height: 100vh;
        // position: absolute;
        // top: 26%;
        // left:0;
        // max-width: 520px;
        // width: 100%;
        // padding: 0 4%;
        box-sizing: border-box;
        @media all and (min-width: 768px) and (max-width: 1280px) {
          width: 57%;
        }
        @media all and (min-width: 1281px) {
          width: 45%;
        }
        // min-width: 500px;
    }
    &-primary {
        // font-size: 1.2em;
        font-weight: 300;
        color: var(--primary-clr);
        line-height: 1.4;
        margin-bottom: 1rem;
        // max-width: 500px;
        // letter-spacing: 0rem;
        margin-top: 0;
    }
    &-text {
        font-size: 1.05rem;
        font-weight: 300;
        color: var(--primary-clr);
        margin-bottom: 1.5rem;
        margin-top: 0rem;
        line-height: 1.4;
        @media all and (min-width: 768px) {
          max-width: 70%;
        }
        
        // letter-spacing: .2rem;
        // width: 95%;
    }
    a {
      font-weight: 400;
      // font-size: 1.1rem;
        &:nth-last-child(2) {
          margin-bottom: 1rem;
          margin-right: .5rem;
     
      }
    }
}
// @media all and (min-width: 768px) {
// .heading {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
// }
// }
@media all and (max-width: 767px) {
  .img--profile {
    display: none;
  }
}
.img--profile {
  height: 160px;
  width: 160px;
  max-height: 250px;
  max-width: 2s50px;
  border-radius: 50%;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media all and (min-width: 1264px) {
    height: 200px;
    width: 200px;
  }
}
// Media Queries

// Tablet Landscape
@media all and (max-width: 48em) {
  .heading {
    padding: 0 5%;
    //   &-container {
    //   max-width: 768px;
    //   width: 74%;
    //   margin: 0;
    //   // margin-left: 8%;
    // }
  } 
}
// @media all and (min-width: 64em) {
//   .heading {
//      &-container {
//       min-width: 500px;
//       position: absolute;
//       width: 42%;
//       top: 34%;
//       padding: 0;
//       left: 100px;
//       // margin-left: 4%;
//     }
//   }
// }
@media all and (min-width: 80em) {

  .heading {
      font-size: 2rem;
      &-container {
      // max-width: 768px;
      // position: absolute;
      // width: 42%;
      // top: 34%;
      // padding: 0;
      // left: 100px;
       
    }
    &-text {
      font-size: 1.5rem;
    }
    & a:nth-last-child(2) {
     margin-right: 2rem;
   }
  }
}


</style>
