☁️ Weather App Pro - Previsão do Tempo Dinâmica
Este projeto é uma evolução de um buscador de clima básico, onde foquei em melhorar a Experiência do Usuário (UX) e a Fidelidade Visual. O aplicativo consome dados da API OpenWeather e adapta toda a sua interface com base nos resultados retornados.

![Kevin Previsão - Google Chrome 2026-04-09 19-00-35](https://github.com/user-attachments/assets/ca9a2c51-a166-4585-acfd-50ee40117d12)
________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
🚀 Melhorias Implementadas (Diferenciais)
Diferente de versões básicas, este projeto conta com:

Troca Dinâmica de Fundo: O fundo do site altera-se automaticamente de acordo com o clima (Sol, Nuvens, Chuva, etc.).

Lógica de Frio Extremo (QA Focus): Implementei uma prioridade lógica onde, se a temperatura for negativa (abaixo de 0°C), o fundo muda para uma paisagem de neve, independente do estado do céu, garantindo consistência visual.

Interface Glassmorphism: Aplicação de efeitos de transparência e desfoque (blur) no CSS para um visual moderno e limpo.

Suporte ao Teclado: Adição de um Event Listener para permitir a busca ao pressionar a tecla "Enter", melhorando a usabilidade.

Tratamento de Erros: Exibição de alertas caso a cidade não seja encontrada ou ocorra erro na API.

________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
🛠️ Tecnologias Utilizadas
HTML5 (Estrutura semântica)

CSS3 (Flexbox, Glassmorphism, Transições suaves)

JavaScript (ES6+) (Async/Await, Fetch API, Manipulação de DOM)

OpenWeather API (Dados climáticos em tempo real)

________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
📋 Como rodar o projeto
Clone o repositório:

Bash
git clone https://github.com/SEU-USUARIO/previsao-do-tempo-pro.git

Abra o arquivo index.html no seu navegador (recomendado usar a extensão Live Server no VS Code).

________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
🧪 Casos de Teste (QA)
Para validar o funcionamento, você pode testar as seguintes entradas:

Rio de Janeiro: Deve retornar um fundo ensolarado ou de nuvens.

Nuuk (Groenlândia): Deve disparar o fundo de neve devido à temperatura negativa.

Londres: Deve demonstrar a transição suave para clima de chuva ou nublado.


