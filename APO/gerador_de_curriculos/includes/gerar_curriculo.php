<?php
// Verifica se os dados foram submetidos via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = $_POST["nome"];
    $dataNascimento = $_POST["dataNascimento"];
    $experiencias = $_POST["experiencia"];
    $referencias = $_POST["referencias"];

    // Função para calcular a idade baseada na data de nascimento
    function calcularIdade($dataNascimento) {
        $hoje = new DateTime();
        $dataNascimento = new DateTime($dataNascimento);
        $idade = $hoje->diff($dataNascimento);
        return $idade->y;
    }

    // Calcula a idade
    $idade = calcularIdade($dataNascimento);

    // Monta o currículo formatado
    $curriculo = "
    ------ Currículo ------
    Nome: $nome
    Data de Nascimento: $dataNascimento
    Idade: $idade anos

    Experiências Profissionais:
    ";
    foreach ($experiencias as $exp) {
        $curriculo .= "- $exp\n";
    }
    $curriculo .= "\nReferências Pessoais:\n$referencias\n";
    $curriculo .= "------------------------";

    // Define o nome do arquivo
    $filename = "curriculo_$nome.txt";

    // Cabeçalhos para download do arquivo
    header('Content-Type: text/plain');
    header("Content-Disposition: attachment; filename=\"$filename\"");

    // Imprime o currículo para download
    echo $curriculo;
}
?>

