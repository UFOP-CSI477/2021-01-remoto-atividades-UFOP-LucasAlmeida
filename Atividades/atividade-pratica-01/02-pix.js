$(document).ready(function () {

    var url = "https://brasilapi.com.br/api/banks/v1";
    let dropdown = $('#instituicao');
    dropdown.empty();

    $.getJSON(url, function (data) {
        $.each(data, function(key, entry) {
            dropdown.append( $('<a class="dropdown-item"></a>')
              .attr('value', entry.code).text(entry.name).click(function() {
                    $(this).closest(".input-group").find("input").val($(this).text())
               })
          
          );
    });
    });


    // SHOW SELECTED VALUE.
    $('#bancos').change(function () {
        $('#msg').text('Selected Item: ' + this.options[this.selectedIndex].text);
    });
    
});
