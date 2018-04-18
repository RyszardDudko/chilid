var sortBy = 'id';
var sortOrder = 'desc';
moment.locale('pl');

$(document).ready(function() {
  var data = window.jsonData;
  displayPaginatedData(data);
  $(".header-title").click(function() {
      sortBy = $(this).attr('id');
      sortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
      displayPaginatedData(data);
  });
});

function template(row) {
 return `<div class="data-row">
    <div class="data-row-value">`+row.id +`</div>
    <div class="data-row-value">`+row.firstName +`</div>
    <div class="data-row-value">`+row.lastName +`</div>
    <div class="data-row-value">`+format(row.dateOfBirth) +`</div>
    <div class="data-row-value">`+row.company +`</div>
    <div class="data-row-value">`+row.note +`</div>
  </div>`
}

function format(date) {
  return moment(date, "DD.MM.YYYY HH:mm").format("DD MMM YYYY");
}

function sortData(data){
  return _.orderBy(data, sortBy, sortOrder);
}

function displayPaginatedData(data) {
  var sortedData = sortData(data.slice());
  return $('.table-container').pagination({
    dataSource: sortedData,
    pageSize: 6,
    callback: function(data, pagination) {
      var html = _.map(data, function(d) { return template(d) }).join('');
      $('.data-rows').html(html);
    }
 });
}