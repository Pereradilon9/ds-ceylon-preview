/* =========================================================
   DS Ceylon — language & currency layer
   - Currency rates below are SAMPLE values (USD -> X) for the design
     prototype. Replace RATES_SOURCE with a live FX API later
     (e.g. fetch once a day and cache), see loadLiveRates().
   - Bookings are always quoted in USD; converted amounts are shown
     as approximations ("≈").
   - UI copy is translated; long itinerary text stays in English
     until professional translations are added.
   ========================================================= */
window.DSC_I18N = (function(){
"use strict";

const CURRENCIES = {
  USD:{n:"US dollar",r:1},
  EUR:{n:"Euro",r:0.92},
  GBP:{n:"British pound",r:0.78},
  AUD:{n:"Australian dollar",r:1.52},
  CAD:{n:"Canadian dollar",r:1.38},
  CHF:{n:"Swiss franc",r:0.88},
  INR:{n:"Indian rupee",r:84.5},
  CNY:{n:"Chinese yuan",r:7.2},
  JPY:{n:"Japanese yen",r:150},
  RUB:{n:"Russian rouble",r:92},
  SGD:{n:"Singapore dollar",r:1.34},
  AED:{n:"UAE dirham",r:3.6725},
  LKR:{n:"Sri Lankan rupee",r:300}
};
const RATES_SOURCE = "Sample rates for design preview — not live";

const EURO = "AT BE CY DE EE ES FI FR GR HR IE IT LT LU LV MT NL PT SI SK".split(" ");
const REGION_CUR = {GB:"GBP",AU:"AUD",CA:"CAD",CH:"CHF",LI:"CHF",IN:"INR",CN:"CNY",HK:"USD",JP:"JPY",RU:"RUB",SG:"SGD",AE:"AED",LK:"LKR",US:"USD"};
EURO.forEach(c=>REGION_CUR[c]="EUR");
/* timezone -> region, used when the browser language has no region (e.g. "de") */
const TZ_REGION = {"Europe/London":"GB","Europe/Dublin":"IE","Europe/Berlin":"DE","Europe/Paris":"FR","Europe/Madrid":"ES","Europe/Rome":"IT","Europe/Amsterdam":"NL","Europe/Brussels":"BE","Europe/Vienna":"AT","Europe/Lisbon":"PT","Europe/Helsinki":"FI","Europe/Athens":"GR","Europe/Zurich":"CH","Europe/Moscow":"RU","Asia/Kolkata":"IN","Asia/Calcutta":"IN","Asia/Shanghai":"CN","Asia/Tokyo":"JP","Asia/Singapore":"SG","Asia/Dubai":"AE","Asia/Colombo":"LK","Australia/Sydney":"AU","Australia/Melbourne":"AU","Australia/Perth":"AU","Australia/Brisbane":"AU","America/Toronto":"CA","America/Vancouver":"CA","America/New_York":"US","America/Chicago":"US","America/Denver":"US","America/Los_Angeles":"US"};

const LANGS = {
  en:{n:"English",loc:"en-GB"},
  de:{n:"Deutsch",loc:"de-DE"},
  fr:{n:"Français",loc:"fr-FR"},
  es:{n:"Español",loc:"es-ES"},
  ru:{n:"Русский",loc:"ru-RU"},
  zh:{n:"中文",loc:"zh-CN"},
  hi:{n:"हिन्दी",loc:"hi-IN"}
};

const T = {
en:{
 "hud":"Day {d} of 14","dayn":"Day {d}",
 "nav.journeys":"Journeys","nav.day":"Day by day","nav.how":"How we plan","nav.prices":"Prices","nav.dest":"Destinations","nav.know":"Good to know","cta.plan":"Plan my trip",
 "hero.eyebrow":"Private round tours · Sri Lanka","hero.h1":"Sri Lanka, privately guided.","hero.lede":"Heritage cities, misty hill country, wildlife and quiet southern beaches, with your own chauffeur-guide from the moment you land.","hero.cta1":"Explore journeys","hero.cta2":"See 14 days on the map",
 "pl.title":"Find your journey","pl.q":"3 questions","pl.len":"Length","pl.int":"Most interested in","pl.who":"Travellers","pl.show":"Show",
 "opt.any":"Any","opt.all":"Everything","opt.culture":"Ancient cities","opt.hills":"Tea & hill country","opt.wildlife":"Wildlife","opt.beach":"Beaches","opt.north":"North & east","adults":"adults",
 "fact1":"Chauffeur-guide from arrival","fact2":"Free cancellation 30+ days out","fact3":"Quoted in US dollars","hero.caption":"Nine Arch Bridge, Ella · Day 08",
 "s1.num":"01 — Journeys","s1.h":"Five ways to see the island.","s1.p":"Every route is private and can be reshaped around your dates, pace and hotels.",
 "all":"All","days":"days","nights":"nights","stops":"stops","price":"Price","onreq":"On request","from":"From","per":"Per","person":"Person","perperson":"per person","pp":"pp","hotels":"Hotels","star":"star",
 "ft.tag":"Signature journey","ft.p":"Ancient landmarks, scenic hill-country trains, a Yala safari and a slow finish on the golden southern coast. The complete Sri Lankan experience.","ft.cta1":"Follow it day by day","ft.cta2":"Estimate my price",
 "best":"Best match","clear":"Clear",
 "s2.num":"02 — Day by day","s2.h":"The Grand Round, stop by stop.","s2.p":"Scroll the itinerary and the map follows you across the island.","map.all":"Whole route","dbd.c1":"Estimate this journey","dbd.c2":"Ask us to adapt it","day":"Day","of":"of","overnight":"Overnight","transfer":"Transfer",
 "s3.num":"03 — How we plan","s3.h":"From first message to the airport.","s3.link":"Start step one","step":"Step",
 "st1.h":"Tell us your dates","st1.p":"Send your dates, group and interests on WhatsApp or by email.","st2.h":"Shape the route","st2.p":"We adapt a journey to your pace, with hotels at the level you choose.","st3.h":"Confirm the rates","st3.p":"Final rates are confirmed against hotel availability when you request to book.","st4.h":"Land and go","st4.p":"Your chauffeur-guide meets you at Bandaranaike International Airport.",
 "s4.num":"04 — Prices","s4.h":"Estimate the Grand Round.","s4.p":"Preliminary rates per person. Change anything and the total updates.",
 "pr.hotel":"Hotel category","pr.hotelS":"Twin sharing, B&B included","pr.trav":"Travellers","pr.travS":"Minimum two adults","pr.adults":"Adults","pr.singles":"Single rooms","pr.meal":"Meal plan","pr.mealS":"Per person, per night","pr.tix":"Tickets & extras","pr.tixS":"Per person","pr.route":"On the route","pr.addons":"Add-ons","pr.fest":"Festive season","pr.included":"Included","pr.night":"night","pr.hb":"with Half Board",
 "meal.BB":"Bed & Breakfast","meal.HB":"Half Board","meal.FB":"Full Board","meal.AI":"All Inclusive",
 "rt.h":"Extra nights · per double room","rt.low":"Low season","rt.high":"High season",
 "sum.k":"Your estimate","sum.h":"The Grand Round · 14 days","sum.tot":"Estimated total","sum.cta":"Request this quote","sum.alt":"or send it by email","sum.fine":"Estimate only. Rates depend on hotel availability at confirmation, and high and festive season supplements may apply. Final rates are confirmed when we receive your booking request.","sum.usd":"Quoted and paid in US dollars","sum.approx":"Shown in {cur} at sample rates for reference.",
 "ln.tier":"{tier} hotels × {n}","ln.single":"Single supplement × {n}","ln.meal":"{meal}, 13 nights × {n}","ln.tix":"Tickets & activities × {n}","ln.fest":"{name} × {n}",
 "s5.num":"05 — Destinations","s5.h":"Six regions, one small island.","s5.p":"Mix any of these into a tailor-made route.","places":"places","inc":"Included in",
 "pc.k":"Today's postcard","pc.say":"Say it",
 "s6.num":"06 — Good to know","s6.h":"Clear terms, before you ask.","c.k":"Cancellation policy","c.h":"What if plans change?","c.p":"Drag to see the charge at any point before arrival.","c.charge":"charge","c.before":"days before arrival",
 "c.m0":"No cancellation charge. Advance payments are refunded, less bank charges and non-refundable supplier deposits.","c.m1":"30% of the total tour booking value is charged.","c.m2":"75% of the total tour booking value is charged.","c.m3":"100% of the total tour booking value is charged.",
 "enq.k":"Plan my trip","enq.h":"Tell us when. We'll shape the rest.","enq.p":"A real person replies, usually on WhatsApp. Nothing is booked until you confirm.",
 "f.name":"Your name","f.month":"Travel month","f.journey":"Journey","f.who":"Travellers","f.notes":"Anything we should know","f.ph":"Pace, hotels, celebrations, must-sees…","f.wa":"Send on WhatsApp","f.mail":"Send by email","f.small":"Opens WhatsApp or your email app with your message filled in. Nothing is sent from this page.","f.err":"Please add your name so we know who to reply to.","f.custom":"Something tailor-made",
 "foot.s1":"Discover Sri Lanka with us.","foot.s2":"Private round tours with a chauffeur-guide, shaped around your travel wishes.","foot.explore":"Explore","foot.plan":"Plan","foot.contact":"Contact","foot.cancel":"Cancellation","foot.appear":"Appearance","foot.email":"Email us",
 "loc.title":"Language and currency","loc.lang":"Language","loc.cur":"Currency","loc.detected":"Suggested for {region}","loc.note":"Itinerary details are shown in English for now. Converted prices use sample rates for reference; every booking is quoted in US dollars.","loc.done":"Done"
},
de:{
 "hud":"Tag {d} von 14","dayn":"Tag {d}",
 "nav.journeys":"Reisen","nav.day":"Tag für Tag","nav.how":"So planen wir","nav.prices":"Preise","nav.dest":"Reiseziele","nav.know":"Gut zu wissen","cta.plan":"Reise planen",
 "hero.eyebrow":"Private Rundreisen · Sri Lanka","hero.h1":"Sri Lanka, privat geführt.","hero.lede":"Historische Städte, nebliges Hochland, Wildtiere und ruhige Strände im Süden – mit Ihrem eigenen Fahrer-Guide ab der Landung.","hero.cta1":"Reisen entdecken","hero.cta2":"14 Tage auf der Karte",
 "pl.title":"Ihre Reise finden","pl.q":"3 Fragen","pl.len":"Dauer","pl.int":"Besonders interessiert an","pl.who":"Reisende","pl.show":"Anzeigen",
 "opt.any":"Beliebig","opt.all":"Allem","opt.culture":"Antike Städte","opt.hills":"Tee & Hochland","opt.wildlife":"Wildtiere","opt.beach":"Strände","opt.north":"Norden & Osten","adults":"Erwachsene",
 "fact1":"Fahrer-Guide ab Ankunft","fact2":"Kostenlose Stornierung ab 30 Tagen","fact3":"Angebote in US-Dollar","hero.caption":"Nine Arch Bridge, Ella · Tag 08",
 "s1.num":"01 — Reisen","s1.h":"Fünf Wege, die Insel zu sehen.","s1.p":"Jede Route ist privat und lässt sich an Ihre Daten, Ihr Tempo und Ihre Hotels anpassen.",
 "all":"Alle","days":"Tage","nights":"Nächte","stops":"Stationen","price":"Preis","onreq":"Auf Anfrage","from":"Ab","per":"Pro","person":"Person","perperson":"pro Person","pp":"p. P.","hotels":"Hotels","star":"Sterne",
 "ft.tag":"Unsere Signature-Reise","ft.p":"Antike Stätten, malerische Zugfahrten im Hochland, eine Safari in Yala und ein entspannter Ausklang an der goldenen Südküste. Sri Lanka in seiner ganzen Vielfalt.","ft.cta1":"Tag für Tag verfolgen","ft.cta2":"Preis berechnen",
 "best":"Beste Wahl","clear":"Zurücksetzen",
 "s2.num":"02 — Tag für Tag","s2.h":"Die große Rundreise, Station für Station.","s2.p":"Scrollen Sie durch die Route – die Karte folgt Ihnen über die Insel.","map.all":"Ganze Route","dbd.c1":"Diese Reise berechnen","dbd.c2":"Anpassung anfragen","day":"Tag","of":"von","overnight":"Übernachtung","transfer":"Transfer",
 "s3.num":"03 — So planen wir","s3.h":"Von der ersten Nachricht bis zum Flughafen.","s3.link":"Mit Schritt eins beginnen","step":"Schritt",
 "st1.h":"Nennen Sie uns Ihre Daten","st1.p":"Senden Sie Reisedaten, Gruppe und Interessen per WhatsApp oder E-Mail.","st2.h":"Route gestalten","st2.p":"Wir passen die Reise an Ihr Tempo an, mit Hotels Ihrer Wahl.","st3.h":"Preise bestätigen","st3.p":"Endpreise werden bei Ihrer Buchungsanfrage anhand der Hotelverfügbarkeit bestätigt.","st4.h":"Ankommen und los","st4.p":"Ihr Fahrer-Guide erwartet Sie am Bandaranaike International Airport.",
 "s4.num":"04 — Preise","s4.h":"Die große Rundreise kalkulieren.","s4.p":"Vorläufige Preise pro Person. Ändern Sie etwas, und die Summe passt sich an.",
 "pr.hotel":"Hotelkategorie","pr.hotelS":"Doppelzimmer, inkl. Frühstück","pr.trav":"Reisende","pr.travS":"Mindestens zwei Erwachsene","pr.adults":"Erwachsene","pr.singles":"Einzelzimmer","pr.meal":"Verpflegung","pr.mealS":"Pro Person und Nacht","pr.tix":"Eintritte & Extras","pr.tixS":"Pro Person","pr.route":"Auf der Route","pr.addons":"Extras","pr.fest":"Festtage","pr.included":"Inklusive","pr.night":"Nacht","pr.hb":"mit Halbpension",
 "meal.BB":"Übernachtung & Frühstück","meal.HB":"Halbpension","meal.FB":"Vollpension","meal.AI":"All Inclusive",
 "rt.h":"Zusatznächte · pro Doppelzimmer","rt.low":"Nebensaison","rt.high":"Hochsaison",
 "sum.k":"Ihre Kalkulation","sum.h":"Die große Rundreise · 14 Tage","sum.tot":"Geschätzter Gesamtpreis","sum.cta":"Angebot anfragen","sum.alt":"oder per E-Mail senden","sum.fine":"Nur eine Schätzung. Preise hängen von der Hotelverfügbarkeit ab; in Hoch- und Festsaison können Zuschläge anfallen. Endpreise werden nach Eingang Ihrer Buchungsanfrage bestätigt.","sum.usd":"Angebot und Zahlung in US-Dollar","sum.approx":"In {cur} zu Beispielkursen angezeigt.",
 "ln.tier":"{tier}-Hotels × {n}","ln.single":"Einzelzimmerzuschlag × {n}","ln.meal":"{meal}, 13 Nächte × {n}","ln.tix":"Eintritte & Aktivitäten × {n}","ln.fest":"{name} × {n}",
 "s5.num":"05 — Reiseziele","s5.h":"Sechs Regionen, eine kleine Insel.","s5.p":"Kombinieren Sie sie zu einer maßgeschneiderten Route.","places":"Orte","inc":"Enthalten in",
 "pc.k":"Postkarte des Tages","pc.say":"Aussprache",
 "s6.num":"06 — Gut zu wissen","s6.h":"Klare Bedingungen, bevor Sie fragen.","c.k":"Stornierungsbedingungen","c.h":"Was, wenn sich Pläne ändern?","c.p":"Ziehen Sie, um die Gebühr zu jedem Zeitpunkt vor Anreise zu sehen.","c.charge":"Gebühr","c.before":"Tage vor Anreise",
 "c.m0":"Keine Stornogebühr. Anzahlungen werden abzüglich Bankgebühren und nicht erstattbarer Anzahlungen erstattet.","c.m1":"30 % des Gesamtreisepreises werden berechnet.","c.m2":"75 % des Gesamtreisepreises werden berechnet.","c.m3":"100 % des Gesamtreisepreises werden berechnet.",
 "enq.k":"Reise planen","enq.h":"Sagen Sie uns wann. Den Rest gestalten wir.","enq.p":"Ein echter Mensch antwortet, meist per WhatsApp. Gebucht wird erst nach Ihrer Bestätigung.",
 "f.name":"Ihr Name","f.month":"Reisemonat","f.journey":"Reise","f.who":"Reisende","f.notes":"Was wir wissen sollten","f.ph":"Tempo, Hotels, Anlässe, Wünsche…","f.wa":"Per WhatsApp senden","f.mail":"Per E-Mail senden","f.small":"Öffnet WhatsApp oder Ihr E-Mail-Programm mit vorausgefüllter Nachricht. Diese Seite sendet nichts.","f.err":"Bitte geben Sie Ihren Namen an.","f.custom":"Etwas Maßgeschneidertes",
 "foot.s1":"Entdecken Sie Sri Lanka mit uns.","foot.s2":"Private Rundreisen mit Fahrer-Guide, ganz nach Ihren Wünschen.","foot.explore":"Entdecken","foot.plan":"Planen","foot.contact":"Kontakt","foot.cancel":"Stornierung","foot.appear":"Darstellung","foot.email":"E-Mail",
 "loc.title":"Sprache und Währung","loc.lang":"Sprache","loc.cur":"Währung","loc.detected":"Vorschlag für {region}","loc.note":"Reisedetails werden vorerst auf Englisch angezeigt. Umgerechnete Preise nutzen Beispielkurse; jedes Angebot erfolgt in US-Dollar.","loc.done":"Fertig"
},
fr:{
 "hud":"Jour {d} sur 14","dayn":"Jour {d}",
 "nav.journeys":"Voyages","nav.day":"Jour par jour","nav.how":"Notre méthode","nav.prices":"Tarifs","nav.dest":"Destinations","nav.know":"Bon à savoir","cta.plan":"Planifier mon voyage",
 "hero.eyebrow":"Circuits privés · Sri Lanka","hero.h1":"Le Sri Lanka, en privé.","hero.lede":"Cités historiques, collines brumeuses, faune sauvage et plages paisibles du sud, avec votre chauffeur-guide dès l'atterrissage.","hero.cta1":"Découvrir les voyages","hero.cta2":"Voir 14 jours sur la carte",
 "pl.title":"Trouvez votre voyage","pl.q":"3 questions","pl.len":"Durée","pl.int":"Surtout intéressé par","pl.who":"Voyageurs","pl.show":"Afficher",
 "opt.any":"Toutes","opt.all":"Tout","opt.culture":"Cités antiques","opt.hills":"Thé et collines","opt.wildlife":"Faune","opt.beach":"Plages","opt.north":"Nord et est","adults":"adultes",
 "fact1":"Chauffeur-guide dès l'arrivée","fact2":"Annulation gratuite à 30 jours et plus","fact3":"Devis en dollars US","hero.caption":"Nine Arch Bridge, Ella · Jour 08",
 "s1.num":"01 — Voyages","s1.h":"Cinq façons de découvrir l'île.","s1.p":"Chaque itinéraire est privé et s'adapte à vos dates, votre rythme et vos hôtels.",
 "all":"Tous","days":"jours","nights":"nuits","stops":"étapes","price":"Tarif","onreq":"Sur demande","from":"À partir de","per":"Par","person":"Personne","perperson":"par personne","pp":"p.p.","hotels":"Hôtels","star":"étoiles",
 "ft.tag":"Voyage signature","ft.p":"Sites antiques, trains panoramiques dans les collines, safari à Yala et fin en douceur sur la côte sud dorée. Le Sri Lanka dans son ensemble.","ft.cta1":"Suivre jour par jour","ft.cta2":"Estimer mon prix",
 "best":"Meilleur choix","clear":"Effacer",
 "s2.num":"02 — Jour par jour","s2.h":"Le Grand Tour, étape par étape.","s2.p":"Faites défiler l'itinéraire, la carte vous suit à travers l'île.","map.all":"Itinéraire complet","dbd.c1":"Estimer ce voyage","dbd.c2":"Demander une adaptation","day":"Jour","of":"sur","overnight":"Nuit","transfer":"Transfert",
 "s3.num":"03 — Notre méthode","s3.h":"Du premier message à l'aéroport.","s3.link":"Commencer l'étape 1","step":"Étape",
 "st1.h":"Donnez-nous vos dates","st1.p":"Envoyez vos dates, votre groupe et vos envies par WhatsApp ou e-mail.","st2.h":"Dessiner l'itinéraire","st2.p":"Nous adaptons le voyage à votre rythme, avec les hôtels de votre choix.","st3.h":"Confirmer les tarifs","st3.p":"Les tarifs définitifs sont confirmés selon les disponibilités lors de votre demande.","st4.h":"Atterrir et partir","st4.p":"Votre chauffeur-guide vous accueille à l'aéroport international Bandaranaike.",
 "s4.num":"04 — Tarifs","s4.h":"Estimez le Grand Tour.","s4.p":"Tarifs préliminaires par personne. Modifiez une option, le total se met à jour.",
 "pr.hotel":"Catégorie d'hôtel","pr.hotelS":"Chambre double, petit-déjeuner inclus","pr.trav":"Voyageurs","pr.travS":"Deux adultes minimum","pr.adults":"Adultes","pr.singles":"Chambres individuelles","pr.meal":"Formule repas","pr.mealS":"Par personne et par nuit","pr.tix":"Entrées et extras","pr.tixS":"Par personne","pr.route":"Sur l'itinéraire","pr.addons":"Options","pr.fest":"Fêtes de fin d'année","pr.included":"Inclus","pr.night":"nuit","pr.hb":"en demi-pension",
 "meal.BB":"Nuit et petit-déjeuner","meal.HB":"Demi-pension","meal.FB":"Pension complète","meal.AI":"Tout compris",
 "rt.h":"Nuits supplémentaires · par chambre double","rt.low":"Basse saison","rt.high":"Haute saison",
 "sum.k":"Votre estimation","sum.h":"Le Grand Tour · 14 jours","sum.tot":"Total estimé","sum.cta":"Demander ce devis","sum.alt":"ou l'envoyer par e-mail","sum.fine":"Estimation uniquement. Les tarifs dépendent des disponibilités hôtelières ; des suppléments de haute saison et de fêtes peuvent s'appliquer. Les tarifs définitifs sont confirmés à réception de votre demande.","sum.usd":"Devis et paiement en dollars US","sum.approx":"Affiché en {cur} à des taux indicatifs.",
 "ln.tier":"Hôtels {tier} × {n}","ln.single":"Supplément single × {n}","ln.meal":"{meal}, 13 nuits × {n}","ln.tix":"Entrées et activités × {n}","ln.fest":"{name} × {n}",
 "s5.num":"05 — Destinations","s5.h":"Six régions, une petite île.","s5.p":"Combinez-les dans un itinéraire sur mesure.","places":"lieux","inc":"Inclus dans",
 "pc.k":"La carte postale du jour","pc.say":"Prononciation",
 "s6.num":"06 — Bon à savoir","s6.h":"Des conditions claires, d'emblée.","c.k":"Conditions d'annulation","c.h":"Et si vos projets changent ?","c.p":"Faites glisser pour voir les frais à tout moment avant l'arrivée.","c.charge":"de frais","c.before":"jours avant l'arrivée",
 "c.m0":"Aucuns frais d'annulation. Les acomptes sont remboursés, hors frais bancaires et acomptes fournisseurs non remboursables.","c.m1":"30 % du montant total du circuit est facturé.","c.m2":"75 % du montant total du circuit est facturé.","c.m3":"100 % du montant total du circuit est facturé.",
 "enq.k":"Planifier mon voyage","enq.h":"Dites-nous quand. Nous ferons le reste.","enq.p":"Une vraie personne vous répond, souvent sur WhatsApp. Rien n'est réservé sans votre accord.",
 "f.name":"Votre nom","f.month":"Mois du voyage","f.journey":"Voyage","f.who":"Voyageurs","f.notes":"Ce que nous devons savoir","f.ph":"Rythme, hôtels, occasions, incontournables…","f.wa":"Envoyer sur WhatsApp","f.mail":"Envoyer par e-mail","f.small":"Ouvre WhatsApp ou votre messagerie avec votre message prérempli. Rien n'est envoyé depuis cette page.","f.err":"Merci d'indiquer votre nom.","f.custom":"Un voyage sur mesure",
 "foot.s1":"Découvrez le Sri Lanka avec nous.","foot.s2":"Circuits privés avec chauffeur-guide, conçus selon vos envies.","foot.explore":"Explorer","foot.plan":"Planifier","foot.contact":"Contact","foot.cancel":"Annulation","foot.appear":"Apparence","foot.email":"Nous écrire",
 "loc.title":"Langue et devise","loc.lang":"Langue","loc.cur":"Devise","loc.detected":"Suggéré pour {region}","loc.note":"Les détails de l'itinéraire restent en anglais pour l'instant. Les prix convertis utilisent des taux indicatifs ; chaque devis est établi en dollars US.","loc.done":"Terminé"
},
es:{
 "hud":"Día {d} de 14","dayn":"Día {d}",
 "nav.journeys":"Viajes","nav.day":"Día a día","nav.how":"Cómo planificamos","nav.prices":"Precios","nav.dest":"Destinos","nav.know":"Información útil","cta.plan":"Planear mi viaje",
 "hero.eyebrow":"Circuitos privados · Sri Lanka","hero.h1":"Sri Lanka, con guía privado.","hero.lede":"Ciudades históricas, colinas entre la niebla, fauna salvaje y playas tranquilas del sur, con tu propio chófer-guía desde que aterrizas.","hero.cta1":"Ver viajes","hero.cta2":"Ver 14 días en el mapa",
 "pl.title":"Encuentra tu viaje","pl.q":"3 preguntas","pl.len":"Duración","pl.int":"Lo que más te interesa","pl.who":"Viajeros","pl.show":"Mostrar",
 "opt.any":"Cualquiera","opt.all":"Todo","opt.culture":"Ciudades antiguas","opt.hills":"Té y montaña","opt.wildlife":"Fauna","opt.beach":"Playas","opt.north":"Norte y este","adults":"adultos",
 "fact1":"Chófer-guía desde la llegada","fact2":"Cancelación gratis con 30+ días","fact3":"Cotizado en dólares","hero.caption":"Nine Arch Bridge, Ella · Día 08",
 "s1.num":"01 — Viajes","s1.h":"Cinco formas de ver la isla.","s1.p":"Cada ruta es privada y se adapta a tus fechas, ritmo y hoteles.",
 "all":"Todos","days":"días","nights":"noches","stops":"paradas","price":"Precio","onreq":"Bajo petición","from":"Desde","per":"Por","person":"Persona","perperson":"por persona","pp":"p.p.","hotels":"Hoteles","star":"estrellas",
 "ft.tag":"Viaje insignia","ft.p":"Monumentos antiguos, trenes panorámicos por la montaña, un safari en Yala y un final pausado en la dorada costa sur. Sri Lanka al completo.","ft.cta1":"Seguirlo día a día","ft.cta2":"Calcular mi precio",
 "best":"Mejor opción","clear":"Borrar",
 "s2.num":"02 — Día a día","s2.h":"La Gran Ruta, parada a parada.","s2.p":"Desplázate por el itinerario y el mapa te sigue por la isla.","map.all":"Ruta completa","dbd.c1":"Calcular este viaje","dbd.c2":"Pedir que lo adaptemos","day":"Día","of":"de","overnight":"Noche","transfer":"Traslado",
 "s3.num":"03 — Cómo planificamos","s3.h":"Del primer mensaje al aeropuerto.","s3.link":"Empezar el paso uno","step":"Paso",
 "st1.h":"Cuéntanos tus fechas","st1.p":"Envía fechas, grupo e intereses por WhatsApp o correo.","st2.h":"Dar forma a la ruta","st2.p":"Adaptamos el viaje a tu ritmo, con hoteles del nivel que elijas.","st3.h":"Confirmar precios","st3.p":"Los precios finales se confirman según disponibilidad al solicitar la reserva.","st4.h":"Aterrizar y salir","st4.p":"Tu chófer-guía te recibe en el aeropuerto internacional Bandaranaike.",
 "s4.num":"04 — Precios","s4.h":"Calcula la Gran Ruta.","s4.p":"Tarifas preliminares por persona. Cambia cualquier opción y el total se actualiza.",
 "pr.hotel":"Categoría de hotel","pr.hotelS":"Habitación doble, desayuno incluido","pr.trav":"Viajeros","pr.travS":"Mínimo dos adultos","pr.adults":"Adultos","pr.singles":"Habitaciones individuales","pr.meal":"Régimen","pr.mealS":"Por persona y noche","pr.tix":"Entradas y extras","pr.tixS":"Por persona","pr.route":"En la ruta","pr.addons":"Extras","pr.fest":"Temporada festiva","pr.included":"Incluido","pr.night":"noche","pr.hb":"con media pensión",
 "meal.BB":"Alojamiento y desayuno","meal.HB":"Media pensión","meal.FB":"Pensión completa","meal.AI":"Todo incluido",
 "rt.h":"Noches extra · por habitación doble","rt.low":"Temporada baja","rt.high":"Temporada alta",
 "sum.k":"Tu estimación","sum.h":"La Gran Ruta · 14 días","sum.tot":"Total estimado","sum.cta":"Solicitar este presupuesto","sum.alt":"o enviarlo por correo","sum.fine":"Solo una estimación. Las tarifas dependen de la disponibilidad hotelera y pueden aplicarse suplementos de temporada alta y festiva. Los precios finales se confirman al recibir tu solicitud.","sum.usd":"Presupuesto y pago en dólares","sum.approx":"Mostrado en {cur} con tipos de cambio de ejemplo.",
 "ln.tier":"Hoteles {tier} × {n}","ln.single":"Suplemento individual × {n}","ln.meal":"{meal}, 13 noches × {n}","ln.tix":"Entradas y actividades × {n}","ln.fest":"{name} × {n}",
 "s5.num":"05 — Destinos","s5.h":"Seis regiones, una isla pequeña.","s5.p":"Combínalas en una ruta a medida.","places":"lugares","inc":"Incluido en",
 "pc.k":"La postal de hoy","pc.say":"Pronunciación",
 "s6.num":"06 — Información útil","s6.h":"Condiciones claras, antes de que preguntes.","c.k":"Política de cancelación","c.h":"¿Y si cambian tus planes?","c.p":"Desliza para ver el cargo en cualquier momento antes de la llegada.","c.charge":"de cargo","c.before":"días antes de la llegada",
 "c.m0":"Sin cargo de cancelación. Se reembolsan los pagos anticipados, menos gastos bancarios y depósitos no reembolsables.","c.m1":"Se cobra el 30 % del valor total del circuito.","c.m2":"Se cobra el 75 % del valor total del circuito.","c.m3":"Se cobra el 100 % del valor total del circuito.",
 "enq.k":"Planear mi viaje","enq.h":"Dinos cuándo. Nosotros hacemos el resto.","enq.p":"Te responde una persona real, normalmente por WhatsApp. No se reserva nada hasta que confirmes.",
 "f.name":"Tu nombre","f.month":"Mes del viaje","f.journey":"Viaje","f.who":"Viajeros","f.notes":"Algo que debamos saber","f.ph":"Ritmo, hoteles, celebraciones, imprescindibles…","f.wa":"Enviar por WhatsApp","f.mail":"Enviar por correo","f.small":"Abre WhatsApp o tu correo con el mensaje ya escrito. Esta página no envía nada.","f.err":"Añade tu nombre para saber a quién responder.","f.custom":"Algo a medida",
 "foot.s1":"Descubre Sri Lanka con nosotros.","foot.s2":"Circuitos privados con chófer-guía, a tu medida.","foot.explore":"Explorar","foot.plan":"Planear","foot.contact":"Contacto","foot.cancel":"Cancelación","foot.appear":"Apariencia","foot.email":"Escríbenos",
 "loc.title":"Idioma y moneda","loc.lang":"Idioma","loc.cur":"Moneda","loc.detected":"Sugerido para {region}","loc.note":"Por ahora, los detalles del itinerario se muestran en inglés. Los precios convertidos usan tipos de ejemplo; todos los presupuestos se emiten en dólares.","loc.done":"Listo"
},
ru:{
 "hud":"День {d} из 14","dayn":"День {d}",
 "nav.journeys":"Туры","nav.day":"По дням","nav.how":"Как мы планируем","nav.prices":"Цены","nav.dest":"Направления","nav.know":"Полезно знать","cta.plan":"Спланировать поездку",
 "hero.eyebrow":"Индивидуальные туры · Шри-Ланка","hero.h1":"Шри-Ланка с личным гидом.","hero.lede":"Древние города, туманные горы, дикая природа и тихие пляжи юга — с личным водителем-гидом с момента прилёта.","hero.cta1":"Смотреть туры","hero.cta2":"14 дней на карте",
 "pl.title":"Подберите тур","pl.q":"3 вопроса","pl.len":"Длительность","pl.int":"Больше всего интересует","pl.who":"Путешественники","pl.show":"Показать",
 "opt.any":"Любая","opt.all":"Всё","opt.culture":"Древние города","opt.hills":"Чай и горы","opt.wildlife":"Дикая природа","opt.beach":"Пляжи","opt.north":"Север и восток","adults":"взрослых",
 "fact1":"Водитель-гид с момента прилёта","fact2":"Бесплатная отмена за 30+ дней","fact3":"Цены в долларах США","hero.caption":"Мост Девяти арок, Элла · День 08",
 "s1.num":"01 — Туры","s1.h":"Пять способов увидеть остров.","s1.p":"Каждый маршрут индивидуален и подстраивается под ваши даты, темп и отели.",
 "all":"Все","days":"дн.","nights":"ночей","stops":"остановок","price":"Цена","onreq":"По запросу","from":"От","per":"За","person":"человека","perperson":"с человека","pp":"с чел.","hotels":"Отели","star":"звёзды",
 "ft.tag":"Фирменный тур","ft.p":"Древние памятники, живописные поезда по горам, сафари в Яле и неспешный финал на золотом южном побережье. Вся Шри-Ланка в одном туре.","ft.cta1":"Смотреть по дням","ft.cta2":"Рассчитать цену",
 "best":"Лучший вариант","clear":"Сбросить",
 "s2.num":"02 — По дням","s2.h":"Большое кольцо, шаг за шагом.","s2.p":"Прокручивайте маршрут — карта следует за вами по острову.","map.all":"Весь маршрут","dbd.c1":"Рассчитать этот тур","dbd.c2":"Попросить изменить","day":"День","of":"из","overnight":"Ночёвка","transfer":"Трансфер",
 "s3.num":"03 — Как мы планируем","s3.h":"От первого сообщения до аэропорта.","s3.link":"Начать с первого шага","step":"Шаг",
 "st1.h":"Сообщите даты","st1.p":"Отправьте даты, состав группы и интересы в WhatsApp или по почте.","st2.h":"Составим маршрут","st2.p":"Подстроим тур под ваш темп и выбранный уровень отелей.","st3.h":"Подтвердим цены","st3.p":"Окончательные цены подтверждаются по наличию мест в отелях при запросе брони.","st4.h":"Прилёт — и в путь","st4.p":"Водитель-гид встретит вас в международном аэропорту Бандаранаике.",
 "s4.num":"04 — Цены","s4.h":"Рассчитайте Большое кольцо.","s4.p":"Предварительные цены с человека. Измените параметры — итог пересчитается.",
 "pr.hotel":"Категория отелей","pr.hotelS":"Двухместное размещение, завтраки включены","pr.trav":"Путешественники","pr.travS":"Минимум двое взрослых","pr.adults":"Взрослые","pr.singles":"Одноместные номера","pr.meal":"Питание","pr.mealS":"С человека за ночь","pr.tix":"Билеты и доп. услуги","pr.tixS":"С человека","pr.route":"По маршруту","pr.addons":"Дополнительно","pr.fest":"Праздники","pr.included":"Включено","pr.night":"ночь","pr.hb":"при полупансионе",
 "meal.BB":"Завтраки","meal.HB":"Полупансион","meal.FB":"Полный пансион","meal.AI":"Всё включено",
 "rt.h":"Доп. ночи · за двухместный номер","rt.low":"Низкий сезон","rt.high":"Высокий сезон",
 "sum.k":"Ваш расчёт","sum.h":"Большое кольцо · 14 дней","sum.tot":"Итого (оценка)","sum.cta":"Запросить предложение","sum.alt":"или отправить по почте","sum.fine":"Это оценка. Цены зависят от наличия мест в отелях; в высокий и праздничный сезон возможны доплаты. Окончательные цены подтверждаются после получения запроса.","sum.usd":"Предложение и оплата в долларах США","sum.approx":"Показано в {cur} по примерному курсу.",
 "ln.tier":"Отели {tier} × {n}","ln.single":"Доплата за одноместный × {n}","ln.meal":"{meal}, 13 ночей × {n}","ln.tix":"Билеты и экскурсии × {n}","ln.fest":"{name} × {n}",
 "s5.num":"05 — Направления","s5.h":"Шесть регионов, один небольшой остров.","s5.p":"Объедините их в индивидуальный маршрут.","places":"мест","inc":"Входит в",
 "pc.k":"Открытка дня","pc.say":"Произношение",
 "s6.num":"06 — Полезно знать","s6.h":"Понятные условия заранее.","c.k":"Условия отмены","c.h":"Если планы изменятся?","c.p":"Передвиньте ползунок, чтобы увидеть штраф в любой момент до прибытия.","c.charge":"штраф","c.before":"дней до прибытия",
 "c.m0":"Без штрафа. Предоплата возвращается за вычетом банковских комиссий и невозвратных депозитов.","c.m1":"Удерживается 30 % стоимости тура.","c.m2":"Удерживается 75 % стоимости тура.","c.m3":"Удерживается 100 % стоимости тура.",
 "enq.k":"Спланировать поездку","enq.h":"Скажите когда. Остальное — за нами.","enq.p":"Отвечает живой человек, обычно в WhatsApp. Ничего не бронируется без вашего подтверждения.",
 "f.name":"Ваше имя","f.month":"Месяц поездки","f.journey":"Тур","f.who":"Путешественники","f.notes":"Что нам стоит знать","f.ph":"Темп, отели, праздники, обязательные места…","f.wa":"Отправить в WhatsApp","f.mail":"Отправить по почте","f.small":"Откроется WhatsApp или почта с готовым сообщением. Эта страница ничего не отправляет.","f.err":"Укажите, пожалуйста, имя.","f.custom":"Индивидуальный маршрут",
 "foot.s1":"Откройте Шри-Ланку вместе с нами.","foot.s2":"Индивидуальные туры с водителем-гидом по вашим пожеланиям.","foot.explore":"Обзор","foot.plan":"Планирование","foot.contact":"Контакты","foot.cancel":"Отмена","foot.appear":"Оформление","foot.email":"Написать нам",
 "loc.title":"Язык и валюта","loc.lang":"Язык","loc.cur":"Валюта","loc.detected":"Рекомендуем для {region}","loc.note":"Подробности маршрута пока на английском. Пересчитанные цены даны по примерному курсу; все предложения выставляются в долларах США.","loc.done":"Готово"
},
zh:{
 "hud":"第{d}天 / 共14天","dayn":"第{d}天",
 "nav.journeys":"行程","nav.day":"每日安排","nav.how":"规划流程","nav.prices":"价格","nav.dest":"目的地","nav.know":"须知","cta.plan":"规划我的旅程",
 "hero.eyebrow":"私人环岛游 · 斯里兰卡","hero.h1":"斯里兰卡，私人专属导览。","hero.lede":"古城遗迹、云雾山区、野生动物与宁静的南部海滩，落地即有专属司机导游全程陪伴。","hero.cta1":"浏览行程","hero.cta2":"在地图上看14天",
 "pl.title":"找到您的行程","pl.q":"3个问题","pl.len":"天数","pl.int":"最感兴趣","pl.who":"出行人数","pl.show":"查看",
 "opt.any":"不限","opt.all":"全部","opt.culture":"古城","opt.hills":"茶园与山区","opt.wildlife":"野生动物","opt.beach":"海滩","opt.north":"北部与东部","adults":"位成人",
 "fact1":"抵达即有司机导游","fact2":"提前30天以上免费取消","fact3":"以美元报价","hero.caption":"九拱桥，埃拉 · 第08天",
 "s1.num":"01 — 行程","s1.h":"五种方式游览这座岛。","s1.p":"每条路线均为私人定制，可按您的日期、节奏和酒店调整。",
 "all":"全部","days":"天","nights":"晚","stops":"站","price":"价格","onreq":"按需报价","from":"起","per":"每","person":"人","perperson":"每人","pp":"每人","hotels":"酒店","star":"星",
 "ft.tag":"招牌行程","ft.p":"古迹、山区观景火车、雅拉野生动物园，以及在金色南部海岸的悠闲收尾。完整的斯里兰卡体验。","ft.cta1":"查看每日安排","ft.cta2":"估算价格",
 "best":"最佳匹配","clear":"清除",
 "s2.num":"02 — 每日安排","s2.h":"环岛大游，逐站呈现。","s2.p":"滚动行程，地图会随您穿越全岛。","map.all":"完整路线","dbd.c1":"估算此行程","dbd.c2":"请我们调整","day":"第","of":"/","overnight":"住宿","transfer":"接送",
 "s3.num":"03 — 规划流程","s3.h":"从第一条消息到机场。","s3.link":"从第一步开始","step":"步骤",
 "st1.h":"告诉我们日期","st1.p":"通过WhatsApp或邮件发送日期、人数和兴趣。","st2.h":"定制路线","st2.p":"按您的节奏调整行程，并选择您想要的酒店档次。","st3.h":"确认价格","st3.p":"提交预订请求时，根据酒店空房情况确认最终价格。","st4.h":"落地出发","st4.p":"司机导游将在班达拉奈克国际机场迎接您。",
 "s4.num":"04 — 价格","s4.h":"估算环岛大游费用。","s4.p":"初步每人价格。修改任意选项，总价即时更新。",
 "pr.hotel":"酒店等级","pr.hotelS":"双人间，含早餐","pr.trav":"出行人数","pr.travS":"至少两位成人","pr.adults":"成人","pr.singles":"单人房","pr.meal":"餐食","pr.mealS":"每人每晚","pr.tix":"门票与附加项目","pr.tixS":"每人","pr.route":"沿途景点","pr.addons":"附加项目","pr.fest":"节日季","pr.included":"已包含","pr.night":"晚","pr.hb":"半餐价格",
 "meal.BB":"住宿含早","meal.HB":"半餐","meal.FB":"全餐","meal.AI":"全包",
 "rt.h":"加住 · 每间双人房","rt.low":"淡季","rt.high":"旺季",
 "sum.k":"您的估价","sum.h":"环岛大游 · 14天","sum.tot":"预估总价","sum.cta":"索取此报价","sum.alt":"或通过邮件发送","sum.fine":"仅供估算。价格取决于确认时的酒店空房情况，旺季和节日季可能另有附加费。收到预订请求后确认最终价格。","sum.usd":"以美元报价和付款","sum.approx":"以{cur}显示，按示例汇率换算，仅供参考。",
 "ln.tier":"{tier}酒店 × {n}","ln.single":"单人房附加费 × {n}","ln.meal":"{meal}，13晚 × {n}","ln.tix":"门票与活动 × {n}","ln.fest":"{name} × {n}",
 "s5.num":"05 — 目的地","s5.h":"六大区域，一座小岛。","s5.p":"自由组合，定制您的路线。","places":"个地点","inc":"包含于",
 "pc.k":"今日明信片","pc.say":"读音",
 "s6.num":"06 — 须知","s6.h":"条款清晰，一目了然。","c.k":"取消政策","c.h":"计划有变怎么办？","c.p":"拖动滑块，查看抵达前任意时间的取消费用。","c.charge":"费用","c.before":"天（抵达前）",
 "c.m0":"不收取取消费用。预付款将退还，扣除银行手续费和不可退还的供应商订金。","c.m1":"收取行程总额的30%。","c.m2":"收取行程总额的75%。","c.m3":"收取行程总额的100%。",
 "enq.k":"规划我的旅程","enq.h":"告诉我们时间，其余交给我们。","enq.p":"由真人回复，通常通过WhatsApp。您确认前不会预订任何内容。",
 "f.name":"您的姓名","f.month":"出行月份","f.journey":"行程","f.who":"出行人数","f.notes":"其他需求","f.ph":"节奏、酒店、纪念日、必去景点…","f.wa":"通过WhatsApp发送","f.mail":"通过邮件发送","f.small":"将打开WhatsApp或邮件应用并预填消息。本页面不会发送任何内容。","f.err":"请填写您的姓名，方便我们回复。","f.custom":"定制行程",
 "foot.s1":"与我们一起探索斯里兰卡。","foot.s2":"配备司机导游的私人环岛游，按您的心愿定制。","foot.explore":"探索","foot.plan":"规划","foot.contact":"联系","foot.cancel":"取消政策","foot.appear":"外观","foot.email":"发送邮件",
 "loc.title":"语言和货币","loc.lang":"语言","loc.cur":"货币","loc.detected":"为{region}推荐","loc.note":"行程详情暂以英文显示。换算价格采用示例汇率，仅供参考；所有报价均以美元计。","loc.done":"完成"
},
hi:{
 "hud":"दिन {d} / 14","dayn":"दिन {d}",
 "nav.journeys":"यात्राएँ","nav.day":"दिन-ब-दिन","nav.how":"हम कैसे योजना बनाते हैं","nav.prices":"कीमतें","nav.dest":"गंतव्य","nav.know":"जानने योग्य","cta.plan":"मेरी यात्रा प्लान करें",
 "hero.eyebrow":"निजी राउंड टूर · श्रीलंका","hero.h1":"श्रीलंका, निजी गाइड के साथ।","hero.lede":"ऐतिहासिक शहर, धुंध भरे पहाड़, वन्यजीव और दक्षिण के शांत समुद्र तट — उतरते ही आपके अपने ड्राइवर-गाइड के साथ।","hero.cta1":"यात्राएँ देखें","hero.cta2":"नक्शे पर 14 दिन देखें",
 "pl.title":"अपनी यात्रा खोजें","pl.q":"3 सवाल","pl.len":"अवधि","pl.int":"सबसे ज़्यादा रुचि","pl.who":"यात्री","pl.show":"दिखाएँ",
 "opt.any":"कोई भी","opt.all":"सब कुछ","opt.culture":"प्राचीन शहर","opt.hills":"चाय और पहाड़","opt.wildlife":"वन्यजीव","opt.beach":"समुद्र तट","opt.north":"उत्तर और पूर्व","adults":"वयस्क",
 "fact1":"आगमन से ड्राइवर-गाइड","fact2":"30+ दिन पहले मुफ़्त रद्दीकरण","fact3":"कीमतें अमेरिकी डॉलर में","hero.caption":"नाइन आर्च ब्रिज, एला · दिन 08",
 "s1.num":"01 — यात्राएँ","s1.h":"द्वीप देखने के पाँच तरीके।","s1.p":"हर रूट निजी है और आपकी तारीखों, गति और होटलों के अनुसार बदला जा सकता है।",
 "all":"सभी","days":"दिन","nights":"रातें","stops":"पड़ाव","price":"कीमत","onreq":"अनुरोध पर","from":"से शुरू","per":"प्रति","person":"व्यक्ति","perperson":"प्रति व्यक्ति","pp":"प्रति व्यक्ति","hotels":"होटल","star":"स्टार",
 "ft.tag":"सिग्नेचर यात्रा","ft.p":"प्राचीन स्थल, पहाड़ों में खूबसूरत ट्रेन यात्राएँ, याला सफ़ारी और सुनहरे दक्षिणी तट पर सुकून भरा अंत। पूरा श्रीलंका एक यात्रा में।","ft.cta1":"दिन-ब-दिन देखें","ft.cta2":"मेरी कीमत जानें",
 "best":"सबसे उपयुक्त","clear":"हटाएँ",
 "s2.num":"02 — दिन-ब-दिन","s2.h":"ग्रैंड राउंड, हर पड़ाव के साथ।","s2.p":"यात्रा-क्रम स्क्रॉल करें, नक्शा आपके साथ द्वीप पर चलेगा।","map.all":"पूरा रूट","dbd.c1":"इस यात्रा की कीमत","dbd.c2":"बदलाव के लिए कहें","day":"दिन","of":"/","overnight":"रात्रि विश्राम","transfer":"ट्रांसफ़र",
 "s3.num":"03 — हम कैसे योजना बनाते हैं","s3.h":"पहले संदेश से हवाई अड्डे तक।","s3.link":"पहला कदम शुरू करें","step":"कदम",
 "st1.h":"अपनी तारीखें बताएँ","st1.p":"अपनी तारीखें, समूह और रुचियाँ WhatsApp या ईमेल से भेजें।","st2.h":"रूट तय करें","st2.p":"हम यात्रा को आपकी गति और चुने गए होटल स्तर के अनुसार ढालते हैं।","st3.h":"कीमतें पक्की करें","st3.p":"बुकिंग अनुरोध पर होटल उपलब्धता के अनुसार अंतिम कीमतें पक्की होती हैं।","st4.h":"उतरिए और चलिए","st4.p":"आपका ड्राइवर-गाइड बंडारनायके अंतरराष्ट्रीय हवाई अड्डे पर मिलेगा।",
 "s4.num":"04 — कीमतें","s4.h":"ग्रैंड राउंड की अनुमानित कीमत।","s4.p":"प्रति व्यक्ति प्रारंभिक दरें। कुछ भी बदलें, कुल राशि अपडेट हो जाएगी।",
 "pr.hotel":"होटल श्रेणी","pr.hotelS":"दो लोगों का कमरा, नाश्ता शामिल","pr.trav":"यात्री","pr.travS":"कम से कम दो वयस्क","pr.adults":"वयस्क","pr.singles":"सिंगल कमरे","pr.meal":"भोजन योजना","pr.mealS":"प्रति व्यक्ति, प्रति रात","pr.tix":"टिकट और अतिरिक्त","pr.tixS":"प्रति व्यक्ति","pr.route":"रूट पर","pr.addons":"अतिरिक्त","pr.fest":"त्योहारी मौसम","pr.included":"शामिल","pr.night":"रात","pr.hb":"हाफ़ बोर्ड के साथ",
 "meal.BB":"कमरा और नाश्ता","meal.HB":"हाफ़ बोर्ड","meal.FB":"फ़ुल बोर्ड","meal.AI":"सब कुछ शामिल",
 "rt.h":"अतिरिक्त रातें · प्रति डबल कमरा","rt.low":"ऑफ़ सीज़न","rt.high":"पीक सीज़न",
 "sum.k":"आपका अनुमान","sum.h":"ग्रैंड राउंड · 14 दिन","sum.tot":"अनुमानित कुल","sum.cta":"यह कोटेशन माँगें","sum.alt":"या ईमेल से भेजें","sum.fine":"यह केवल अनुमान है। कीमतें पुष्टि के समय होटल उपलब्धता पर निर्भर हैं; पीक और त्योहारी मौसम में अतिरिक्त शुल्क लग सकता है। बुकिंग अनुरोध मिलने पर अंतिम कीमत पक्की होती है।","sum.usd":"कोटेशन और भुगतान अमेरिकी डॉलर में","sum.approx":"{cur} में नमूना दरों पर, केवल जानकारी के लिए।",
 "ln.tier":"{tier} होटल × {n}","ln.single":"सिंगल सप्लीमेंट × {n}","ln.meal":"{meal}, 13 रातें × {n}","ln.tix":"टिकट और गतिविधियाँ × {n}","ln.fest":"{name} × {n}",
 "s5.num":"05 — गंतव्य","s5.h":"छह क्षेत्र, एक छोटा द्वीप।","s5.p":"इन्हें मिलाकर अपनी पसंद का रूट बनाइए।","places":"स्थान","inc":"इनमें शामिल",
 "pc.k":"आज का पोस्टकार्ड","pc.say":"उच्चारण",
 "s6.num":"06 — जानने योग्य","s6.h":"पूछने से पहले साफ़ शर्तें।","c.k":"रद्दीकरण नीति","c.h":"अगर योजना बदल जाए?","c.p":"आगमन से पहले किसी भी समय का शुल्क देखने के लिए खिसकाएँ।","c.charge":"शुल्क","c.before":"दिन आगमन से पहले",
 "c.m0":"कोई रद्दीकरण शुल्क नहीं। अग्रिम भुगतान बैंक शुल्क और न लौटाए जाने वाले जमा घटाकर लौटाया जाता है।","c.m1":"कुल टूर मूल्य का 30% लिया जाता है।","c.m2":"कुल टूर मूल्य का 75% लिया जाता है।","c.m3":"कुल टूर मूल्य का 100% लिया जाता है।",
 "enq.k":"मेरी यात्रा प्लान करें","enq.h":"बस कब बताइए। बाकी हम संभालेंगे।","enq.p":"एक असली व्यक्ति जवाब देता है, आमतौर पर WhatsApp पर। आपकी पुष्टि के बिना कुछ बुक नहीं होता।",
 "f.name":"आपका नाम","f.month":"यात्रा का महीना","f.journey":"यात्रा","f.who":"यात्री","f.notes":"हमें क्या जानना चाहिए","f.ph":"गति, होटल, खास मौके, ज़रूरी जगहें…","f.wa":"WhatsApp पर भेजें","f.mail":"ईमेल से भेजें","f.small":"आपका संदेश भरकर WhatsApp या ईमेल ऐप खुलेगा। यह पेज कुछ नहीं भेजता।","f.err":"कृपया अपना नाम लिखें ताकि हम जवाब दे सकें।","f.custom":"अपनी पसंद की यात्रा",
 "foot.s1":"हमारे साथ श्रीलंका खोजिए।","foot.s2":"ड्राइवर-गाइड के साथ निजी राउंड टूर, आपकी इच्छा के अनुसार।","foot.explore":"देखें","foot.plan":"योजना","foot.contact":"संपर्क","foot.cancel":"रद्दीकरण","foot.appear":"रूप","foot.email":"ईमेल करें",
 "loc.title":"भाषा और मुद्रा","loc.lang":"भाषा","loc.cur":"मुद्रा","loc.detected":"{region} के लिए सुझाव","loc.note":"यात्रा का विवरण अभी अंग्रेज़ी में है। बदली गई कीमतें नमूना दरों पर हैं; हर कोटेशन अमेरिकी डॉलर में होता है।","loc.done":"हो गया"
}
};

/* ---------- detection ---------- */
function detect(){
  const langs=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"]).map(l=>String(l));
  let lang="en";for(const l of langs){const k=l.slice(0,2).toLowerCase();if(LANGS[k]){lang=k;break}}
  let region="";for(const l of langs){const m=l.match(/[-_]([A-Za-z]{2})$/);if(m){region=m[1].toUpperCase();break}}
  if(!region){try{region=TZ_REGION[Intl.DateTimeFormat().resolvedOptions().timeZone]||""}catch(e){}}
  const cur=REGION_CUR[region]||"USD";
  return {lang,cur,region};
}
function regionName(code,lang){try{return new Intl.DisplayNames([LANGS[lang].loc],{type:"region"}).of(code)}catch(e){return code}}

/* ---------- state ---------- */
const saved=(()=>{try{return JSON.parse(localStorage.getItem("dsc_locale")||"null")}catch(e){return null}})();
const det=detect();
const S={lang:(saved&&LANGS[saved.lang])?saved.lang:det.lang,cur:(saved&&CURRENCIES[saved.cur])?saved.cur:det.cur,region:det.region};
const subs=[];

function t(key,vars){let s=(T[S.lang]&&T[S.lang][key])||T.en[key]||key;if(vars)for(const k in vars)s=s.replace("{"+k+"}",vars[k]);return s}
function cf(){const c=S.cur;return new Intl.NumberFormat(LANGS[S.lang].loc,{style:"currency",currency:c,maximumFractionDigits:0,currencyDisplay:c==="USD"?"code":"narrowSymbol"})}
function conv(usd){const c=S.cur;return c==="USD"?Math.round(usd):roundNice(usd*CURRENCIES[c].r,c)}
function fixUSD(s){return S.cur==="USD"?s.replace(/USD\s?|\s?USD/,"US$"):s}
function money(usd,opts){opts=opts||{};const c=S.cur;
  return (c!=="USD"&&!opts.noApprox?"≈ ":"")+(opts.plus?"+":"")+fixUSD(cf().format(conv(usd)))}
/* true when this locale writes the currency after the number (e.g. "2.962 €") */
function symbolTrails(){const parts=cf().formatToParts(1000);const ci=parts.findIndex(p=>p.type==="currency"),ii=parts.findIndex(p=>p.type==="integer");return ci>ii}
function roundNice(v,c){if(["INR","JPY","RUB","LKR"].includes(c))return Math.round(v/10)*10;return Math.round(v)}
function moneyRange(a,b){if(conv(a)===conv(b))return money(a);
  const nf=new Intl.NumberFormat(LANGS[S.lang].loc,{maximumFractionDigits:0}),ap=S.cur!=="USD"?"≈ ":"";
  if(symbolTrails())return ap+nf.format(conv(a))+"–"+fixUSD(cf().format(conv(b)));
  return ap+fixUSD(cf().format(conv(a)))+"–"+nf.format(conv(b))}
function usd(n){return "US$"+Math.round(n).toLocaleString("en-US")}
function set(next){if(next.lang&&LANGS[next.lang])S.lang=next.lang;if(next.cur&&CURRENCIES[next.cur])S.cur=next.cur;
  try{localStorage.setItem("dsc_locale",JSON.stringify({lang:S.lang,cur:S.cur}))}catch(e){}apply()}
function apply(){
  document.documentElement.lang=S.lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n)});
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{el.placeholder=t(el.dataset.i18nPh)});
  document.querySelectorAll("[data-usd]").forEach(el=>{el.textContent=money(+el.dataset.usd)});
  subs.forEach(fn=>{try{fn()}catch(e){console.error(e)}});
}
/* Later: swap sample rates for live ones, e.g.
   fetch("https://your-fx-endpoint/latest?base=USD").then(r=>r.json()).then(j=>{for(const c in CURRENCIES)if(j.rates[c])CURRENCIES[c].r=j.rates[c];apply()}) */
function loadLiveRates(){/* intentionally empty in the prototype */}

return {S,t,money,moneyRange,usd,set,apply,onChange:fn=>subs.push(fn),LANGS,CURRENCIES,RATES_SOURCE,regionName,detected:det};
})();
