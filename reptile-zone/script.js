const reptiles = [
  {"sci":"Python regius","common":"Ball python","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Python reticulatus","common":"Reticulated python","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Python bivittatus","common":"Burmese python","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Morelia viridis","common":"Green tree python","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Morelia spilota","common":"Carpet python","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Morelia bredli","common":"Centralian carpet python","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Antaresia childreni","common":"Children’s python","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Antaresia maculosa","common":"Spotted python","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Liasis olivaceus","common":"Olive python","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Aspidites melanocephalus","common":"Black-headed python","zone":"Zone 1","uvi":"0.0–0.7"},

  {"sci":"Boa constrictor","common":"Boa constrictor","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Boa imperator","common":"Central American boa","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Epicrates cenchria","common":"Rainbow boa","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Corallus caninus","common":"Emerald tree boa","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Corallus hortulanus","common":"Amazon tree boa","zone":"Zone 1–2","uvi":"0.0–1.0"},

  {"sci":"Pantherophis guttatus","common":"Corn snake","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Pantherophis obsoletus","common":"Black rat snake","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Lampropeltis getula","common":"Common kingsnake","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Lampropeltis triangulum","common":"Milk snake","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Pituophis catenifer","common":"Gopher snake","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Thamnophis sirtalis","common":"Common garter snake","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Heterodon nasicus","common":"Western hognose snake","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Drymarchon couperi","common":"Eastern indigo snake","zone":"Zone 2–3","uvi":"0.7–2.6"},

  {"sci":"Coelognathus radiatus","common":"Radiated rat snake","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Elaphe schrenckii","common":"Amur rat snake","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Orthriophis taeniurus","common":"Beauty rat snake","zone":"Zone 2","uvi":"0.7–1.0"},

  {"sci":"Ophiophagus hannah","common":"King cobra","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Naja naja","common":"Indian cobra","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Naja atra","common":"Chinese cobra","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Dendroaspis polylepis","common":"Black mamba","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Bungarus candidus","common":"Malayan krait","zone":"Zone 1–2","uvi":"0.0–1.0"},

  {"sci":"Bitis arietans","common":"Puff adder","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Vipera berus","common":"European adder","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Crotalus atrox","common":"Western diamondback rattlesnake","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Bothrops asper","common":"Fer-de-lance","zone":"Zone 2","uvi":"0.7–1.0"},

  {"sci":"Eunectes murinus","common":"Green anaconda","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Eunectes notaeus","common":"Yellow anaconda","zone":"Zone 1–2","uvi":"0.0–1.0"},

  {"sci":"Ahaetulla prasina","common":"Asian vine snake","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Boiga dendrophila","common":"Mangrove snake","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Chrysopelea paradisi","common":"Paradise flying snake","zone":"Zone 2","uvi":"0.7–1.0"},

  /* ===== LARGE LIZARDS & DIURNAL SPECIES ===== */
  {"sci":"Varanus komodoensis","common":"Komodo dragon","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Varanus salvator","common":"Asian water monitor","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Varanus niloticus","common":"Nile monitor","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Varanus exanthematicus","common":"Savannah monitor","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Varanus acanthurus","common":"Ackie monitor","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Varanus varius","common":"Lace monitor","zone":"Zone 3–4","uvi":"1.0–3.5"},
  {"sci":"Varanus giganteus","common":"Perentie","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Varanus salvadorii","common":"Crocodile monitor","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Varanus prasinus","common":"Emerald tree monitor","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Varanus rudicollis","common":"Rough-necked monitor","zone":"Zone 2–3","uvi":"0.7–2.6"},

  {"sci":"Tupinambis merianae","common":"Argentine black and white tegu","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Salvator rufescens","common":"Red tegu","zone":"Zone 3","uvi":"1.0–2.6"},

  {"sci":"Iguana iguana","common":"Green iguana","zone":"Zone 3–4","uvi":"1.0–3.5"},
  {"sci":"Iguana delicatissima","common":"Lesser Antillean iguana","zone":"Zone 3–4","uvi":"1.0–3.5"},
  {"sci":"Ctenosaura similis","common":"Black spiny-tailed iguana","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Cyclura cornuta","common":"Rhinoceros iguana","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Cyclura nubila","common":"Cuban rock iguana","zone":"Zone 4","uvi":"2.6–3.5+"},

  {"sci":"Pogona vitticeps","common":"Central bearded dragon","zone":"Zone 3–4","uvi":"1.0–3.5"},
  {"sci":"Pogona barta","common":"Eastern bearded dragon","zone":"Zone 3–4","uvi":"1.0–3.5"},
  {"sci":"Chlamydosaurus kingii","common":"Frilled-neck lizard","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Intellagama lesueurii","common":"Eastern water dragon","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Physignathus cocincinus","common":"Chinese water dragon","zone":"Zone 2–3","uvi":"0.7–2.6"},

  {"sci":"Uromastyx aegyptia","common":"Egyptian uromastyx","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Uromastyx ornata","common":"Ornate uromastyx","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Uromastyx geyri","common":"Mali uromastyx","zone":"Zone 4","uvi":"2.6–3.5+"},

  {"sci":"Heloderma suspectum","common":"Gila monster","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Heloderma horridum","common":"Mexican beaded lizard","zone":"Zone 2–3","uvi":"0.7–2.6"},

  /* ===== GECKOS, SKINKS & CHAMELEONS ===== */

  /* --- GECKOS --- */
  {"sci":"Eublepharis macularius","common":"Leopard gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Eublepharis angramainyu","common":"Iranian giant leopard gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Correlophus ciliatus","common":"Crested gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Rhacodactylus leachianus","common":"Giant New Caledonian gecko","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Correlophus auriculatus","common":"Gargoyle gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Phelsuma madagascariensis","common":"Madagascar giant day gecko","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Phelsuma laticauda","common":"Gold dust day gecko","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Phelsuma grandis","common":"Giant day gecko","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Gekko gecko","common":"Tokay gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Hemidactylus frenatus","common":"Common house gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Lepidodactylus lugubris","common":"Mourning gecko","zone":"Zone 1","uvi":"0.0–0.7"},

  /* --- SKINKS --- */
  {"sci":"Tiliqua scincoides","common":"Eastern blue-tongued skink","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Tiliqua gigas","common":"Indonesian blue-tongued skink","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Tiliqua rugosa","common":"Shingleback skink","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Egernia stokesii","common":"Gidgee skink","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Egernia kingii","common":"King’s skink","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Cyclodomorphus gerrardii","common":"Pink-tongued skink","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Corucia zebrata","common":"Solomon Islands prehensile-tailed skink","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Plestiodon fasciatus","common":"Five-lined skink","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Trachylepis quinquetaeniata","common":"Five-lined mabuya","zone":"Zone 3","uvi":"1.0–2.6"},

  /* --- CHAMELEONS --- */
  {"sci":"Chamaeleo calyptratus","common":"Veiled chameleon","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Furcifer pardalis","common":"Panther chameleon","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Furcifer oustaleti","common":"Oustalet’s chameleon","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Calumma parsonii","common":"Parson’s chameleon","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Chamaeleo melleri","common":"Meller’s chameleon","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Trioceros jacksonii","common":"Jackson’s chameleon","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Trioceros deremensis","common":"Usambara giant chameleon","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Brookesia superciliaris","common":"Greater leaf chameleon","zone":"Zone 1–2","uvi":"0.0–1.0"},

  /* ===== TORTOISES & TURTLES ===== */

  /* --- TORTOISES --- */
  {"sci":"Chelonoidis nigra","common":"Galápagos giant tortoise","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Chelonoidis carbonarius","common":"Red-footed tortoise","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Chelonoidis denticulata","common":"Yellow-footed tortoise","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Centrochelys sulcata","common":"African spurred tortoise","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Stigmochelys pardalis","common":"Leopard tortoise","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Aldabrachelys gigantea","common":"Aldabra giant tortoise","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Testudo graeca","common":"Greek tortoise","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Testudo hermanni","common":"Hermann’s tortoise","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Testudo marginata","common":"Marginated tortoise","zone":"Zone 4","uvi":"2.6–3.5+"},
  {"sci":"Geochelone elegans","common":"Indian star tortoise","zone":"Zone 3–4","uvi":"1.0–3.5"},

  /* --- FRESHWATER & SEMI-AQUATIC TURTLES --- */
  {"sci":"Trachemys scripta elegans","common":"Red-eared slider","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Trachemys scripta scripta","common":"Yellow-bellied slider","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Pseudemys concinna","common":"River cooter","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Graptemys pseudogeographica","common":"False map turtle","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Chrysemys picta","common":"Painted turtle","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Emys orbicularis","common":"European pond turtle","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Terrapene carolina","common":"Eastern box turtle","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Terrapene ornata","common":"Ornate box turtle","zone":"Zone 3","uvi":"1.0–2.6"},

  /* --- ASIAN & TROPICAL TURTLES --- */
  {"sci":"Cuora amboinensis","common":"Southeast Asian box turtle","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Heosemys spinosa","common":"Spiny turtle","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Geoemyda spengleri","common":"Vietnamese leaf turtle","zone":"Zone 1–2","uvi":"0.0–1.0"},
  {"sci":"Cyclemys dentata","common":"Asian leaf turtle","zone":"Zone 2","uvi":"0.7–1.0"},

  /* --- SOFTSHELL & SPECIALIST TURTLES --- */
  {"sci":"Pelodiscus sinensis","common":"Chinese softshell turtle","zone":"Zone 2","uvi":"0.7–1.0"},
  {"sci":"Apalone ferox","common":"Florida softshell turtle","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Carettochelys insculpta","common":"Pig-nosed turtle","zone":"Zone 2","uvi":"0.7–1.0"},

  /* ===== CROCODILIANS ===== */
  {"sci":"Crocodylus porosus","common":"Saltwater crocodile","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Crocodylus niloticus","common":"Nile crocodile","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Crocodylus acutus","common":"American crocodile","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Crocodylus palustris","common":"Mugger crocodile","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Alligator mississippiensis","common":"American alligator","zone":"Zone 3","uvi":"1.0–2.6"},

  /* ===== SNAKES (ADDITIONAL) ===== */
  {"sci":"Python bivittatus","common":"Burmese python","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Python molurus","common":"Indian python","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Malayopython reticulatus","common":"Reticulated python","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Malayopython timoriensis","common":"Timor python","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Morelia spilota","common":"Carpet python","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Morelia viridis","common":"Green tree python","zone":"Zone 1–2","uvi":"0.0–1.4"},
  {"sci":"Antaresia maculosa","common":"Spotted python","zone":"Zone 2","uvi":"0.7–1.4"},

  {"sci":"Boa constrictor","common":"Common boa","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Eunectes murinus","common":"Green anaconda","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Epicrates cenchria","common":"Rainbow boa","zone":"Zone 2","uvi":"0.7–1.4"},

  {"sci":"Pantherophis guttatus","common":"Corn snake","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Pantherophis obsoletus","common":"Rat snake","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Pituophis catenifer","common":"Gopher snake","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Lampropeltis getula","common":"California kingsnake","zone":"Zone 2","uvi":"0.7–1.4"},

  {"sci":"Naja naja","common":"Indian cobra","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Naja nigricollis","common":"Spitting cobra","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Ophiophagus hannah","common":"King cobra","zone":"Zone 3","uvi":"1.0–2.6"},

  {"sci":"Crotalus atrox","common":"Western diamondback rattlesnake","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Bothrops asper","common":"Fer-de-lance","zone":"Zone 2–3","uvi":"0.7–2.6"},

  /* ===== MONITOR LIZARDS (VARANUS) ===== */
  {"sci":"Varanus komodoensis","common":"Komodo dragon","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Varanus salvator","common":"Asian water monitor","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Varanus niloticus","common":"Nile monitor","zone":"Zone 3–4","uvi":"1.0–7.4"},
  {"sci":"Varanus exanthematicus","common":"Savannah monitor","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Varanus albigularis","common":"White-throated monitor","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Varanus rosenbergi","common":"Heath monitor","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Varanus varius","common":"Lace monitor","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Varanus giganteus","common":"Perentie","zone":"Zone 4","uvi":"2.9–7.4"},

  {"sci":"Varanus prasinus","common":"Green tree monitor","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Varanus macraei","common":"Blue tree monitor","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Varanus beccarii","common":"Black tree monitor","zone":"Zone 2–3","uvi":"0.7–2.6"},

  {"sci":"Varanus indicus","common":"Mangrove monitor","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Varanus dumerilii","common":"Dumeril’s monitor","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Varanus rudicollis","common":"Rough-necked monitor","zone":"Zone 2","uvi":"0.7–1.4"},

  {"sci":"Varanus acanthurus","common":"Spiny-tailed monitor","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Varanus storri","common":"Storr’s monitor","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Varanus tristis","common":"Black-headed monitor","zone":"Zone 3–4","uvi":"1.0–7.4"},

  /* ===== IGUANAS & AGAMIDS ===== */
  {"sci":"Iguana iguana","common":"Green iguana","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Cyclura nubila","common":"Cuban rock iguana","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Cyclura lewisi","common":"Grand Cayman blue iguana","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Dipsosaurus dorsalis","common":"Desert iguana","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Ctenosaura similis","common":"Black spiny-tailed iguana","zone":"Zone 4","uvi":"2.9–7.4"},

  {"sci":"Pogona vitticeps","common":"Central bearded dragon","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Pogona henrylawsoni","common":"Rankin’s dragon","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Physignathus cocincinus","common":"Chinese water dragon","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Intellagama lesueurii","common":"Eastern water dragon","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Hydrosaurus amboinensis","common":"Sailfin dragon","zone":"Zone 3","uvi":"1.0–2.6"},

  {"sci":"Uromastyx aegyptia","common":"Egyptian uromastyx","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Uromastyx geyri","common":"Mali uromastyx","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Uromastyx ornata","common":"Ornate uromastyx","zone":"Zone 4","uvi":"2.9–7.4"},

  {"sci":"Draco volans","common":"Flying dragon","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Calotes versicolor","common":"Oriental garden lizard","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Laudakia stellio","common":"Starred agama","zone":"Zone 4","uvi":"2.9–7.4"},
  {"sci":"Agama agama","common":"Rainbow agama","zone":"Zone 3–4","uvi":"1.0–7.4"},

  /* ===== FOSSORIAL & LOW-UV REPTILES ===== */
  {"sci":"Amphisbaena alba","common":"Giant worm lizard","zone":"Zone 0–1","uvi":"0.0–0.7"},
  {"sci":"Amphisbaena fuliginosa","common":"Speckled worm lizard","zone":"Zone 0–1","uvi":"0.0–0.7"},
  {"sci":"Blanus cinereus","common":"Iberian worm lizard","zone":"Zone 0–1","uvi":"0.0–0.7"},

  {"sci":"Typhlops vermicularis","common":"European blind snake","zone":"Zone 0","uvi":"0.0"},
  {"sci":"Ramphotyphlops braminus","common":"Brahminy blind snake","zone":"Zone 0","uvi":"0.0"},
  {"sci":"Indotyphlops schlegelii","common":"Schlegel’s blind snake","zone":"Zone 0","uvi":"0.0"},

  {"sci":"Acontias meleagris","common":"Cape legless skink","zone":"Zone 0–1","uvi":"0.0–0.7"},
  {"sci":"Scelotes bipes","common":"Cape sand skink","zone":"Zone 0–1","uvi":"0.0–0.7"},
  {"sci":"Feylinia currori","common":"Curror’s snake-eyed skink","zone":"Zone 0–1","uvi":"0.0–0.7"},

  {"sci":"Dibamus novaeguineae","common":"New Guinea blind skink","zone":"Zone 0–1","uvi":"0.0–0.7"},
  {"sci":"Dibamus taylori","common":"Taylor’s blind skink","zone":"Zone 0–1","uvi":"0.0–0.7"},

  /* ===== GECKOS (EXPANDED) ===== */
  {"sci":"Eublepharis macularius","common":"Leopard gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Hemitheconyx caudicinctus","common":"African fat-tailed gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Gekko gecko","common":"Tokay gecko","zone":"Zone 1–2","uvi":"0.0–1.4"},
  {"sci":"Paroedura picta","common":"Madagascar ground gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Cyrtodactylus consobrinus","common":"Bent-toed gecko","zone":"Zone 1","uvi":"0.0–0.7"},
  {"sci":"Phelsuma grandis","common":"Giant day gecko","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Phelsuma laticauda","common":"Gold dust day gecko","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Phelsuma klemmeri","common":"Neon day gecko","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Rhacodactylus ciliatus","common":"Crested gecko","zone":"Zone 1–2","uvi":"0.0–1.4"},
  {"sci":"Rhacodactylus leachianus","common":"Leachianus gecko","zone":"Zone 1–2","uvi":"0.0–1.4"},

  /* ===== SKINKS (EXPANDED) ===== */
  {"sci":"Tiliqua scincoides","common":"Eastern blue-tongued skink","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Tiliqua rugosa","common":"Shingleback skink","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Tiliqua gigas","common":"Indonesian blue-tongued skink","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Egernia stokesii","common":"Gidgee skink","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Corucia zebrata","common":"Solomon Islands skink","zone":"Zone 2","uvi":"0.7–1.4"},
  {"sci":"Plestiodon fasciatus","common":"Five-lined skink","zone":"Zone 2–3","uvi":"0.7–2.6"},
  {"sci":"Trachylepis quinquetaeniata","common":"African five-lined skink","zone":"Zone 3","uvi":"1.0–2.6"},
  {"sci":"Eumeces schneideri","common":"Schneider’s skink","zone":"Zone 3","uvi":"1.0–2.6"}
];


function searchSpecies() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultBox = document.getElementById("resultBox");
    const notFound = document.getElementById("notFound");

    const found = reptiles.find(r =>
        r.sci.toLowerCase().includes(input) ||
        r.common.toLowerCase().includes(input)
    );

    if (found) {
        document.getElementById("sciName").textContent = found.sci;
        document.getElementById("commonName").textContent = found.common;
        document.getElementById("zone").textContent = found.zone;
        document.getElementById("uvi").textContent = found.uvi;

        // Apply zone-based color to the highlight result item
        const zoneItem = document.querySelector(".result-item.highlight");
        zoneItem.classList.remove("result-zone-1", "result-zone-2", "result-zone-3", "result-zone-4");
        const zoneMatch = found.zone.match(/Zone (\d)/);
        if (zoneMatch) {
            zoneItem.classList.add("result-zone-" + zoneMatch[1]);
        }

        resultBox.classList.add("show");
        notFound.classList.remove("show");
    } else {
        resultBox.classList.remove("show");
        if (input.length > 2) {
            notFound.classList.add("show");
        } else {
            notFound.classList.remove("show");
        }
    }
}
