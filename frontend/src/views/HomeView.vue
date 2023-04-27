<template>
  <section id="home">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h1>Przychodnia studencka</h1>
          <p class="home-text">Z myślą o Twoim komforcie i wygodzie, oferujemy możliwość umówienia się
          na wizytę online. Wystarczy, że zalogujesz się na swoje konto pacjenta na
          naszej stronie internetowej, a następnie wybierzesz dogodny termin i
          godzinę wizyty. Nasz system potwierdzi Twoją rezerwację i przypomni Ci o
          niej przed planowanym terminem.</p>
          <div class="home-buttons mt-3 mb-5">
            <base-button class="mx-2">Logowanie</base-button>
            <base-button class="mx-2" style="background-color: #E6E9EC; border: 1px solid #D1D9E2; color: rgb(95, 109, 126);">Rejestracja</base-button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img class="img-fluid mt-4" src="../assets/images/banner.png" alt="Banner">
        </div>
      </div>
    </div>
  </section>
  <section id="specjalisci">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="mt-5">Nasi specjaliści</h2>
          <p>Umów wizytę do wybranego lekarza</p>
          <div class="najblizsze-terminy">
            <div class="row">
              <div class="col-md-4">
                <div class="termin">
                  <div class="termin-doctor">
                    <div class="termin-icon"></div>
                    <div class="termin-title"></div>
                  </div>
                  <div class="termin-content"></div>
                </div>
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "HomeView",
  components: {
    BaseButton
  },
};
</script>


<style lang="scss" scoped>
  @import "@/assets/styles/global.scss";
  
  h1 {
      margin: 60px 0 20px;
      font-weight: 700;
      font-weight: 700;
      font-size: 52px;
      line-height: 60px;
      text-align: center;
      letter-spacing: -0.01em;
      color: $dark;
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.02em;
    color: $dark;
  }

  p {
    font-size: 16px;
    color: $secondary;
  }

  p.home-text {
    font-size: 18px;
  }

  section#home {
    background-color: $primary;
  }
</style>