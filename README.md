# Du Chef Esfiharia — Cardápio Web V2

Versão mobile-first com aparência de aplicativo e pronta para GitHub Pages.

## O que já tem
- Logo oficial enviada no projeto
- Hero/identidade visual Du Chef
- Categorias: Mais pedidos, Esfihas, Combos, Bebidas & extras
- Imagens locais das esfihas
- Carrinho com quantidade +/−
- Checkout dentro do carrinho
- Cálculo de entrega por bairro
- Pix / Dinheiro / Cartão
- Campo de troco quando pagamento é dinheiro
- Endereço, referência, WhatsApp e observações
- Pedido formatado automaticamente para WhatsApp
- Tela final: “Pedido enviado! Agora aguarde nossa confirmação no WhatsApp.”
- PWA básico (manifest + service worker)
- Carrinho salvo no aparelho via localStorage

## Antes de publicar
Abra `index.html` e troque:

`const WHATSAPP_NUMBER='5581999999999';`

pelo WhatsApp real da Du Chef, somente números, com DDI + DDD.

Os preços e bairros ficam no objeto `CONFIG` dentro do próprio `index.html`.

## GitHub Pages pelo celular
1. Crie um repositório no GitHub.
2. Envie todos os arquivos e a pasta `assets` mantendo a estrutura.
3. Vá em Settings → Pages.
4. Em Source, selecione Deploy from a branch.
5. Branch: `main` e pasta `/root`.
6. Salve e aguarde o link do GitHub Pages.

## Importante sobre as imagens
As imagens das esfihas são imagens locais ilustrativas criadas para o protótipo. Quando a Du Chef tiver fotos reais, basta substituir os PNGs mantendo os mesmos nomes.
