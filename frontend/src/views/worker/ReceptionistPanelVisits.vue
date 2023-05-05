<template>
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
            <td>Potwierdzona</td>
            <td><button id="comit">Potwierdź</button><button id="reject">Odrzuć</button></td>
          </tr>
          <!-- Drugi wiersz -->
          <tr>
            <td>11.05.2023</td>
            <td>Anna Nowak</td>
            <td>dr n. med. Jan Kowalski</td>
            <td>Okulista</td>
            <td>Oczekująca</td>
            <td><button id="comit">Potwierdź</button><button id="reject">Odrzuć</button></td>
          </tr>
          <!-- Trzeci wiersz -->
          <tr>
            <td>12.05.2023</td>
            <td>Marcin Zieliński</td>
            <td>dr n. med. Joanna Nowakowska</td>
            <td>internista</td>
            <td>Anulowana</td>
            <td><button id="comit">Potwierdź</button><button id="reject">Odrzuć</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </template>
  
  <style>
  .search-container {
    display: flex;
    align-items: center;
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
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 12px;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

#comit {

align-items: center;
padding: 2px 8px;
gap: 4px;
width: 79px;
height: 22px;
background: #0CE5CF;
border-radius: 5px;


}
#reject {
align-items: center;
padding: 2px 8px;
gap: 4px;

width: 67px;
height: 22px;

background: #CA5F5F;
border-radius: 5px;



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