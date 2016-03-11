$(document).ready(function() {
    $('#example').DataTable( {
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        },"ajax": "data.json"
    } );

    $('#submitForm').submit(function () {
        if(document.getElementById("submitForm").checkValidity()){
            $("#QuestionForm").fadeOut();
            $("#searching").fadeIn();
            $("#searching").delay(1500).fadeOut();
            $("#planTable").delay(1500).fadeIn();
        }
        return false;
    });
} );
