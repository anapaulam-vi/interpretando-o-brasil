# Interpretando o Brasil

Versão web da **Chave de Interpretação Visual para Imagens de Satélite – Interpretando o Brasil** (MapBiomas): as classes de cobertura e uso da terra em cada bioma brasileiro, com imagens Landsat e Sentinel-2 (seco e chuvoso), Google Earth, série temporal de NDVI e os padrões de interpretação (tonalidade, textura, falsa-cor).

Há dois modos de navegação:

- **Por bioma:** você escolhe um bioma e vê todas as classes que têm ficha nele, agrupadas e com filtro por grupo.
- **Por classe:** você escolhe uma classe e vê como ela aparece em cada bioma. Dá para comparar só os biomas que quiser.

Clicar num card abre a ficha completa. Ela traz a descrição, as observações, os exemplos (cada um com 5 imagens que podem ser ampliadas, a série temporal, o mapa de localização e as coordenadas com link para o Google Maps) e o link para a página correspondente do PDF. O endereço da página guarda o filtro e a ficha aberta, então dá para compartilhar o link de uma ficha específica.

## Legenda

O site segue a **legenda MapBiomas Coleção 11**: nomes, códigos, cores e descrições por bioma. A descrição exibida em cada ficha é a oficial (`dados/legenda_mapbiomas.txt`, extraída do PDF da legenda). O texto do PDF da chave só aparece quando a legenda não tem descrição para aquela classe e bioma, e nesse caso a ficha mostra um aviso. Para trocar de coleção, substitua `dados/legenda_mapbiomas.txt` e ajuste os nomes, cores e códigos em `dados/classes.csv` (e no dicionário `CLASSES` de `scripts/importar_pdf.py`).

A revisão do PDF em relação às Coleções 10 e 11 fica na pasta local `revisao/`, que não é publicada.

## Correções automáticas (site e PDF)

- `scripts/correcoes_automaticas.py` gera `dados/correcoes.csv`, com a padronização de tonalidade e textura, a falsa-cor da p. 57 e as observações revisadas.
- `scripts/gerar_dados.py` aplica essas correções e as descrições oficiais da legenda no site.
- **Português / inglês:** o botão PT | EN do site troca a interface e o conteúdo. As descrições das classes em inglês são as oficiais da legenda Coleção 11 (`dados/legenda_mapbiomas_en.csv`, extraídas por `scripts/ler_legenda_en.py --csv` do PDF da planilha "Descrição Detalhada", aba EN). Os demais textos (observações, limitações, apresentação, tonalidade, textura) vêm de `dados/traducao_en.csv` (colunas `pt;en`, editável no Excel). O que faltar na planilha aparece em português. Os rótulos gravados dentro das imagens e o PDF continuam em português.
- `scripts/gerar_limitacoes.py` preenche com um texto-base por classe o campo "Limitação de interpretação da classe" de cada exemplo (`dados/limitacoes.csv`). A coluna `equipe` dessa planilha é o complemento da equipe e nunca é sobrescrita.
- `scripts/corrigir_pdf.py "<PDF original>" Interpretando_o_Brasil.pdf` aplica as mesmas correções no PDF: nomes das classes, descrições oficiais, campos e observações. O texto novo sai em Montserrat (`scripts/fontes`, licença OFL), e as imagens não são tocadas. O PDF publicado no site é essa versão corrigida. O original fica fora do repositório.

O que depende da equipe está na lista de pendências (pasta local `revisao/`, não publicada).

## Estrutura

```
index.html, assets/          site (HTML/CSS/JS estático, sem build)
Interpretando_o_Brasil.pdf   PDF original (download e links "ver no PDF")
dados/biomas.csv             biomas
dados/classes.csv            classes: grupo, cor e código da legenda MapBiomas
dados/descricoes.csv         bioma x classe: descrição e observações
dados/exemplos.csv           um exemplo por linha: coordenadas, falsa-cor, tonalidade,
                             textura, observações, caminhos das imagens, página do PDF
dados/apresentacao.txt       texto da janela "Sobre"
dados/chave.js               gerado (é o que o site lê)
img/<bioma>/<classe>/        recortes das páginas de exemplo
scripts/importar_pdf.py      PDF -> CSVs + imagens
scripts/gerar_dados.py       CSVs -> dados/chave.js
```

## Atualizar o conteúdo

**A partir de uma nova versão do PDF** (precisa de `pip install pymupdf pillow`):

```
python scripts/importar_pdf.py "caminho/Interpretando o brasil.pdf"
python scripts/gerar_dados.py
```

Copie também o PDF novo para `Interpretando_o_Brasil.pdf`. O importador avisa sobre páginas sem imagem e classes que ele não conhece. Uma classe nova precisa ser acrescentada no dicionário `CLASSES` do script, com grupo, cor e código.

**Correções pontuais de texto:** edite `dados/descricoes.csv` ou `dados/exemplos.csv` no Excel (separador `;`) e rode `python scripts/gerar_dados.py`. Atenção: uma nova importação do PDF sobrescreve esses CSVs. O ideal é corrigir também no PDF.

Para conferir, abra o `index.html` no navegador. Funciona direto do disco, sem servidor.

## Publicar no GitHub Pages

No GitHub, vá em **Settings → Pages → Source: Deploy from a branch → main / (root)**. O site fica em `https://<usuario>.github.io/<repositorio>/`.
