let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"
let prompt = `Você é um designer web premiado e programador.
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.
Regras de Resposta:
- Respostas somente com HTML e CSS puros
- Não use crases, markdown ou explicações
- Não use tags <img>

Identidade Visual (capriche e surpreenda):
- Invente uma paleta de cores única que combine com a essência do negócio
- Escolha uma Google Font marcante via @import
- Use emojis grandes no lugar de imagens
- Use CSS moderno: gradientes, sombras, animações sutis, layout generoso, tipografia forte

Estrutura da Página:
- Header com nome do negócio e menu
- Hero impactante com título, subtítulo e CTA
- Seção de diferenciais com emojis
- Depoimento de cliente
- Footer com contato

Todo o conteúdo em português, criativo e específico par ao negócio.`

async function gerarcodigo() {
    let textarea = document.querySelector(".texto-pagina").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "user",
                    "content": textarea
                },
                {
                    "role": "system",
                    "content": prompt
                }
            ],
        })
    })
    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    let espacoCodigo = document.querySelector(".bloco_codigo")
    let espacoSite = document.querySelector(".bloco_site")

    espacoCodigo.textContent = resultado
    espacoSite.srcdoc = resultado

}
