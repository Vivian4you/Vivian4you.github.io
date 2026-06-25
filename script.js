(function(){

/* ================= VOLLSTÄNDIGER BIBELKANON (für Verzeichnis) ================= */
const FULL_BIBLE = [
 {ab:'Gen',name:'Genesis',ch:50,test:'AT'},{ab:'Ex',name:'Exodus',ch:40,test:'AT'},
 {ab:'Lev',name:'Levitikus',ch:27,test:'AT'},{ab:'Num',name:'Numeri',ch:36,test:'AT'},
 {ab:'Dtn',name:'Deuteronomium',ch:34,test:'AT'},{ab:'Jos',name:'Josua',ch:24,test:'AT'},
 {ab:'Ri',name:'Richter',ch:21,test:'AT'},{ab:'Ruth',name:'Ruth',ch:4,test:'AT'},
 {ab:'1Sam',name:'1. Samuel',ch:31,test:'AT'},{ab:'2Sam',name:'2. Samuel',ch:24,test:'AT'},
 {ab:'1Kö',name:'1. Könige',ch:22,test:'AT'},{ab:'2Kö',name:'2. Könige',ch:25,test:'AT'},
 {ab:'1Chr',name:'1. Chronik',ch:29,test:'AT'},{ab:'2Chr',name:'2. Chronik',ch:36,test:'AT'},
 {ab:'Esra',name:'Esra',ch:10,test:'AT'},{ab:'Neh',name:'Nehemia',ch:13,test:'AT'},
 {ab:'Est',name:'Ester',ch:10,test:'AT'},{ab:'Hi',name:'Hiob',ch:42,test:'AT'},
 {ab:'Ps',name:'Psalmen',ch:150,test:'AT'},{ab:'Spr',name:'Sprüche',ch:31,test:'AT'},
 {ab:'Pred',name:'Prediger',ch:12,test:'AT'},{ab:'Hld',name:'Hoheslied',ch:8,test:'AT'},
 {ab:'Jes',name:'Jesaja',ch:66,test:'AT'},{ab:'Jer',name:'Jeremia',ch:52,test:'AT'},
 {ab:'Kla',name:'Klagelieder',ch:5,test:'AT'},{ab:'Hes',name:'Hesekiel',ch:48,test:'AT'},
 {ab:'Dan',name:'Daniel',ch:12,test:'AT'},{ab:'Hos',name:'Hosea',ch:14,test:'AT'},
 {ab:'Joel',name:'Joel',ch:3,test:'AT'},{ab:'Am',name:'Amos',ch:9,test:'AT'},
 {ab:'Obd',name:'Obadja',ch:1,test:'AT'},{ab:'Jona',name:'Jona',ch:4,test:'AT'},
 {ab:'Mi',name:'Micha',ch:7,test:'AT'},{ab:'Nah',name:'Nahum',ch:3,test:'AT'},
 {ab:'Hab',name:'Habakuk',ch:3,test:'AT'},{ab:'Zef',name:'Zefanja',ch:3,test:'AT'},
 {ab:'Hag',name:'Haggai',ch:2,test:'AT'},{ab:'Sach',name:'Sacharja',ch:14,test:'AT'},
 {ab:'Mal',name:'Maleachi',ch:4,test:'AT'},
 {ab:'Mt',name:'Matthäus',ch:28,test:'NT'},{ab:'Mk',name:'Markus',ch:16,test:'NT'},
 {ab:'Lk',name:'Lukas',ch:24,test:'NT'},{ab:'Joh',name:'Johannes',ch:21,test:'NT'},
 {ab:'Apg',name:'Apostelgeschichte',ch:28,test:'NT'},{ab:'Röm',name:'Römer',ch:16,test:'NT'},
 {ab:'1Kor',name:'1. Korinther',ch:16,test:'NT'},{ab:'2Kor',name:'2. Korinther',ch:13,test:'NT'},
 {ab:'Gal',name:'Galater',ch:6,test:'NT'},{ab:'Eph',name:'Epheser',ch:6,test:'NT'},
 {ab:'Phil',name:'Philipper',ch:4,test:'NT'},{ab:'Kol',name:'Kolosser',ch:4,test:'NT'},
 {ab:'1Thess',name:'1. Thessalonicher',ch:5,test:'NT'},{ab:'2Thess',name:'2. Thessalonicher',ch:3,test:'NT'},
 {ab:'1Tim',name:'1. Timotheus',ch:6,test:'NT'},{ab:'2Tim',name:'2. Timotheus',ch:4,test:'NT'},
 {ab:'Tit',name:'Titus',ch:3,test:'NT'},{ab:'Phlm',name:'Philemon',ch:1,test:'NT'},
 {ab:'Hebr',name:'Hebräer',ch:13,test:'NT'},{ab:'Jak',name:'Jakobus',ch:5,test:'NT'},
 {ab:'1Petr',name:'1. Petrus',ch:5,test:'NT'},{ab:'2Petr',name:'2. Petrus',ch:3,test:'NT'},
 {ab:'1Joh',name:'1. Johannes',ch:5,test:'NT'},{ab:'2Joh',name:'2. Johannes',ch:1,test:'NT'},
 {ab:'3Joh',name:'3. Johannes',ch:1,test:'NT'},{ab:'Jud',name:'Judas',ch:1,test:'NT'},
 {ab:'Offb',name:'Offenbarung',ch:22,test:'NT'}
];

/* ================= LESEPLAN: 6 PHASEN, THEOLOGISCH AUSGEARBEITET ================= */
const PHASES = [
{id:'p1', title:'Phase 1 — Fundament', subtitle:'Die große Geschichte beginnt', color:'#34d399', tip:null, sections:[
 {at:'Gen 1–7', nt:'Joh 1–7', title:'Am Anfang …', text:`Beide Bücher beginnen mit "Am Anfang" – Genesis mit der Schöpfung der Welt, Johannes mit der Schöpfung durch das ewige Wort, das Mensch wurde. In wenigen Kapiteln entfalten sich Schöpfung, Sündenfall, Gottes Liebe ("So hat Gott die Welt geliebt"), die Flut und Jesus als "Brot des Lebens". Gott zeigt sich von der ersten Seite an als Schöpfer, der trotz menschlichem Versagen nicht aufgibt, sondern selbst Rettung schafft.`, impulse:`Beide Bücher beginnen mit „Am Anfang…" — was sagt das über Gottes Charakter als Schöpfer aus?`},
 {at:'Gen 8–18', nt:'Joh 8–14', title:'Abraham & die Zeichen Jesu', text:`Nach der Flut schließt Gott einen Bund mit Noah, und kurz darauf ruft er Abram ins völlig Unbekannte – "Geh aus deinem Land". Parallel offenbart Jesus sich durch große "Ich bin"-Worte und heilt einen Blindgeborenen, bevor er seinen Jüngern beim Abschied Trost zuspricht. Gott ruft Menschen immer wieder ins Ungewisse, gibt ihnen aber zugleich verlässliche Zusagen seiner Gegenwart.`, impulse:`Gott ruft Abram ins Unbekannte — Johannes 14 zeigt denselben Gott. Was bedeutet das für dein Vertrauen?`},
 {at:'Gen 19–30', nt:'Joh 15–21', title:'Isaak, Jakob & das Kreuz', text:`Diese Kapitel führen von Sodoms Untergang über Isaaks Opferung und Jakobs Flucht bis zu seiner Traumvision von der Himmelsleiter. Parallel betet Jesus eindringlich für seine Jünger, geht ans Kreuz und erscheint auferstanden mit dem Auftrag: "Folge mir nach." Gottes Treue zieht sich über Generationen und gipfelt im Kreuz, das alle vorherigen Opfer endgültig erfüllt.`, impulse:`Johannes endet mit „Folge mir nach" — was bedeutet das für dich persönlich, jetzt, heute Abend?`},
 {at:'Gen 31–41', nt:'Mk 1–5', title:'Josef & Markus beginnt', text:`Jakob kehrt heim, doch sein Sohn Josef wird von seinen Brüdern verkauft und landet im Gefängnis, bevor er erhöht wird. Markus beginnt parallel mit Jesu Taufe und ersten Wundern, bei denen er trotz Ablehnung Heilung und Macht über Krankheit und Naturgewalten zeigt. Gott nutzt selbst Verrat und Leid, um am Ende größere Rettung zu bewirken.`, impulse:`Josef wird verraten und erhöht — Markus zeigt dasselbe Muster bei Jesus. Siehst du Gott auch in deinen schwierigen Phasen?`},
 {at:'Gen 42–50', nt:'Mk 6–10', title:'Josefs Versöhnung & Jesu Weg', text:`Josefs Brüder stehen ihm gegenüber, bis er sich offenbart und großzügig vergibt – gipfelnd in: "Ihr gedachtet es böse, Gott aber gedachte es gut." Markus zeigt parallel, wie Jesus seinen Weg zum Kreuz entschlossen fortsetzt, samt Verklärung und Leidensankündigung. Gottes Fähigkeit, selbst Böses zu etwas Gutem zu wenden, zieht sich durch beide Geschichten.`, impulse:`Gen 50,20 ist einer der stärksten Sätze der Bibel — was heißt das für etwas Schwieriges in deinem Leben?`},
 {at:'Ex 1–12', nt:'Mk 11–16', title:'Mose wird gerufen', text:`Mose wird am brennenden Dornbusch berufen und konfrontiert den Pharao mit den Plagen, bis Israel beim Passah befreit wird. Markus erreicht parallel seinen Höhepunkt mit Einzug, Verrat, Kreuzigung und Auferstehung am Passahfest. Das Passahlamm und das Lamm Gottes am Kreuz zeigen denselben rettenden Gott, der Befreiung durch ein Opfer schenkt.`, impulse:`Das Passahlamm (Ex 12) und das Kreuz (Mk 15) — siehst du die Verbindung? Was bedeutet das für dich persönlich?`},
 {at:'Ex 13–25', nt:null, title:'Befreiung & der Sinai', text:`Israel zieht trocken durchs Meer, singt ein Triumphlied, erhält Manna und Wasser aus dem Fels und empfängt am Sinai die Zehn Gebote. Ohne NT-Parallele kannst du hier tiefer in Exodus eintauchen und sehen, wie Gott sein befreites Volk mit klaren Lebensregeln ausstattet. Befreiung durch Gott führt immer auch zu einem neuen, geordneten Leben mit ihm.`, impulse:`Markus hast du jetzt abgeschlossen — was hat dich an seiner Darstellung von Jesus am meisten beschäftigt?`},
 {at:'Ex 26–40', nt:null, title:'Das Heiligtum & Abschluss', text:`Die letzten Kapitel beschreiben den Bau der Stiftshütte, die Priestereinsetzung, den Rückfall zum goldenen Kalb und die Bundeserneuerung. Phase 1 endet damit, dass Gottes Herrlichkeit tatsächlich in die fertige Stiftshütte einzieht – Gott wohnt mitten unter seinem Volk. Trotz menschlichem Versagen bleibt Gottes Entschluss, bei seinem Volk zu wohnen, bestehen.`, impulse:`Blättere durch dein Notizbuch — welche 3 Sätze über Gott hast du dir gemerkt? Was hat sich in deiner Beziehung zu ihm verändert?`}
]},

{id:'p2', title:'Phase 2 — Gesetz & Struktur', subtitle:'Wie Gott sein Volk formt', color:'#60a5fa',
 tip:'Levitikus klingt trocken – frage beim Lesen: Was sagt das Opfersystem über Gottes Heiligkeit und seine Lösung aus?',
 sections:[
 {at:'Lev 1–7', nt:'Lk 1–2', title:'Opfer & Ankunft des Opferlammes', text:`Levitikus eröffnet mit detaillierten Opfervorschriften – Gott zeigt, dass Sünde einen Preis hat, aber auch einen Weg zur Versöhnung. Lukas beginnt mit der Geburt dessen, der all diese Opfer einmal endgültig erfüllen wird. Gottes Charakter zeigt sich hier doppelt: er fordert Heiligkeit, aber er sorgt selbst für den Weg dorthin.`, impulse:`Welches "Opfer" – welchen Bereich deines Lebens – möchtest du Gott heute bewusst übergeben?`},
 {at:'Lev 8–10', nt:'Lk 3–4', title:'Priester eingesetzt – Jesus gesalbt', text:`Aaron und seine Söhne werden feierlich als Priester eingesetzt, um zwischen Gott und Volk zu vermitteln. Lukas erzählt von Jesu Taufe und Versuchung – seiner Einsetzung in seinen Dienst als der wahre Mittler. Nadabs und Abihus tödlicher Fehler erinnert daran, dass Nähe zu Gott niemals leichtfertig ist.`, impulse:`Wo brauchst du heute einen Mittler zwischen dir und Gott – und wie tröstet dich, dass Jesus genau das ist?`},
 {at:'Lev 11–15', nt:'Lk 5–6', title:'Reinheit & Heilung', text:`Levitikus unterscheidet rein und unrein, um Israel auf Gottes Heiligkeit hinzuweisen. Jesus dagegen berührt Aussätzige und Kranke und macht sie rein, statt sich fernzuhalten. Gottes Charakter zeigt sich doppelt: er nimmt Reinheit ernst, aber seine Liebe geht noch weiter zum Unreinen.`, impulse:`Welchen Teil deines Lebens hältst du für "zu unrein", um Jesus damit zu kommen?`},
 {at:'Lev 16–17', nt:'Lk 7–8', title:'Versöhnungstag & rettender Glaube', text:`Am Versöhnungstag trägt ein Bock symbolisch die Schuld des Volkes hinaus – ein Bild, das im Kreuz seine Erfüllung findet. Lukas zeigt parallel Menschen, deren Glaube sie rettet: die sündige Frau, der Hauptmann, die blutflüssige Frau. Gott sucht nicht nur Opfer, sondern Vertrauen, das sich an ihn klammert.`, impulse:`Wofür brauchst du heute einen "Sündenbock" – und wo lädt dich Jesus ein, ihm stattdessen einfach zu vertrauen?`},
 {at:'Lev 18–20', nt:'Lk 9–10', title:'Sei heilig & sieh den Nächsten', text:`Das Heiligkeitsgesetz fordert: "Seid heilig, denn ich bin heilig." Lukas erzählt vom barmherzigen Samariter, der genau das praktisch macht: heilige Liebe zum Nächsten, über Grenzen hinweg. Gottes Heiligkeit ist nie nur Abgrenzung, sondern wird sichtbar in konkreter Barmherzigkeit.`, impulse:`Wer ist heute dein "Samariter-Nächster", an dem vorbeizugehen leicht wäre?`},
 {at:'Lev 21–22', nt:'Lk 11–13', title:'Heilige Priester & ein heiliges Herz', text:`Die besonderen Maßstäbe für Priester zeigen, wie ernst Gott Repräsentation vor ihm nimmt. Jesus warnt die Pharisäer genau davor, äußerlich heilig zu erscheinen, während das Herz leer bleibt. Gott will keine Fassade, sondern echte Hingabe von innen heraus.`, impulse:`Wo lebst du eher eine äußere Form der Frömmigkeit als eine echte innere Beziehung zu Gott?`},
 {at:'Lev 23–25', nt:'Lk 14–16', title:'Feste der Freude & das große Gastmahl', text:`Israels Festkalender erinnert das Volk regelmäßig an Gottes Rettung und Fürsorge. Jesus erzählt vom großen Gastmahl, zu dem alle eingeladen sind, auch die, die zunächst ablehnen. Gottes Freude will gefeiert und geteilt werden – mit dir und mit denen, die du nicht erwartest.`, impulse:`Wen würdest du nie zu deinem "Festmahl" einladen – und was sagt das über dein Bild von Gottes Großzügigkeit?`},
 {at:'Lev 26–27', nt:'Lk 17–19', title:'Segen, Fluch & der verlorene Sohn kehrt heim', text:`Levitikus schließt mit der Wahl zwischen Segen bei Treue und Fluch bei Untreue. Lukas erzählt von Zachäus und dem verlorenen Sohn: selbst nach dem größten Abfall ist Heimkehr möglich. Gottes Gerechtigkeit und seine Gnade widersprechen sich nicht, sie gehören zusammen.`, impulse:`Welchen "Heimweg" zu Gott schiebst du im Moment auf?`},
 {at:'Num 1–4', nt:'Lk 20–21', title:'Geordnetes Lager & der wahre Tempel', text:`Volkszählung und Lagerordnung zeigen, wie wichtig Gott Struktur und Berufung sind – jeder Stamm hat seinen Platz. Lukas zeigt Jesus im Tempel, der ankündigt, dass dieses System der Vergänglichkeit unterliegt und durch ihn ersetzt wird. Gott ordnet sein Volk, bindet sich aber nie endgültig an ein Gebäude.`, impulse:`Wo suchst du Sicherheit in äußerer Ordnung statt in der Beziehung zu Gott selbst?`},
 {at:'Num 5–6', nt:'Lk 22–24', title:'Gesegnet sein & der neue Bund', text:`Der Aaronitische Segen gehört zu den bekanntesten Worten des AT. Lukas erzählt vom letzten Abendmahl, Kreuz und Auferstehung – dem neuen Bund, der diesen Segen für alle Völker öffnet. Gottes Segenswunsch für sein Volk erreicht im Kreuz seine größte Tiefe.`, impulse:`Welchen Segen Gottes hast du in einer schweren Zeit besonders gebraucht – und hast du ihn empfangen?`},
 {at:'Num 7–10', nt:'Apg 1–2', title:'Aufbruch vom Sinai & Aufbruch der Kirche', text:`Mit Weihe der Stiftshütte und Aufbruch vom Sinai beginnt für Israel ein neues Kapitel der Wanderung mit Gott. Die Apostelgeschichte beginnt mit Himmelfahrt und Pfingsten – der Geburtsstunde der Kirche. Beide Male ist es Gottes Gegenwart, die den Aufbruch erst möglich macht.`, impulse:`Wo merkst du, dass du dich gerade auf einen neuen Abschnitt mit Gott einlässt?`},
 {at:'Num 11–14', nt:'Apg 3–5', title:'Murren in der Wüste & Mut der ersten Gemeinde', text:`Israel murrt trotz täglicher Versorgung und scheitert an Kleinglauben vor den Kundschaftern. Die junge Gemeinde dagegen wächst trotz Verfolgung im Vertrauen auf Gott. Der Unterschied liegt nicht in den Umständen, sondern darin, worauf der Blick gerichtet ist.`, impulse:`Worüber "murrst" du gerade, obwohl Gott dich bisher täglich versorgt hat?`},
 {at:'Num 15–19', nt:'Apg 6–8', title:'Aufstand gegen Mose & Stephanus bis zum Tod', text:`Korachs Aufstand gegen Gottes eingesetzte Leiter endet katastrophal, während Aarons blühender Stab Gottes Bestätigung zeigt. Stephanus dagegen bleibt selbst im Angesicht des Todes treu und vergibt. Gott bestätigt am Ende immer die, die ihm treu bleiben, auch wenn der Weg durch Leiden führt.`, impulse:`Wo fällt es dir schwer, dich Gottes Führung in deinem Leben unterzuordnen?`},
 {at:'Num 20–21', nt:'Apg 9–10', title:'Wasser aus dem Fels & Petrus öffnet sich', text:`Mose schlägt im Zorn auf den Felsen, statt nur zu sprechen, und verliert dadurch das verheißene Land. Petrus muss lernen, sein enges Bild von "rein und unrein" loszulassen, um die Heiden anzunehmen. Gott korrigiert auch seine treuesten Diener, wenn ihr Herz zu eng wird.`, impulse:`Wo musst du gerade ein zu enges Bild von Gott oder von anderen Menschen loslassen?`},
 {at:'Num 22–25', nt:'Apg 11–12', title:'Bileam & die Gemeinde wächst über Grenzen', text:`Selbst ein heidnischer Seher wie Bileam kann Israel nicht verfluchen, weil Gott sein Volk schützt. Parallel öffnet sich die Gemeinde in Antiochia erstmals bewusst auch Nicht-Juden. Niemand und nichts kann aufhalten, was Gott gesegnet hat.`, impulse:`Wo versuchst du, Gottes Wirken auf einen Rahmen zu begrenzen, den er längst gesprengt hat?`},
 {at:'Num 26–30', nt:'Apg 13–15', title:'Erbrecht der Töchter & das Evangelium für alle Völker', text:`Die Töchter Zelofhads bekommen überraschend ein eigenes Erbrecht – ein kleiner, bedeutender Schritt zu mehr Gerechtigkeit. Beim Apostelkonvent wird entschieden, dass das Evangelium nicht ans jüdische Gesetz gebunden ist. Gott überrascht sein Volk immer wieder mit mehr Gnade, als sie erwartet hätten.`, impulse:`Wo hast du Gott zu klein gedacht – wo könnte seine Gnade weiter reichen, als du glaubst?`},
 {at:'Num 31–36', nt:'Apg 16–18', title:'Asylstädte & das Evangelium erreicht Europa', text:`Die Asylstädte zeigen Gottes Fürsorge selbst für unabsichtliche Täter – Gerechtigkeit mit Raum für Gnade. Paulus bringt währenddessen das Evangelium erstmals nach Europa, bis nach Athen und Korinth. Gottes Schutz und seine Reichweite kennen keine Grenzen.`, impulse:`Wo brauchst du selbst gerade einen "Zufluchtsort" bei Gott?`},
 {at:'Dtn 1–4', nt:'Apg 19–20', title:'Rückblick auf die Wüste & Abschiedsworte in Ephesus', text:`Mose blickt zurück auf 40 Jahre Wüstenwanderung, um Israel an Gottes Treue zu erinnern. Paulus verabschiedet sich von den Ältesten in Ephesus mit einem ähnlichen Rückblick auf treuen Dienst. Ehrliche Rückschau stärkt den Glauben für das, was noch kommt.`, impulse:`Was hat Gott in deiner Lebensgeschichte bisher schon bewiesen, das dir für die Zukunft Mut machen kann?`},
 {at:'Dtn 5–11', nt:'Apg 21–23', title:'Liebe Gott von ganzem Herzen & Paulus wird verhaftet', text:`Mose wiederholt die Zehn Gebote und das Schma Israel – "Du sollst den Herrn lieben mit ganzem Herzen". Paulus wird in Jerusalem verhaftet, bleibt aber von dieser Liebe und Treue zu Gott getragen. Echte Liebe zu Gott hält auch dann, wenn die Umstände schwierig werden.`, impulse:`Ist deine Beziehung zu Gott eher Pflichterfüllung oder wirklich Liebe von ganzem Herzen?`},
 {at:'Dtn 12–18', nt:'Apg 24–26', title:'Recht leben im Land & Paulus vor den Mächtigen', text:`Mose gibt Anweisungen für ein gerechtes Leben im Land, samt Regeln für Führung durch König, Priester und Prophet. Paulus verteidigt sich vor Felix, Festus und Agrippa und bezeugt das Evangelium auch vor Mächtigen. Gottes Ordnung gilt für jede Lebenslage.`, impulse:`Wo hast du die Chance, vor "mächtigen" Menschen ehrlich von deinem Glauben zu sprechen?`},
 {at:'Dtn 19–25', nt:'Apg 27–28', title:'Recht & Mitmenschlichkeit & Sturm nach Rom', text:`Mose ordnet viele Alltagsfragen von Gerechtigkeit bis Mitmenschlichkeit – Gott interessiert sich für jedes Detail des Zusammenlebens. Paulus überlebt einen schweren Sturm und erreicht am Ende sicher Rom. Gottes Fürsorge zeigt sich im Kleinen des Alltags wie im großen Sturm des Lebens.`, impulse:`Wo hast du in einem "Sturm" deines Lebens Gottes Fürsorge im Nachhinein erkannt?`},
 {at:'Dtn 26–28', nt:null, title:'Bund, Segen & Fluch', text:`Israel feiert seine Erstlingsfrüchte als Bundeszeremonie und hört dann die Liste von Segen bei Treue und Fluch bei Untreue. Diese Kapitel zeigen Gottes Ernst: Beziehung mit ihm hat reale Konsequenzen, im Guten wie im Schweren. Gleichzeitig bleibt klar, dass Segen Gottes Wunsch und Ausgangspunkt ist, nicht der Fluch.`, impulse:`Welche "Segenslinien" Gottes in deinem Leben nimmst du dir heute bewusst Zeit, dankbar zu sehen?`},
 {at:'Dtn 29–30', nt:null, title:'Bundeserneuerung & die Wahl des Lebens', text:`Mose ruft Israel zur Bundeserneuerung und stellt sie vor eine klare Wahl: "Leben und Gutes oder Tod und Böses." Das Wort ist ihnen nicht zu fern, sondern nahe – in ihrem Mund und Herzen. Gott zwingt niemanden, aber er macht die Konsequenzen der Entscheidung schonungslos klar.`, impulse:`Welche konkrete Entscheidung für "das Leben" steht bei dir gerade an?`},
 {at:'Dtn 31–34', nt:null, title:'Mose stirbt – aber Gottes Plan geht weiter', text:`Mose segnet die Stämme, besteigt den Berg Nebo und stirbt, ohne das Land selbst zu betreten. Gott begräbt ihn persönlich, doch die Verheißung lebt in Josua weiter. Gottes Pläne sind größer als das Leben eines Einzelnen – auch unvollendete Wege haben bei ihm Sinn.`, impulse:`Womit musst du loslassen, dass DU es nicht zu Ende bringen wirst, sondern Gott durch andere weiterführt?`}
]},

{id:'p3', title:'Phase 3 — Geschichte & Könige', subtitle:'Israel zwischen Treue und Versagen', color:'#d8b26b',
 tip:'Römer ist der theologische Herzschlag des NT – lies ihn langsam.',
 sections:[
 {at:'Jos 1–5', nt:'Röm 1–4', title:'Mutig ins Land & gerecht durch Glauben', text:`Gott ermutigt Josua mehrfach: "Sei stark und mutig, denn ich bin mit dir." Paulus zeigt, dass niemand sich sein "verheißenes Land" – Gerechtigkeit vor Gott – verdienen kann, sondern es im Glauben empfängt, wie Abraham. Gottes Zusagen tragen, lange bevor wir sie selbst erkämpft haben.`, impulse:`Wo brauchst du heute Mut, weil Gott schon vorausgegangen ist?`},
 {at:'Jos 6–12', nt:'Röm 5–8', title:'Mauern fallen & freies Leben im Geist', text:`Jerichos Mauern fallen nicht durch Kriegskunst, sondern durch Gehorsam und Vertrauen. Paulus beschreibt, wie wir durch den Geist von der Macht der Sünde befreit werden – auch das kein eigenes Werk. Gottes größte Siege geschehen oft anders, als wir es planen würden.`, impulse:`Welche "Mauer" in deinem Leben wartet darauf, dass du Gott vertraust statt selbst zu kämpfen?`},
 {at:'Jos 13–21', nt:'Röm 9–11', title:'Landverteilung & Gottes Treue zu Israel', text:`Jeder Stamm erhält sein Erbe im Land – ein sichtbares Zeichen der Erfüllung alter Verheißungen. Paulus ringt mit der Frage, ob Gott Israel je verlassen hat, und antwortet klar: nein. Gottes Versprechen haben kein Verfallsdatum – jedenfalls nicht von seiner Seite.`, impulse:`Welche alte Verheißung Gottes in deinem Leben wartet noch auf ihre Erfüllung?`},
 {at:'Jos 22–24', nt:'Röm 12–16', title:'Dient dem Herrn & lebt als Opfer', text:`Josua fordert das Volk zur Entscheidung auf: "Wem wollt ihr dienen?" und sie wählen den Herrn. Paulus ruft die Gemeinde auf, sich selbst als "lebendiges Opfer" Gott hinzugeben – im ganz normalen Alltag. Glaube ist nie nur eine einmalige Entscheidung, sondern tägliche Hingabe.`, impulse:`Wie sieht für dich heute ganz praktisch aus, dich als "lebendiges Opfer" hinzugeben?`},
 {at:'Ri 1–2', nt:null, title:'Unvollendete Landnahme', text:`Israel vertreibt die Bewohner des Landes nur teilweise und beginnt, deren Götter zu übernehmen. Der Engel des Herrn weint förmlich über diesen Kompromiss, der Generationen prägen wird. Halbherziger Gehorsam hat oft langfristigere Folgen, als wir im Moment ahnen.`, impulse:`Wo lebst du gerade einen "halbherzigen" Gehorsam, der dich langfristig einholen könnte?`},
 {at:'Ri 3–5', nt:null, title:'Ehud & Debora – ungewöhnliche Retter', text:`Gott benutzt einen Linkshänder und eine Frau (Debora), um sein Volk zu retten – beide nicht die erwartete Wahl. Sein Charakter zeigt sich: er sucht keine perfekten Helden, sondern verfügbare. Wenn Israel zu ihm schreit, antwortet er – wieder und wieder.`, impulse:`Fühlst du dich zu "unwichtig" oder ungewöhnlich, um von Gott gebraucht zu werden?`},
 {at:'Ri 6–9', nt:null, title:'Gideon & Abimelech – Stärke aus Schwachheit, Macht ohne Gott', text:`Gideon zweifelt, doch Gott reduziert sein Heer bewusst, damit klar wird: Gott selbst rettet. Sein Sohn Abimelech ergreift Macht mit Gewalt und endet katastrophal. Echte Stärke kommt aus Abhängigkeit von Gott, nicht aus Selbstermächtigung.`, impulse:`Wo verlässt du dich gerade eher auf eigene Stärke als auf Gottes Kraft in deiner Schwachheit?`},
 {at:'Ri 10–12', nt:null, title:'Jeftah – ein unbedachtes Gelübde', text:`Jeftah rettet Israel militärisch, doch sein unüberlegtes Gelübde führt zu tragischen Folgen für seine Familie. Selbst aufrichtiger Glaube kann durch unbedachte Worte großen Schaden anrichten. Gott segnet Mut, aber Weisheit und Nachdenken bleiben wichtig.`, impulse:`Welche unbedachten Versprechen hast du in deinem Leben gemacht – und wie gehst du heute damit um?`},
 {at:'Ri 13–16', nt:null, title:'Samson – Berufung trotz Versagen', text:`Samson wird von Geburt an für Gott berufen, doch sein Leben ist geprägt von Eigenwillen bis zum letzten Kapitel. Trotzdem nutzt Gott selbst seinen letzten, gebrochenen Akt noch zur Rettung Israels. Gottes Berufung kann auch durch ein unvollkommenes Leben hindurch wirksam bleiben.`, impulse:`Wo hast du das Gefühl, deine Berufung durch eigenes Versagen "verspielt" zu haben?`},
 {at:'Ri 17–21', nt:null, title:'Jeder tat, was ihm recht schien', text:`Das Buch endet in moralischem Chaos, weil "jeder tat, was ihm recht schien". Diese düsteren Schlusskapitel zeigen, wohin ein Leben ohne klare Ausrichtung an Gott führt. Es ist die dunkle Folie, vor der Israels Wunsch nach einem König verständlich wird.`, impulse:`Wo orientierst du dich eher an dem, was dir "recht scheint", statt an Gottes Maßstäben?`},
 {at:'1Sam 1–3', nt:'Gal 1–2', title:'Samuel berufen & Paulus berufen', text:`Die kinderlose Hanna betet verzweifelt und Gott schenkt ihr Samuel, den er schon als Kind beruft – "Rede, Herr, dein Knecht hört". Paulus erzählt von seiner eigenen radikalen Berufung, die er direkt von Gott empfangen hat. Gott ruft Menschen oft überraschend und früher, als sie selbst es erwarten.`, impulse:`Wann hast du das letzte Mal bewusst "Rede, Herr" gebetet und wirklich zugehört?`},
 {at:'1Sam 4–7', nt:'Gal 3–4', title:'Die Bundeslade & Kinder der Verheißung', text:`Israel verliert die Bundeslade im Krieg, weil sie das Symbol mit Gottes Gegenwart selbst verwechseln. Paulus erinnert die Galater, dass sie nicht durch Gesetzeswerke, sondern durch Glauben "Kinder der Verheißung" sind. Äußere religiöse Zeichen ersetzen niemals echte Beziehung zu Gott.`, impulse:`Welche äußeren "Zeichen" deines Glaubens verwechselst du manchmal mit echter Gottesbeziehung?`},
 {at:'1Sam 8–12', nt:'Gal 5–6', title:'Ein König wird gewählt & Frucht des Geistes', text:`Israel fordert einen menschlichen König, obwohl Gott ihr König war – ein Zeichen von Misstrauen. Paulus stellt dem das Leben "im Geist" entgegen, dessen Frucht Liebe, Freude und Frieden ist. Gottes Reich funktioniert anders als jedes menschliche Königreich.`, impulse:`Wo vertraust du eher menschlichen "Königen" (Macht, Kontrolle, Status) als der Führung Gottes?`},
 {at:'1Sam 13–15', nt:'Eph 1–3', title:'Sauls Ungeduld & Gottes ewiger Plan', text:`Saul opfert eigenmächtig, weil er Samuels Verzögerung nicht ertragen kann, und verliert das Königtum. Paulus entfaltet Gottes Plan, der "vor Grundlegung der Welt" angelegt war. Gottes Zeitplan verlangt oft mehr Geduld, als wir aufbringen wollen.`, impulse:`Wo läufst du Gott gerade ungeduldig voraus, statt auf sein Timing zu vertrauen?`},
 {at:'1Sam 16–20', nt:'Eph 4–6', title:'David & Jonathan & das Leben in der Gemeinde', text:`Die tiefe Freundschaft zwischen David und Jonathan zeigt Treue trotz politischer Spannungen und Lebensgefahr. Epheser 4-6 beschreibt, wie Gemeinde – Ehe, Familie, Freundschaft – in Liebe und Wahrheit funktionieren soll. Echte, gottzentrierte Beziehungen halten auch unter Druck.`, impulse:`Welche Freundschaft in deinem Leben spiegelt diese Art von Treue – und pflegst du sie genug?`},
 {at:'1Sam 21–26', nt:null, title:'David auf der Flucht', text:`David verschont zweimal Sauls Leben, obwohl er ihn hätte töten können, weil er Gottes Gesalbten respektiert. In Höhlen und Wüsten lernt David, auf Gott statt auf eigene Macht zu vertrauen. Gottes Zeit für Erhöhung kommt oft erst nach einer langen Zeit der Geduld im Verborgenen.`, impulse:`Wo wartest du gerade "in der Höhle" auf Gottes Timing, anstatt selbst nachzuhelfen?`},
 {at:'1Sam 27–31', nt:null, title:'Sauls trauriges Ende', text:`Saul sucht in seiner Verzweiflung Rat bei einer Totenbeschwörerin, statt zu Gott umzukehren, und stirbt in der Schlacht. Sein Leben endet als Warnung: Macht ohne anhaltende Gottesbeziehung zerbricht irgendwann. Gleichzeitig zeigt Davids Trauerlied über Saul, dass auch gescheiterte Menschen liebevoll erinnert werden können.`, impulse:`Wo suchst du in schweren Zeiten eher "falsche Ratgeber" als die Stille mit Gott?`},
 {at:'2Sam 1–4', nt:null, title:'David wird König – langsam und schwierig', text:`Trotz Davids Salbung dauert es Jahre voller Kämpfe, bis er über ganz Israel König wird. Gottes Verheißungen erfüllen sich oft nicht sofort, sondern über einen längeren, mühsamen Weg. Geduld und Charakter werden gerade in dieser Zwischenzeit geformt.`, impulse:`Welche Verheißung Gottes wartest du gerade geduldig auf ihre volle Erfüllung?`},
 {at:'2Sam 5–10', nt:null, title:'David als König & der ewige Bund', text:`David erobert Jerusalem, bringt die Bundeslade zurück und erhält in Kapitel 7 die Verheißung eines ewigen Königshauses – eine direkte Linie zu Jesus. Gottes größte Verheißungen kommen oft gerade in Momenten des Erfolgs. Sie zeigen: Gott denkt in Generationen, nicht nur im Moment.`, impulse:`Wofür dankst du Gott gerade in einer guten Phase deines Lebens – und wonach fragst du IHN, statt nur zu genießen?`},
 {at:'2Sam 11–12', nt:null, title:'Davids Sünde mit Batseba', text:`David, der "Mann nach Gottes Herz", begeht Ehebruch und Mord und versucht, es zu vertuschen. Der Prophet Nathan konfrontiert ihn, und Davids ehrliche Reue (Psalm 51) zeigt einen Weg zurück. Gottes Gnade ist groß genug für die schlimmsten Sünden, verlangt aber ehrliche Umkehr.`, impulse:`Welche Sünde versuchst du gerade zu vertuschen, statt sie Gott ehrlich zu bekennen?`},
 {at:'2Sam 13–20', nt:null, title:'Absaloms Aufstand', text:`Die unbearbeiteten Folgen von Davids Sünde ziehen sich durch seine Familie – bis hin zur Rebellion seines eigenen Sohnes. Diese Kapitel zeigen: Sünde hat oft langanhaltende Auswirkungen, selbst nach Vergebung. Gott vergibt vollständig, aber nimmt uns die natürlichen Konsequenzen nicht immer ab.`, impulse:`Welche Konsequenzen einer vergangenen Entscheidung trägst du noch – und wie gehst du mit Gott damit um?`},
 {at:'2Sam 21–24', nt:null, title:'Rückblick: Lieder & Volkszählung', text:`Das Buch endet mit Davids Dank- und Klageliedern sowie einer eigenmächtigen Volkszählung, die Strafe nach sich zieht. David reagiert mit Demut und kauft einen Altar, am selben Ort, wo später der Tempel stehen wird. Selbst am Lebensende bleibt der Weg zurück zu Gott offen.`, impulse:`Wie endet dein heutiger Tag – mit Dank, mit Klage, oder mit beidem ehrlich vor Gott?`},
 {at:'1Kö 1–4', nt:null, title:'Salomos Weisheit', text:`Salomo bittet bei seiner Thronbesteigung nicht um Reichtum, sondern um Weisheit – und erhält beides als Geschenk dazu. Gottes Großzügigkeit übertrifft oft bei weitem, was wir uns selbst zu erbitten trauen. Wahre Priorität in der Bitte zeigt, wonach das Herz wirklich verlangt.`, impulse:`Worum würdest du Gott heute bitten, wenn du wie Salomo wirklich "alles" bekommen könntest?`},
 {at:'1Kö 5–8', nt:null, title:'Der Tempel wird gebaut', text:`Sieben Jahre baut Salomo den Tempel, und bei der Einweihung erfüllt Gottes Herrlichkeit das Haus so stark, dass die Priester nicht mehr dienen können. Salomos Gebet erkennt zugleich an, dass kein Gebäude Gott wirklich fassen kann. Gott wohnt bei seinem Volk, lässt sich aber nie einsperren.`, impulse:`Wo hast du das Gefühl, Gott in ein zu kleines "Gebäude" deiner Vorstellung einsperren zu wollen?`},
 {at:'1Kö 9–11', nt:null, title:'Salomos Abfall', text:`Trotz aller Weisheit lässt sich Salomo durch seine vielen Frauen zu fremden Göttern verführen. Selbst die größte Weisheit schützt nicht automatisch vor falschen Kompromissen im Herzen. Was am Anfang gut beginnt, kann durch schleichende Kompromisse zerbrechen.`, impulse:`Welche kleinen, schleichenden Kompromisse gefährden gerade deine Beziehung zu Gott?`},
 {at:'1Kö 12–16', nt:null, title:'Das Reich zerbricht', text:`Nach Salomo zerbricht das Königreich in Nord und Süd, und eine Reihe untreuer Könige folgt. Die Geschichte zeigt, wie zerstörerisch sich Führung ohne Gottesfurcht auf ganze Generationen auswirkt. Trotzdem bleibt Gottes Verheißung an David bestehen, auch durch dunkle Zeiten hindurch.`, impulse:`Wo zerbricht etwas in deinem Leben, weil grundlegende Treue zu Gott fehlte – und wie hält Gott trotzdem an dir fest?`},
 {at:'1Kö 17–22', nt:null, title:'Elia – ein Prophet voller Mut und Schwäche', text:`Elia fordert mutig den Baalskult heraus und erlebt Gottes Feuer am Karmel, doch flieht kurz danach erschöpft in die Wüste. Gott begegnet ihm dort mit Essen, Schlaf und einer sanften Stimme im Sturm. Selbst die mutigsten Glaubenshelden brauchen Pausen und Gottes sanfte Fürsorge.`, impulse:`Wo bist du gerade erschöpft wie Elia – und was würde es heißen, dir Gottes sanfte Fürsorge zuzulassen?`},
 {at:'2Kö 1–8', nt:null, title:'Elisa – Wunder im Alltag', text:`Elisa wirkt zahlreiche Wunder im ganz normalen Alltag der Menschen – Öl, das nicht ausgeht, vergiftetes Wasser, das genießbar wird. Gott zeigt sich nicht nur in spektakulären Momenten, sondern in den kleinen Nöten gewöhnlicher Menschen. Kein Problem ist zu klein, um Gott damit zu kommen.`, impulse:`Welches "kleine" Alltagsproblem hast du Gott noch nicht wirklich anvertraut?`},
 {at:'2Kö 9–13', nt:null, title:'Die Jehu-Dynastie', text:`Jehu räumt gewaltsam mit dem Baalskult auf, bleibt aber selbst innerlich nicht ganz bei Gott. Diese Spannung zwischen richtigem Handeln und unvollständigem Herzen zieht sich durch mehrere Könige dieser Zeit. Gott schaut tiefer als nur auf die äußeren Taten.`, impulse:`Wo handelst du "richtig", ohne dass dein Herz wirklich dabei ist?`},
 {at:'2Kö 14–17', nt:null, title:'Der Untergang des Nordreichs', text:`Trotz wiederholter prophetischer Warnungen wendet sich das Nordreich immer weiter von Gott ab, bis es ins assyrische Exil fällt. Der Text macht deutlich: Gottes Geduld ist groß, aber nicht endlos, wenn Umkehr beharrlich verweigert wird. Konsequenzen kommen oft erst nach langer, geduldiger Warnung.`, impulse:`Welche Warnung Gottes in deinem Leben hast du schon länger überhört?`},
 {at:'2Kö 18–21', nt:null, title:'Hiskia & Manasse – Gegensätze', text:`Hiskia vertraut Gott radikal angesichts der assyrischen Bedrohung, während sein Sohn Manasse später in schlimmsten Götzendienst zurückfällt. Diese beiden Könige zeigen, wie unterschiedlich Generationen mit dem gleichen Glaubenserbe umgehen können. Glaube wird nicht automatisch vererbt, sondern muss jede Generation neu wählen.`, impulse:`Welchen Glauben möchtest du bewusst an die nächste Generation weitergeben?`},
 {at:'2Kö 22–25', nt:null, title:'Josia & der Untergang Jerusalems', text:`Der junge König Josia findet das verlorene Gesetzbuch wieder und löst eine Erneuerung aus, doch wenige Generationen später fällt Jerusalem trotzdem an Babylon. Das Buch endet nicht hoffnungslos, sondern mit einem kleinen Hoffnungsschimmer für den verbannten König. Selbst im größten Gericht bewahrt Gott einen Rest der Hoffnung.`, impulse:`Wo brauchst du gerade einen kleinen "Hoffnungsschimmer", dass Gott auch im Dunkeln noch wirkt?`}
]},

{id:'p4', title:'Phase 4 — Weisheit & Klage', subtitle:'Die ehrlichsten Bücher der Bibel', color:'#f472b6',
 tip:'Psalmen ist ideal für abends – lies täglich 1–2. Hiob ist für tiefe Abende: er stellt Fragen, die du auch hast.',
 sections:[
 {at:'Ps 1–41', nt:'Mt 1–4', title:'Der Gerechte & der wahre König', text:`Psalm 1-41 zeichnet das Bild des Gerechten, der Tag und Nacht über Gottes Wort nachdenkt, und Davids Klagen voller Vertrauen. Matthäus stellt Jesus als verheißenen König vor, der genau dieses Vertrauen vollkommen lebt – sogar in der Wüste der Versuchung. Gottes Charakter zeigt sich als der treue Fels, zu dem wir wie David fliehen können.`, impulse:`Worüber denkst du gerade "Tag und Nacht" nach – ist es Gottes Wort oder etwas anderes?`},
 {at:'Ps 42–72', nt:'Mt 5–7', title:'Durst nach Gott & die Bergpredigt', text:`Buch II der Psalmen beginnt mit dem Durst der Seele nach Gott "wie ein Hirsch nach frischem Wasser". Die Bergpredigt zeigt, wie ein Leben aussieht, das von diesem Durst geprägt ist – arm im Geist, hungrig nach Gerechtigkeit. Gott sättigt genau die, die ehrlich nach ihm verlangen.`, impulse:`Wonach "dürstet" deine Seele gerade wirklich?`},
 {at:'Ps 73–89', nt:'Mt 8–10', title:'Warum geht es den Bösen gut? & Jesu Macht über Leid', text:`Psalm 73 ringt mit der Frage, warum Gottlosen es oft gut geht – bis der Psalmist im Heiligtum eine neue Perspektive findet. Matthäus zeigt Jesus, der konkret in Leid und Krankheit eingreift. Gottes scheinbares Schweigen ist nie das letzte Wort.`, impulse:`Mit welcher "Warum"-Frage ringst du gerade mit Gott?`},
 {at:'Ps 90–106', nt:'Mt 11–13', title:'Gottes Ewigkeit & Gleichnisse vom Reich', text:`Psalm 90 stellt die Kürze des menschlichen Lebens der Ewigkeit Gottes gegenüber. Jesu Gleichnisse vom Reich Gottes (Senfkorn, Sauerteig) zeigen, wie dieses ewige Reich unauffällig mitten in unserer kurzen Zeit wächst. Gott handelt in geduldigen, langen Linien, auch wenn unser Leben kurz ist.`, impulse:`Wo siehst du gerade kleine, unauffällige Zeichen, dass Gottes Reich in deinem Alltag wächst?`},
 {at:'Ps 107–150', nt:'Mt 14–17', title:'Lob ohne Ende & Verklärung', text:`Buch V der Psalmen endet in einem gewaltigen Crescendo des Lobs – "Alles, was Atem hat, lobe den Herrn". Auf dem Berg der Verklärung leuchtet Jesu Herrlichkeit kurz auf, ein Vorgeschmack auf genau dieses ewige Lob. Anbetung ist die natürliche Antwort, wenn wir Gottes wahre Größe auch nur kurz erblicken.`, impulse:`Wann hast du zuletzt Gott einfach nur gelobt, ohne etwas von ihm zu erbitten?`},
 {at:'Hi 1–2', nt:'Mt 18–20', title:'Hiobs Leiden beginnt & Jesus segnet die Kinder', text:`Hiob verliert in kürzester Zeit alles, bleibt aber zunächst standhaft: "Der Herr hat's gegeben, der Herr hat's genommen." Jesus segnet kindliches, abhängiges Vertrauen und stellt es als Vorbild hin. Gott schätzt das schlichte Vertrauen mehr als die scheinbare Stärke der Erwachsenen.`, impulse:`Wie kindlich-abhängig vertraust du Gott gerade in einer schwierigen Situation?`},
 {at:'Hi 3–14', nt:'Mt 21–23', title:'Hiobs Klage & Streit im Tempel', text:`Hiob klagt bitter und seine Freunde liefern vorschnelle, falsche Erklärungen für sein Leid. Jesus gerät im Tempel in ähnlich harte Auseinandersetzungen mit Führern, die ebenfalls vorschnelle Antworten haben. Echtes Verstehen von Gott braucht oft mehr Ehrlichkeit als schnelle, fertige Antworten.`, impulse:`Wo gibst du dir oder anderen vorschnelle, unehrliche Antworten auf echtes Leid?`},
 {at:'Hi 15–21', nt:'Mt 24–25', title:'Mehr falsche Trostreden & die Endzeitrede', text:`Die Freunde Hiobs setzen ihre falschen Anschuldigungen fort, während Hiob an einem Erlöser festhält, "der zuletzt auf der Erde stehen wird". Jesu Endzeitrede ruft zur Wachsamkeit auf, weil das Ende letztlich in Gottes Hand liegt. Hoffnung auf Gottes letztes Wort trägt durch das dunkelste Mittelteil der Geschichte.`, impulse:`Woran hältst du fest, wenn aktuell vieles in deinem Leben keinen Sinn macht?`},
 {at:'Hi 22–31', nt:'Mt 26–28', title:'Hiobs letzte Verteidigung & das Kreuz', text:`Hiob verteidigt seine Integrität bis zum Schluss, ohne zu verstehen, warum er leidet. Jesus leidet am Kreuz unschuldig das größte Unrecht der Geschichte – und genau darin liegt unsere Erlösung. Manchmal liegt im unverstandenen Leiden eines Gerechten ein größerer Plan Gottes verborgen.`, impulse:`Wo leidest du gerade, ohne den "Warum" zu verstehen – und wie hilft dir der Blick aufs Kreuz?`},
 {at:'Hi 32–37', nt:'Phil 1–2', title:'Elihus Rede & Christus als Vorbild', text:`Der junge Elihu spricht von Gottes Größe und Erziehung durch Leiden, bevor Gott selbst antwortet. Paulus beschreibt Christi radikale Demut als Vorbild – er, der alles hatte, gab alles auf. Wahre Größe zeigt sich in Demut vor Gott, nicht in lauten eigenen Antworten.`, impulse:`Wo könntest du gerade mehr Demut statt eigene "Antworten" brauchen?`},
 {at:'Hi 38–42', nt:'Phil 3–4', title:'Gottes Antwort & "Ich vermag alles durch ihn"', text:`Gott antwortet Hiob nicht mit Erklärungen, sondern mit der Größe der Schöpfung – und Hiob findet Frieden, weil er Gott sieht. Paulus erklärt aus dem Gefängnis: "Ich vermag alles durch den, der mich mächtig macht" – ebenfalls ohne dass sich seine Umstände ändern. Innerer Friede kommt oft nicht durch Antworten, sondern durch Gottes Gegenwart selbst.`, impulse:`Was würde sich ändern, wenn du aufhörst, Antworten zu suchen, und stattdessen Gottes Gegenwart suchst?`},
 {at:'Spr 1–9', nt:'Kol 1–2', title:'Die Weisheit ruft & Christus, in dem alles besteht', text:`Sprüche 1-9 personifiziert die Weisheit, die laut auf den Straßen ruft und zu einem Leben mit Gott einlädt. Kolosser zeigt, dass diese Weisheit letztlich in Christus verkörpert ist, "in dem alle Fülle wohnt". Wahre Weisheit ist am Ende keine Idee, sondern eine Person, der wir folgen können.`, impulse:`In welchem Lebensbereich suchst du Weisheit eher in Ratgebern als direkt in Christus?`},
 {at:'Spr 10–15', nt:'Kol 3–4', title:'Sprichwörter für den Alltag & ein neues Leben', text:`Diese Kapitel reihen praktische Lebensweisheit über Worte, Fleiß und Beziehungen aneinander. Kolosser beschreibt, wie ein "neuer Mensch" in Christus im Alltag aussieht. Gottes Weisheit will nicht nur gewusst, sondern gelebt werden, bis ins kleinste Detail des Alltags.`, impulse:`Welcher konkrete Alltagsbereich braucht bei dir gerade mehr von Gottes Weisheit?`},
 {at:'Spr 16–22', nt:null, title:'Der Herr lenkt die Schritte', text:`Immer wieder betonen diese Sprüche, dass menschliche Pläne wichtig sind, aber letztlich "der Herr die Schritte lenkt". Demut und Selbstkontrolle werden höher geschätzt als Reichtum. Echte Weisheit erkennt die eigenen Grenzen an und vertraut Gottes größerem Plan.`, impulse:`Wo planst du gerade, ohne wirklich Raum für Gottes Lenkung zu lassen?`},
 {at:'Spr 23–29', nt:null, title:'Erziehung, Gerechtigkeit & der gute König', text:`Diese Sprüche sprechen viel über Erziehung, Mäßigung und gerechte Herrschaft. Sie zeigen Gottes Sorge um gesellschaftliche Strukturen, nicht nur um Einzelpersonen. Charakterbildung – bei Kindern wie bei Führenden – liegt Gott besonders am Herzen.`, impulse:`Welchen Charakterzug möchtest du bewusst bei dir formen lassen?`},
 {at:'Spr 30–31', nt:null, title:'Agur, Lemuel & die tüchtige Frau', text:`Agur bittet um die goldene Mitte zwischen Armut und Reichtum, und das Buch endet mit dem Lob der tüchtigen, gottesfürchtigen Frau. Beide Abschnitte zeigen: gelebte Weisheit zeigt sich in Bescheidenheit und treuem Alltag. Gottesfurcht, nicht äußere Maßstäbe, ist der eigentliche Wert.`, impulse:`Woran misst du momentan eher "ein gutes Leben" – an Gottesfurcht oder an äußeren Maßstäben?`},
 {at:'Pred 1–3', nt:null, title:'Alles ist eitel & alles hat seine Zeit', text:`Der Prediger erkennt schmerzlich, wie vergänglich Erfolg und Vergnügen ohne Gott sind – "alles ist Windhauch". Kapitel 3 zeigt zugleich: alles hat seine von Gott bestimmte Zeit. Wahre Erfüllung liegt nicht im Erreichen, sondern im Vertrauen auf Gottes Zeitplan.`, impulse:`Wonach jagst du gerade, das sich am Ende als "Windhauch" erweisen könnte?`},
 {at:'Pred 4–6', nt:null, title:'Gemeinschaft & der Wert der Stille vor Gott', text:`Der Prediger lobt die Kraft echter Gemeinschaft ("zwei sind besser als einer") und mahnt zu Ehrfurcht und wenigen, ehrlichen Worten vor Gott. Beziehungen und Stille vor Gott werden höher bewertet als bloße Geschäftigkeit. Weniger, aber echteres, ist oft mehr wert als viel Lärm.`, impulse:`Wo brauchst du gerade mehr echte Stille vor Gott statt vieler Worte?`},
 {at:'Pred 7–9', nt:null, title:'Weisheit im Angesicht des Todes', text:`Der Prediger stellt fest, dass Tod alle Menschen gleich trifft, ermutigt aber genau deshalb, das Leben dankbar zu genießen. Diese Ehrlichkeit über die Endlichkeit befreit, statt zu lähmen. Ein Leben mit Gott erlaubt echte Freude, ohne die Realität zu verdrängen.`, impulse:`Wie verändert das Bewusstsein der eigenen Endlichkeit, wie du heute leben möchtest?`},
 {at:'Pred 10–12', nt:null, title:'Denk an deinen Schöpfer in jungen Jahren', text:`Der Prediger schließt mit dem Aufruf, Gott schon in der Jugend zu suchen, bevor die "schweren Tage" des Alters kommen. Das Fazit lautet schlicht: "Fürchte Gott und halte seine Gebote." Nach allem Suchen bleibt am Ende nur diese eine, einfache Wahrheit wirklich tragfähig.`, impulse:`Was würde es für deinen heutigen Alltag bedeuten, Gott jetzt bewusst zu "suchen", statt es aufzuschieben?`}
]},

{id:'p5', title:'Phase 5 — Propheten', subtitle:'Gottes Stimme durch die Jahrhunderte', color:'#e2725b',
 tip:'Die kleinen Propheten sind kurz und intensiv. Lies sie wie persönliche Briefe – an dich, nicht nur an Israel.',
 sections:[
 {at:'Jes 1–12', nt:'Hebr 1–2', title:'Der erhabene Gott & der erhabene Sohn', text:`Jesaja beginnt mit Gottes erschütternder Heiligkeit ("Heilig, heilig, heilig") und der Verheißung eines kommenden Immanuel-Königs. Hebräer eröffnet mit der Größe des Sohnes, "durch den Gott die Welt erschaffen hat". Gottes Erhabenheit und seine Nähe zu uns gehören von Anfang an zusammen.`, impulse:`Wie erlebst du Gott gerade mehr – als erhaben fern oder als nah?`},
 {at:'Jes 13–23', nt:'Hebr 3–4', title:'Gericht über die Völker & die wahre Ruhe', text:`Jesaja kündigt Gericht über zahlreiche Nationen an – kein Volk steht außerhalb von Gottes Souveränität. Hebräer lädt zur "Ruhe" Gottes ein, die größer ist als alles, was die Völker suchen. Letzte Sicherheit liegt nie in nationaler Macht, sondern allein in Gott.`, impulse:`Wo suchst du Sicherheit eher in äußeren "Mächten" als in Gottes Ruhe?`},
 {at:'Jes 24–27', nt:'Hebr 5–7', title:'Die Jesaja-Apokalypse & der ewige Priester', text:`Diese Kapitel blicken auf ein endgültiges Gericht und ein großes Festmahl, bei dem Gott "den Tod für immer verschlingt". Hebräer zeigt Jesus als den ewigen Hohepriester nach Melchisedeks Ordnung, der diese endgültige Versöhnung ermöglicht. Gottes letztes Wort ist nicht das Gericht, sondern das Fest des Lebens.`, impulse:`Was würde sich ändern, wenn du heute schon im Licht dieses kommenden Festes leben würdest?`},
 {at:'Jes 28–35', nt:'Hebr 8–10', title:'Wehe-Rufe & ein besserer Bund', text:`Jesaja warnt vor falschem Vertrauen auf politische Bündnisse statt auf Gott. Hebräer beschreibt den neuen Bund, der das Gesetz "ins Herz schreibt", statt nur äußerlich zu fordern. Gott will nicht nur äußeren Gehorsam, sondern ein verändertes Herz.`, impulse:`Wo ist dein Gehorsam gegenüber Gott eher äußerlich als wirklich vom Herzen?`},
 {at:'Jes 36–39', nt:'Hebr 11', title:'Hiskias Glaube & die Galerie des Glaubens', text:`König Hiskia vertraut Gott radikal gegen die assyrische Übermacht und erlebt wunderbare Rettung. Hebräer 11 reiht zahllose Glaubenshelden auf, die genau diese Art von Vertrauen lebten, oft ohne die Erfüllung selbst zu sehen. Glaube bedeutet, Gott auch dann zu vertrauen, wenn die Umstände dagegen sprechen.`, impulse:`In welcher "unmöglichen" Situation könntest du gerade wie Hiskia radikal auf Gott vertrauen?`},
 {at:'Jes 40–55', nt:'Hebr 12–13', title:'Der leidende Gottesknecht & Nachfolge unter Druck', text:`Diese Kapitel ("Tröstet, tröstet mein Volk") gipfeln im leidenden Gottesknecht, der "um unserer Sünde willen durchbohrt" wird – eine klare Jesus-Prophetie. Hebräer ruft dazu auf, "auf Jesus zu schauen", der dieses Leiden tatsächlich erduldete. Gottes größter Trost kommt durch das größte Opfer, das er selbst gebracht hat.`, impulse:`Wo brauchst du gerade Trost – und lässt du zu, dass er aus dem Blick auf Jesu Leiden kommt?`},
 {at:'Jes 56–66', nt:'Jak 1', title:'Neuer Himmel & gelebte Frömmigkeit', text:`Jesaja schließt mit der Vision eines neuen Himmels und einer neuen Erde, fordert aber zugleich praktische Gerechtigkeit. Jakobus fordert, das Wort nicht nur zu hören, sondern zu tun. Gottes große Zukunftsvisionen verändern immer auch das ganz konkrete Heute.`, impulse:`Wo hörst du Gottes Wort, ohne es wirklich in die Tat umzusetzen?`},
 {at:'Jer 1–6', nt:'Jak 2–3', title:'Jeremias Berufung & Glaube, der sich zeigt', text:`Der junge Jeremia wird trotz Zögerns berufen, weil "ich dich kannte, bevor ich dich im Mutterleib formte". Jakobus betont, dass echter Glaube sich immer in Taten und kontrolliertem Reden zeigt. Berufung und gelebter Glaube sind zwei Seiten derselben Medaille.`, impulse:`Wo zeigt sich dein Glaube gerade eher in Worten als in echten Taten?`},
 {at:'Jer 7–10', nt:'Jak 4–5', title:'Falsches Tempel-Vertrauen & geduldiges Beten', text:`Jeremia warnt davor, blind auf den Tempel zu vertrauen, während das Herz fern von Gott ist. Jakobus ruft zu Demut, Geduld und beharrlichem Gebet auf. Äußere religiöse Sicherheit kann gefährlich täuschen, wenn das Herz nicht wirklich bei Gott ist.`, impulse:`Worauf verlässt du dich religiös, ohne dass dein Herz wirklich dabei ist?`},
 {at:'Jer 11–20', nt:null, title:'Jeremias Klagen', text:`Jeremia leidet enorm unter Ablehnung und klagt ehrlich, sogar zornig, vor Gott – "verflucht der Tag, an dem ich geboren wurde". Gott hält diese schonungslose Ehrlichkeit aus, ohne Jeremia zu verstoßen. Auch die tiefste, wütendste Klage hat vor Gott Platz.`, impulse:`Welche ehrliche, vielleicht auch zornige Klage trägst du gerade mit dir, die du Gott noch nicht ausgesprochen hast?`},
 {at:'Jer 21–29', nt:null, title:'Falsche und wahre Propheten', text:`Während falsche Propheten leichten Trost versprechen, sagt Jeremia die harte Wahrheit des Exils voraus – aber auch einen Plan Gottes "des Friedens, nicht des Unheils". Gottes Wahrheit ist manchmal unbequemer, aber zuverlässiger als bequeme Lügen. Sein langfristiger Plan bleibt gut, auch wenn der nächste Schritt schwer ist.`, impulse:`Hörst du gerade eher auf bequeme Stimmen oder auf Gottes manchmal unbequeme Wahrheit?`},
 {at:'Jer 30–33', nt:null, title:'Das Buch der Tröstung & der neue Bund', text:`Mitten im drohenden Untergang verheißt Gott einen neuen Bund, "ich schreibe mein Gesetz in ihr Herz", und Jeremia kauft symbolisch ein Feld als Zeichen der Hoffnung. Selbst im dunkelsten Moment plant Gott schon die Wiederherstellung. Hoffnung und Realismus schließen sich bei Gott nie aus.`, impulse:`Welches "Feld" der Hoffnung könntest du heute kaufen, mitten in einer schwierigen Lage?`},
 {at:'Jer 34–39', nt:null, title:'Der Fall Jerusalems naht', text:`Trotz wiederholter Warnungen weigert sich König Zedekia, auf Gott zu hören, und Jerusalem fällt schließlich an Babylon. Jeremia leidet schwer unter Verfolgung, bleibt aber Gottes Botschaft treu. Beharrlicher Ungehorsam führt irgendwann unweigerlich zu den angekündigten Konsequenzen.`, impulse:`Welche wiederholte Warnung Gottes überhörst du gerade hartnäckig?`},
 {at:'Jer 40–45', nt:null, title:'Nach dem Fall', text:`Auch nach der Zerstörung Jerusalems bleibt ein Rest des Volkes ungehorsam und flieht trotz Gottes Rat nach Ägypten. Jeremia begleitet sein Volk treu weiter, selbst als sie ihn ablehnen. Gottes Treue zu seinen Boten hält auch dann, wenn ihre Botschaft beharrlich ignoriert wird.`, impulse:`Wo bleibst du Gott treu, auch wenn deine Umgebung anders entscheidet?`},
 {at:'Jer 46–52', nt:null, title:'Gericht über die Völker & ein Hoffnungsschimmer', text:`Die letzten Kapitel kündigen Gericht über umliegende Nationen an, doch das Buch endet mit der Begnadigung des verbannten Königs Jojachin. Gottes Souveränität über alle Völker geht Hand in Hand mit konkreter, persönlicher Gnade. Auch am Ende eines langen, dunklen Buches bleibt ein Licht der Hoffnung übrig.`, impulse:`Wo brauchst du gerade ein kleines "Licht der Hoffnung" am Ende einer schweren Zeit?`},
 {at:'Hes 1–3', nt:null, title:'Hesekiels gewaltige Berufungsvision', text:`Hesekiel sieht eine überwältigende Vision von Gottes Thronwagen und wird zum Wächter für Israel berufen. Gottes Größe übersteigt jede menschliche Vorstellung, und doch beruft er gewöhnliche Menschen in seinen Dienst. Verantwortung vor Gott ist ernst zu nehmen, aber sie beginnt immer mit seiner überwältigenden Gegenwart.`, impulse:`Wofür hat Gott dich als "Wächter" in deinem Umfeld eingesetzt?`},
 {at:'Hes 4–11', nt:null, title:'Symbolische Gerichtszeichen & Gottes Herrlichkeit zieht aus', text:`Hesekiel muss durch drastische Zeichenhandlungen das kommende Gericht über Jerusalem ankündigen, und Gottes Herrlichkeit verlässt erschütternd den Tempel. Sünde kann Gottes Gegenwart tatsächlich vertreiben, auch aus einem heiligen Ort. Gottes Abwesenheit ist eine der ernstesten Konsequenzen anhaltender Untreue.`, impulse:`Gibt es Bereiche in deinem Leben, aus denen Gottes Gegenwart sich gerade zurückzieht?`},
 {at:'Hes 12–19', nt:null, title:'Persönliche Verantwortung', text:`Hesekiel betont, dass jeder Einzelne für seine eigenen Entscheidungen vor Gott verantwortlich ist – "der Sohn trägt nicht die Schuld des Vaters". Diese Kapitel widerlegen die Ausrede, nur Opfer der eigenen Geschichte zu sein. Umkehr ist für jeden Menschen, in jeder Generation, immer wieder neu möglich.`, impulse:`Welche Verantwortung schiebst du gerade auf andere ab, die eigentlich bei dir liegt?`},
 {at:'Hes 20–24', nt:null, title:'Israels Geschichte der Untreue', text:`Gott blickt schmerzlich auf Israels lange Untreue zurück, doch handelt immer wieder "um seines Namens willen", nicht weil Israel es verdient hätte. Sein Handeln gründet in seinem eigenen Charakter, nicht in unserer Leistung. Das ist ernüchternd und tief tröstlich zugleich.`, impulse:`Wo verlässt du dich eher auf deine eigene Leistung als auf Gottes Treue um seines eigenen Namens willen?`},
 {at:'Hes 25–32', nt:null, title:'Gericht über die Nationen', text:`Mehrere Kapitel kündigen Gericht über Nachbarvölker an, die sich über Israels Fall gefreut hatten. Gott duldet auf Dauer keine Schadenfreude über das Leid anderer. Sein Gericht ist gerecht und universal, nicht nur auf sein eigenes Volk beschränkt.`, impulse:`Wo freust du dich heimlich über das Scheitern anderer, statt mit ihnen zu fühlen?`},
 {at:'Hes 33–39', nt:null, title:'Neues Herz & das Tal der trockenen Knochen', text:`Gott verheißt ein "neues Herz und einen neuen Geist" und zeigt, wie selbst völlig vertrocknete Knochen wieder lebendig werden können. Diese Bilder zählen zu den stärksten Hoffnungsvisionen der ganzen Bibel. Egal wie tot etwas in deinem Leben scheint, Gottes Geist kann es wieder lebendig machen.`, impulse:`Welcher Bereich deines Lebens fühlt sich an wie "trockene Knochen", der ein neues Herz von Gott braucht?`},
 {at:'Hes 40–48', nt:null, title:'Die Vision des neuen Tempels', text:`Hesekiel schließt mit einer Vision eines neuen, vollkommenen Tempels, aus dem ein heilender Fluss entspringt. Diese Vision deutet weit über einen physischen Tempel hinaus auf Gottes endgültige, heilende Gegenwart bei seinem Volk. Gott plant am Ende immer vollständige Wiederherstellung, nicht nur Wiederaufbau.`, impulse:`Wo sehnst du dich nach Gottes vollständiger, heilender Gegenwart in deinem Leben?`},
 {at:'Dan 1–2', nt:null, title:'Treue im Exil & Nebukadnezars Traum', text:`Daniel und seine Freunde bleiben trotz Druck am babylonischen Hof treu gegenüber Gottes Geboten, und Gott schenkt Daniel die Deutung des königlichen Traums. Treue zu Gott und Erfolg im Beruf schließen sich nicht aus, auch in einer fremden Umgebung. Gott ehrt diskrete, beständige Treue oft auf überraschende Weise.`, impulse:`Wo fällt es dir schwer, in deinem "babylonischen" Umfeld treu zu Gott zu bleiben?`},
 {at:'Dan 3–4', nt:null, title:'Der Feuerofen & Nebukadnezars Demütigung', text:`Die drei Männer im Feuerofen erklären mutig: "Unser Gott kann uns retten – aber selbst wenn nicht, bleiben wir treu." Nebukadnezar wird später durch Wahnsinn gedemütigt, bis er Gottes Souveränität anerkennt. Gott rettet manchmal sichtbar, manchmal nicht – treue Hingabe hängt nicht vom Ausgang ab.`, impulse:`Würdest du Gott auch treu bleiben, "selbst wenn" er dich nicht aus deiner aktuellen Notlage rettet?`},
 {at:'Dan 5–6', nt:null, title:'Schrift an der Wand & die Löwengrube', text:`Belschazzar wird durch die geheimnisvolle Schrift an der Wand gerichtet, während Daniel trotz Löwengrube unversehrt bleibt, weil er Gott treu blieb. Gottes Gericht und seine Bewahrung können dramatisch nah beieinander liegen. Beten und treu bleiben, auch wenn es lebensgefährlich erscheint, lohnt sich bei Gott.`, impulse:`Wofür müsstest du gerade "in die Löwengrube" gehen, um Gott treu zu bleiben?`},
 {at:'Dan 7–8', nt:null, title:'Vier Tiere & der Menschensohn', text:`Daniels Visionen zeigen aufeinanderfolgende Weltreiche, doch am Ende erhält "einer wie ein Menschensohn" ewige Herrschaft von Gott. Diese Vision ist eine der klarsten Vorausdeutungen auf Jesus als den ewigen, gerechten Herrscher. Alle menschlichen Reiche vergehen, nur Gottes Reich durch den Menschensohn bleibt ewig.`, impulse:`Welchem "Weltreich" (Erfolg, Sicherheit, Status) vertraust du gerade mehr als Gottes ewigem Reich?`},
 {at:'Dan 9–10', nt:null, title:'Daniels Gebet & ein Engel kommt', text:`Daniel betet ein eindringliches Bußgebet für sein Volk und erhält Antwort durch einen Engel: "Vom ersten Tag deines Betens an wurde dein Wort gehört." Ausdauerndes Gebet bewegt etwas im Himmel, auch wenn die Antwort verzögert scheint. Gott hört sofort, auch wenn wir die Antwort erst später sehen.`, impulse:`Für wen betest du beharrlich, ohne bisher eine sichtbare Antwort zu sehen?`},
 {at:'Dan 11–12', nt:null, title:'Der Blick bis ans Ende der Zeit', text:`Daniel schließt mit Visionen kommender Konflikte und der Verheißung, dass am Ende "die Verständigen leuchten werden wie der Glanz des Himmels". Gottes Plan reicht weit über die unmittelbare Gegenwart hinaus bis ans endgültige Ziel der Geschichte. Treue Ausdauer wird am Ende belohnt, auch wenn der Weg dorthin lang und unklar erscheint.`, impulse:`Was hilft dir, treu zu bleiben, auch wenn du Gottes ganzen Plan noch nicht überblickst?`},
 {at:'Hos 1–3', nt:null, title:'Hoseas Ehe als Gleichnis', text:`Gott lässt Hosea eine untreue Frau heiraten, um Israels Untreue gegenüber ihm bildhaft zu zeigen – und befiehlt ihm trotzdem, sie zurückzukaufen und zu lieben. Diese schmerzhafte Geschichte zeigt Gottes Liebe, die trotz wiederholter Untreue nicht aufgibt. Gottes Liebe ist treuer, als wir es jemals verdienen würden.`, impulse:`Wo hast du Gottes beharrliche, treue Liebe trotz eigener Untreue erfahren?`},
 {at:'Hos 4–10', nt:null, title:'Anklage gegen Israel', text:`Gott klagt Israel wegen Götzendienst und oberflächlicher Religiosität an – "mein Volk geht zugrunde, weil es ohne Erkenntnis ist". Echte Beziehung zu Gott braucht wirkliches Erkennen, nicht nur äußere Rituale. Gottes Klage ist Ausdruck verletzter Liebe, nicht kalter Distanz.`, impulse:`Wo fehlt dir gerade echte "Erkenntnis" Gottes, mehr als nur religiöse Routine?`},
 {at:'Hos 11–14', nt:null, title:'Wie könnte ich dich aufgeben?', text:`Trotz aller Anklagen bricht Gottes Herz durch: "Wie könnte ich dich aufgeben, Israel?" Das Buch endet mit der Einladung zur Umkehr und der Verheißung neuer Blüte. Gottes Zorn über Sünde ist immer dem Wunsch nach Wiederherstellung untergeordnet.`, impulse:`Welche Einladung zur Umkehr spürst du gerade von Gott, mitten in deinem "Versagen"?`},
 {at:'Joel 1–3', nt:null, title:'Heuschreckenplage & der Geist für alle', text:`Joel beschreibt eine verwüstende Heuschreckenplage als Anlass zur Umkehr und verheißt, dass Gott seinen Geist "über alles Fleisch" ausgießen wird – eine Verheißung, die sich an Pfingsten erfüllt. Krisen können bei Gott zu den größten geistlichen Aufbrüchen führen. Selbst aus Verwüstung kann Gott etwas radikal Neues hervorbringen.`, impulse:`Welche aktuelle "Krise" könnte Gott nutzen, um etwas Neues in dir aufzubrechen?`},
 {at:'Am 1–2', nt:null, title:'Gericht über alle Völker', text:`Amos kündigt Gericht über die Nachbarvölker an – und schließlich auch über Israel selbst, das sich fälschlich für sicher hielt. Niemand ist von Gottes Gerechtigkeit ausgenommen, auch das eigene "religiöse" Volk nicht. Selbstsicherheit aufgrund der eigenen Identität schützt nicht vor Gottes gerechtem Urteil.`, impulse:`Wo fühlst du dich aufgrund deiner "Identität" fälschlich sicher vor ehrlicher Selbstprüfung?`},
 {at:'Am 3–6', nt:null, title:'Soziale Ungerechtigkeit angeklagt', text:`Amos klagt scharf die Unterdrückung der Armen und oberflächliche, bequeme Religiosität an – "ich hasse, ich verachte eure Feste". Gott interessiert sich genauso für soziale Gerechtigkeit wie für korrekte Rituale. Echte Anbetung ohne gelebte Gerechtigkeit ist für Gott wertlos.`, impulse:`Wo könnte deine Frömmigkeit "bequem" sein, ohne echte Gerechtigkeit im Alltag zu leben?`},
 {at:'Am 7–9', nt:null, title:'Visionen des Gerichts & Wiederherstellung', text:`Amos sieht mehrere Visionen kommenden Gerichts, doch das Buch endet überraschend mit der Verheißung des Wiederaufbaus der "zerfallenen Hütte Davids". Selbst nach dem härtesten Gericht bleibt Gottes letztes Wort Wiederherstellung. Sein Zorn ist real, aber niemals sein letztes Ziel.`, impulse:`Welchen "zerfallenen" Bereich deines Lebens möchte Gott gerade wiederaufbauen?`},
 {at:'Obd 1', nt:null, title:'Hochmut fällt', text:`Obadja kündigt das Ende des hochmütigen Edom an, das sich in seinen Felsenburgen unangreifbar fühlte. "Wer sich erhebt, wird gestürzt" ist ein durchgängiges Prinzip in Gottes Umgang mit Stolz. Echte Sicherheit liegt niemals in selbstgemachter Stärke.`, impulse:`Wo verlässt du dich gerade auf eigene "Felsenburgen" statt auf Demut vor Gott?`},
 {at:'Jona 1–2', nt:null, title:'Flucht & Rettung im Bauch des Fisches', text:`Jona flieht vor Gottes Auftrag, doch selbst im Bauch des Fisches findet er zurück zum Gebet und zur Umkehr. Gott lässt selbst seine widerwilligsten Boten nicht einfach fallen. Flucht vor Gottes Berufung führt am Ende doch wieder zu ihm zurück.`, impulse:`Vor welchem Auftrag Gottes "fliehst" du gerade – und wo könnte er dich trotzdem zurückholen?`},
 {at:'Jona 3–4', nt:null, title:'Ninives Umkehr & Jonas Zorn über Gnade', text:`Ninive kehrt erstaunlich schnell um, doch Jona ärgert sich darüber, dass Gott so gnädig ist, auch zu seinen Feinden. Gottes Barmherzigkeit reicht weiter, als wir es manchen Menschen wünschen würden. Es ist eine harte, aber wichtige Frage, ob wir Gottes Gnade auch für unsere "Feinde" akzeptieren können.`, impulse:`Wem wünschst du Gottes Gnade weniger, als du sie dir selbst wünschst?`},
 {at:'Mi 1–3', nt:null, title:'Anklage gegen Führer & Volk', text:`Micha klagt Israels Führer wegen Ausbeutung der Armen an, während er selbst, erfüllt mit Gottes Geist, mutig die Wahrheit sagt. Gott stellt sich besonders auf die Seite der Schwachen gegenüber mächtigen Ausbeutern. Mutiger Einsatz für Gerechtigkeit ist eine direkte Frucht von Gottes Geist im Leben.`, impulse:`Wo könntest du mutiger für jemand Schwächeren einstehen, wie Micha es tat?`},
 {at:'Mi 4–7', nt:null, title:'Was fordert der Herr von dir?', text:`Micha verheißt einen kommenden Herrscher aus Bethlehem (eine direkte Jesus-Prophetie) und fasst Gottes Anspruch zusammen: "Recht tun, Güte lieben, demütig wandeln mit deinem Gott." Diese drei Worte fassen die ganze biblische Ethik kompakt zusammen. Gottes Erwartungen sind klar formuliert – und doch ein Leben lang herausfordernd.`, impulse:`Wo in diesen drei – Recht, Güte, Demut – brauchst du gerade am meisten Wachstum?`},
 {at:'Nah 1–3', nt:null, title:'Gottes Geduld hat ein Ende', text:`Nahum kündigt den endgültigen Fall Ninives an, das nach Jonas Zeit wieder in alte Bosheit zurückgefallen war. Gott ist "langsam zum Zorn", aber seine Geduld ist nicht endlos, wenn Umkehr beharrlich verweigert wird. Diese Spannung zwischen Geduld und Gerechtigkeit zieht sich durch die ganze Bibel.`, impulse:`Wo verlässt du dich auf Gottes Geduld, ohne selbst echte Umkehr anzustreben?`},
 {at:'Hab 1–3', nt:null, title:'Wie lange noch, Herr?', text:`Habakuk ringt offen mit Gott darüber, warum er Ungerechtigkeit zulässt, und erhält die Antwort: "Der Gerechte wird durch seinen Glauben leben." Trotz aller offenen Fragen endet das Buch in einem der schönsten Vertrauensbekenntnisse der Bibel: "Doch ich will jauchzen über den Herrn." Echter Glaube erlaubt ehrliche Fragen und führt trotzdem zu echtem Vertrauen.`, impulse:`Kannst du wie Habakuk trotz offener Fragen sagen: "Doch ich will mich freuen an Gott"?`},
 {at:'Zef 1–3', nt:null, title:'Gericht & Gottes Freude über dich', text:`Zefanja kündigt ernstes Gericht an, doch das Buch endet mit einem der zärtlichsten Bilder der Bibel: "Er freut sich über dich mit Jubel." Selbst nach den schwersten Warnungen bleibt Gottes letztes Wort liebevolle Freude über sein Volk. Gott ist nicht nur gerechter Richter, sondern auch jemand, der sich an dir freut.`, impulse:`Kannst du dir vorstellen, dass Gott sich gerade jetzt mit Jubel über dich freut?`},
 {at:'Hag 1–2', nt:null, title:'Baut das Haus des Herrn wieder auf', text:`Haggai ruft die Rückkehrer aus dem Exil dazu auf, endlich den Tempel wieder aufzubauen, statt nur die eigenen Häuser zu bauen, und verheißt: "Die Herrlichkeit dieses Hauses wird größer sein als die frühere." Gott will, dass seine Anliegen nicht hinter unseren eigenen Prioritäten zurückstehen. Was klein und mühsam beginnt, kann durch Gottes Verheißung größer enden, als wir erwarten.`, impulse:`Welches "Haus Gottes" – welches geistliche Anliegen – schiebst du gerade hinter eigene Prioritäten zurück?`},
 {at:'Sach 1–6', nt:null, title:'Visionen der Wiederherstellung', text:`Sacharja erhält mehrere ermutigende Visionen, die alle Gottes Plan zur Wiederherstellung Jerusalems zeigen. Gottes Botschaft an ein entmutigtes, kleines Volk ist durchweg Ermutigung und Hoffnung. Auch kleine, schwache Anfänge sind in Gottes Augen voller Verheißung.`, impulse:`Wo fühlst du dich gerade "klein und schwach" – und wie könnte Gott das in Hoffnung verwandeln?`},
 {at:'Sach 7–8', nt:null, title:'Echtes Fasten & zukünftige Freude', text:`Sacharja fordert echte Gerechtigkeit statt leerem Fasten und verheißt, dass Jerusalem einst voller spielender Kinder und alter Menschen in Frieden sein wird. Gottes Zukunftsvision ist konkret, alltäglich und voller Lebensfreude. Wahre Frömmigkeit zeigt sich in echtem Frieden und Gerechtigkeit im ganz normalen Leben.`, impulse:`Wie würde echter, gelebter Friede in deinem Alltag heute aussehen?`},
 {at:'Sach 9–14', nt:null, title:'Der kommende König & der durchbohrte Hirte', text:`Sacharja prophezeit den König, der "demütig auf einem Esel" einzieht, und den Hirten, der "durchbohrt" wird – beide direkte Vorausdeutungen auf Jesus. Das Buch endet mit der Vision, dass am Ende "der Herr König sein wird über die ganze Erde". Gottes größte Pläne erfüllen sich oft auf überraschend demütige, unerwartete Weise.`, impulse:`Wo erwartest du Gottes Handeln eher spektakulär, während er vielleicht demütig und unerwartet kommt?`},
 {at:'Mal 1–4', nt:null, title:'Die letzten Worte des Alten Testaments', text:`Maleachi klagt lieblose Opfer und gebrochene Treue an, verheißt aber zugleich einen kommenden Boten (Johannes der Täufer) und "die Sonne der Gerechtigkeit" (Jesus). Das Alte Testament endet nicht endgültig, sondern mit einer offenen Erwartung auf mehr. Genau diese Erwartung erfüllt sich im nächsten Buch deiner Bibel – Matthäus.`, impulse:`Worauf wartest du in deinem Glaubensleben gerade voller Erwartung, ähnlich wie Israel auf den Messias wartete?`}
]},

{id:'p6', title:'Phase 6 — Vollendung', subtitle:'Alles läuft zusammen', color:'#a78bfa',
 tip:'Offenbarung zuletzt – dann erkennst du alle Bilder, die du durch die ganze Bibel schon kennengelernt hast.',
 sections:[
 {at:'Esra 1–6', nt:'1Petr 1–2', title:'Heimkehr aus dem Exil & lebende Steine', text:`Die ersten Rückkehrer aus dem babylonischen Exil bauen unter Schwierigkeiten den Tempel wieder auf. Petrus beschreibt die Gemeinde als "lebende Steine", die zu einem neuen, geistlichen Tempel zusammengefügt werden. Gott baut sein Haus auch heute noch – aus Menschen, nicht nur aus Mauern.`, impulse:`Wie ein "lebender Stein" – wo fügt Gott dich gerade in seine größere Gemeinschaft ein?`},
 {at:'Esra 7–10', nt:'1Petr 3–5', title:'Esras Reform & geduldiges Leiden', text:`Esra führt eine tiefgreifende geistliche Erneuerung durch und ruft zu radikaler Umkehr von falschen Bündnissen auf. Petrus ermutigt, ungerechtes Leiden mit Geduld zu tragen, "wie Christus für uns gelitten hat". Geistliche Erneuerung verlangt oft mutige, unbequeme Schritte zurück zu Gottes Maßstäben.`, impulse:`Welchen unbequemen, aber notwendigen Schritt der Erneuerung schiebst du gerade auf?`},
 {at:'Neh 1–7', nt:'2Petr 1–3', title:'Die Mauer wird gebaut & wachsamer Glaube', text:`Nehemia baut trotz massivem Widerstand die Mauer Jerusalems in nur 52 Tagen wieder auf, getragen von Gebet und Klugheit. Petrus warnt vor falschen Lehrern und ruft zu beständigem Wachstum im Glauben auf. Geistlicher und praktischer Aufbau brauchen beide Gebet UND konkretes, kluges Handeln.`, impulse:`Welche "Mauer" in deinem Leben brauchst du gerade – mit Gebet UND praktischem Handeln?`},
 {at:'Neh 8–10', nt:'Jud 1', title:'Das Gesetz wird vorgelesen & für den Glauben kämpfen', text:`Das Volk hört das Gesetz vorlesen, weint vor Bewegung und feiert dann mit großer Freude – "die Freude am Herrn ist eure Stärke". Judas ruft dazu auf, "für den einmal überlieferten Glauben zu kämpfen" gegen falsche Lehren. Echte Erneuerung führt zu echter Freude, aber auch zu wacher Standfestigkeit.`, impulse:`Wann hast du zuletzt wirklich Freude am Herrn als deine Stärke erlebt?`},
 {at:'Neh 11–13', nt:'Offb 1–3', title:'Letzte Reformen & Sendschreiben an die Gemeinden', text:`Nehemia muss wiederholt gegen Rückfälle ins alte Verhalten kämpfen, selbst nach der großen Erneuerung. Die Offenbarung beginnt mit Jesu eindringlichen Botschaften an sieben konkrete Gemeinden, jede mit eigenen Stärken und Schwächen. Geistliches Leben braucht ständige, wache Erneuerung.`, impulse:`Welches Sendschreiben (Lob oder Mahnung) würde Jesus wohl gerade an dich persönlich schreiben?`},
 {at:'Est 1–5', nt:'Offb 4–7', title:'Esters Mut & der Thron im Himmel', text:`Ester riskiert ihr Leben, um für ihr Volk einzutreten, ermutigt durch Mordechais Worte: "Wer weiß, ob du nicht gerade deswegen Königin geworden bist." Die Offenbarung zeigt den überwältigenden Thron Gottes im Himmel, der über alle irdischen Krisen erhaben bleibt. Gottes Souveränität im Himmel gibt uns Mut, auch auf Erden mutige Schritte zu wagen.`, impulse:`Für welche "unmögliche" Aufgabe könntest du gerade besonders positioniert sein, wie Ester es war?`},
 {at:'Est 6–10', nt:'Offb 8–11', title:'Umkehrung des Schicksals & die Posaunen', text:`Das Schicksal wendet sich dramatisch, Haman wird gestürzt und Israel gerettet – Gott handelt, ohne in diesem Buch auch nur einmal namentlich genannt zu werden. Die Posaunengerichte in der Offenbarung zeigen, wie Gott auch durch dramatische Ereignisse seinen Plan durchsetzt. Gott wirkt oft auch dann, wenn er scheinbar "unsichtbar" im Hintergrund bleibt.`, impulse:`Wo könnte Gott gerade unsichtbar im Hintergrund wirken, obwohl du ihn nicht direkt siehst?`},
 {at:'1Chr 1–9', nt:'Offb 12–14', title:'Stammbäume & der Kampf zwischen Drache und Lamm', text:`Lange Genealogielisten erinnern daran, dass jeder Name in Gottes großer Geschichte einen Platz hat. Die Offenbarung zeigt den großen, kosmischen Kampf zwischen dem Drachen und dem Lamm – und das Lamm gewinnt. Deine eigene kleine Geschichte ist Teil dieser viel größeren Geschichte Gottes mit der Welt.`, impulse:`Wie fühlt es sich an zu wissen, dass dein Name Teil von Gottes großer Geschichte ist?`},
 {at:'1Chr 10–20', nt:'Offb 15–18', title:'David, neu erzählt & der Fall Babylons', text:`Die Chronik erzählt Davids Geschichte noch einmal, mit Fokus auf Anbetung und den Tempel, statt auf seine Fehler. Die Offenbarung beschreibt den endgültigen Fall des "Babylon" – Symbol für jedes System, das sich gegen Gott stellt. Gott hat das letzte Wort über jede Macht, die sich gegen ihn auflehnt.`, impulse:`Welches "Babylon" – welches System aus Stolz oder Macht – muss in deinem Leben noch fallen?`},
 {at:'1Chr 21–29', nt:'Offb 19–22', title:'Tempelvorbereitung & die neue Schöpfung', text:`David bereitet trotz eigenem Versagen großzügig den Tempelbau für Salomo vor und betet: "Alles kommt von dir, Herr, und aus deiner Hand haben wir es dir gegeben." Die Offenbarung schließt die ganze Bibel mit der Vision eines neuen Himmels und einer neuen Erde, in der Gott bei seinem Volk wohnt. Die ganze Bibel läuft auf dieses eine große Ziel zu: Gott und Mensch, endlich ungetrennt zusammen.`, impulse:`Was bedeutet es für dich heute schon, dass die ganze Bibel auf diese vollständige Gemeinschaft mit Gott zuläuft?`},
 {at:'2Chr 1–9', nt:null, title:'Salomo & der Tempel, noch einmal erzählt', text:`Die Chronik wiederholt Salomos Tempelbau mit besonderem Augenmerk auf Anbetung und Gottes erfüllte Herrlichkeit. Diese bewusste Wiederholung zeigt, wie wichtig dem Chronisten echte, freudige Anbetung für sein Volk nach dem Exil war. Anbetung war nicht Nebensache, sondern zentrale Erinnerung an ihre Identität.`, impulse:`Welchen Platz hat echte, freudige Anbetung gerade in deinem Alltag?`},
 {at:'2Chr 10–28', nt:null, title:'Reichsteilung & wechselhafte Könige', text:`Die Chronik konzentriert sich auf das Südreich Juda und zeigt ein wiederkehrendes Muster: Könige, die sich Gott zuwenden, erleben Segen; solche, die abfallen, erleben Niedergang. Dieses klare Muster ist eine bewusste Lehre für die Generation nach dem Exil. Gottes Prinzipien bleiben über Generationen hinweg konsistent erkennbar.`, impulse:`Welches wiederkehrende Muster von Segen oder Niedergang erkennst du in deiner eigenen Lebensgeschichte mit Gott?`},
 {at:'2Chr 29–36', nt:null, title:'Reformkönige & ein letztes Hoffnungswort', text:`Hiskia und Josia führen bedeutende geistliche Erneuerungen durch, doch letztlich fällt auch Juda dem babylonischen Exil. Das Buch endet jedoch nicht hoffnungslos, sondern mit dem Erlass des Kyrus, der die Heimkehr ermöglicht. Gottes Geschichte mit seinem Volk endet niemals endgültig im Gericht, sondern öffnet immer wieder einen Weg zurück.`, impulse:`Welchen "Erlass" der Hoffnung – welche neue Möglichkeit des Neuanfangs – schenkt Gott dir gerade?`}
]}
];

/* Flatten zu Gesamtliste in Leserichtung */
const ALL_SECTIONS=[];
PHASES.forEach(phase=>{
  phase.sections.forEach((s,i)=>{
    ALL_SECTIONS.push({id:phase.id+'-s'+(i+1), phaseId:phase.id, num:i+1, ...s});
  });
});

/* ================= STATE ================= */
let completed = new Set();
let journals = {};
let expandedPhase = null;
let journalOpen = false;
let saveTimer = null;

let chapterRead = new Set(); // "ab|num"
let expandedBook = null;
let saveIndexTimer = null;

let activeTab = 'plan';

async function loadState(){
  try{
    const res = await window.storage.get('progress', false);
    if(res && res.value){
      const data = JSON.parse(res.value);
      completed = new Set(data.completed||[]);
      journals = data.journals||{};
    }
  }catch(e){}
  try{
    const res2 = await window.storage.get('chapter-index', false);
    if(res2 && res2.value){
      chapterRead = new Set(JSON.parse(res2.value));
    }
  }catch(e){}
}
function scheduleSave(){ if(saveTimer) clearTimeout(saveTimer); saveTimer=setTimeout(saveState,500); }
async function saveState(){
  try{ await window.storage.set('progress', JSON.stringify({completed:Array.from(completed), journals}), false); }
  catch(e){ console.error('Speichern fehlgeschlagen', e); }
}
function scheduleSaveIndex(){ if(saveIndexTimer) clearTimeout(saveIndexTimer); saveIndexTimer=setTimeout(saveIndex,500); }
async function saveIndex(){
  try{ await window.storage.set('chapter-index', JSON.stringify(Array.from(chapterRead)), false); }
  catch(e){ console.error('Speichern fehlgeschlagen', e); }
}

function getNextSection(){ return ALL_SECTIONS.find(s=>!completed.has(s.id)) || null; }
function phaseProgress(phase){
  const total=phase.sections.length;
  const done=phase.sections.filter((s,i)=>completed.has(phase.id+'-s'+(i+1))).length;
  return {done,total};
}
function esc(s){ if(s==null) return ''; return s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ================= RENDER ================= */
function render(){
  const app=document.getElementById('app');
  const totalDone=completed.size, totalAll=ALL_SECTIONS.length;
  const pct=totalAll?Math.round(totalDone/totalAll*100):0;
  const next=getNextSection();

  let html='';
  html+=`<div class="header"><h1>Mein Bibel-Leseplan</h1><p>Abwechselnd AT &amp; NT · abends · ohne Zeitdruck · mit Notizbuch</p></div>`;

  html+=`<div class="progress-wrap">
    <div class="progress-top"><span class="pct">${pct}%</span><span class="lbl">${totalDone} / ${totalAll} Abschnitte gelesen</span></div>
    <div class="bar-bg"><div class="bar-fill" style="width:${pct}%"></div></div>
    <div class="legend">
      <span><span class="dot" style="background:var(--at)"></span>AT — Altes Testament</span>
      <span><span class="dot" style="background:var(--nt)"></span>NT — Neues Testament</span>
    </div>
  </div>`;

  if(next){
    const phase=PHASES.find(p=>p.id===next.phaseId);
    const j=journals[next.id]||{g:'',l:'',b:''};
    html+=`<div class="next-card">
      <div class="next-stripe" style="background:${phase.color}"></div>
      <div class="next-label">Heute dran</div>
      <div class="next-title">${esc(phase.title)} · Abschnitt ${next.num} / ${phase.sections.length}</div>
      <div class="next-refs">
        ${next.at?`<span class="next-ref at">${esc(next.at)}</span>`:''}
        ${next.nt?`<span class="next-ref nt">${esc(next.nt)}</span>`:''}
      </div>
      <div class="next-name">${esc(next.title)}</div>
      <div class="next-desc">${esc(next.text)}</div>
      <div class="next-impulse">💬 ${esc(next.impulse)}</div>
      <button class="mark-btn" data-action="complete" data-id="${next.id}">✓ Als gelesen markieren</button>
      <div class="journal">
        <div class="journal-toggle" data-action="toggle-journal"><span>${journalOpen?'▾':'▸'}</span> Notizen zu den 3 Reflexionsfragen</div>
        <div class="journal-body ${journalOpen?'open':''}">
          <div class="journal-q"><b>Gott:</b> Was zeigt mir dieser Abschnitt über Gottes Charakter, Handeln oder Herz?</div>
          <textarea data-action="journal" data-id="${next.id}" data-field="g">${esc(j.g)}</textarea>
          <div class="journal-q"><b>Mein Leben:</b> Was davon berührt meine aktuelle Situation, meine Gedanken oder Kämpfe?</div>
          <textarea data-action="journal" data-id="${next.id}" data-field="l">${esc(j.l)}</textarea>
          <div class="journal-q"><b>Beziehung:</b> Was verändert das in meiner Beziehung zu Gott – worüber möchte ich mit ihm reden?</div>
          <textarea data-action="journal" data-id="${next.id}" data-field="b">${esc(j.b)}</textarea>
        </div>
      </div>
    </div>`;
  } else {
    html+=`<div class="next-card done-all"><div class="next-label">🎉 Geschafft</div><div class="next-desc" style="margin-bottom:0">Du hast den gesamten Plan durchgelesen. Unten kannst du alles zurücksetzen und neu beginnen.</div></div>`;
  }

  html+=`<div class="tabs">
    <div class="tab-btn ${activeTab==='plan'?'active':''}" data-action="set-tab" data-tab="plan">📖 Leseplan</div>
    <div class="tab-btn ${activeTab==='index'?'active':''}" data-action="set-tab" data-tab="index">📑 Alle Kapitel</div>
  </div>`;

  if(activeTab==='plan'){
    PHASES.forEach(phase=>{
      const {done,total}=phaseProgress(phase);
      const pPct=total?Math.round(done/total*100):0;
      const isOpen=expandedPhase===phase.id;
      html+=`<div class="phase">
        <div class="phase-head" data-action="toggle-phase" data-id="${phase.id}">
          <div class="phase-head-left">
            <span class="phase-dot" style="background:${phase.color}"></span>
            <div class="phase-titles"><div class="t">${esc(phase.title)}</div><div class="s">${esc(phase.subtitle)}</div></div>
          </div>
          <div class="phase-meta"><span class="phase-pct">${done}/${total}</span><span class="chev ${isOpen?'open':''}">▸</span></div>
        </div>
        <div class="phase-progress"><div class="phase-progress-fill" style="width:${pPct}%;background:${phase.color}"></div></div>
        <div class="phase-body ${isOpen?'open':''}">
          ${phase.tip?`<div class="phase-tip">💡 ${esc(phase.tip)}</div>`:''}
          <div class="section-list">
            ${phase.sections.map((s,i)=>renderSectionCard(phase,s,i+1,next)).join('')}
          </div>
        </div>
      </div>`;
    });
  } else {
    const totalChaptersAll = FULL_BIBLE.reduce((a,b)=>a+b.ch,0);
    const totalChaptersDone = chapterRead.size;
    const ipct = Math.round(totalChaptersDone/totalChaptersAll*100);
    html+=`<div class="index-progress">${totalChaptersDone} / ${totalChaptersAll} Kapitel der ganzen Bibel gelesen (${ipct}%) — unabhängig vom Leseplan oben.</div>`;
    html+=`<div class="test-heading">Altes Testament</div>`;
    FULL_BIBLE.filter(b=>b.test==='AT').forEach(b=>{ html+=renderBookRow(b); });
    html+=`<div class="test-heading">Neues Testament</div>`;
    FULL_BIBLE.filter(b=>b.test==='NT').forEach(b=>{ html+=renderBookRow(b); });
  }

  html+=`<div class="info-toggle" data-action="toggle-info">ℹ️ Über diesen Plan &amp; Notizbuch-Tipps</div>
  <div class="info-block" id="info-block">
    <h4>Tagesrhythmus (abends)</h4>
    <ul>
      <li><b>Ankommen:</b> 2–3 Min. still werden, kurz beten</li>
      <li><b>Lesen:</b> einen Abschnitt mit AT- und NT-Kapiteln</li>
      <li><b>Reflektieren:</b> Notizen &amp; die 3 Fragen im Journal</li>
    </ul>
    <h4>Tipps für dein Notizbuch</h4>
    <ul>
      <li>Teile jede Seite in zwei Hälften: links Stichpunkte während des Lesens, rechts die 3 Reflexionsfragen.</li>
      <li>Markiere in der Bibel mit Farben: z. B. gelb = Charakter Gottes, grün = Versprechen, blau = persönlich berührend.</li>
      <li>Schreibe ein Stichwort an den Rand der Bibelseite – so findest du Stellen später wieder.</li>
      <li>Wenn du einen Abschnitt aussetzt: kein Nachholen – einfach weitermachen.</li>
    </ul>
  </div>`;

  html+=`<div class="footer-row">
    <span class="priv-note">Deine Häkchen &amp; Notizen werden privat für dich gespeichert.</span>
    <button class="reset-btn" data-action="${activeTab==='plan'?'reset-plan':'reset-index'}">Fortschritt zurücksetzen</button>
  </div>`;

  app.innerHTML=html;
}

function renderSectionCard(phase, s, num, next){
  const id=phase.id+'-s'+num;
  const isDone=completed.has(id);
  const isNext=next && next.id===id;
  
  return `<div class="section-card ${isDone?'done':''} ${isNext?'is-next':''}" data-action="toggle-section" data-id="${id}">
    <div class="section-top">
      <span class="section-num">Abschnitt ${num}</span>
      <div class="section-check">${isDone?'✓':''}</div>
    </div>
    <div class="section-refs">
      ${s.at?`<span class="section-ref at">${esc(s.at)}</span>`:''}
      ${s.nt?`<span class="section-ref nt">${esc(s.nt)}</span>`:''}
    </div>
    <div class="section-title">${esc(s.title)}</div>
    
    <details class="section-details" onclick="event.stopPropagation()">
      <summary>Details anzeigen</summary>
      <div class="details-content">
        <div class="section-text">${esc(s.text)}</div>
        <div class="section-impulse">💬 ${esc(s.impulse)}</div>
      </div>
    </details>
  </div>`;
}

function renderBookRow(b){
  const isOpen = expandedBook===b.ab;
  const readCount = Array.from({length:b.ch},(_,i)=>i+1).filter(n=>chapterRead.has(b.ab+'|'+n)).length;
  let chaptersHtml='';
  if(isOpen){
    for(let n=1;n<=b.ch;n++){
      const done=chapterRead.has(b.ab+'|'+n);
      chaptersHtml+=`<div class="chbtn ${done?'done':''}" data-action="toggle-chapter" data-ab="${b.ab}" data-num="${n}">${n}</div>`;
    }
  }
  return `<div class="book-row">
    <div class="book-head" data-action="toggle-book" data-ab="${b.ab}">
      <span><span class="book-name">${esc(b.name)}</span><span class="book-test">${b.test}</span></span>
      <span class="book-right"><span class="book-pct">${readCount}/${b.ch}</span><span class="chev ${isOpen?'open':''}">▸</span></span>
    </div>
    <div class="book-chapters ${isOpen?'open':''}">${chaptersHtml}</div>
  </div>`;
}

/* ================= EVENTS ================= */
document.getElementById('app').addEventListener('click', (e)=>{
  const el=e.target.closest('[data-action]');
  if(!el) return;
  const action=el.dataset.action;

  if(action==='complete'){ completed.add(el.dataset.id); scheduleSave(); render(); }
  else if(action==='toggle-section'){
    const id=el.dataset.id;
    if(completed.has(id)) completed.delete(id); else completed.add(id);
    scheduleSave(); render();
  }
  else if(action==='toggle-phase'){ expandedPhase = expandedPhase===el.dataset.id ? null : el.dataset.id; render(); }
  else if(action==='toggle-journal'){ journalOpen=!journalOpen; render(); }
  else if(action==='toggle-info'){ document.getElementById('info-block').classList.toggle('open'); }
  else if(action==='set-tab'){ activeTab=el.dataset.tab; render(); }
  else if(action==='toggle-book'){ expandedBook = expandedBook===el.dataset.ab ? null : el.dataset.ab; render(); }
  else if(action==='toggle-chapter'){
    const key=el.dataset.ab+'|'+el.dataset.num;
    if(chapterRead.has(key)) chapterRead.delete(key); else chapterRead.add(key);
    scheduleSaveIndex(); render();
  }
  else if(action==='reset-plan'){
    if(confirm('Wirklich deinen gesamten Leseplan-Fortschritt und alle Notizen löschen?')){
      completed=new Set(); journals={}; saveState(); render();
    }
  }
  else if(action==='reset-index'){
    if(confirm('Wirklich das gesamte Kapitel-Verzeichnis zurücksetzen?')){
      chapterRead=new Set(); saveIndex(); render();
    }
  }
});

document.getElementById('app').addEventListener('input', (e)=>{
  const el=e.target.closest('[data-action="journal"]');
  if(!el) return;
  const id=el.dataset.id, field=el.dataset.field;
  if(!journals[id]) journals[id]={g:'',l:'',b:''};
  journals[id][field]=el.value;
  scheduleSave();
});

/* ================= INIT ================= */
(async function init(){
  expandedPhase = PHASES[0].id;
  await loadState();
  render();
})();

})();
