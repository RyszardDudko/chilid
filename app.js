var sortBy = 'id';
var sortOrder = 'desc';
var paginationInstance = null;
 
$(document).ready(function() {
  moment.locale('pl');
  var data = getData();
  paginationInstance = displayPaginatedData(data);
  $(".header-title").click(function() {
      // modyfikacja sortBy i sortOrder
      // zczytaj wartośc id klikniętego elementu
      // przypisz tę wartosc do sortBy
      // zmien wartosc sortOrder na przeciwną lub domyślną tj. z asc na desc lub desc na asc
      paginationInstance.destroy();
      paginationInstance = displayPaginatedData(data);
  });
});

 
function getData(){
  // wczytaj json
  json = [{
    "id": 1,
    "firstName": "Jan",
    "lastName": "Kowalski",
    "dateOfBirth": "1.7.1990 11:35",
    "company": "XSolve",
    "note": 90
  },
  {
    "id": 4,
    "firstName": "Justyna",
    "lastName": "Kowalska",
    "dateOfBirth": "4.02.1976 14:37",
    "company": "XSolve",
    "note": 91
  },
  {
    "id": 2,
    "firstName": "Krzysztof",
    "lastName": "Krawczyk",
    "dateOfBirth": "28.10.1950 2:15",
    "company": "Chilid",
    "note": 27
  },
  {
    "id": 3,
    "firstName": "Bogusław",
    "lastName": "Linda",
    "dateOfBirth": "03.01.1963 23:10",
    "company": "XSolve",
    "note": 50
  },
  {
    "id": 5,
    "firstName": "Krzysztof",
    "lastName": "Kononowicz",
    "dateOfBirth": "10.10.1910 18:00",
    "company": "Chilid",
    "note": 77
  },
  {
    "id": 6,
    "firstName": "Maryla",
    "lastName": "Rodowicz",
    "dateOfBirth": "29.02.1936 11:35",
    "company": "XSolve",
    "note": 8
  },

  {
    "id": 7,
    "firstName": "Edyta",
    "lastName": "Górniak",
    "dateOfBirth": "14.11.1972 06:35",
    "company": "XSolve",
    "note": 25
  },
  {
    "id": 8,
    "firstName": "Dawid",
    "lastName": "Podsiadło",
    "dateOfBirth": "23.05.1993 16:15",
    "company": "Chilid",
    "note": 19
  },
  {
    "id": 9,
    "firstName": "Elvis",
    "lastName": "Presley",
    "dateOfBirth": "09.01.1935 01:35",
    "company": "XSolve",
    "note": 8
  }];
  return json
}


function displayPaginatedData(data) {
  var sortedData =  sortData(data);
  return $('#table .rows').pagination({
    dataSource: sortedData,
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
 });
}
 
function template(data) {
 return `<div class="row">
    <div class="row-value">`+data.ID +`</div>
    <div class="row-value">`+data.firstName +`</div>
    <div class="row-value">`+data.lastName +`</div>
    <div class="row-value">`+format(data.date) +`</div>
  </div>`
}
 
function format(date) {
  return moment(date).format("DD MMM YYYY");
}
 
function sortData(data){
  // https://lodash.com/docs/4.17.5#orderBy
  // i uywasz zmienne sortBy i sortOrder
  return orderBy(data, sortBy, sortOrder);
}