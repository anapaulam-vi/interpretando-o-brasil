// Gerado por scripts/gerar_dados.py — não edite à mão; edite as planilhas em dados/
window.CHAVE = {
 "apresentacao": "A Chave de Interpretação Visual para Imagens de Satélite – Interpretando o Brasil foi elaborada a partir da análise de imagens dos satélites Landsat e Sentinel-2. A metodologia consistiu na avaliação do comportamento espectral e dos índices de vegetação das diferentes classes de uso e cobertura da terra no Brasil e em seus biomas, considerando tanto o período seco quanto o período chuvoso. Para cada classe temática, apresenta-se a descrição do alvo, contemplando seu contexto espacial, suas características vegetacionais e os principais padrões de interpretação, como coloração, tonalidade, textura e variação sazonal. A construção da chave foi realizada em colaboração com especialistas em interpretação visual de imagens de satélite no âmbito do projeto MapBiomas.",
 "pdf": "Interpretando_o_Brasil.pdf",
 "legenda": "Coleção 11",
 "biomas": [
  {
   "id": "amazonia",
   "nome": "Amazônia",
   "cor": "#24693d"
  },
  {
   "id": "cerrado",
   "nome": "Cerrado",
   "cor": "#9c8a3b"
  },
  {
   "id": "caatinga",
   "nome": "Caatinga",
   "cor": "#d9a24a"
  },
  {
   "id": "mata_atlantica",
   "nome": "Mata Atlântica",
   "cor": "#2f9e6e"
  },
  {
   "id": "pantanal",
   "nome": "Pantanal",
   "cor": "#3d8fb3"
  },
  {
   "id": "pampa",
   "nome": "Pampa",
   "cor": "#8fb35a"
  }
 ],
 "grupos": [
  "Floresta",
  "Vegetação Herbácea e Arbustiva",
  "Agropecuária",
  "Área não Vegetada",
  "Corpo d'Água"
 ],
 "classes": [
  {
   "id": "formacao_florestal",
   "nome": "Formação Florestal",
   "grupo": "Floresta",
   "cor": "#1f8d49",
   "codigo": "3"
  },
  {
   "id": "formacao_savanica",
   "nome": "Formação Savânica",
   "grupo": "Floresta",
   "cor": "#7dc975",
   "codigo": "4"
  },
  {
   "id": "floresta_alagavel",
   "nome": "Floresta Alagável",
   "grupo": "Floresta",
   "cor": "#007785",
   "codigo": "6"
  },
  {
   "id": "mangue",
   "nome": "Mangue",
   "grupo": "Floresta",
   "cor": "#04381d",
   "codigo": "5"
  },
  {
   "id": "formacao_campestre",
   "nome": "Formação Campestre",
   "grupo": "Vegetação Herbácea e Arbustiva",
   "cor": "#d6bc74",
   "codigo": "12"
  },
  {
   "id": "campo_alagado_e_area_pantanosa",
   "nome": "Campo Alagado e Área Pantanosa",
   "grupo": "Vegetação Herbácea e Arbustiva",
   "cor": "#519799",
   "codigo": "11"
  },
  {
   "id": "afloramento_rochoso",
   "nome": "Afloramento Rochoso",
   "grupo": "Vegetação Herbácea e Arbustiva",
   "cor": "#ffaa5f",
   "codigo": "29"
  },
  {
   "id": "apicum",
   "nome": "Apicum",
   "grupo": "Vegetação Herbácea e Arbustiva",
   "cor": "#fc8114",
   "codigo": "32"
  },
  {
   "id": "restinga_herbacea_ou_arbustiva",
   "nome": "Restinga Herbácea ou Arbustiva",
   "grupo": "Vegetação Herbácea e Arbustiva",
   "cor": "#ad5100",
   "codigo": "50"
  },
  {
   "id": "pastagem",
   "nome": "Pastagem",
   "grupo": "Agropecuária",
   "cor": "#edde8e",
   "codigo": "15"
  },
  {
   "id": "lavoura_temporaria",
   "nome": "Lavoura Temporária",
   "grupo": "Agropecuária",
   "cor": "#c27ba0",
   "codigo": "19"
  },
  {
   "id": "arroz",
   "nome": "Arroz",
   "grupo": "Agropecuária",
   "cor": "#c71585",
   "codigo": "40"
  },
  {
   "id": "cana",
   "nome": "Cana",
   "grupo": "Agropecuária",
   "cor": "#db7093",
   "codigo": "20"
  },
  {
   "id": "lavoura_perene",
   "nome": "Lavoura Perene",
   "grupo": "Agropecuária",
   "cor": "#d082de",
   "codigo": "36"
  },
  {
   "id": "silvicultura",
   "nome": "Silvicultura",
   "grupo": "Agropecuária",
   "cor": "#7a5900",
   "codigo": "9"
  },
  {
   "id": "praia_duna_e_areal",
   "nome": "Praia, Duna e Areal",
   "grupo": "Área não Vegetada",
   "cor": "#ffa07a",
   "codigo": "23"
  },
  {
   "id": "area_urbanizada",
   "nome": "Área Urbanizada",
   "grupo": "Área não Vegetada",
   "cor": "#d4271e",
   "codigo": "24"
  },
  {
   "id": "mineracao",
   "nome": "Mineração",
   "grupo": "Área não Vegetada",
   "cor": "#9c0027",
   "codigo": "30"
  },
  {
   "id": "usina_fotovoltaica",
   "nome": "Usina Fotovoltaica",
   "grupo": "Área não Vegetada",
   "cor": "#757272",
   "codigo": "75"
  },
  {
   "id": "outras_areas_nao_vegetadas",
   "nome": "Outras Áreas não Vegetadas",
   "grupo": "Área não Vegetada",
   "cor": "#db4d4f",
   "codigo": "25"
  },
  {
   "id": "rio_lago_e_oceano",
   "nome": "Rio, Lago e Oceano",
   "grupo": "Corpo d'Água",
   "cor": "#2532e4",
   "codigo": "33"
  },
  {
   "id": "aquicultura",
   "nome": "Aquicultura",
   "grupo": "Corpo d'Água",
   "cor": "#091077",
   "codigo": "31"
  }
 ],
 "entradas": {
  "formacao_florestal|amazonia": {
   "descricao": "Floresta Ombrófila Densa, Floresta Estacional Sempre-Verde, Floresta Ombrófila Aberta, Floresta Estacional Semidecidual, Floresta Estacional Decidual, Savana Arborizada, Áreas que sofreram ação do fogo ou exploração madeireira, Floresta resultante de processos naturais de sucessão, após supressão total ou parcial de vegetação primária por ações antrópicas ou causas naturais, podendo ocorrer árvores remanescentes de vegetação primária. Floresta de bambu (Acre). Áreas de Campinarana.",
   "fonte": "legenda",
   "observacoes": "Florestas degradadas são mantidas na classe Formação Florestal até a perda irreversível da vegetação. A regeneração só é considerada quando o porte da floresta se assemelha ao natural.",
   "pagina": 6,
   "exemplos": [
    {
     "lat": -13.28651295,
     "lon": -54.480744,
     "coords": "-13.28651295, -54.48074400",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "NDVI alto (0,9) e baixa variação por sazonalidade.",
     "limitacao": {
      "geral": "O limite com a Formação Savânica é gradual (dossel mais aberto). Em florestas estacionais, a queda das folhas no período seco reduz o NDVI e pode lembrar savana. Florestas secundárias jovens, degradadas ou com corte seletivo são difíceis de separar da floresta madura na resolução de 10–30 m."
     },
     "pagina": 7,
     "imagens": [
      {
       "src": "img/amazonia/formacao_florestal/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/formacao_florestal/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/formacao_florestal/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/formacao_florestal/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/formacao_florestal/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/formacao_florestal/ex1_grafico.jpg",
     "mapa": "img/amazonia/formacao_florestal/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_savanica|amazonia": {
   "descricao": "Formação vegetal aberta com um estrato arbustivo e/ou arbóreo mais ou menos desenvolvido, estrato herbáceo sempre presente.",
   "fonte": "legenda",
   "observacoes": "Savanas alagadas são consideradas na classe “Campo Alagado e Área Pantanosa”.",
   "pagina": 8,
   "exemplos": [
    {
     "lat": 1.108,
     "lon": -55.8815,
     "coords": "1.1080, -55.8815",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A densidade de árvores varia de forma contínua, por isso os limites com Formação Florestal e Formação Campestre são subjetivos. No período seco, a resposta se aproxima da de pastagem. Comparar as imagens de seca e de chuva e a série de NDVI."
     },
     "pagina": 9,
     "imagens": [
      {
       "src": "img/amazonia/formacao_savanica/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/formacao_savanica/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/formacao_savanica/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/formacao_savanica/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/formacao_savanica/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/formacao_savanica/ex1_grafico.jpg",
     "mapa": "img/amazonia/formacao_savanica/ex1_mapa.jpg"
    }
   ]
  },
  "floresta_alagavel|amazonia": {
   "descricao": "Floresta Ombrófila Aberta Aluvial estabelecida ao longo dos cursos de água, ocupa as planícies e terraços periodicamente ou permanentemente inundados, que na Amazônia constituem fisionomias de matas-de-várzea ou matas-de-igapó, respectivamente.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 13,
   "exemplos": [
    {
     "lat": -2.6528,
     "lon": -44.7673,
     "coords": "-2.6528, -44.7673",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A diferença em relação à Formação Florestal depende do regime de inundação, pouco visível em imagens ópticas sob o dossel. Usar o contexto (várzea, igapó, planície fluvial) e imagens do período de cheia."
     },
     "pagina": 14,
     "imagens": [
      {
       "src": "img/amazonia/floresta_alagavel/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/floresta_alagavel/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/floresta_alagavel/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/floresta_alagavel/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/floresta_alagavel/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/floresta_alagavel/ex1_grafico.jpg",
     "mapa": "img/amazonia/floresta_alagavel/ex1_mapa.jpg"
    }
   ]
  },
  "mangue|amazonia": {
   "descricao": "Formações florestais e/ou arbustivas, densas, sempre-verdes, frequentemente inundadas pela maré e associadas ao ecossistema costeiro de Manguezal.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 26,
   "exemplos": [
    {
     "lat": -2.2378,
     "lon": -44.714,
     "coords": "-2.2378, -44.7140",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundido com Floresta Alagável e Restinga Arbórea. Os limites com Apicum e com a água variam com a maré. Usar o contexto estuarino."
     },
     "pagina": 27,
     "imagens": [
      {
       "src": "img/amazonia/mangue/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/mangue/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/mangue/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/mangue/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/mangue/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/mangue/ex1_grafico.jpg",
     "mapa": "img/amazonia/mangue/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_campestre|amazonia": {
   "descricao": "Savana, Savana Parque (Marajó), Savana-Estépica (Roraima), Savana Gramíneo-Lenhosa, para regiões fora do Ecótono Amazônia/Cerrado. E para regiões dentro do Ecótono Amazônia/Cerrado predominância de estrato herbáceo.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 10,
   "exemplos": [
    {
     "lat": 3.8363,
     "lon": -59.7655,
     "coords": "3.8363, -59.7655",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 11,
     "imagens": [
      {
       "src": "img/amazonia/formacao_campestre/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/formacao_campestre/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/formacao_campestre/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/formacao_campestre/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/formacao_campestre/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/formacao_campestre/ex1_grafico.jpg",
     "mapa": "img/amazonia/formacao_campestre/ex1_mapa.jpg"
    },
    {
     "lat": 3.8363,
     "lon": -59.7655,
     "coords": "3.8363, -59.7655",
     "falsa_cor": "",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "Estado de Roraima contém pastagem natural",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 12,
     "imagens": [],
     "grafico": "",
     "mapa": ""
    }
   ]
  },
  "campo_alagado_e_area_pantanosa|amazonia": {
   "descricao": "Vegetação de várzea ou campestre que sofre influência fluvial e/ou lacustre.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 15,
   "exemplos": [
    {
     "lat": -3.222,
     "lon": -44.6571,
     "coords": "-3.2220, -44.6571",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A inundação é sazonal: no período seco a área pode parecer Formação Campestre ou Pastagem e, na cheia, água. Comparar as imagens de seca e de chuva."
     },
     "pagina": 16,
     "imagens": [
      {
       "src": "img/amazonia/campo_alagado_e_area_pantanosa/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/campo_alagado_e_area_pantanosa/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/campo_alagado_e_area_pantanosa/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/campo_alagado_e_area_pantanosa/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/campo_alagado_e_area_pantanosa/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/campo_alagado_e_area_pantanosa/ex1_grafico.jpg",
     "mapa": "img/amazonia/campo_alagado_e_area_pantanosa/ex1_mapa.jpg"
    }
   ]
  },
  "afloramento_rochoso|amazonia": {
   "descricao": "Superfícies rochosas naturalmente expostas com pouca ou nenhuma cobertura de solo e vegetação mínima",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 17,
   "exemplos": [
    {
     "lat": 0.498758,
     "lon": -65.273597,
     "coords": "0.498758, -65.273597",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Afloramentos pequenos ou entremeados de vegetação ficam abaixo da resolução de 30 m e se misturam com Formação Campestre ou Savânica. A rocha exposta pode lembrar solo exposto ou Outras Áreas não Vegetadas."
     },
     "pagina": 18,
     "imagens": [
      {
       "src": "img/amazonia/afloramento_rochoso/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/afloramento_rochoso/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/afloramento_rochoso/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/afloramento_rochoso/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/afloramento_rochoso/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/afloramento_rochoso/ex1_grafico.jpg",
     "mapa": "img/amazonia/afloramento_rochoso/ex1_mapa.jpg"
    }
   ]
  },
  "apicum|amazonia": {
   "descricao": "Apicuns ou Campos Salgados são formações quase sempre desprovidas de vegetação arbórea e arbustiva, associadas a uma zona topograficamente mais alta da planície costeira, hipersalina e com frequência de inundação menor do que o manguezal, em geral na transição entre este e a terra firme ou campos de dunas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 28,
   "exemplos": [
    {
     "lat": -2.358,
     "lon": -44.7032,
     "coords": "-2.3580, -44.7032",
     "falsa_cor": "",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Praia, Duna e Areal, Outras Áreas não Vegetadas, salinas e tanques de aquicultura. Os limites com o mangue e com a água variam com a maré."
     },
     "pagina": 29,
     "imagens": [],
     "grafico": "",
     "mapa": ""
    }
   ]
  },
  "pastagem|amazonia": {
   "descricao": "Áreas de pastagem plantadas, diretamente relacionadas à atividade agropecuária. As áreas de pastagem natural, por sua vez, são predominantemente caracterizadas como formações campestres ou campo alagado, podendo ser submetidas ou não a práticas de pastejo. Podem ocorrer áreas desmatadas recentemente, sem ainda ter iniciado a atividade agropecuária. Pode conter também áreas em estágios iniciais de regeneração. Pequenas áreas agrícolas podem estar contidas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 30,
   "exemplos": [
    {
     "lat": -12.6082,
     "lon": -61.0747,
     "coords": "-12.6082, -61.0747",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Formação Campestre e Savânica (pastagem em vegetação nativa aberta), com Lavoura Temporária (rotação ou integração lavoura-pecuária) e com Mosaico de Usos. Pastagens degradadas, com solo exposto, podem parecer Outras Áreas não Vegetadas."
     },
     "pagina": 31,
     "imagens": [
      {
       "src": "img/amazonia/pastagem/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/pastagem/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/pastagem/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/pastagem/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/pastagem/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/pastagem/ex1_grafico.jpg",
     "mapa": "img/amazonia/pastagem/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_temporaria|amazonia": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de curta ou média duração, geralmente com ciclo vegetativo inferior a um ano, que após a colheita necessitam de novo plantio para produzir.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 32,
   "exemplos": [
    {
     "lat": -14.7165,
     "lon": -59.876,
     "coords": "-14.7165, -59.8760",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 33,
     "imagens": [
      {
       "src": "img/amazonia/cultivo_temporario/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/cultivo_temporario/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/cultivo_temporario/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/cultivo_temporario/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/cultivo_temporario/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/cultivo_temporario/ex1_grafico.jpg",
     "mapa": "img/amazonia/cultivo_temporario/ex1_mapa.jpg"
    },
    {
     "lat": -9.8626,
     "lon": -57.3772,
     "coords": "-9.8626, -57.3772",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 34,
     "imagens": [
      {
       "src": "img/amazonia/cultivo_temporario/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/cultivo_temporario/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/cultivo_temporario/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/cultivo_temporario/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/cultivo_temporario/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/cultivo_temporario/ex2_grafico.jpg",
     "mapa": "img/amazonia/cultivo_temporario/ex2_mapa.jpg"
    }
   ]
  },
  "cana|amazonia": {
   "descricao": "Áreas cultivadas com a monocultura da cana-de-açúcar.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 37,
   "exemplos": [
    {
     "lat": -1.9742,
     "lon": -60.1493,
     "coords": "-1.9742, -60.1493",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A separação de outras lavouras temporárias e de pastagem depende do ciclo longo (colheita anual e rebrota) na série de NDVI. Áreas em reforma ou recém-colhidas parecem solo exposto."
     },
     "pagina": 38,
     "imagens": [
      {
       "src": "img/amazonia/cana_de_acucar/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/cana_de_acucar/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/cana_de_acucar/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/cana_de_acucar/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/cana_de_acucar/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/cana_de_acucar/ex1_grafico.jpg",
     "mapa": "img/amazonia/cana_de_acucar/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_perene|amazonia": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de ciclo vegetativo longo (mais de um ano), que permitem colheitas sucessivas, sem necessidade de novo plantio.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 35,
   "exemplos": [
    {
     "lat": -1.543,
     "lon": -55.1817,
     "coords": "-1.5430, -55.1817",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundida com Silvicultura e com Formação Savânica ou Florestal (pomares adultos, café sombreado, dendê), e com Pastagem nas fases iniciais. As linhas de plantio geralmente só aparecem em imagens de alta resolução."
     },
     "pagina": 36,
     "imagens": [
      {
       "src": "img/amazonia/cultivo_perene/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/cultivo_perene/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/cultivo_perene/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/cultivo_perene/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/cultivo_perene/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/cultivo_perene/ex1_grafico.jpg",
     "mapa": "img/amazonia/cultivo_perene/ex1_mapa.jpg"
    }
   ]
  },
  "silvicultura|amazonia": {
   "descricao": "Espécies arbóreas plantadas para fins comerciais (ex. pinus, eucalipto, araucária).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 39,
   "exemplos": [
    {
     "lat": -3.0654,
     "lon": -47.5337,
     "coords": "-3.0654, -47.5337",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota)."
     },
     "pagina": 40,
     "imagens": [
      {
       "src": "img/amazonia/silvicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/silvicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/silvicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/silvicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/silvicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/silvicultura/ex1_grafico.jpg",
     "mapa": "img/amazonia/silvicultura/ex1_mapa.jpg"
    }
   ]
  },
  "praia_duna_e_areal|amazonia": {
   "descricao": "Cordões arenosos, de coloração branco brilhante, onde não há o predomínio de vegetação de nenhum tipo.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 19,
   "exemplos": [
    {
     "lat": null,
     "lon": null,
     "coords": "",
     "falsa_cor": "",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, Apicum e Restinga Herbácea esparsa. O areal (Pampa) pode lembrar o solo exposto de lavouras."
     },
     "pagina": 20,
     "imagens": [],
     "grafico": "",
     "mapa": ""
    }
   ]
  },
  "area_urbanizada|amazonia": {
   "descricao": "Áreas com significativa densidade de edificações e vias, incluindo infraestrutura e áreas livres de construções.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 21,
   "exemplos": [
    {
     "lat": -13.072,
     "lon": -56.6423,
     "coords": "-13.0720, -56.6423",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Bairros muito arborizados, loteamentos não ocupados e pequenos núcleos rurais são difíceis de delimitar. Telhados e solo exposto podem ser confundidos com Mineração ou Outras Áreas não Vegetadas."
     },
     "pagina": 22,
     "imagens": [
      {
       "src": "img/amazonia/area_urbana/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/area_urbana/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/area_urbana/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/area_urbana/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/area_urbana/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/area_urbana/ex1_grafico.jpg",
     "mapa": "img/amazonia/area_urbana/ex1_mapa.jpg"
    }
   ]
  },
  "mineracao|amazonia": {
   "descricao": "Áreas referentes a extração mineral superficial, de porte industrial ou garimpeiro, havendo clara exposição do solo por ação antrópica. Não são passíveis de detecção nenhum tipo de mineração subterrânea ou subaquática.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 41,
   "exemplos": [
    {
     "lat": -8.5844,
     "lon": -61.1448,
     "coords": "-8.5844, -61.1448",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, solo exposto e áreas urbanas em expansão. Pela legenda, a mineração subterrânea ou subaquática não é detectável."
     },
     "pagina": 42,
     "imagens": [
      {
       "src": "img/amazonia/mineracao/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/mineracao/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/mineracao/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/mineracao/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/mineracao/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/mineracao/ex1_grafico.jpg",
     "mapa": "img/amazonia/mineracao/ex1_mapa.jpg"
    }
   ]
  },
  "outras_areas_nao_vegetadas|amazonia": {
   "descricao": "Áreas de superfícies não permeáveis (infra-estrutura, expansão urbana ou mineração) não mapeadas em suas classes.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 43,
   "exemplos": [
    {
     "lat": 4.1632,
     "lon": -60.5559,
     "coords": "4.1632, -60.5559",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "É uma classe residual: reúne superfícies não vegetadas que não se encaixam nas demais. Por isso, confunde-se com Mineração, Área Urbanizada, Praia, Duna e Areal, Afloramento Rochoso e lavouras em solo exposto."
     },
     "pagina": 44,
     "imagens": [
      {
       "src": "img/amazonia/outras_areas_nao_vegetadas/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/outras_areas_nao_vegetadas/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/outras_areas_nao_vegetadas/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/outras_areas_nao_vegetadas/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/outras_areas_nao_vegetadas/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/outras_areas_nao_vegetadas/ex1_grafico.jpg",
     "mapa": "img/amazonia/outras_areas_nao_vegetadas/ex1_mapa.jpg"
    }
   ]
  },
  "rio_lago_e_oceano|amazonia": {
   "descricao": "Rios, lagos, represas, reservatórios e outros corpos d'água.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 23,
   "exemplos": [
    {
     "lat": -5.062,
     "lon": -66.982,
     "coords": "-5.062 -66.982",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "NDVI abaixo de 0 é água",
     "limitacao": {
      "geral": "A lâmina d'água varia entre seca e cheia. Rios estreitos (< 30 m) e lagos pequenos podem não aparecer. Água turva ou coberta por plantas aquáticas pode parecer solo ou vegetação."
     },
     "pagina": 24,
     "imagens": [
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/rio_lago_e_oceano/ex1_grafico.jpg",
     "mapa": "img/amazonia/rio_lago_e_oceano/ex1_mapa.jpg"
    },
    {
     "lat": -7.3749,
     "lon": -49.2695,
     "coords": "-7.3749, -49.2695",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "Mesmo que no período seco não tenha água, ainda é considerado Rio, Lago e Oceano.",
     "limitacao": {
      "geral": "A lâmina d'água varia entre seca e cheia. Rios estreitos (< 30 m) e lagos pequenos podem não aparecer. Água turva ou coberta por plantas aquáticas pode parecer solo ou vegetação."
     },
     "pagina": 25,
     "imagens": [
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/rio_lago_e_oceano/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/rio_lago_e_oceano/ex2_grafico.jpg",
     "mapa": "img/amazonia/rio_lago_e_oceano/ex2_mapa.jpg"
    }
   ]
  },
  "aquicultura|amazonia": {
   "descricao": "Área referente a lagos artificiais, onde predominam atividades aquícolas e/ou de salicultura.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 45,
   "exemplos": [
    {
     "lat": -10.723728,
     "lon": -55.494833,
     "coords": "-10.723728, -55.494833",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Tanques escavados parecem pequenos reservatórios e açudes (Rio, Lago e Oceano) e salinas. Tanques pequenos ficam abaixo da resolução de 30 m. O formato retangular e o agrupamento dos tanques ajudam."
     },
     "pagina": 46,
     "imagens": [
      {
       "src": "img/amazonia/aquicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/amazonia/aquicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/amazonia/aquicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/amazonia/aquicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/amazonia/aquicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/amazonia/aquicultura/ex1_grafico.jpg",
     "mapa": "img/amazonia/aquicultura/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_florestal|cerrado": {
   "descricao": "Tipos de vegetação caracterizados pela predominância de espécies arbóreas que formam um dossel contínuo. Isso inclui Matas Ciliares, Matas de Galeria, Matas Secas e Cerradão (Ribeiro & Walter, 2008), bem como florestas estacionais semideciduais.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 49,
   "exemplos": [
    {
     "lat": -19.6288,
     "lon": -43.7163,
     "coords": "-19.6288, -43.7163",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "O limite com a Formação Savânica é gradual (dossel mais aberto). Em florestas estacionais, a queda das folhas no período seco reduz o NDVI e pode lembrar savana. Florestas secundárias jovens, degradadas ou com corte seletivo são difíceis de separar da floresta madura na resolução de 10–30 m."
     },
     "pagina": 50,
     "imagens": [
      {
       "src": "img/cerrado/formacao_florestal/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/formacao_florestal/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_florestal/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/formacao_florestal/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_florestal/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/formacao_florestal/ex1_grafico.jpg",
     "mapa": "img/cerrado/formacao_florestal/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_savanica|cerrado": {
   "descricao": "Tipos de vegetação com uma estratificação distinta de estrato arbóreo, arbustivo e herbáceo. Isso inclui diferentes fisionomias de Cerrado sensu stricto (Cerrado Denso, Típico e Ralo) (Ribeiro & Walter, 2008). A classe também pode incluir áreas nativas de Cerrado sensu stricto passíveis de uso pastoril, desde que mantenham sua estrutura e composição natural.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 51,
   "exemplos": [
    {
     "lat": -6.6082,
     "lon": -45.3764,
     "coords": "-6.6082, -45.3764",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A densidade de árvores varia de forma contínua, por isso os limites com Formação Florestal e Formação Campestre são subjetivos. No período seco, a resposta se aproxima da de pastagem. Comparar as imagens de seca e de chuva e a série de NDVI."
     },
     "pagina": 52,
     "imagens": [
      {
       "src": "img/cerrado/formacao_savanica/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/formacao_savanica/ex1_grafico.jpg",
     "mapa": "img/cerrado/formacao_savanica/ex1_mapa.jpg"
    },
    {
     "lat": -10.2464,
     "lon": -46.1784,
     "coords": "-10.2464, -46.1784",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A densidade de árvores varia de forma contínua, por isso os limites com Formação Florestal e Formação Campestre são subjetivos. No período seco, a resposta se aproxima da de pastagem. Comparar as imagens de seca e de chuva e a série de NDVI."
     },
     "pagina": 53,
     "imagens": [
      {
       "src": "img/cerrado/formacao_savanica/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/formacao_savanica/ex2_grafico.jpg",
     "mapa": "img/cerrado/formacao_savanica/ex2_mapa.jpg"
    },
    {
     "lat": -13.652,
     "lon": -44.8137,
     "coords": "-13.6520, -44.8137",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A densidade de árvores varia de forma contínua, por isso os limites com Formação Florestal e Formação Campestre são subjetivos. No período seco, a resposta se aproxima da de pastagem. Comparar as imagens de seca e de chuva e a série de NDVI."
     },
     "pagina": 54,
     "imagens": [
      {
       "src": "img/cerrado/formacao_savanica/ex3_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex3_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex3_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex3_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_savanica/ex3_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/formacao_savanica/ex3_grafico.jpg",
     "mapa": "img/cerrado/formacao_savanica/ex3_mapa.jpg"
    }
   ]
  },
  "mangue|cerrado": {
   "descricao": "Formações florestais e/ou arbustivas, densas, sempre-verdes, frequentemente inundadas pela maré e associadas ao ecossistema costeiro de Manguezal.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 72,
   "exemplos": [
    {
     "lat": -2.57117012,
     "lon": -43.61268222,
     "coords": "-2.57117012 -43.61268222",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "Vegetação florestal bem marcada em torno de grandes rios e em área rebaixada (com bastante umidade). NDVI acima de 0,8 e sem variação com a sazonalidade. Apicuns associados.",
     "limitacao": {
      "geral": "Pode ser confundido com Floresta Alagável e Restinga Arbórea. Os limites com Apicum e com a água variam com a maré. Usar o contexto estuarino."
     },
     "pagina": 73,
     "imagens": [
      {
       "src": "img/cerrado/mangue/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/mangue/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/mangue/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/mangue/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/mangue/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/mangue/ex1_grafico.jpg",
     "mapa": "img/cerrado/mangue/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_campestre|cerrado": {
   "descricao": "Vegetação aberta dominada por espécies herbáceas, com cobertura arbórea mínima ou inexistente. Inclui as fitofisionomias Campos Sujo e Limpo (Ribeiro & Walter, 2008).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 55,
   "exemplos": [
    {
     "lat": -18.2045,
     "lon": -43.3269,
     "coords": "-18.2045, -43.3269",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 56,
     "imagens": [
      {
       "src": "img/cerrado/formacao_campestre/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/formacao_campestre/ex1_grafico.jpg",
     "mapa": "img/cerrado/formacao_campestre/ex1_mapa.jpg"
    },
    {
     "lat": -18.0733,
     "lon": -52.9535,
     "coords": "-18.0733, -52.9535",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 57,
     "imagens": [
      {
       "src": "img/cerrado/formacao_campestre/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/formacao_campestre/ex2_grafico.jpg",
     "mapa": "img/cerrado/formacao_campestre/ex2_mapa.jpg"
    },
    {
     "lat": -18.968,
     "lon": -44.6566,
     "coords": "-18.9680, -44.6566",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 58,
     "imagens": [
      {
       "src": "img/cerrado/formacao_campestre/ex3_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex3_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex3_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex3_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/formacao_campestre/ex3_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/formacao_campestre/ex3_grafico.jpg",
     "mapa": "img/cerrado/formacao_campestre/ex3_mapa.jpg"
    }
   ]
  },
  "campo_alagado_e_area_pantanosa|cerrado": {
   "descricao": "Ecossistemas dominados por vegetação herbácea sujeitos a inundações sazonais ou influência fluvial/lacustre constante. Exemplos incluem Campo Úmido e Brejo. Em algumas áreas, a matriz herbácea é intercalada com espécies arbóreas de savana (por exemplo, Parque de Cerrado) ou espécies de palmeiras, como em Veredas e Palmeirais (Ribeiro & Walter, 2008).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 59,
   "exemplos": [
    {
     "lat": -13.6568,
     "lon": -51.4629,
     "coords": "-13.6568, -51.4629",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A inundação é sazonal: no período seco a área pode parecer Formação Campestre ou Pastagem e, na cheia, água. Comparar as imagens de seca e de chuva."
     },
     "pagina": 60,
     "imagens": [
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/campo_alagado_e_area_pantanosa/ex1_grafico.jpg",
     "mapa": "img/cerrado/campo_alagado_e_area_pantanosa/ex1_mapa.jpg"
    },
    {
     "lat": -12.9928,
     "lon": -50.39,
     "coords": "-12.9928, -50.3900",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A inundação é sazonal: no período seco a área pode parecer Formação Campestre ou Pastagem e, na cheia, água. Comparar as imagens de seca e de chuva."
     },
     "pagina": 61,
     "imagens": [
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/campo_alagado_e_area_pantanosa/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/campo_alagado_e_area_pantanosa/ex2_grafico.jpg",
     "mapa": "img/cerrado/campo_alagado_e_area_pantanosa/ex2_mapa.jpg"
    }
   ]
  },
  "afloramento_rochoso|cerrado": {
   "descricao": "Superfícies rochosas naturalmente expostas, incluindo monólitos, acamamentos ou lajedos com pouca ou nenhuma cobertura de solo, normalmente associadas a formações geológicas estáveis de origem sedimentar, ígnea ou metamórfica. A classe também inclui áreas de vegetação rupestre associadas a esses ambientes, como Cerrado Rupestre e Campo Rupestre (Ribeiro & Walter, 2008).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 62,
   "exemplos": [
    {
     "lat": -18.166147,
     "lon": -43.738281,
     "coords": "-18.166147, -43.738281",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Afloramentos pequenos ou entremeados de vegetação ficam abaixo da resolução de 30 m e se misturam com Formação Campestre ou Savânica. A rocha exposta pode lembrar solo exposto ou Outras Áreas não Vegetadas."
     },
     "pagina": 63,
     "imagens": [
      {
       "src": "img/cerrado/afloramento_rochoso/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/afloramento_rochoso/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/afloramento_rochoso/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/afloramento_rochoso/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/afloramento_rochoso/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/afloramento_rochoso/ex1_grafico.jpg",
     "mapa": "img/cerrado/afloramento_rochoso/ex1_mapa.jpg"
    }
   ]
  },
  "apicum|cerrado": {
   "descricao": "Apicuns ou Campos Salgados são formações quase sempre desprovidas de vegetação arbórea e arbustiva, associadas a uma zona topograficamente mais alta da planície costeira, hipersalina e com frequência de inundação menor do que o manguezal, em geral na transição entre este e a terra firme ou campos de dunas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 75,
   "exemplos": [
    {
     "lat": -2.7894,
     "lon": -42.1125,
     "coords": "-2.7894, -42.1125",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Praia, Duna e Areal, Outras Áreas não Vegetadas, salinas e tanques de aquicultura. Os limites com o mangue e com a água variam com a maré."
     },
     "pagina": 74,
     "imagens": [
      {
       "src": "img/cerrado/apicum/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/apicum/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/apicum/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/apicum/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/apicum/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/apicum/ex1_grafico.jpg",
     "mapa": "img/cerrado/apicum/ex1_mapa.jpg"
    }
   ]
  },
  "restinga_herbacea_ou_arbustiva|cerrado": {
   "descricao": "Ecossistemas de planície arenosa costeira caracterizados por vegetação predominantemente herbácea e arbustiva, com distribuição esparsa de arbustos.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 70,
   "exemplos": [
    {
     "lat": -2.689217,
     "lon": -42.506067,
     "coords": "-2.689217, -42.506067",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Quando a cobertura é esparsa, confunde-se com Formação Campestre e com Praia, Duna e Areal. Depende do contexto costeiro (cordões arenosos)."
     },
     "pagina": 71,
     "imagens": [
      {
       "src": "img/cerrado/restinga_herbacea/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/restinga_herbacea/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/restinga_herbacea/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/restinga_herbacea/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/restinga_herbacea/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/restinga_herbacea/ex1_grafico.jpg",
     "mapa": "img/cerrado/restinga_herbacea/ex1_mapa.jpg"
    }
   ]
  },
  "pastagem|cerrado": {
   "descricao": "Áreas de pastagem plantadas, diretamente relacionadas à atividade agropecuária. As áreas de pastagem natural, por sua vez, são predominantemente caracterizadas como formações campestres ou campo alagado, podendo ser submetidas ou não a práticas de pastejo. Podem ocorrer áreas desmatadas recentemente, sem ainda ter iniciado a atividade agropecuária. Pode conter também áreas em estágios iniciais de regeneração. Pequenas áreas agrícolas podem estar contidas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 77,
   "exemplos": [
    {
     "lat": -13.2014,
     "lon": -51.1454,
     "coords": "-13.2014, -51.1454",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Formação Campestre e Savânica (pastagem em vegetação nativa aberta), com Lavoura Temporária (rotação ou integração lavoura-pecuária) e com Mosaico de Usos. Pastagens degradadas, com solo exposto, podem parecer Outras Áreas não Vegetadas."
     },
     "pagina": 76,
     "imagens": [
      {
       "src": "img/cerrado/pastagem/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/pastagem/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/pastagem/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/pastagem/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/pastagem/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/pastagem/ex1_grafico.jpg",
     "mapa": "img/cerrado/pastagem/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_temporaria|cerrado": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de curta ou média duração, geralmente com ciclo vegetativo inferior a um ano, que após a colheita necessitam de novo plantio para produzir.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 80,
   "exemplos": [
    {
     "lat": -13.3038,
     "lon": -45.8049,
     "coords": "-13.3038, -45.8049",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 78,
     "imagens": [
      {
       "src": "img/cerrado/cultivo_temporario/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/cultivo_temporario/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/cultivo_temporario/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/cultivo_temporario/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/cultivo_temporario/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/cultivo_temporario/ex1_grafico.jpg",
     "mapa": "img/cerrado/cultivo_temporario/ex1_mapa.jpg"
    },
    {
     "lat": -14.1842,
     "lon": -45.9916,
     "coords": "-14.1842, -45.9916",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 79,
     "imagens": [
      {
       "src": "img/cerrado/cultivo_temporario/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/cultivo_temporario/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/cultivo_temporario/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/cultivo_temporario/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/cultivo_temporario/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/cultivo_temporario/ex2_grafico.jpg",
     "mapa": "img/cerrado/cultivo_temporario/ex2_mapa.jpg"
    }
   ]
  },
  "cana|cerrado": {
   "descricao": "Áreas cultivadas com a monocultura da cana-de-açúcar.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 84,
   "exemplos": [
    {
     "lat": -19.3593,
     "lon": -44.9406,
     "coords": "-19.3593, -44.9406",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A separação de outras lavouras temporárias e de pastagem depende do ciclo longo (colheita anual e rebrota) na série de NDVI. Áreas em reforma ou recém-colhidas parecem solo exposto."
     },
     "pagina": 83,
     "imagens": [
      {
       "src": "img/cerrado/cana_de_acucar/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/cana_de_acucar/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/cana_de_acucar/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/cana_de_acucar/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/cana_de_acucar/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/cana_de_acucar/ex1_grafico.jpg",
     "mapa": "img/cerrado/cana_de_acucar/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_perene|cerrado": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de ciclo vegetativo longo (mais de um ano), que permitem colheitas sucessivas, sem necessidade de novo plantio.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 82,
   "exemplos": [
    {
     "lat": -12.1865,
     "lon": -45.9377,
     "coords": "-12.1865, -45.9377",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundida com Silvicultura e com Formação Savânica ou Florestal (pomares adultos, café sombreado, dendê), e com Pastagem nas fases iniciais. As linhas de plantio geralmente só aparecem em imagens de alta resolução."
     },
     "pagina": 81,
     "imagens": [
      {
       "src": "img/cerrado/cultivo_perene/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/cultivo_perene/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/cultivo_perene/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/cultivo_perene/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/cultivo_perene/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/cultivo_perene/ex1_grafico.jpg",
     "mapa": "img/cerrado/cultivo_perene/ex1_mapa.jpg"
    }
   ]
  },
  "silvicultura|cerrado": {
   "descricao": "Espécies arbóreas plantadas para fins comerciais (ex. pinus, eucalipto, araucária).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 86,
   "exemplos": [
    {
     "lat": -17.212,
     "lon": -47.634,
     "coords": "-17.212 -47.634",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Homogênea",
     "observacoes": "Delimitação (em talhões) com textura rugosa e homogênea, indicando uma mesma espécie. Essas ‘falhas’ na área podem significar espécies de silvicultura que perdem as folhas ou uma plantação que não teve um bom manejo (plantas que não se desenvolveram). NDVI subindo de 0,2 para 0,8, indicando o plantio, estável em 0,8 por anos, indicando espécie arbórea, e uma queda brusca, indicando a colheita. Tonalidade muito escura, puxada para o marrom, na silvicultura pode significar uma silvicultura velha.",
     "limitacao": {
      "geral": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota)."
     },
     "pagina": 85,
     "imagens": [
      {
       "src": "img/cerrado/silvicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/silvicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/silvicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/silvicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/silvicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/silvicultura/ex1_grafico.jpg",
     "mapa": "img/cerrado/silvicultura/ex1_mapa.jpg"
    }
   ]
  },
  "praia_duna_e_areal|cerrado": {
   "descricao": "Cordões arenosos, de coloração branco brilhante, onde não há o predomínio de vegetação de nenhum tipo.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 64,
   "exemplos": [
    {
     "lat": -2.6221,
     "lon": -42.6626,
     "coords": "-2.6221, -42.6626",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, Apicum e Restinga Herbácea esparsa. O areal (Pampa) pode lembrar o solo exposto de lavouras."
     },
     "pagina": 65,
     "imagens": [
      {
       "src": "img/cerrado/praia_duna_e_areial/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/praia_duna_e_areial/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/praia_duna_e_areial/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/praia_duna_e_areial/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/praia_duna_e_areial/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/praia_duna_e_areial/ex1_grafico.jpg",
     "mapa": "img/cerrado/praia_duna_e_areial/ex1_mapa.jpg"
    }
   ]
  },
  "area_urbanizada|cerrado": {
   "descricao": "Áreas com significativa densidade de edificações e vias, incluindo infraestrutura e áreas livres de construções.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 66,
   "exemplos": [
    {
     "lat": -16.2658,
     "lon": -47.8654,
     "coords": "-16.2658, -47.8654",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Bairros muito arborizados, loteamentos não ocupados e pequenos núcleos rurais são difíceis de delimitar. Telhados e solo exposto podem ser confundidos com Mineração ou Outras Áreas não Vegetadas."
     },
     "pagina": 67,
     "imagens": [
      {
       "src": "img/cerrado/area_urbana/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/area_urbana/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/area_urbana/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/area_urbana/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/area_urbana/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/area_urbana/ex1_grafico.jpg",
     "mapa": "img/cerrado/area_urbana/ex1_mapa.jpg"
    }
   ]
  },
  "mineracao|cerrado": {
   "descricao": "Áreas referentes a extração mineral superficial, de porte industrial ou garimpeiro, havendo clara exposição do solo por ação antrópica. Não são passíveis de detecção nenhum tipo de mineração subterrânea ou subaquática.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 88,
   "exemplos": [
    {
     "lat": -19.8805,
     "lon": -46.8079,
     "coords": "-19.8805, -46.8079",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, solo exposto e áreas urbanas em expansão. Pela legenda, a mineração subterrânea ou subaquática não é detectável."
     },
     "pagina": 87,
     "imagens": [
      {
       "src": "img/cerrado/mineracao/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/mineracao/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/mineracao/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/mineracao/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/mineracao/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/mineracao/ex1_grafico.jpg",
     "mapa": "img/cerrado/mineracao/ex1_mapa.jpg"
    }
   ]
  },
  "outras_areas_nao_vegetadas|cerrado": {
   "descricao": "Inclui superfícies impermeáveis (por exemplo, estradas, prédios, infraestrutura de mineração), solo exposto em ambientes naturais (por exemplo, características de erosão, ravinas, deslizamentos de terra) e terras cultiváveis fora do período de cultivo.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 91,
   "exemplos": [
    {
     "lat": -11.7027,
     "lon": -49.6239,
     "coords": "-11.7027, -49.6239",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "É uma classe residual: reúne superfícies não vegetadas que não se encaixam nas demais. Por isso, confunde-se com Mineração, Área Urbanizada, Praia, Duna e Areal, Afloramento Rochoso e lavouras em solo exposto."
     },
     "pagina": 89,
     "imagens": [
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/outras_areas_nao_vegetadas/ex1_grafico.jpg",
     "mapa": "img/cerrado/outras_areas_nao_vegetadas/ex1_mapa.jpg"
    },
    {
     "lat": -17.6116,
     "lon": -42.5564,
     "coords": "-17.6116, -42.5564",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "É uma classe residual: reúne superfícies não vegetadas que não se encaixam nas demais. Por isso, confunde-se com Mineração, Área Urbanizada, Praia, Duna e Areal, Afloramento Rochoso e lavouras em solo exposto."
     },
     "pagina": 90,
     "imagens": [
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/outras_areas_nao_vegetadas/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/outras_areas_nao_vegetadas/ex2_grafico.jpg",
     "mapa": "img/cerrado/outras_areas_nao_vegetadas/ex2_mapa.jpg"
    }
   ]
  },
  "rio_lago_e_oceano|cerrado": {
   "descricao": "Rios, lagos, represas, reservatórios e outros corpos d'água.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 68,
   "exemplos": [
    {
     "lat": null,
     "lon": null,
     "coords": "",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A lâmina d'água varia entre seca e cheia. Rios estreitos (< 30 m) e lagos pequenos podem não aparecer. Água turva ou coberta por plantas aquáticas pode parecer solo ou vegetação."
     },
     "pagina": 69,
     "imagens": [
      {
       "src": "img/cerrado/rio_lago_e_oceano/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/rio_lago_e_oceano/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/rio_lago_e_oceano/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/rio_lago_e_oceano/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/rio_lago_e_oceano/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/rio_lago_e_oceano/ex1_grafico.jpg",
     "mapa": "img/cerrado/rio_lago_e_oceano/ex1_mapa.jpg"
    }
   ]
  },
  "aquicultura|cerrado": {
   "descricao": "Área referente a lagos artificiais, onde predominam atividades aquícolas e/ou de salicultura.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 93,
   "exemplos": [
    {
     "lat": -5.2642,
     "lon": -42.6723,
     "coords": "-5.2642, -42.6723",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Tanques escavados parecem pequenos reservatórios e açudes (Rio, Lago e Oceano) e salinas. Tanques pequenos ficam abaixo da resolução de 30 m. O formato retangular e o agrupamento dos tanques ajudam."
     },
     "pagina": 92,
     "imagens": [
      {
       "src": "img/cerrado/aquicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/cerrado/aquicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/cerrado/aquicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/cerrado/aquicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/cerrado/aquicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/cerrado/aquicultura/ex1_grafico.jpg",
     "mapa": "img/cerrado/aquicultura/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_florestal|caatinga": {
   "descricao": "Tipos de vegetação com predomínio de dossel contínuo - Savana-Estépica Florestada, Floresta Estacional Semi-Decidual e Decidual.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 97,
   "exemplos": [
    {
     "lat": -10.2827,
     "lon": -43.8254,
     "coords": "-10.2827, -43.8254",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "O limite com a Formação Savânica é gradual (dossel mais aberto). Em florestas estacionais, a queda das folhas no período seco reduz o NDVI e pode lembrar savana. Florestas secundárias jovens, degradadas ou com corte seletivo são difíceis de separar da floresta madura na resolução de 10–30 m."
     },
     "pagina": 96,
     "imagens": [
      {
       "src": "img/caatinga/formacao_florestal/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/formacao_florestal/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/formacao_florestal/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/formacao_florestal/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/formacao_florestal/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/formacao_florestal/ex1_grafico.jpg",
     "mapa": "img/caatinga/formacao_florestal/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_savanica|caatinga": {
   "descricao": "Tipos de vegetação com predomínio de espécies de dossel semi-contínuo - Savana-Estépica Arborizada, Savana Arborizada.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 99,
   "exemplos": [
    {
     "lat": -8.7326,
     "lon": -37.8224,
     "coords": "-8.7326, -37.8224",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A densidade de árvores varia de forma contínua, por isso os limites com Formação Florestal e Formação Campestre são subjetivos. No período seco, a resposta se aproxima da de pastagem. Comparar as imagens de seca e de chuva e a série de NDVI."
     },
     "pagina": 98,
     "imagens": [
      {
       "src": "img/caatinga/formacao_savanica/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/formacao_savanica/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/formacao_savanica/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/formacao_savanica/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/formacao_savanica/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/formacao_savanica/ex1_grafico.jpg",
     "mapa": "img/corrigidos/p104_caatinga_mapa.jpg"
    }
   ]
  },
  "mangue|caatinga": {
   "descricao": "Formações florestais e/ou arbustivas, densas, sempre-verdes, frequentemente inundadas pela maré e associadas ao ecossistema costeiro de Manguezal.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 115,
   "exemplos": [
    {
     "lat": -2.8913,
     "lon": -40.8184,
     "coords": "-2.8913, -40.8184",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundido com Floresta Alagável e Restinga Arbórea. Os limites com Apicum e com a água variam com a maré. Usar o contexto estuarino."
     },
     "pagina": 114,
     "imagens": [
      {
       "src": "img/caatinga/mangue/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/mangue/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/mangue/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/mangue/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/mangue/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/mangue/ex1_grafico.jpg",
     "mapa": "img/caatinga/mangue/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_campestre|caatinga": {
   "descricao": "Tipos de vegetação com predomínio de espécies herbáceas (Savana-Estépica Parque, Savana-Estépica Gramíneo-Lenhosa, Savana Parque, Savana Gramíneo-Lenhosa) + (Áreas inundáveis com uma rede de lagoas interligadas, localizadas ao longo dos cursos de água e em áreas de depressões que acumulam água, vegetação predominantemente herbácea a arbustiva).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 101,
   "exemplos": [
    {
     "lat": -9.7131,
     "lon": -40.4858,
     "coords": "-9.7131, -40.4858",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 100,
     "imagens": [
      {
       "src": "img/caatinga/formacao_campestre/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/formacao_campestre/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/formacao_campestre/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/formacao_campestre/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/formacao_campestre/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/formacao_campestre/ex1_grafico.jpg",
     "mapa": "img/caatinga/formacao_campestre/ex1_mapa.jpg"
    }
   ]
  },
  "campo_alagado_e_area_pantanosa|caatinga": {
   "descricao": "",
   "fonte": "chave",
   "observacoes": "",
   "pagina": 103,
   "exemplos": [
    {
     "lat": -10.096,
     "lon": -42.403,
     "coords": "-10.0960, -42.4030",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A inundação é sazonal: no período seco a área pode parecer Formação Campestre ou Pastagem e, na cheia, água. Comparar as imagens de seca e de chuva."
     },
     "pagina": 102,
     "imagens": [
      {
       "src": "img/caatinga/campo_alagado_e_area_pantanosa/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/campo_alagado_e_area_pantanosa/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/campo_alagado_e_area_pantanosa/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/campo_alagado_e_area_pantanosa/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/campo_alagado_e_area_pantanosa/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/campo_alagado_e_area_pantanosa/ex1_grafico.jpg",
     "mapa": "img/caatinga/campo_alagado_e_area_pantanosa/ex1_mapa.jpg"
    }
   ]
  },
  "afloramento_rochoso|caatinga": {
   "descricao": "Superfícies rochosas naturalmente expostas com pouca ou nenhuma cobertura de solo e vegetação mínima",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 105,
   "exemplos": [
    {
     "lat": -13.3914,
     "lon": -41.0899,
     "coords": "-13.3914, -41.0899",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Afloramentos pequenos ou entremeados de vegetação ficam abaixo da resolução de 30 m e se misturam com Formação Campestre ou Savânica. A rocha exposta pode lembrar solo exposto ou Outras Áreas não Vegetadas."
     },
     "pagina": 104,
     "imagens": [
      {
       "src": "img/caatinga/afloramento_rochoso/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/afloramento_rochoso/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/afloramento_rochoso/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/afloramento_rochoso/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/afloramento_rochoso/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/afloramento_rochoso/ex1_grafico.jpg",
     "mapa": "img/caatinga/afloramento_rochoso/ex1_mapa.jpg"
    }
   ]
  },
  "apicum|caatinga": {
   "descricao": "Apicuns ou Campos Salgados são formações quase sempre desprovidas de vegetação arbórea e arbustiva, associadas a uma zona topograficamente mais alta da planície costeira, hipersalina e com frequência de inundação menor do que o manguezal, em geral na transição entre este e a terra firme ou campos de dunas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 117,
   "exemplos": [
    {
     "lat": -2.8913,
     "lon": -40.8184,
     "coords": "-2.8913, -40.8184",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Praia, Duna e Areal, Outras Áreas não Vegetadas, salinas e tanques de aquicultura. Os limites com o mangue e com a água variam com a maré."
     },
     "pagina": 116,
     "imagens": [
      {
       "src": "img/caatinga/apicum/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/apicum/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/apicum/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/apicum/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/apicum/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/apicum/ex1_grafico.jpg",
     "mapa": "img/caatinga/apicum/ex1_mapa.jpg"
    }
   ]
  },
  "restinga_herbacea_ou_arbustiva|caatinga": {
   "descricao": "Vegetação herbácea que se estabelece sobre solos arenosos ou sobre dunas costeiras com influência fluviomarinha.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 113,
   "exemplos": [
    {
     "lat": -4.142572,
     "lon": -38.128497,
     "coords": "-4.142572, -38.128497",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Quando a cobertura é esparsa, confunde-se com Formação Campestre e com Praia, Duna e Areal. Depende do contexto costeiro (cordões arenosos)."
     },
     "pagina": 112,
     "imagens": [
      {
       "src": "img/caatinga/restinga_herbacea/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/restinga_herbacea/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/restinga_herbacea/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/restinga_herbacea/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/restinga_herbacea/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/restinga_herbacea/ex1_grafico.jpg",
     "mapa": "img/caatinga/restinga_herbacea/ex1_mapa.jpg"
    }
   ]
  },
  "pastagem|caatinga": {
   "descricao": "Áreas de pastagem plantadas, diretamente relacionadas à atividade agropecuária. As áreas de pastagem natural, por sua vez, são predominantemente caracterizadas como formações campestres ou campo alagado, podendo ser submetidas ou não a práticas de pastejo. Podem ocorrer áreas desmatadas recentemente, sem ainda ter iniciado a atividade agropecuária. Pode conter também áreas em estágios iniciais de regeneração. Pequenas áreas agrícolas podem estar contidas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 119,
   "exemplos": [
    {
     "lat": -9.8354,
     "lon": -37.7858,
     "coords": "-9.8354, -37.7858",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Formação Campestre e Savânica (pastagem em vegetação nativa aberta), com Lavoura Temporária (rotação ou integração lavoura-pecuária) e com Mosaico de Usos. Pastagens degradadas, com solo exposto, podem parecer Outras Áreas não Vegetadas."
     },
     "pagina": 118,
     "imagens": [
      {
       "src": "img/caatinga/pastagem/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/pastagem/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/pastagem/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/pastagem/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/pastagem/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/pastagem/ex1_grafico.jpg",
     "mapa": "img/caatinga/pastagem/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_temporaria|caatinga": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de curta ou média duração, geralmente com ciclo vegetativo inferior a um ano, que após a colheita necessitam de novo plantio para produzir.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 123,
   "exemplos": [
    {
     "lat": -5.192677,
     "lon": -37.964478,
     "coords": "-5.192677, -37.964478",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 120,
     "imagens": [
      {
       "src": "img/caatinga/cultivo_temporario/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/cultivo_temporario/ex1_grafico.jpg",
     "mapa": "img/caatinga/cultivo_temporario/ex1_mapa.jpg"
    },
    {
     "lat": -4.9875,
     "lon": -37.561456,
     "coords": "-4.9875, -37.561456",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 121,
     "imagens": [
      {
       "src": "img/caatinga/cultivo_temporario/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/cultivo_temporario/ex2_grafico.jpg",
     "mapa": "img/caatinga/cultivo_temporario/ex2_mapa.jpg"
    },
    {
     "lat": -5.192336,
     "lon": -38.015717,
     "coords": "-5.192336, -38.015717",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 122,
     "imagens": [
      {
       "src": "img/caatinga/cultivo_temporario/ex3_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex3_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex3_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex3_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_temporario/ex3_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/cultivo_temporario/ex3_grafico.jpg",
     "mapa": "img/caatinga/cultivo_temporario/ex3_mapa.jpg"
    }
   ]
  },
  "cana|caatinga": {
   "descricao": "Áreas cultivadas com a monocultura da cana-de-açúcar.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 128,
   "exemplos": [
    {
     "lat": -5.883469,
     "lon": -35.413067,
     "coords": "-5.883469, -35.413067",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A separação de outras lavouras temporárias e de pastagem depende do ciclo longo (colheita anual e rebrota) na série de NDVI. Áreas em reforma ou recém-colhidas parecem solo exposto."
     },
     "pagina": 127,
     "imagens": [
      {
       "src": "img/caatinga/cana_de_acucar/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/cana_de_acucar/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/cana_de_acucar/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/cana_de_acucar/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/cana_de_acucar/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/cana_de_acucar/ex1_grafico.jpg",
     "mapa": "img/caatinga/cana_de_acucar/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_perene|caatinga": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de ciclo vegetativo longo (mais de um ano), que permitem colheitas sucessivas, sem necessidade de novo plantio.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 126,
   "exemplos": [
    {
     "lat": -12.41564,
     "lon": -40.27528,
     "coords": "-12.41564, -40.27528",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundida com Silvicultura e com Formação Savânica ou Florestal (pomares adultos, café sombreado, dendê), e com Pastagem nas fases iniciais. As linhas de plantio geralmente só aparecem em imagens de alta resolução."
     },
     "pagina": 124,
     "imagens": [
      {
       "src": "img/caatinga/cultivo_perene/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/cultivo_perene/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_perene/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/cultivo_perene/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_perene/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/cultivo_perene/ex1_grafico.jpg",
     "mapa": "img/caatinga/cultivo_perene/ex1_mapa.jpg"
    },
    {
     "lat": -9.493047,
     "lon": -41.017114,
     "coords": "-9.493047, -41.017114",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundida com Silvicultura e com Formação Savânica ou Florestal (pomares adultos, café sombreado, dendê), e com Pastagem nas fases iniciais. As linhas de plantio geralmente só aparecem em imagens de alta resolução."
     },
     "pagina": 125,
     "imagens": [
      {
       "src": "img/caatinga/cultivo_perene/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/cultivo_perene/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_perene/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/cultivo_perene/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/cultivo_perene/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/cultivo_perene/ex2_grafico.jpg",
     "mapa": "img/caatinga/cultivo_perene/ex2_mapa.jpg"
    }
   ]
  },
  "silvicultura|caatinga": {
   "descricao": "Espécies arbóreas plantadas para fins comerciais (ex. pinus, eucalipto, araucária).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 130,
   "exemplos": [
    {
     "lat": -13.186961,
     "lon": -40.251263,
     "coords": "-13.186961, -40.251263",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota)."
     },
     "pagina": 129,
     "imagens": [
      {
       "src": "img/caatinga/silvicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/silvicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/silvicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/silvicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/silvicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/silvicultura/ex1_grafico.jpg",
     "mapa": "img/caatinga/silvicultura/ex1_mapa.jpg"
    }
   ]
  },
  "praia_duna_e_areal|caatinga": {
   "descricao": "Cordões arenosos, de coloração branco brilhante, onde não há o predomínio de vegetação de nenhum tipo.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 107,
   "exemplos": [
    {
     "lat": -4.13974,
     "lon": -38.12286,
     "coords": "-4.13974, -38.12286",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, Apicum e Restinga Herbácea esparsa. O areal (Pampa) pode lembrar o solo exposto de lavouras."
     },
     "pagina": 106,
     "imagens": [
      {
       "src": "img/caatinga/praia_duna_e_areial/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/praia_duna_e_areial/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/praia_duna_e_areial/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/praia_duna_e_areial/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/praia_duna_e_areial/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/praia_duna_e_areial/ex1_grafico.jpg",
     "mapa": "img/caatinga/praia_duna_e_areial/ex1_mapa.jpg"
    }
   ]
  },
  "area_urbanizada|caatinga": {
   "descricao": "Áreas com significativa densidade de edificações e vias, incluindo infraestrutura e áreas livres de construções.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 109,
   "exemplos": [
    {
     "lat": -10.8271,
     "lon": -39.423,
     "coords": "-10.8271, -39.4230",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Bairros muito arborizados, loteamentos não ocupados e pequenos núcleos rurais são difíceis de delimitar. Telhados e solo exposto podem ser confundidos com Mineração ou Outras Áreas não Vegetadas."
     },
     "pagina": 108,
     "imagens": [
      {
       "src": "img/caatinga/area_urbana/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/area_urbana/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/area_urbana/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/area_urbana/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/area_urbana/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/area_urbana/ex1_grafico.jpg",
     "mapa": "img/caatinga/area_urbana/ex1_mapa.jpg"
    }
   ]
  },
  "mineracao|caatinga": {
   "descricao": "Áreas referentes a extração mineral superficial, de porte industrial ou garimpeiro, havendo clara exposição do solo por ação antrópica. Não são passíveis de detecção nenhum tipo de mineração subterrânea ou subaquática.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 132,
   "exemplos": [
    {
     "lat": -11.450972,
     "lon": -39.086478,
     "coords": "-11.450972, -39.086478",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, solo exposto e áreas urbanas em expansão. Pela legenda, a mineração subterrânea ou subaquática não é detectável."
     },
     "pagina": 131,
     "imagens": [
      {
       "src": "img/caatinga/mineracao/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/mineracao/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/mineracao/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/mineracao/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/mineracao/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/mineracao/ex1_grafico.jpg",
     "mapa": "img/caatinga/mineracao/ex1_mapa.jpg"
    }
   ]
  },
  "usina_fotovoltaica|caatinga": {
   "descricao": "Instalação de médio a grande porte destinada à geração de energia elétrica por conversão direta da luz solar, com foco na comercialização da energia. No Brasil, são consideradas grandes usinas as centrais com potência superior a 5 MW, conforme regulamentação (Resolução Normativa ANEEL nº 1.071, de 29 de agosto de 2023). A eletricidade gerada é conectada ao Sistema Interligado Nacional (SIN), que distribui energia por todo o país. Em termos de uso do solo, essas usinas ocupam áreas relevantes: estima-se que uma instalação em regiões tropicais demande cerca de 1 ha por MW com o uso de módulos fixos, podendo variar para 2–3 ha/MW em função de tecnologia (trackers) e disposição dos painéis. Exemplos nacionais confirmam essa faixa: o Parque Solar Nova Olinda (292 MW em 690 ha ≈ 2,4 ha/MW), e o Complexo Solar Pirapora (321 MW em ≈ 1 500 ha, cerca de 4,7 ha/MW.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 136,
   "exemplos": [
    {
     "lat": -9.6985,
     "lon": -40.6686,
     "coords": "-9.6985, -40.6686",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "sistema de energia sustentável",
     "limitacao": {
      "geral": "Pela legenda, a classe considera instalações de médio a grande porte voltadas à comercialização da energia: geração distribuída (telhados) e instalações pequenas não entram. Na resolução de 30 m, os painéis podem ser confundidos com Outras Áreas não Vegetadas ou área urbana."
     },
     "pagina": 135,
     "imagens": [
      {
       "src": "img/caatinga/usina_fotovoltaica/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/usina_fotovoltaica/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/usina_fotovoltaica/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/usina_fotovoltaica/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/usina_fotovoltaica/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/usina_fotovoltaica/ex1_grafico.jpg",
     "mapa": "img/caatinga/usina_fotovoltaica/ex1_mapa.jpg"
    }
   ]
  },
  "outras_areas_nao_vegetadas|caatinga": {
   "descricao": "Áreas de superfícies não permeáveis (infra-estrutura, expansão urbana ou mineração) não mapeadas em suas classes.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 134,
   "exemplos": [
    {
     "lat": null,
     "lon": null,
     "coords": "",
     "falsa_cor": "",
     "tonalidade": "",
     "textura": "",
     "observacoes": "",
     "limitacao": {
      "geral": "É uma classe residual: reúne superfícies não vegetadas que não se encaixam nas demais. Por isso, confunde-se com Mineração, Área Urbanizada, Praia, Duna e Areal, Afloramento Rochoso e lavouras em solo exposto."
     },
     "pagina": 133,
     "imagens": [],
     "grafico": "",
     "mapa": ""
    }
   ]
  },
  "rio_lago_e_oceano|caatinga": {
   "descricao": "Rios, lagos, represas, reservatórios e outros corpos d'água.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 111,
   "exemplos": [
    {
     "lat": -5.6318,
     "lon": -40.3961,
     "coords": "-5.6318, -40.3961",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A lâmina d'água varia entre seca e cheia. Rios estreitos (< 30 m) e lagos pequenos podem não aparecer. Água turva ou coberta por plantas aquáticas pode parecer solo ou vegetação."
     },
     "pagina": 110,
     "imagens": [
      {
       "src": "img/caatinga/rio_lago_e_oceano/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/rio_lago_e_oceano/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/rio_lago_e_oceano/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/rio_lago_e_oceano/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/rio_lago_e_oceano/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/rio_lago_e_oceano/ex1_grafico.jpg",
     "mapa": "img/caatinga/rio_lago_e_oceano/ex1_mapa.jpg"
    }
   ]
  },
  "aquicultura|caatinga": {
   "descricao": "Área referente a lagos artificiais, onde predominam atividades aquícolas e/ou de salicultura.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 138,
   "exemplos": [
    {
     "lat": -4.981664,
     "lon": -37.195253,
     "coords": "-4.981664, -37.195253",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Tanques escavados parecem pequenos reservatórios e açudes (Rio, Lago e Oceano) e salinas. Tanques pequenos ficam abaixo da resolução de 30 m. O formato retangular e o agrupamento dos tanques ajudam."
     },
     "pagina": 137,
     "imagens": [
      {
       "src": "img/caatinga/aquicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/caatinga/aquicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/caatinga/aquicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/caatinga/aquicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/caatinga/aquicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/caatinga/aquicultura/ex1_grafico.jpg",
     "mapa": "img/caatinga/aquicultura/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_florestal|mata_atlantica": {
   "descricao": "Tipos de vegetação caracterizados pela predominância de espécies arbóreas, com alta densidade de árvores, dossel fechado e estratificação vertical. Inclui as tipologias florestais: Floresta Ombrófila Densa, Aberta e Mista, Floresta Estacional Semidecidual e Decidual, e Formação Pioneira.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 142,
   "exemplos": [
    {
     "lat": -6.71115,
     "lon": -35.18554,
     "coords": "-6.71115, -35.18554",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "O limite com a Formação Savânica é gradual (dossel mais aberto). Em florestas estacionais, a queda das folhas no período seco reduz o NDVI e pode lembrar savana. Florestas secundárias jovens, degradadas ou com corte seletivo são difíceis de separar da floresta madura na resolução de 10–30 m."
     },
     "pagina": 141,
     "imagens": [
      {
       "src": "img/mata_atlantica/formacao_florestal/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/formacao_florestal/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/formacao_florestal/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/formacao_florestal/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/formacao_florestal/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/formacao_florestal/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/formacao_florestal/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_savanica|mata_atlantica": {
   "descricao": "Tipo de vegetação caracterizado pela presença de espécies arbóreas e arbustivas esparsas, com dossel semicontínuo. Inclui: Estépica, Savana Florestada e Savana Arborizada.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 144,
   "exemplos": [
    {
     "lat": -5.601464,
     "lon": -35.257592,
     "coords": "-5.601464, -35.257592",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A densidade de árvores varia de forma contínua, por isso os limites com Formação Florestal e Formação Campestre são subjetivos. No período seco, a resposta se aproxima da de pastagem. Comparar as imagens de seca e de chuva e a série de NDVI."
     },
     "pagina": 143,
     "imagens": [
      {
       "src": "img/mata_atlantica/formacao_savanica/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/formacao_savanica/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/formacao_savanica/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/formacao_savanica/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/formacao_savanica/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/formacao_savanica/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/formacao_savanica/ex1_mapa.jpg"
    }
   ]
  },
  "mangue|mata_atlantica": {
   "descricao": "Formações florestais e/ou arbustivas, densas, sempre-verdes, frequentemente inundadas pela maré e associadas ao ecossistema costeiro de Manguezal.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 160,
   "exemplos": [
    {
     "lat": -7.378189,
     "lon": -34.806311,
     "coords": "-7.378189, -34.806311",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundido com Floresta Alagável e Restinga Arbórea. Os limites com Apicum e com a água variam com a maré. Usar o contexto estuarino."
     },
     "pagina": 159,
     "imagens": [
      {
       "src": "img/mata_atlantica/mangue/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/mangue/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/mangue/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/mangue/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/mangue/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/mangue/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/mangue/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_campestre|mata_atlantica": {
   "descricao": "Vegetação dominada por espécies herbáceas e gramíneas, com poucas árvores e arbustos dispersos, geralmente apresentando dossel aberto ou ausente. Ocorre em solos que variam de profundos a rasos, incluindo terrenos rochosos (campos rupestres). Inclui: Savanas Parque e de Estépica Gramíneo-Lenhosa, Estépicas e Formações Pioneiras Arbustivas e Herbáceas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 146,
   "exemplos": [
    {
     "lat": -21.456896,
     "lon": -44.62803979,
     "coords": "-21.45689600, -44.62803979",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Heterogênea",
     "observacoes": "Relevo montanhoso e altas altitudes, uma das características da Mata Atlântica. NDVI médio, típico de gramínea.",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 145,
     "imagens": [
      {
       "src": "img/mata_atlantica/formacao_campestre/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/formacao_campestre/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/formacao_campestre/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/formacao_campestre/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/formacao_campestre/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/formacao_campestre/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/formacao_campestre/ex1_mapa.jpg"
    }
   ]
  },
  "campo_alagado_e_area_pantanosa|mata_atlantica": {
   "descricao": "Vegetação de planícies alagáveis ou campos influenciados por dinâmicas fluviais e/ou lacustres, caracterizada pela predominância de vegetação higrófila, incluindo plantas aquáticas emersas, submersas ou flutuantes.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 148,
   "exemplos": [
    {
     "lat": -15.95635,
     "lon": -38.912128,
     "coords": "-15.956350, -38.912128",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A inundação é sazonal: no período seco a área pode parecer Formação Campestre ou Pastagem e, na cheia, água. Comparar as imagens de seca e de chuva."
     },
     "pagina": 147,
     "imagens": [
      {
       "src": "img/mata_atlantica/campo_alagado_e_area_pantanosa/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/campo_alagado_e_area_pantanosa/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/campo_alagado_e_area_pantanosa/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/campo_alagado_e_area_pantanosa/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/campo_alagado_e_area_pantanosa/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/campo_alagado_e_area_pantanosa/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/campo_alagado_e_area_pantanosa/ex1_mapa.jpg"
    }
   ]
  },
  "afloramento_rochoso|mata_atlantica": {
   "descricao": "Superfícies rochosas naturalmente expostas com pouca ou nenhuma cobertura de solo, frequentemente associados à vegetação rupícola e a terrenos de forte declividade.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 150,
   "exemplos": [
    {
     "lat": -18.3555,
     "lon": -41.3291,
     "coords": "-18.3555, -41.3291",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Afloramentos pequenos ou entremeados de vegetação ficam abaixo da resolução de 30 m e se misturam com Formação Campestre ou Savânica. A rocha exposta pode lembrar solo exposto ou Outras Áreas não Vegetadas."
     },
     "pagina": 149,
     "imagens": [
      {
       "src": "img/mata_atlantica/afloramento_rochoso/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/afloramento_rochoso/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/afloramento_rochoso/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/afloramento_rochoso/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/afloramento_rochoso/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/afloramento_rochoso/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/afloramento_rochoso/ex1_mapa.jpg"
    }
   ]
  },
  "apicum|mata_atlantica": {
   "descricao": "Apicuns ou Campos Salgados são formações quase sempre desprovidas de vegetação arbórea e arbustiva, associadas a uma zona topograficamente mais alta da planície costeira, hipersalina e com frequência de inundação menor do que o manguezal, em geral na transição entre este e a terra firme ou campos de dunas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 162,
   "exemplos": [
    {
     "lat": -7.68037446,
     "lon": -34.87801932,
     "coords": "-7.68037446 -34.87801932",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Média",
     "textura": "Lisa e Heterogênea",
     "observacoes": "Coloração indicativa de ausência de vegetação e presença de umidade. NDVI baixo e constante.",
     "limitacao": {
      "geral": "Confunde-se com Praia, Duna e Areal, Outras Áreas não Vegetadas, salinas e tanques de aquicultura. Os limites com o mangue e com a água variam com a maré."
     },
     "pagina": 161,
     "imagens": [
      {
       "src": "img/mata_atlantica/apicum/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/apicum/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/apicum/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/apicum/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/apicum/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/apicum/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/apicum/ex1_mapa.jpg"
    }
   ]
  },
  "restinga_herbacea_ou_arbustiva|mata_atlantica": {
   "descricao": "Vegetação herbácea que se estabelece sobre solos arenosos ou sobre dunas costeiras com influência fluviomarinha.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 158,
   "exemplos": [
    {
     "lat": -5.258942,
     "lon": -35.409739,
     "coords": "-5.258942, -35.409739",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Quando a cobertura é esparsa, confunde-se com Formação Campestre e com Praia, Duna e Areal. Depende do contexto costeiro (cordões arenosos)."
     },
     "pagina": 157,
     "imagens": [
      {
       "src": "img/mata_atlantica/restinga_herbacea/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/restinga_herbacea/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/restinga_herbacea/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/restinga_herbacea/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/restinga_herbacea/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/restinga_herbacea/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/restinga_herbacea/ex1_mapa.jpg"
    }
   ]
  },
  "pastagem|mata_atlantica": {
   "descricao": "Áreas de pastagem plantadas, diretamente relacionadas à atividade agropecuária. As áreas de pastagem natural, por sua vez, são predominantemente caracterizadas como formações campestres ou campo alagado, podendo ser submetidas ou não a práticas de pastejo. Podem ocorrer áreas desmatadas recentemente, sem ainda ter iniciado a atividade agropecuária. Pode conter também áreas em estágios iniciais de regeneração. Pequenas áreas agrícolas podem estar contidas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 164,
   "exemplos": [
    {
     "lat": -8.39774,
     "lon": -35.70423,
     "coords": "-8.39774, -35.70423",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Formação Campestre e Savânica (pastagem em vegetação nativa aberta), com Lavoura Temporária (rotação ou integração lavoura-pecuária) e com Mosaico de Usos. Pastagens degradadas, com solo exposto, podem parecer Outras Áreas não Vegetadas."
     },
     "pagina": 163,
     "imagens": [
      {
       "src": "img/mata_atlantica/pastagem/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/pastagem/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/pastagem/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/pastagem/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/pastagem/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/pastagem/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/pastagem/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_temporaria|mata_atlantica": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de curta ou média duração, geralmente com ciclo vegetativo inferior a um ano, que após a colheita necessitam de novo plantio para produzir.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 167,
   "exemplos": [
    {
     "lat": -7.019031,
     "lon": -34.985708,
     "coords": "-7.019031, -34.985708",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 165,
     "imagens": [
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/cultivo_temporario/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/cultivo_temporario/ex1_mapa.jpg"
    },
    {
     "lat": -24.076353,
     "lon": -52.420255,
     "coords": "-24.076353, -52.420255",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 166,
     "imagens": [
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/cultivo_temporario/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/cultivo_temporario/ex2_grafico.jpg",
     "mapa": "img/mata_atlantica/cultivo_temporario/ex2_mapa.jpg"
    }
   ]
  },
  "arroz|mata_atlantica": {
   "descricao": "Áreas cultivadas com cultura de arroz, exclusivamente sob sistema de irrigação. Este mapa é o mesmo apresentado no módulo irrigação na classe \"Arroz Irrigado\".",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 183,
   "exemplos": [
    {
     "lat": -23.17827,
     "lon": -53.428097,
     "coords": "-23.178270, -53.428097",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "O arroz irrigado por inundação pode parecer água ou Campo Alagado no início do ciclo. O arroz de sequeiro é difícil de separar das outras lavouras temporárias sem informação de campo."
     },
     "pagina": 182,
     "imagens": [
      {
       "src": "img/mata_atlantica/arroz/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/arroz/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/arroz/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/arroz/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/arroz/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/arroz/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/arroz/ex1_mapa.jpg"
    }
   ]
  },
  "cana|mata_atlantica": {
   "descricao": "Áreas cultivadas com a monocultura da cana-de-açúcar.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 171,
   "exemplos": [
    {
     "lat": -7.062681,
     "lon": -35.054808,
     "coords": "-7.062681, -35.054808",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A separação de outras lavouras temporárias e de pastagem depende do ciclo longo (colheita anual e rebrota) na série de NDVI. Áreas em reforma ou recém-colhidas parecem solo exposto."
     },
     "pagina": 170,
     "imagens": [
      {
       "src": "img/mata_atlantica/cana_de_acucar/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/cana_de_acucar/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/cana_de_acucar/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/cana_de_acucar/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/cana_de_acucar/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/cana_de_acucar/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/cana_de_acucar/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_perene|mata_atlantica": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de ciclo vegetativo longo (mais de um ano), que permitem colheitas sucessivas, sem necessidade de novo plantio.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 169,
   "exemplos": [
    {
     "lat": -5.58043,
     "lon": -35.252388,
     "coords": "-5.580430, -35.252388",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundida com Silvicultura e com Formação Savânica ou Florestal (pomares adultos, café sombreado, dendê), e com Pastagem nas fases iniciais. As linhas de plantio geralmente só aparecem em imagens de alta resolução."
     },
     "pagina": 168,
     "imagens": [
      {
       "src": "img/mata_atlantica/cultivo_perene/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/cultivo_perene/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/cultivo_perene/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/cultivo_perene/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/cultivo_perene/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/cultivo_perene/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/cultivo_perene/ex1_mapa.jpg"
    }
   ]
  },
  "silvicultura|mata_atlantica": {
   "descricao": "Espécies arbóreas plantadas para fins comerciais (ex. pinus, eucalipto, araucária).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 175,
   "exemplos": [
    {
     "lat": -12.18596564,
     "lon": -37.99401757,
     "coords": "-12.18596564 -37.99401757",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "Delimitação com textura lisa (para este nível de detalhe da imagem) e homogênea; ver a diferença em relação à formação florestal ao lado. NDVI baixo com aumento para acima de 0,8, indicando o cultivo de espécie arbórea. Esse formato de silvicultura em meio a formações florestais é comum no bioma Mata Atlântica.",
     "limitacao": {
      "geral": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota)."
     },
     "pagina": 172,
     "imagens": [
      {
       "src": "img/mata_atlantica/silvicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/silvicultura/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/silvicultura/ex1_mapa.jpg"
    },
    {
     "lat": -9.370867,
     "lon": -35.736933,
     "coords": "-9.370867, -35.736933",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota)."
     },
     "pagina": 173,
     "imagens": [
      {
       "src": "img/mata_atlantica/silvicultura/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/silvicultura/ex2_grafico.jpg",
     "mapa": "img/mata_atlantica/silvicultura/ex2_mapa.jpg"
    },
    {
     "lat": -7.587453,
     "lon": -34.933111,
     "coords": "-7.587453, -34.933111",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota)."
     },
     "pagina": 174,
     "imagens": [
      {
       "src": "img/mata_atlantica/silvicultura/ex3_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex3_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex3_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex3_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/silvicultura/ex3_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/silvicultura/ex3_grafico.jpg",
     "mapa": "img/mata_atlantica/silvicultura/ex3_mapa.jpg"
    }
   ]
  },
  "praia_duna_e_areal|mata_atlantica": {
   "descricao": "Cordões arenosos, de coloração branco brilhante, onde não há o predomínio de vegetação de nenhum tipo.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 152,
   "exemplos": [
    {
     "lat": -12.323192,
     "lon": -37.835592,
     "coords": "-12.323192, -37.835592",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, Apicum e Restinga Herbácea esparsa. O areal (Pampa) pode lembrar o solo exposto de lavouras."
     },
     "pagina": 151,
     "imagens": [
      {
       "src": "img/mata_atlantica/praia_duna_e_areial/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/praia_duna_e_areial/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/praia_duna_e_areial/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/praia_duna_e_areial/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/praia_duna_e_areial/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/praia_duna_e_areial/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/praia_duna_e_areial/ex1_mapa.jpg"
    }
   ]
  },
  "area_urbanizada|mata_atlantica": {
   "descricao": "Áreas com significativa densidade de edificações e vias, incluindo infraestrutura e áreas livres de construções.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 154,
   "exemplos": [
    {
     "lat": -21.795433,
     "lon": -51.176211,
     "coords": "-21.795433, -51.176211",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Bairros muito arborizados, loteamentos não ocupados e pequenos núcleos rurais são difíceis de delimitar. Telhados e solo exposto podem ser confundidos com Mineração ou Outras Áreas não Vegetadas."
     },
     "pagina": 153,
     "imagens": [
      {
       "src": "img/mata_atlantica/area_urbana/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/area_urbana/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/area_urbana/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/area_urbana/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/area_urbana/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/area_urbana/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/area_urbana/ex1_mapa.jpg"
    }
   ]
  },
  "mineracao|mata_atlantica": {
   "descricao": "Áreas referentes a extração mineral superficial, de porte industrial ou garimpeiro, havendo clara exposição do solo por ação antrópica. Não são passíveis de detecção nenhum tipo de mineração subterrânea ou subaquática.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 177,
   "exemplos": [
    {
     "lat": -23.657,
     "lon": -47.534,
     "coords": "-23.657 -47.534",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Heterogênea",
     "observacoes": "NDVI abaixo de 0,15 aponta ausência de vegetação. Manchas de solo exposto e lagoas próximas indicam a atividade de mineração.",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, solo exposto e áreas urbanas em expansão. Pela legenda, a mineração subterrânea ou subaquática não é detectável."
     },
     "pagina": 176,
     "imagens": [
      {
       "src": "img/mata_atlantica/mineracao/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/mineracao/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/mineracao/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/mineracao/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/mineracao/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/mineracao/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/mineracao/ex1_mapa.jpg"
    }
   ]
  },
  "outras_areas_nao_vegetadas|mata_atlantica": {
   "descricao": "Áreas naturais com solo exposto resultantes de eventos climáticos (deslizamentos, inundações) e áreas com superfícies não permeáveis (infraestrutura, expansão urbana ou mineração) que não foram mapeadas dentro de suas respectivas classes.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 179,
   "exemplos": [
    {
     "lat": -20.543164,
     "lon": -43.756406,
     "coords": "-20.543164, -43.756406",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "É uma classe residual: reúne superfícies não vegetadas que não se encaixam nas demais. Por isso, confunde-se com Mineração, Área Urbanizada, Praia, Duna e Areal, Afloramento Rochoso e lavouras em solo exposto."
     },
     "pagina": 178,
     "imagens": [
      {
       "src": "img/mata_atlantica/outras_areas_nao_vegetadas/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/outras_areas_nao_vegetadas/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/outras_areas_nao_vegetadas/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/outras_areas_nao_vegetadas/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/outras_areas_nao_vegetadas/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/outras_areas_nao_vegetadas/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/outras_areas_nao_vegetadas/ex1_mapa.jpg"
    }
   ]
  },
  "rio_lago_e_oceano|mata_atlantica": {
   "descricao": "Rios, lagos, represas, reservatórios e outros corpos d'água.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 156,
   "exemplos": [
    {
     "lat": -22.826497,
     "lon": -50.858303,
     "coords": "-22.826497, -50.858303",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A lâmina d'água varia entre seca e cheia. Rios estreitos (< 30 m) e lagos pequenos podem não aparecer. Água turva ou coberta por plantas aquáticas pode parecer solo ou vegetação."
     },
     "pagina": 155,
     "imagens": [
      {
       "src": "img/mata_atlantica/rio_lago_e_oceano/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/rio_lago_e_oceano/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/rio_lago_e_oceano/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/rio_lago_e_oceano/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/rio_lago_e_oceano/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/rio_lago_e_oceano/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/rio_lago_e_oceano/ex1_mapa.jpg"
    }
   ]
  },
  "aquicultura|mata_atlantica": {
   "descricao": "Área referente a lagos artificiais, onde predominam atividades aquícolas e/ou de salicultura.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 181,
   "exemplos": [
    {
     "lat": -24.7182,
     "lon": -53.9649,
     "coords": "-24.7182, -53.9649",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Tanques escavados parecem pequenos reservatórios e açudes (Rio, Lago e Oceano) e salinas. Tanques pequenos ficam abaixo da resolução de 30 m. O formato retangular e o agrupamento dos tanques ajudam."
     },
     "pagina": 180,
     "imagens": [
      {
       "src": "img/mata_atlantica/aquicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/mata_atlantica/aquicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/mata_atlantica/aquicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/mata_atlantica/aquicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/mata_atlantica/aquicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/mata_atlantica/aquicultura/ex1_grafico.jpg",
     "mapa": "img/mata_atlantica/aquicultura/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_florestal|pantanal": {
   "descricao": "Árvores altas e arbustos no estrato inferior: Floresta Estacional Decidual e Semidecidual, Savana Florestada, Savana-Estépica Florestada e Formações Pioneiras com influência fluvial e/ou lacustre.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 188,
   "exemplos": [
    {
     "lat": -18.4444,
     "lon": -55.4649,
     "coords": "-18.4444, -55.4649",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "O limite com a Formação Savânica é gradual (dossel mais aberto). Em florestas estacionais, a queda das folhas no período seco reduz o NDVI e pode lembrar savana. Florestas secundárias jovens, degradadas ou com corte seletivo são difíceis de separar da floresta madura na resolução de 10–30 m."
     },
     "pagina": 186,
     "imagens": [
      {
       "src": "img/pantanal/formacao_florestal/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/formacao_florestal/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/formacao_florestal/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/formacao_florestal/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/formacao_florestal/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/formacao_florestal/ex1_grafico.jpg",
     "mapa": "img/pantanal/formacao_florestal/ex1_mapa.jpg"
    },
    {
     "lat": -17.480936,
     "lon": -56.852339,
     "coords": "-17.480936, -56.852339",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "O limite com a Formação Savânica é gradual (dossel mais aberto). Em florestas estacionais, a queda das folhas no período seco reduz o NDVI e pode lembrar savana. Florestas secundárias jovens, degradadas ou com corte seletivo são difíceis de separar da floresta madura na resolução de 10–30 m."
     },
     "pagina": 187,
     "imagens": [
      {
       "src": "img/pantanal/formacao_florestal/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/formacao_florestal/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/formacao_florestal/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/formacao_florestal/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/formacao_florestal/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/formacao_florestal/ex2_grafico.jpg",
     "mapa": "img/pantanal/formacao_florestal/ex2_mapa.jpg"
    }
   ]
  },
  "formacao_savanica|pantanal": {
   "descricao": "Espécies arbóreas de pequeno porte, distribuídas de forma esparsa e dispostas em meio à vegetação contínua de porte arbustivo e herbáceo. A vegetação herbácea se mistura com arbustos eretos e decumbentes.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 190,
   "exemplos": [
    {
     "lat": -18.1482,
     "lon": -55.8996,
     "coords": "-18.1482, -55.8996",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A densidade de árvores varia de forma contínua, por isso os limites com Formação Florestal e Formação Campestre são subjetivos. No período seco, a resposta se aproxima da de pastagem. Comparar as imagens de seca e de chuva e a série de NDVI."
     },
     "pagina": 189,
     "imagens": [
      {
       "src": "img/pantanal/formacao_savanica/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/formacao_savanica/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/formacao_savanica/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/formacao_savanica/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/formacao_savanica/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/formacao_savanica/ex1_grafico.jpg",
     "mapa": "img/pantanal/formacao_savanica/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_campestre|pantanal": {
   "descricao": "Vegetação com predomínio de estrato herbáceo graminóide, com presença de arbustivas isoladas e lenhosas raquíticas. A composição botânica é influenciada pelos gradientes edáficos e topográficos e pelo manejo pastoril (pecuária). Manchas de vegetação exótica invasora ou de uso forrageiro (pastagem plantada) podem estar presentes formando mosaicos com a vegetação nativa.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 192,
   "exemplos": [
    {
     "lat": -18.994711,
     "lon": -56.277986,
     "coords": "-18.994711, -56.277986",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 191,
     "imagens": [
      {
       "src": "img/pantanal/formacao_campestre/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/formacao_campestre/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/formacao_campestre/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/formacao_campestre/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/formacao_campestre/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/formacao_campestre/ex1_grafico.jpg",
     "mapa": "img/pantanal/formacao_campestre/ex1_mapa.jpg"
    }
   ]
  },
  "campo_alagado_e_area_pantanosa|pantanal": {
   "descricao": "Vegetação herbácea com predomínio de gramíneas sujeitas ao alagamento permanente ou temporário (pelo menos uma vez ao ano) de acordo com os pulsos naturais de inundação. O elemento lenhoso pode estar presente sobre a matriz campestre formando um mosaico com plantas arbustivas ou arbóreas (ex: cambarazal, paratudal e carandazal). As áreas pantanosas ocorrem geralmente nas margens das lagoas temporárias ou permanentes ocupadas por plantas aquáticas emergentes, submersas ou flutuantes (ex: brejos e baceiros). Áreas com superfície de água, mas de difícil classificação devido a quantidade de macrófitas, eutrofização ou sedimentos, também foram incluídas nesta categoria.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 194,
   "exemplos": [
    {
     "lat": -18.5527,
     "lon": -56.7261,
     "coords": "-18.5527, -56.7261",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A inundação é sazonal: no período seco a área pode parecer Formação Campestre ou Pastagem e, na cheia, água. Comparar as imagens de seca e de chuva."
     },
     "pagina": 193,
     "imagens": [
      {
       "src": "img/pantanal/campo_alagado_e_area_pantanosa/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/campo_alagado_e_area_pantanosa/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/campo_alagado_e_area_pantanosa/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/campo_alagado_e_area_pantanosa/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/campo_alagado_e_area_pantanosa/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/campo_alagado_e_area_pantanosa/ex1_grafico.jpg",
     "mapa": "img/pantanal/campo_alagado_e_area_pantanosa/ex1_mapa.jpg"
    }
   ]
  },
  "afloramento_rochoso|pantanal": {
   "descricao": "Superfícies rochosas naturalmente expostas com pouca ou nenhuma cobertura de solo e vegetação mínima",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 196,
   "exemplos": [
    {
     "lat": -17.898081,
     "lon": -57.600089,
     "coords": "-17.898081, -57.600089",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Afloramentos pequenos ou entremeados de vegetação ficam abaixo da resolução de 30 m e se misturam com Formação Campestre ou Savânica. A rocha exposta pode lembrar solo exposto ou Outras Áreas não Vegetadas."
     },
     "pagina": 195,
     "imagens": [
      {
       "src": "img/pantanal/afloramento_rochoso/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/afloramento_rochoso/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/afloramento_rochoso/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/afloramento_rochoso/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/afloramento_rochoso/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/afloramento_rochoso/ex1_grafico.jpg",
     "mapa": "img/pantanal/afloramento_rochoso/ex1_mapa.jpg"
    }
   ]
  },
  "pastagem|pantanal": {
   "descricao": "Áreas de pastagem plantadas, diretamente relacionadas à atividade agropecuária. As áreas de pastagem natural, por sua vez, são predominantemente caracterizadas como formações campestres ou campo alagado, podendo ser submetidas ou não a práticas de pastejo. Podem ocorrer áreas desmatadas recentemente, sem ainda ter iniciado a atividade agropecuária. Pode conter também áreas em estágios iniciais de regeneração. Pequenas áreas agrícolas podem estar contidas.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 203,
   "exemplos": [
    {
     "lat": -21.82170035,
     "lon": -57.68051733,
     "coords": "-21.82170035, -57.68051733",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Clara",
     "textura": "Lisa e Heterogênea",
     "observacoes": "Delimitação que indica que houve desmatamento da vegetação nativa. Manchas características de áreas que sofrem alagamento, típicas do bioma Pantanal. Solo exposto em regiões de alagamento em que a gramínea exótica não sobrevive. Bebedouros para gado. NDVI médio, típico de gramínea.",
     "limitacao": {
      "geral": "Confunde-se com Formação Campestre e Savânica (pastagem em vegetação nativa aberta), com Lavoura Temporária (rotação ou integração lavoura-pecuária) e com Mosaico de Usos. Pastagens degradadas, com solo exposto, podem parecer Outras Áreas não Vegetadas."
     },
     "pagina": 201,
     "imagens": [
      {
       "src": "img/pantanal/pastagem/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/pastagem/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/pastagem/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/pastagem/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/pastagem/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/pastagem/ex1_grafico.jpg",
     "mapa": "img/pantanal/pastagem/ex1_mapa.jpg"
    },
    {
     "lat": -16.942103,
     "lon": -55.103186,
     "coords": "-16.942103, -55.103186",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Formação Campestre e Savânica (pastagem em vegetação nativa aberta), com Lavoura Temporária (rotação ou integração lavoura-pecuária) e com Mosaico de Usos. Pastagens degradadas, com solo exposto, podem parecer Outras Áreas não Vegetadas."
     },
     "pagina": 202,
     "imagens": [
      {
       "src": "img/pantanal/pastagem/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/pastagem/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/pastagem/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/pastagem/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/pastagem/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/pastagem/ex2_grafico.jpg",
     "mapa": "img/pantanal/pastagem/ex2_mapa.jpg"
    }
   ]
  },
  "lavoura_temporaria|pantanal": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de curta ou média duração, geralmente com ciclo vegetativo inferior a um ano, que após a colheita necessitam de novo plantio para produzir.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 206,
   "exemplos": [
    {
     "lat": -20.39358,
     "lon": -56.56084,
     "coords": "-20.39358, -56.56084",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 204,
     "imagens": [
      {
       "src": "img/pantanal/cultivo_temporario/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/cultivo_temporario/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/cultivo_temporario/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/cultivo_temporario/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/cultivo_temporario/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/cultivo_temporario/ex1_grafico.jpg",
     "mapa": "img/pantanal/cultivo_temporario/ex1_mapa.jpg"
    },
    {
     "lat": -16.196889,
     "lon": -57.680637,
     "coords": "-16.196889, -57.680637",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 205,
     "imagens": [
      {
       "src": "img/pantanal/cultivo_temporario/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/cultivo_temporario/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/cultivo_temporario/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/cultivo_temporario/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/cultivo_temporario/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/cultivo_temporario/ex2_grafico.jpg",
     "mapa": "img/pantanal/cultivo_temporario/ex2_mapa.jpg"
    }
   ]
  },
  "arroz|pantanal": {
   "descricao": "Áreas cultivadas com cultura de arroz, exclusivamente sob sistema de irrigação. Este mapa é o mesmo apresentado no módulo irrigação na classe \"Arroz Irrigado\".",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 214,
   "exemplos": [
    {
     "lat": -20.26477112,
     "lon": -56.41756473,
     "coords": "-20.26477112, -56.41756473",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "Escura",
     "textura": "Lisa e Homogênea",
     "observacoes": "Padrão de pequenos talhões; a coloração indica umidade (vermelho + azul) e há dutos de irrigação, características do plantio de arroz. O NDVI varia de 0,2 a 1 em alguns meses e volta a 0,2, indicando cultivo e colheita.",
     "limitacao": {
      "geral": "O arroz irrigado por inundação pode parecer água ou Campo Alagado no início do ciclo. O arroz de sequeiro é difícil de separar das outras lavouras temporárias sem informação de campo."
     },
     "pagina": 213,
     "imagens": [
      {
       "src": "img/pantanal/arroz/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/arroz/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/arroz/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/arroz/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/arroz/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/arroz/ex1_grafico.jpg",
     "mapa": "img/pantanal/arroz/ex1_mapa.jpg"
    }
   ]
  },
  "silvicultura|pantanal": {
   "descricao": "Espécies arbóreas plantadas para fins comerciais (ex. pinus, eucalipto, araucária).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 208,
   "exemplos": [
    {
     "lat": -16.174786,
     "lon": -58.462442,
     "coords": "-16.174786 , -58.462442",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota)."
     },
     "pagina": 207,
     "imagens": [
      {
       "src": "img/pantanal/silvicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/silvicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/silvicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/silvicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/silvicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/silvicultura/ex1_grafico.jpg",
     "mapa": "img/pantanal/silvicultura/ex1_mapa.jpg"
    }
   ]
  },
  "area_urbanizada|pantanal": {
   "descricao": "Áreas com significativa densidade de edificações e vias, incluindo infraestrutura e áreas livres de construções.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 198,
   "exemplos": [
    {
     "lat": -16.095833,
     "lon": -57.702956,
     "coords": "-16.095833, -57.702956",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Bairros muito arborizados, loteamentos não ocupados e pequenos núcleos rurais são difíceis de delimitar. Telhados e solo exposto podem ser confundidos com Mineração ou Outras Áreas não Vegetadas."
     },
     "pagina": 197,
     "imagens": [
      {
       "src": "img/pantanal/area_urbana/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/area_urbana/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/area_urbana/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/area_urbana/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/area_urbana/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/area_urbana/ex1_grafico.jpg",
     "mapa": "img/pantanal/area_urbana/ex1_mapa.jpg"
    }
   ]
  },
  "mineracao|pantanal": {
   "descricao": "Áreas referentes a extração mineral superficial, de porte industrial ou garimpeiro, havendo clara exposição do solo por ação antrópica. Não são passíveis de detecção nenhum tipo de mineração subterrânea ou subaquática.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 210,
   "exemplos": [
    {
     "lat": -19.211708,
     "lon": -57.581711,
     "coords": "-19.211708, -57.581711",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, solo exposto e áreas urbanas em expansão. Pela legenda, a mineração subterrânea ou subaquática não é detectável."
     },
     "pagina": 209,
     "imagens": [
      {
       "src": "img/pantanal/mineracao/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/mineracao/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/mineracao/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/mineracao/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/mineracao/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/mineracao/ex1_grafico.jpg",
     "mapa": "img/pantanal/mineracao/ex1_mapa.jpg"
    }
   ]
  },
  "outras_areas_nao_vegetadas|pantanal": {
   "descricao": "Áreas de solo exposto (principalmente solo arenoso) não classificadas na classe de Formação Campestre ou Pastagem.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 212,
   "exemplos": [
    {
     "lat": -18.806,
     "lon": -55.152,
     "coords": "-18.8060, -55.1520",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "É uma classe residual: reúne superfícies não vegetadas que não se encaixam nas demais. Por isso, confunde-se com Mineração, Área Urbanizada, Praia, Duna e Areal, Afloramento Rochoso e lavouras em solo exposto."
     },
     "pagina": 211,
     "imagens": [
      {
       "src": "img/pantanal/outras_areas_nao_vegetadas/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/outras_areas_nao_vegetadas/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/outras_areas_nao_vegetadas/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/outras_areas_nao_vegetadas/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/outras_areas_nao_vegetadas/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/outras_areas_nao_vegetadas/ex1_grafico.jpg",
     "mapa": "img/pantanal/outras_areas_nao_vegetadas/ex1_mapa.jpg"
    }
   ]
  },
  "rio_lago_e_oceano|pantanal": {
   "descricao": "Rios, lagos, represas, reservatórios e outros corpos d'água.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 200,
   "exemplos": [
    {
     "lat": -16.5188,
     "lon": -55.01,
     "coords": "-16.5188, -55.0100",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A lâmina d'água varia entre seca e cheia. Rios estreitos (< 30 m) e lagos pequenos podem não aparecer. Água turva ou coberta por plantas aquáticas pode parecer solo ou vegetação."
     },
     "pagina": 199,
     "imagens": [
      {
       "src": "img/pantanal/rio_lago_e_oceano/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pantanal/rio_lago_e_oceano/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pantanal/rio_lago_e_oceano/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pantanal/rio_lago_e_oceano/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pantanal/rio_lago_e_oceano/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pantanal/rio_lago_e_oceano/ex1_grafico.jpg",
     "mapa": "img/pantanal/rio_lago_e_oceano/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_florestal|pampa": {
   "descricao": "Vegetação lenhosa com espécies arbóreas ou arbóreo-arbustivas, com predomínio de dossel contínuo. Inclui as tipologias florestais: ombrófila, estacional decidual e semi-decidual e parte das formações pioneiras.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 218,
   "exemplos": [
    {
     "lat": -31.9515,
     "lon": -53.1392,
     "coords": "-31.9515, -53.1392",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "O limite com a Formação Savânica é gradual (dossel mais aberto). Em florestas estacionais, a queda das folhas no período seco reduz o NDVI e pode lembrar savana. Florestas secundárias jovens, degradadas ou com corte seletivo são difíceis de separar da floresta madura na resolução de 10–30 m."
     },
     "pagina": 217,
     "imagens": [
      {
       "src": "img/pampa/formacao_florestal/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/formacao_florestal/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/formacao_florestal/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/formacao_florestal/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/formacao_florestal/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/formacao_florestal/ex1_grafico.jpg",
     "mapa": "img/pampa/formacao_florestal/ex1_mapa.jpg"
    }
   ]
  },
  "formacao_campestre|pampa": {
   "descricao": "Vegetação com predomínio de estrato herbáceo graminóide, com presença de dicotiledôneas herbáceas e subarbustivas. A composição botânica é influenciada pelos gradientes edáficos e topográficos e pelo manejo pastoril (pecuária). Ocorrem em solos profundos até solos rasos, incluindo terrenos rochosos (campos rupestres) e arenosos (campos arenosos ou psamófilos). Ocupam desde solos bem drenados (campos mésicos), até solos com maior teor de umidade (campos úmidos - com presença marcante de ciperáceas). Na maioria dos casos corresponde à vegetação nativa, mas podem estar presentes manchas de vegetação exótica invasora ou de uso forrageiro (pastagem plantada).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 220,
   "exemplos": [
    {
     "lat": -30.898,
     "lon": -55.9341,
     "coords": "-30.8980, -55.9341",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e senescência no período seco alteram a resposta espectral."
     },
     "pagina": 219,
     "imagens": [
      {
       "src": "img/pampa/formacao_campestre/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/formacao_campestre/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/formacao_campestre/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/formacao_campestre/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/formacao_campestre/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/formacao_campestre/ex1_grafico.jpg",
     "mapa": "img/pampa/formacao_campestre/ex1_mapa.jpg"
    }
   ]
  },
  "campo_alagado_e_area_pantanosa|pampa": {
   "descricao": "Áreas pantanosas, denominadas regionalmente de banhados. Vegetação tipicamente higrófila, com plantas aquáticas emergentes, submersas ou flutuantes. Ocupam planícies e depressões do terreno com solo encharcado e também as margens rasas de lagoas ou reservatórios de água.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 222,
   "exemplos": [
    {
     "lat": -31.98724,
     "lon": -52.43621,
     "coords": "-31.98724, -52.43621",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A inundação é sazonal: no período seco a área pode parecer Formação Campestre ou Pastagem e, na cheia, água. Comparar as imagens de seca e de chuva."
     },
     "pagina": 221,
     "imagens": [
      {
       "src": "img/pampa/campo_alagado_e_area_pantanosa/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/campo_alagado_e_area_pantanosa/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/campo_alagado_e_area_pantanosa/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/campo_alagado_e_area_pantanosa/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/campo_alagado_e_area_pantanosa/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/campo_alagado_e_area_pantanosa/ex1_grafico.jpg",
     "mapa": "img/pampa/campo_alagado_e_area_pantanosa/ex1_mapa.jpg"
    }
   ]
  },
  "afloramento_rochoso|pampa": {
   "descricao": "Rochas naturalmente expostas na superfície terrestre sem cobertura de solo, muitas vezes com presença parcial de vegetação rupícola.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 224,
   "exemplos": [
    {
     "lat": -30.830174,
     "lon": -53.323901,
     "coords": "-30.830174, -53.323901",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Afloramentos pequenos ou entremeados de vegetação ficam abaixo da resolução de 30 m e se misturam com Formação Campestre ou Savânica. A rocha exposta pode lembrar solo exposto ou Outras Áreas não Vegetadas."
     },
     "pagina": 223,
     "imagens": [
      {
       "src": "img/pampa/afloramento_rochoso/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/afloramento_rochoso/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/afloramento_rochoso/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/afloramento_rochoso/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/afloramento_rochoso/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/afloramento_rochoso/ex1_grafico.jpg",
     "mapa": "img/pampa/afloramento_rochoso/ex1_mapa.jpg"
    }
   ]
  },
  "restinga_herbacea_ou_arbustiva|pampa": {
   "descricao": "Vegetação herbácea que se estabelece sobre solos arenosos ou sobre dunas na zona costeira.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 232,
   "exemplos": [
    {
     "lat": -30.36912,
     "lon": -50.30705,
     "coords": "-30.36912, -50.30705",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Quando a cobertura é esparsa, confunde-se com Formação Campestre e com Praia, Duna e Areal. Depende do contexto costeiro (cordões arenosos)."
     },
     "pagina": 231,
     "imagens": [
      {
       "src": "img/pampa/restinga_herbacea/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/restinga_herbacea/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/restinga_herbacea/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/restinga_herbacea/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/restinga_herbacea/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/restinga_herbacea/ex1_grafico.jpg",
     "mapa": "img/pampa/restinga_herbacea/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_temporaria|pampa": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de curta ou média duração, geralmente com ciclo vegetativo inferior a um ano, que após a colheita necessitam de novo plantio para produzir.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 236,
   "exemplos": [
    {
     "lat": -29.982,
     "lon": -52.3215,
     "coords": "-29.9820, -52.3215",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 233,
     "imagens": [
      {
       "src": "img/pampa/cultivo_temporario/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/cultivo_temporario/ex1_grafico.jpg",
     "mapa": "img/pampa/cultivo_temporario/ex1_mapa.jpg"
    },
    {
     "lat": -31.3664,
     "lon": -52.0367,
     "coords": "-31.3664, -52.0367",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 234,
     "imagens": [
      {
       "src": "img/pampa/cultivo_temporario/ex2_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex2_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex2_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex2_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex2_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/cultivo_temporario/ex2_grafico.jpg",
     "mapa": "img/pampa/cultivo_temporario/ex2_mapa.jpg"
    },
    {
     "lat": -30.162357,
     "lon": -50.529081,
     "coords": "-30.162357, -50.529081",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita)."
     },
     "pagina": 235,
     "imagens": [
      {
       "src": "img/pampa/cultivo_temporario/ex3_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex3_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex3_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex3_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/cultivo_temporario/ex3_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/cultivo_temporario/ex3_grafico.jpg",
     "mapa": "img/pampa/cultivo_temporario/ex3_mapa.jpg"
    }
   ]
  },
  "arroz|pampa": {
   "descricao": "Áreas cultivadas com cultura de arroz, exclusivamente sob sistema de irrigação. Este mapa é o mesmo apresentado no módulo irrigação na classe \"Arroz Irrigado\".",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 248,
   "exemplos": [
    {
     "lat": -33.160594,
     "lon": -53.264294,
     "coords": "-33.160594, -53.264294",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "O arroz irrigado por inundação pode parecer água ou Campo Alagado no início do ciclo. O arroz de sequeiro é difícil de separar das outras lavouras temporárias sem informação de campo."
     },
     "pagina": 247,
     "imagens": [
      {
       "src": "img/pampa/arroz/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/arroz/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/arroz/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/arroz/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/arroz/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/arroz/ex1_grafico.jpg",
     "mapa": "img/pampa/arroz/ex1_mapa.jpg"
    }
   ]
  },
  "lavoura_perene|pampa": {
   "descricao": "Áreas ocupadas com cultivos agrícolas de ciclo vegetativo longo (mais de um ano), que permitem colheitas sucessivas, sem necessidade de novo plantio.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 238,
   "exemplos": [
    {
     "lat": -30.8093,
     "lon": -55.3549,
     "coords": "-30.8093, -55.3549",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Pode ser confundida com Silvicultura e com Formação Savânica ou Florestal (pomares adultos, café sombreado, dendê), e com Pastagem nas fases iniciais. As linhas de plantio geralmente só aparecem em imagens de alta resolução."
     },
     "pagina": 237,
     "imagens": [
      {
       "src": "img/pampa/cultivo_perene/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/cultivo_perene/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/cultivo_perene/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/cultivo_perene/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/cultivo_perene/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/cultivo_perene/ex1_grafico.jpg",
     "mapa": "img/pampa/cultivo_perene/ex1_mapa.jpg"
    }
   ]
  },
  "silvicultura|pampa": {
   "descricao": "Espécies arbóreas plantadas para fins comerciais (ex. pinus, eucalipto, araucária).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 240,
   "exemplos": [
    {
     "lat": -30.175486,
     "lon": -52.077389,
     "coords": "-30.175486, -52.077389",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota)."
     },
     "pagina": 239,
     "imagens": [
      {
       "src": "img/pampa/silvicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/silvicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/silvicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/silvicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/silvicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/silvicultura/ex1_grafico.jpg",
     "mapa": "img/pampa/silvicultura/ex1_mapa.jpg"
    }
   ]
  },
  "praia_duna_e_areal|pampa": {
   "descricao": "Cordões arenosos, de coloração branco brilhante, onde não há o predomínio de vegetação de nenhum tipo.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 226,
   "exemplos": [
    {
     "lat": -30.37574,
     "lon": -50.28025,
     "coords": "-30.37574, -50.28025",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, Apicum e Restinga Herbácea esparsa. O areal (Pampa) pode lembrar o solo exposto de lavouras."
     },
     "pagina": 225,
     "imagens": [
      {
       "src": "img/pampa/praia_duna_e_areial/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/praia_duna_e_areial/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/praia_duna_e_areial/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/praia_duna_e_areial/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/praia_duna_e_areial/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/praia_duna_e_areial/ex1_grafico.jpg",
     "mapa": "img/pampa/praia_duna_e_areial/ex1_mapa.jpg"
    }
   ]
  },
  "area_urbanizada|pampa": {
   "descricao": "Áreas com significativa densidade de edificações e vias, incluindo infraestrutura e áreas livres de construções.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 228,
   "exemplos": [
    {
     "lat": -31.7722,
     "lon": -52.3371,
     "coords": "-31.7722, -52.3371",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Rugosa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Bairros muito arborizados, loteamentos não ocupados e pequenos núcleos rurais são difíceis de delimitar. Telhados e solo exposto podem ser confundidos com Mineração ou Outras Áreas não Vegetadas."
     },
     "pagina": 227,
     "imagens": [
      {
       "src": "img/pampa/area_urbana/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/area_urbana/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/area_urbana/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/area_urbana/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/area_urbana/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/area_urbana/ex1_grafico.jpg",
     "mapa": "img/pampa/area_urbana/ex1_mapa.jpg"
    }
   ]
  },
  "mineracao|pampa": {
   "descricao": "Áreas referentes a extração mineral superficial, de porte industrial ou garimpeiro, havendo clara exposição do solo por ação antrópica. Não são passíveis de detecção nenhum tipo de mineração subterrânea ou subaquática.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 242,
   "exemplos": [
    {
     "lat": -31.586689,
     "lon": -53.724639,
     "coords": "-31.586689, -53.724639",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Heterogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Confunde-se com Outras Áreas não Vegetadas, solo exposto e áreas urbanas em expansão. Pela legenda, a mineração subterrânea ou subaquática não é detectável."
     },
     "pagina": 241,
     "imagens": [
      {
       "src": "img/pampa/mineracao/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/mineracao/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/mineracao/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/mineracao/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/mineracao/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/mineracao/ex1_grafico.jpg",
     "mapa": "img/pampa/mineracao/ex1_mapa.jpg"
    }
   ]
  },
  "outras_areas_nao_vegetadas|pampa": {
   "descricao": "Classe mista que contempla áreas naturais e áreas antropizadas. As áreas naturais incluem superfícies arenosas como as praias fluviais e os areais. As áreas antropizadas incluem áreas de solo exposto e superfícies não permeáveis (infra-estrutura, expansão urbana ou mineração).",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 244,
   "exemplos": [
    {
     "lat": -29.8389,
     "lon": -55.9015,
     "coords": "-29.8389, -55.9015",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "É uma classe residual: reúne superfícies não vegetadas que não se encaixam nas demais. Por isso, confunde-se com Mineração, Área Urbanizada, Praia, Duna e Areal, Afloramento Rochoso e lavouras em solo exposto."
     },
     "pagina": 243,
     "imagens": [
      {
       "src": "img/pampa/outras_areas_nao_vegetadas/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/outras_areas_nao_vegetadas/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/outras_areas_nao_vegetadas/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/outras_areas_nao_vegetadas/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/outras_areas_nao_vegetadas/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/outras_areas_nao_vegetadas/ex1_grafico.jpg",
     "mapa": "img/pampa/outras_areas_nao_vegetadas/ex1_mapa.jpg"
    }
   ]
  },
  "rio_lago_e_oceano|pampa": {
   "descricao": "Rios, lagos, represas, reservatórios e outros corpos d'água.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 230,
   "exemplos": [
    {
     "lat": -29.7683,
     "lon": -53.4475,
     "coords": "-29.7683, -53.4475",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "A lâmina d'água varia entre seca e cheia. Rios estreitos (< 30 m) e lagos pequenos podem não aparecer. Água turva ou coberta por plantas aquáticas pode parecer solo ou vegetação."
     },
     "pagina": 229,
     "imagens": [
      {
       "src": "img/pampa/rio_lago_e_oceano/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/rio_lago_e_oceano/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/rio_lago_e_oceano/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/rio_lago_e_oceano/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/rio_lago_e_oceano/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/rio_lago_e_oceano/ex1_grafico.jpg",
     "mapa": "img/pampa/rio_lago_e_oceano/ex1_mapa.jpg"
    }
   ]
  },
  "aquicultura|pampa": {
   "descricao": "Área referente a lagos artificiais, onde predominam atividades aquícolas e/ou de salicultura.",
   "fonte": "legenda",
   "observacoes": "",
   "pagina": 246,
   "exemplos": [
    {
     "lat": -29.922506,
     "lon": -50.247384,
     "coords": "-29.922506, -50.247384",
     "falsa_cor": "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)",
     "tonalidade": "",
     "textura": "Lisa e Homogênea",
     "observacoes": "",
     "limitacao": {
      "geral": "Tanques escavados parecem pequenos reservatórios e açudes (Rio, Lago e Oceano) e salinas. Tanques pequenos ficam abaixo da resolução de 30 m. O formato retangular e o agrupamento dos tanques ajudam."
     },
     "pagina": 245,
     "imagens": [
      {
       "src": "img/pampa/aquicultura/ex1_landsat_seco.jpg",
       "rotulo": "Landsat – seco"
      },
      {
       "src": "img/pampa/aquicultura/ex1_landsat_chuvoso.jpg",
       "rotulo": "Landsat – chuvoso"
      },
      {
       "src": "img/pampa/aquicultura/ex1_sentinel_seco.jpg",
       "rotulo": "Sentinel-2 – seco"
      },
      {
       "src": "img/pampa/aquicultura/ex1_sentinel_chuvoso.jpg",
       "rotulo": "Sentinel-2 – chuvoso"
      },
      {
       "src": "img/pampa/aquicultura/ex1_google_earth.jpg",
       "rotulo": "Google Earth"
      }
     ],
     "grafico": "img/pampa/aquicultura/ex1_grafico.jpg",
     "mapa": "img/pampa/aquicultura/ex1_mapa.jpg"
    }
   ]
  }
 }
};
