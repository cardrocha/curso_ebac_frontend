$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const listaDeTarefa = $('#lista-de-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${listaDeTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $("li").click(function () {
            $(this).addClass("riscado");
        });
        $('#lista-de-tarefa').val("");
    });
});







