<template>
  <section id="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Przychodnia studencka</h1>
          <p>Z myślą o Twoim komforcie i wygodzie, oferujemy możliwość umówienia się
          na wizytę online. Wystarczy, że zalogujesz się na swoje konto pacjenta na
          naszej stronie internetowej, a następnie wybierzesz dogodny termin i
          godzinę wizyty. Nasz system potwierdzi Twoją rezerwację i przypomni Ci o
          niej przed planowanym terminem.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/global.scss";
  
  h1 {
      margin: 60px 0;
      font-weight: 700;
      font-weight: 700;
      font-size: 52px;
      line-height: 60px;
      text-align: center;
      letter-spacing: -0.01em;
      color: $dark;
  }
</style>