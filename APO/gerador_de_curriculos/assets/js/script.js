// Adicionar campos dinâmicos para experiências profissionais
$(document).ready(function() {
    $('.add-field').click(function() {
        var html = '<div class="input-group mb-3">' +
                        '<input type="text" class="form-control" name="experiencia[]" required>' +
                        '<div class="input-group-append">' +
                            '<button class="btn btn-outline-secondary remove-field" type="button">-</button>' +
                        '</div>' +
                    '</div>';
        $('#experiencias').append(html);
    });

    // Remover campos dinâmicos
    $(document).on('click', '.remove-field', function() {
        $(this).closest('.input-group').remove();
    });

    // Função para exibir o currículo gerado
    $('#formCurriculo').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serializeArray();
        var curriculoTexto = "------ Currículo ------\n";
        var experiencias = [];

        formData.forEach(function(item) {
            if (item.name === "experiencia[]") {
                experiencias.push(item.value);
            } else {
                curriculoTexto += item.name.charAt(0).toUpperCase() + item.name.slice(1) + ": " + item.value + "\n";
            }
        });

        curriculoTexto += "\nExperiências Profissionais:\n";
        experiencias.forEach(function(exp) {
            curriculoTexto += "- " + exp + "\n";
        });

        $('#curriculoTexto').text(curriculoTexto);
        $('#curriculoGerado').show();
    });
});

// Função para download do currículo gerado
function downloadCurriculo() {
    window.print();
}
