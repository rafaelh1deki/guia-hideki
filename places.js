// ============================================================
//  SEUS LUGARES — extraídos automaticamente dos seus reels
// ------------------------------------------------------------
//  Campos:
//   name    -> nome que aparece no pin
//   address -> rua/bairro (usado para achar o ponto no mapa)
//   city    -> cidade (usado no geocoding e nos contadores)
//   reel    -> código do reel no Instagram (o que vem depois de /reel/)
//   note    -> textinho curto que aparece no popup
//   lat,lng -> OPCIONAL. Se preencher, o mapa usa direto e não
//              precisa geocodificar. (Deixe vazio para o site
//              descobrir sozinho a partir do endereço.)
//
//  Para adicionar um lugar novo: copie um bloco { ... },
//  cole no final (antes do ] ) e troque os dados.
// ============================================================

const PLACES = [
  { name: "Luigi Panificadora", address: "R. Curupis, 1345 - Santa Quitéria", city: "Curitiba", reel: "DZ5vOA9tnHU", note: "temperinho caseiro que vale a visita" },
  { name: "Bistrô Armazém", address: "R. Júlio Eduardo Gineste, 164 - Santa Quitéria", city: "Curitiba", reel: "DZ5IiN_NJxf", note: "comida caseira pra um dia de chuva" },
  { name: "Yoribogo Korean Food", address: "Av. Vicente Machado, 520 - Centro", city: "Curitiba", reel: "DZ7mEnCNg7m", note: "coreano que vale mais que propaganda" },
  { name: "Restaurante Jagannatha", address: "R. Curupaitis, 1336 - Santa Quitéria", city: "Curitiba", reel: "DaEHwsCtDXi", note: "indiano pra almoçar com calma" },
  { name: "Casa Luce", address: "R. Francisco Alves Guimarães, 369 - Cristo Rei", city: "Curitiba", reel: "DXFD63GDQnK", note: "o café mais aconchegante de curitiba" },
  { name: "Parque Barigui", address: "Parque Barigui", city: "Curitiba", reel: "DXcro18DYUM", note: "ótimo pra passear de bike" },
  { name: "Restaurante Maru Centro", address: "Alameda Dr. Carlos de Carvalho, 74 - Centro", city: "Curitiba", reel: "DXcO_eUDasb", note: "sushizinho no almoço" },
  { name: "Grão Casa de Pães", address: "R. Joaquim Caetano da Silva, 1169 - Santa Quitéria", city: "Curitiba", reel: "DXfO6qyDVYe", note: "cafezinho no fim de tarde" },
  { name: "All Natural", address: "ParkShopping Barigui", city: "Curitiba", reel: "DXozuWPjVzv", note: "poke num dia de calor" },
  { name: "Restaurante Imperial Curityba", address: "R. José Loureiro, 111 - Centro", city: "Curitiba", reel: "DXsSS4QjRoz", note: "parmegiana bem queijuda" },
  { name: "Kapital Grill", address: "R. Emiliano Perneta, 342 - Centro", city: "Curitiba", reel: "DXsP_gZjdC5", note: "carninha assada" },
  { name: "Yuky Produtos Orientais", address: "R. Castro, 22 - Água Verde", city: "Curitiba", reel: "DXxeYgeNysY", note: "soju mais em conta" },
  { name: "Sugiro Sushi", address: "Praça São Paulo da Cruz, 50 - Juvevê", city: "Curitiba", reel: "DYA_Dpetvq0", note: "rodízio de sushi gostoso" },
  { name: "Pantucci Panificadora", address: "R. Prof. Ulisses Vieira, 146 - Vila Izabel", city: "Curitiba", reel: "DYNatkWNj2n", note: "café de padaria de bairro" },
  { name: "Master Burger", address: "Av. Pres. Arthur da Silva Bernardes, 833 - Portão", city: "Curitiba", reel: "DYPORPntZ6r", note: "um dos melhores hambúrgueres de curitiba" },
  { name: "T.T Burguer", address: "R. Alferes Ângelo Sampaio, 1525 - Batel", city: "Curitiba", reel: "DYX6ViFNSwA", note: "burger aprovado no tour" },
  { name: "Armazém Santa Quitéria", address: "R. Prof. Ulisses Vieira, 2104 - Vila Izabel", city: "Curitiba", reel: "DYpo_huN5ED", note: "comida caseira" },
  { name: "Osteria Lupita", address: "Alameda Dr. Carlos de Carvalho, 15 - Centro", city: "Curitiba", reel: "DYxiV0BNFdF", note: "italiano do tour" },
  { name: "Surf Center", address: "R. Delfina Braga Visinoni, 401 - Orleans", city: "Curitiba", reel: "DY5QP0UtUUo", note: "primeira piscina de ondas indoor aquecida" },
  { name: "Galpão Ventania", address: "R. Francisco Dallalibera, 1539 - Santa Felicidade", city: "Curitiba", reel: "DZCyGMCtm1q", note: "uma das melhores picanhas" },
  { name: "Café Cultura Batel", address: "R. Cel. Dulcídio, 558 - Batel", city: "Curitiba", reel: "DZQkPXBNdOF", note: "cafeteria do tour" },
  { name: "Generoso Dogão", address: "R. Carlos Klemtz, 814 - Fazendinha", city: "Curitiba", reel: "DZVNVwlNJ1Y", note: "pastel monstrão" },
  { name: "Tempero & Fogão", address: "R. Visconde de Nácar, 1523 - Centro", city: "Curitiba", reel: "DZdbDWfNzSX", note: "almoço no centro" },
  { name: "Abesan to go", address: "R. Prof. João Doetzer, 883 - Jardim das Américas", city: "Curitiba", reel: "DZnPo5jts2D", note: "onigiri todos os dias" },
  { name: "100 Beer Garden Pizza", address: "R. Konrad Adenauer, 370 - Tarumã", city: "Curitiba", reel: "DZutVU7g03J", note: "muita variedade de chopp" },
  { name: "Shawarma do Centro", address: "R. Francisco Torres, 471 - Centro", city: "Curitiba", reel: "DNQiVSbNSej", note: "o melhor shawarma de curitiba" },
  { name: "Jardim Dourado", address: "R. Galvão Bueno, 554 - Liberdade", city: "São Paulo", reel: "DRxJQ7PAMnw", note: "comida exótica na liberdade" },
  { name: "Sijan - Feirinha Coreana", address: "R. dos Estudantes, 57 - Liberdade", city: "São Paulo", reel: "DYA_tZDN9WI", note: "corn dog diferente" },
  { name: "Akiba Station SP", address: "Av. da Liberdade, 363 - Liberdade", city: "São Paulo", reel: "DYDN9d5tZBB", note: "lugar novo de tcg na liberdade" },
  { name: "Sa Gun Ja", address: "R. Prof. Santiago Dantas, 192 - Vila Tramontano", city: "São Paulo", reel: "DYXV4tXNCfH", note: "um dos melhores coreanos que comi" },
  { name: "Graal Petropen", address: "Rod. Régis Bittencourt BR-116, Km 461", city: "Pariquera-Açu", reel: "DXuOI7EDci2", note: "parada clássica na estrada" }
];
