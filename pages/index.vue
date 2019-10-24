<template>
  <main>
    <div class="logo-container">
      <h1><img class="logo" src="@/assets/logo400.jpg" alt="Game Workers Unite Detroit"></h1>
    </div>
    <aside class="head-aside-container">
      <a href="#join-up" class="join-up-head-button button"><font-awesome-icon :icon="['fab', 'discord']" /> Join Up!</a>
      <p><a href="https://twitter.com/gwu_detroit" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /> @GWU_Detroit</a></p>
      <p><a href="https://twitter.com/gameworkers" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /> @gameworkers</a>, our international organization</p>
    </aside>
    <div id="content-en" class="content english">
      <section class="welcome-container">
        <h2>Welcome!</h2>
        <p>This is the page for Game Workers Unite (GWU) Detroit. We are a chapter of <a href="https://www.gameworkersunite.org/" target="_blank">Game Workers Unite International</a>. I don't know what else to put here right now.</p>
        <p>This is another paragraph but I need to give this copy more thought later because I've had red bull and that makes me less likely to come up with content that people actually want to read</p>
        <p>You should really take a look at joining up!</p>
      </section>
      <section id="join-up" class="join-up-container">
        <h2>Join Up!</h2>
        <p>Want to join GWU Detroit? Cool! Fill out our <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZPfnaz-3kv1IYEQngyeKhVR2O0lQTA95lwOzTzhvu-1EOjA/viewform" target="_blank">application form</a>, wait for acceptance, and you'll be joining 26+ other members in our Discord.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZPfnaz-3kv1IYEQngyeKhVR2O0lQTA95lwOzTzhvu-1EOjA/viewform" target="_blank" class="button application-form-button" ><font-awesome-icon :icon="['far', 'file-alt']" /> Application Form</a>
        <p>We hold a meeting every month on the first Friday. Our next one is on {{ displayMeeting.format('dddd, MMMM Do, ha') }}. Hope to see you there!</p>
      </section>
      <section class="contact-us-container">
        <h2>Conact Us!</h2>
        <p>Get in touch with us</p>
        <ul>
          <li><a href="https://twitter.com/gwu_detroit" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /> @GWU_Detroit</a></li>
          <li><a href="#"><font-awesome-icon :icon="['fas', 'envelope-open-text']" /> Email us</a></li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import moment from 'moment';

export default {
  data () {
    // Meetings are every first Friday at 8pm,
    //moment([2010, 1, 14, 15, 25, 50, 125]);
    //Parameter and indexed w/ year (1), month (0), day (1), hour (0), minute (0), second (0)
    const thisMonthMeeting = moment() //now
      .date(1)                      //set to first of month (1 indexed)
      .day(5)                       //set to friday (5) of that week [0-6] === [Sunday-Saturday]
      .hour(19);                    //7pm (0 indexed)
    const nextMonthMeeting = moment().add(1, 'M').date(1).day(5); //Now + 1 Month
    let displayMeeting = thisMonthMeeting;
    if (thisMonthMeeting.clone().add(1, 'd').isAfter(moment())) { //If 1 day after this months meeting...
      displayMeeting = nextMonthMeeting;
    }

    return {
      displayMeeting
    };
  }
};
</script>

<style lang="scss">
@import "scss/main.scss";

main {
  text-align: center;
  padding: cRems(20px);
  overflow-x: hidden;
  width: 100%;
  margin: 0 auto;

  @include desktop {
    width: cRems(640px);
  }
}

.logo-container {
  padding: cRems(20px);
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: cRems(400px);

    @include desktop {
      width: cRems(300px);
    }
  }
}

.join-up-head-button {
  padding: cRems(10px) cRems(30px);
  font-family: $montserrat;
  font-weight: $bold;
  font-size: cRems(36px);
  color: $grey;

  background-color: $blurple;
  &:hover {
    background-color: saturate($blurple, 20%);
  }

  @include desktop {
    font-size: cRems(24px);
  }
}

#join-up {
  transition: background-color 1s, box-shadow 1s;

  &:target { //When it is linked to
    background-color: lighten($black, 15%);
    box-shadow: 0 0 cRems(20px) cRems(20px) lighten($black, 15%);
  }
}

.application-form-button {
  margin: cRems(20px) 0 cRems(20px);
}

.head-aside-container {
  max-width: cRems(300px);
  margin: 0 auto;
  @include desktop {
    position: absolute;
    top: 30vh;
    right: calc(50% - #{cRems(280px)});
    transform: translateY(-50%) translateX(50%);
    max-width: cRems(200px);
  }
}

.welcome-container {
  margin-bottom: cRems(60px);
}

.join-up-container {
  margin-bottom: cRems(60px);
}
</style>
