<template>
  <div class="container">
    <div class="row">
    <div class="col-md-12">
    <div class="search-container">
      <hello-message>
        <template v-slot:info>Oto lista zarezerwowanych wizyt przez pacjentów</template>
      </hello-message>
      <div class="search-wrapper">
        <div class="search-input">
          <input type="text" id="search" placeholder="Wyszukaj">
        </div>
      </div>
    </div>
    <div>
      <!-- Tabela -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Pacjent</th>
            <th>Lekarz</th>
            <th>Specjalizacja</th>
            <th>Status</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          <!-- Pierwszy wiersz -->
          <tr>
            <td>10.05.2023</td>
            <td>Jan Kowalski</td>
            <td>dr n. med. Anna Nowak</td>
            <td>Gastrolog</td>
            <td><span class="dota" id="blue"></span>Zakończona</td>
            <td>
              <div class="button-container">
                <button id="comit">Potwierdź</button>
                <button id="reject">Odwołaj</button>
              </div>
            </td>
          </tr>
          <!-- Drugi wiersz -->
          <tr>
            <td>11.05.2023</td>
            <td>Anna Nowak</td>
            <td>dr n. med. Jan Kowalski</td>
            <td>Okulista</td>
            <td><span class="dota" id="yellow"></span>Oczekująca</td>
            <td>
              <div class="button-container">
                <button id="comit">Potwierdź</button>
                <button id="reject">Odwołaj</button>
              </div>
            </td>
          </tr>
          <!-- Trzeci wiersz -->
          <tr>
            <td>12.05.2023</td>
            <td>Marcin Zieliński</td>
            <td>dr n. med. Joanna Nowakowska</td>
            <td>internista</td>
            <td><span class="dota" id="red"></span>Odwołana</td>
            <td>
              <div class="button-container">
                <button id="comit">Potwierdź</button>
                <button id="reject">Odwołaj</button>
              </div>
            </td>
          </tr>
      <tr>
        <td colspan="2">&#9668; Poprzednia strona</td>
        <td colspan="2" style="text-align: center;">1  2  ...  5  6</td>
        <td colspan="2" style="text-align: right;">Następna strona &#9658;</td>
      </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  </div>
  </div>
  
  </template>
  
  <style>
  .search-container {
    display: flex;
    align-items: center;
  }
  .button-container {
  display: flex;
  gap: 5px;
}

  .search-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  
  .search-label {
    margin-right: 10px;
  }
  
  .search-input {
    display: flex;
    align-items: center;
    margin-right: 5rem;
  }
  .table-container {
  margin-top: 20px;
  overflow-x: auto;
}

table {
  border-collapse: separate; 
  border-spacing: 0;
  width: 100%;
  background: #F8F9FB;
  border: 1px solid #D1D9E2;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 10px;
}

th, td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #D1D9E2;
}
/* 
th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
} */

tr:hover {
  background-color: #ddd;
}

#comit {
  display: flex;
  align-items: center;
  padding: 2px 8px;
  gap: 4px;
  width: 79px;
  height: 22px;
  background: #0CE5CF;
  border-radius: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  margin-right: 1rem;
  letter-spacing: -0.001em;
  color: #FFFFFF;
  outline: none;
  border: none; 
  outline: none;
}
.dota {
  vertical-align: middle;
  height: 15px;
  width: 15px;
  margin-right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: inline-block;
}

#blue{
  background: #205594;
  
}
#yellow{
  background: #F8EE12;
}
#green{
background: #209420;
}
#red{
  background: #F84912;
}
#reject {
  display: flex;
  align-items: center;
  padding: 2px 8px;
  gap: 4px;
  width: 67px;
  height: 22px;
  background: #CA5F5F;
  border-radius: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  margin-right: 2rem;
  letter-spacing: -0.001em;
  color: #FFFFFF;
  border: none; 
  outline: none;
}
  </style>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: "",
      };
    },
  };
  </script>