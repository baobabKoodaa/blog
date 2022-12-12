---
title: 11 miljoonaa euroa taivaan tuuliin — tässä lopputulokset kansallisesta tekoälyohjelmasta AuroraAI
tags: ["ai", "discourse"]
cover: aurora_ai_by_openai.jpg
author: atte juvonen
---

<re-img
    src="aurora_ai_by_openai.jpg"
    title="Illustration created with DALL·E 2"
    >
</re-img>

Jos kuulet nyt ensimmäistä kertaa Suomen kansallisesta tekoälyohjelmasta, et ole yksin. AuroraAI on jäänyt yllättävän vähälle huomiolle mediassa hankkeen suuruuteen nähden. Hanke alkaa olla nyt suurin piirtein taputeltu päätökseen ja Hesari avasi keskustelun,<sup>[<a href="https://www.hs.fi/sunnuntai/art-2000009205265.html" targe="_blank">0</a>]</sup> joten päätin kantaa korteni kekoon testailemalla AuroraAI:n lopputuotoksia tavallisen kansalaisen näkökulmasta ja raportoimalla tulokset tähän artikkeliin.

Mutta mikä on AuroraAI? Valtiovarainministeriön sivut valaisevat asiaa meille:

> Aurora on tekoälyjen ja autonomisten sovellusten muodostama verkko, joka luo edellytyksiä ihmiskeskeiselle ja ennakointikykyiselle yhteiskunnalle.<sup>[<a href="https://vm.fi/ihmiskeskeinen-yhteiskunta" target="_blank">1</a>]</sup>

Jos mietit mitä se tarkoittaa käytännössä, hankkeen puuhamies selventää asiaa:

> Dynaamisesti muotoutuvat arvoverkot ihmisen eri tilanteissa, se on niinku Aurora käytännössä.<sup>[<a href="https://www.youtube.com/watch?v=R9HPsc078eE" target="_blank">2</a>]</sup>

Osalla lukijoista saattaa edelleen olla jotain kysymyksiä. Ei hätää, tässä tyhjentävä selitys Valtiovarainministeriön ICT-johtajalta:

> <mark style="color: #666">Automaatio suorastaan puhkeaa kukkaan, kun on saatavilla hyvänlaatuista dataa. Data on automaatiolle kuin vesi, jolla kastellaan automaation kukkasia. Ja pistää myös samalla miettimään, että olisikö tässä kielikuvassa ihmiskeskeisyys se kukkamulta.</mark><sup>[<a href="https://www.youtube.com/watch?v=ndDoQvNWC4A" target="_blank">3</a>]</sup>

Kukkamultaa tästä hankkeesta ei ainakaan puutu. Vuosina 2018-2019 hankkeen esiselvityksessä pöhistiin käsittämätön määrä dokumentteja<sup>[<a href="https://vm.fi/hanke?tunnus=VM151:00/2018" targe="_blank">4</a>]</sup> budjetilla, jonka suuruus ei ole julkisesti tiedossa. Esiselvitystä seuranneessa varsinaisessa hankkeessa 2020-2022 kukkamultaa viljeltiin 11,2 miljoonan euron budjetilla.<sup>[<a href="https://vm.fi/tekoalyohjelma-auroraai" targe="_blank">5</a>]</sup> Alun perin budjetin piti olla jopa 100 miljoonaa euroa,<sup>[<a href="https://www.tivi.fi/uutiset/tekoalyohjelma-toivoi-100-miljoonaa-jakaa-46-miljoonan-potin-muiden-kanssa-kun-on-vahemman-rahaa-teemme-vahemman-elamantapahtumia/a9525718-e3de-4755-b87b-de00241ce136" targe="_blank">6</a>]</sup>
 mutta veronmaksajien onneksi hanke ei toteutunut täydessä laajuudessa.

<iframe style="border-radius: 10px" width="560" height="315" src="https://www.youtube-nocookie.com/embed/bJyOcjOHlgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lopputulokset

Mitä veronmaksajat voivat odottaa saavansa 11 miljoonalla eurolla? HS:n artikkelissa<sup>[<a href="https://www.hs.fi/sunnuntai/art-2000009205265.html" targe="_blank">0</a>]</sup> laitetaan silkkihansikkaat käteen ja varovaisesti lasketaan rima niin alas että se koskettaa lattiaa:

> [Teknologiatutkija Santeri] Räisänen sanoo, että mahalasku on tyypillinen tulos tekoälyhankkeissa. Usein pelätään, että niiden tuloksena syntyy valvontakoneisto.
>
> ''Todennäköisempää on, ettei synny mitään.''
>
> Jotain on sentään syntynyt. Ainakin Aurora AI -verkon suosittelumoottori ja profiilinhallinta, joiden lähdekoodi julkaistiin viime viikolla. Lisäksi syntyi koodia käyttöliittymiin sekä käsikirja neuvontabotin tuottajalle.

Riittääkö tyydyttäväksi lopputulokseksi tosiaan, että ''jotain koodia on ainakin julkaistu''?

<mark style="color: #666">Nyt on aika upottaa kädet kukkamultaan ja testailla, ovatko lopputuotokset hyödyllisiä tavallisen kansalaisen näkökulmasta.</mark> Sanottakoon, että tarkoitan lopputuotoksella jotakin konkreettista sovellusta tai vastaavaa tuotosta, jota kansalainen voi käyttää. En tarkoita lopputuotoksella mitään osallistujien henkilökohtaisia ''opittiin niin paljon'' -kokemuksia, enkä tarkoita lopputuotoksella dokumentteja jotka lipastoidaan viraston arkistoon. Yritin parhaani mukaan kartoittaa konkreettiset lopputuotokset jotka hankkeessa tuotettiin, mutta kartoitus tuskin on täydellinen, koska hankkeen tekijät eivät ole näitä lopputuotoksia koonneet mihinkään yksittäiseen listaan.<sup>[<a href="https://wiki.dvv.fi/display/AAIJD/AuroraAI-verkon+julkinen+dokumentaatio" target="_blank">linkki julkiseen dokumentaatioon</a>]</sup>

Nähdäkseni hankkeen lopputuotokset voi jakaa kahteen kategoriaan:

1. Palvelusuosittelijat, jotka suosittelevat palveluita kaikenlaisiin tilanteisiin
2. Keskustelevat chatbotit, jotka tarjoavat neuvoja rajattua aihepiiriä koskien

Tässä koostamani lista projektin lopputuotoksista:

- <a href="https://www.zekki.fi/" target="_blank">Palvelusuosittelija 3x10D Zekki</a>
- <a href="https://auroraai.astest.suomi.fi/ui/#/recommender" target="_blank">Palvelusuosittelija 3x10D AuroraAI testiympäristössä</a>
- <a href="https://auroraai.astest.suomi.fi/ui/#/search" target="_blank">Palvelusuosittelija vapaatekstillä AuroraAI testiympäristössä</a>
- <a href="https://hytebotti.customer.aaibot.link/" target="_blank">Chatbotti Poikien puhelimelle</a>
- <a href="https://kukibotti.customer.aaibot.link/" target="_blank">Chatbotti Kuopion kaupungin kirjastolle</a>
- <a href="https://kupotti.customer.aaibot.link/" target="_blank">Chatbotti BusinessKuopiolle</a>
- <a href="https://ihtbotti.customer.aaibot.link/" target="_blank">Chatbotti International House Tampereelle</a>
- <a href="https://hdlbotti.customer.aaibot.link/" target="_blank">Chatbotti Helsingin Diakonissalaitokselle</a>
- <a href="https://albotti.customer.aaibot.link/" target="_blank">Chatbotti Aseman lapsille</a>
- <a href="https://kuhr.customer.aaibot.link/" target="_blank">Chatbotti Kuopion kaupungin HR:lle</a>


### Palvelusuosittelijat

Aloitetaan testailu palvelusuosittelijoista. Näissä sovelluksissa käyttäjä antaa tietoja elämäntilanteestaan ja sovellus arvioi 20 000 eri palvelun tietovarannosta, mitkä palvelut voisivat olla avuksi käyttäjän elämäntilanteeseen. Suositeltava palvelu saattaa olla esimerkiksi uraneuvontaa tai askartelukerho.

Ensimmäisenä kokeilen palvelusuosittelija <a href="https://www.zekki.fi/" target="_blank">Zekkiä</a>. Sovellus pyytää minua syöttämään iän, sukupuolen ja paikkakunnan. Tämän jälkeen sovellus pyytää minua vastaamaan 0-10 asteikolla kymmeneen kysymykseen, jotka koskevat aiheita kuten itsetunto ja asumistyytyväisyys. Nämä monivalintakysymykset muistuttavat minua 2000-luvun loppupuolella suosioon nousseista Facebook-kyselyistä, jotka lupasivat vastata niinkin tärkeisiin kysymyksiin kuin ''Mikä Spaissari olet'' tai ''Jos olisit ruoka, mikä ruoka olisit''.

Vastaan kysymyksiin rehellisesti ja pohdiskelen mielessäni, miten sovellus edes teoriassa pystyisi neuvomaan tilanteeseeni parhaiten sopivia palveluita — enhän ole päässyt syöttämään mitään sellaisia tietoja jotka yksilöisivät palvelulle mihin ongelmiin kaipaan apua. Siitä huolimatta lopputulos onnistuu alittamaan odotukset:

<re-img
    src="zekki1.jpg"
    title="Zekki suosittelee minulle nuorisopalveluita, vaikka en ole nuori"
    >
</re-img>

Zekki suosittelee minulle pelkkiä nuorisopalveluita, vaikka olen 36-vuotias ja syötin ikäni erillisessä kentässä. Jos ikä kysytään erikseen, ei olisi kovin monimutkainen tehtävä suodattaa tuloksista pois sellaiset tulokset jotka eivät ole sopivia käyttäjän iälle. Tällainen suodatus olisi helppo toteuttaa ilman mitään ''ihmiskeskeistä tekoälyä''.

Testaan seuraavaksi <a href="https://auroraai.astest.suomi.fi/ui/#/recommender" target="_blank">AuroraAI testiympäristön 3x10D palvelusuosittelijaa</a>. Tämä suosittelija ei kysy minulta ikää eikä sukupuolta, mutta muuten kysymykset ovat samat kuin Zekissä. Tulokset:

<re-img
    src="aurora_ai_3x10d.jpg"
    title="AuroraAI suosittelee minulle nuorisopalveluita ja vammaispalveluita"
    >
</re-img>

<mark style="color: #666">Jokainen yllä näkyvä palvelusuositus on joko nuorisopalvelu tai vammaispalvelu. En ole nuori enkä kehitysvammainen.</mark> En vieläkään keksi, miten sovelluksen pitäisi edes teoriassa osata suositella relevantteja palveluita niiden monivalintavastausten pohjalta mitä käyttäjältä kerättiin. Tämä idea olisi pitänyt jo suunnitteluvaiheessa ampua alas ja haudata kukkamultaan.

Mennään eteenpäin muihin sovelluksiin. Seuraavaksi testaan <a href="https://auroraai.astest.suomi.fi/ui/#/search" target="_blank">AuroraAI testiympäristön vapaatekstillä toimivaa palvelusuosittelijaa</a>. Käytettyäni AuroraAI:ta hetken aikaa päässäni on herännyt synkkiä ajatuksia, joten kokeilen osaako AuroraAI suositella minulle mielenterveyspalveluita:

<re-img
    src="aurora_ai_tekstihaku1.jpg"
    title="AuroraAI suosittelee hautakiven tilaamista ja testamenttia ennen itsemurhan tekemistä"
    >
</re-img>

<mark style="color: #666">AuroraAI ei osaa suositella itsemurhaa hautovalle käyttäjälle mielenterveyspalveluita. Sen sijaan AuroraAI suosittelee hautatoiveen tekemistä ja testamentin kirjoittamista ennen itsemurhaa.</mark>

Hakutuloksia näytetään vapaalle tekstihaulle jostain syystä vain 5, eikä enempää tuloksia voi listata edes sivuttamalla. Suosittelumoottori on joka tapauksessa joutunut pisteyttämään suuren määrän erilaisia palveluita, joten ei ole mitään teknistä estettä sille miksi tuloksia ei voisi näyttää enempää. Tulosten rajoittaminen viiteen herättää epäilyksen, että minkäänlaista käytettävyystestausta tuotteelle ei olla tehty ennen sen julkaisua.

Kenties mielenterveyspalvelut on vain jotenkin unohdettu toteutuksesta. Kokeillaan tekstihakua uudestaan, käyttäen tällä kertaa tekstihakuna AuroraAI:n <a href="https://www.youtube-nocookie.com/embed/bJyOcjOHlgg" target="_blank">pöhinävideolla</a> esitettyä elämäntilannetta: leipomoyrittäjä Henry on siirtymässä eläkkeelle perheyrityksestä. AuroraAI:n pöhinävideolla hänelle ehdotetaan seuraavia palveluita:

- Sukupolvenvaihdos perheyrityksessä
- Eläkkeet
- Verotus
- Eläkeläisalennukset
- Eläkeläistoiminta

Mutta mitä palveluita AuroraAI *todellisuudessa* ehdottaa tähän elämäntilanteeseen?

<re-img
    src="aurora_ai_tekstihaku2.jpg"
    title="AuroraAI sukupolvenvaihdosta ei tunnisteta oikein"
    >
</re-img>

Nautojen laidunnus ja jaloittelu kesäaikaan? Vain yksi viidestä suosituksesta on millään tapaa relevantti. AuroraAI ei edes tunnista sukupolvenvaihdosta perheyrityksessä mahdolliseksi elämäntapahtumaksi, vaikka tämä on juuri se elämäntapahtuma, jonka he itse valitsivat kanoniseksi esimerkiksi pöhinävideoonsa.

### Chatbotit

Siirrytään seuraavaksi kokeilemaan AuroraAI chatbotteja. Chatbotit eroavat palvelusuosittelijoista keskustelevan vuorovaikutuksen lisäksi siinä, että palvelusuosittelijat antavat suosituksia kaikenlaisiin elämäntilanteisiin, kun taas chatbotit on selvästi suunniteltu rajattuihin aihepiireihin. En ole kohdeyleisöä millekään julkaistuista chatboteista, joten kokeilen osaa niistä syöttämällä sen tyyppisiä kysymyksiä joita voisin kuvitella oikeiden käyttäjien syöttävän.

Kokeilen aluksi <a href="https://hytebotti.customer.aaibot.link/" target="_blank">Poikien puhelimen chatbottia</a>.

<re-img
    src="hytebotti1.jpg"
    title="Poikien puhelimen chatbotti ei ymmärrä kysymystä"
    meme=True
    >
</re-img>

Hyvin tyypillinen kysymys yksinkertaisessa muodossa esitettynä, mutta botti ei ymmärrä sitä ja vastaa litanialla esikirjoitettuja viestejä. Esikirjoitettuja viestejä on niin paljon etteivät ne edes mahdu yhteen kuvakaappaukseen.

Koitetaan eri kysymystä:

<re-img
    src="hytebotti2.jpg"
    title="Poikien puhelimen chatbotti ei ymmärrä kysymystä"
    meme=True
    >
</re-img>

Botti ei ymmärrä vieläkään ja toistaa litanian samoista esikirjoitetuista viesteistä. Eikö riittäisi että litania on annettu kerran ja jatkossa voisi vastata vaan sen ''oi joi'' -viestin ilman tota koko litanian toistamista? Ilmeisesti tällekään ei ole tehty minkäänlaista käytettävyystestausta ennen julkaisua.

Kun lähetän riittävän paljon viestejä, löydän lopulta jotain millä saan tulokseksi jotain muuta kuin ''oi joi'':

<re-img
    src="hytebotti4.jpg"
    title="Poikien puhelimen chatbotti ymmärtää kysymyksen väärin"
    meme=True
    >
</re-img>

Ilmeisesti botilla on rajattu määrä esikirjoitettuja vastauksia, ja tässä tapauksessa avainsana ''vanha'' osuu siten että botti olettaa minun kysyvän hänen ikäänsä (vaikka kysymys koskee minun ikääni eikä botin ikää).

Kokeilen seuraavaksi <a href="https://kukibotti.customer.aaibot.link/" target="_blank">Kirjastobottia</a>.

Osaisiko botti kertoa, onko jokin tietty kirja saatavilla?

<re-img
    src="kirjastobotti2.jpg"
    title="Kirjastobotti ei ymmärrä"
    meme=True
    >
</re-img>

Botin tekijöille ei ole tullut mieleen, että kirjaston käyttäjät saattaisivat kysyä kirjojen varaustilanteesta botilta. Oi joi!

Kenties botti kykenee kuitenkin suosittelemaan minulle jotakin kirjaa?

<re-img
    src="kirjastobotti3.jpg"
    title="Kirjastobotti ei halua suositella mitään kirjaa"
    meme=True
    >
</re-img>

Kirjastobotti tunnistaa kysymyksen, mutta ei osaa suositella mitään kirjaa vaan tarjoaa esikirjoitetun vastauksen. Oi joi!

Kokeilen seuraavaksi <a href="https://kupotti.customer.aaibot.link/" target="_blank">BusinessKuopion chatbottia</a>.

<re-img
    src="kuopio1.jpg"
    title="BusinessKuopion botti ei tiedä mikä on veroilmoitus"
    meme=True
    >
</re-img>

Botti vastaa mielellään yrittäjyyttä ja liiketoimintaa koskeviin kysymyksiin, mutta ei kuitenkaan tiedä, mikä on veroilmoitus? Oi joi!

Huomasin sattumalta, että chatbotit on toteutettu niin että ne muistavat historian. Jos käytät chatbottia yhtenä päivänä, ja seuraavana päivänä perheenjäsenesi menee samalle sivulle samalta tietokoneelta, hän näkee kaikki viestit jotka olet kirjoittanut. Viestit voivat sisältää hyvinkin arkaluonteisia asioita, joten päätös säilyttää viestit sessioiden ylitse on vähintäänkin kyseenalainen. Jos viestejä ei pyyhitä automaattisesti, tulisi käyttäjiä minimissään varoittaa viestien muistamisesta ja ohjeistaa miten historian voi tyhjentää. Sovelluksessa ei ole mitään nappia josta historian edes voisi pyyhkiä (historian pyyhkiminen vaatii sellaisia taitoja, joita kaikilla esim. lapsilla ei välttämättä ole). Tämäkin ''ominaisuus'' vaikuttaa vahvasti siltä ettei minkäänlaista käytettävyystestausta chatboteille ole tehty ennen niiden julkaisua.

Eiköhän testailu saa tältä erää riittää. AuroraAI:n chatbotit muistuttavat lähinnä puhelinautomaatteja, joihin on ohjelmoitu muutama kymmenen eri aihetta. Puhelinautomaateissa tosin on se etu AuroraAI:hin nähden, että ne luettelevat käyttäjälle mitkä aiheet ovat saatavilla. Esimerkiksi pankin puhelinautomaatista saatat löytää oikean aiheen valitsemalla ensin 1) henkilöpalvelut, sitten 6) vakuutusasiat, ja lopuksi 3) korvauspyynnön jättäminen. AuroraAI:n tapauksessa voit vain arvailla oikeita sanayhdistelmiä, ja oi joi, kun se on vaikeaa sokkona ilman tietoa siitä millaisia sisältöjä on saatavilla. Tällaiset muutaman kymmenen eri aiheen esikirjoitetut tekstisisällöt olisivat paljon paremmin saavutettavissa ihan perinteisenä "usein kysytyt kysymykset" tekstisivuna. Chatbot-ratkaisussa ei saavuteta minkäänlaista etua perinteiseen tekstisivuun nähden, kun botin tekninen kyvykkyys on sillä tasolla että se tunnistaa vain kovakoodattuja avainsanoja ja vastaa niihin esikirjoitetuilla sisällöillä. Rahaa saadaan toki palamaan, tässä tapauksessa 11 miljoonan euron verran.

### Mitä tästä kaikesta opittiin?

En halua syyttää yksittäisiä ihmisiä tästä fiaskosta. Lopputulos olisi todennäköisesti ollut yhtä kehno, vaikka kaikki puuhamiehet ja toimittajat olisi vaihdettu toisiin. Hankkeen epäonnistuminen oli nähtävissä kaukaa, eikä siihen olisi missään tapauksessa pitänyt ryhtyä. <mark style="color: #666">Tekoälypöhinä ei kuulu julkiselle sektorille.</mark> Yksityisellä sektorilla saa pöhistä niin paljon kuin haluaa, kunhan tekee sen ilman verovaroja. Verovarat olisi parempi säästää sellaisiin kohteisiin, jotka luontaisesti kuuluvat valtion vastuulle ja osaamisalueelle. Nämäkin 11 miljoonaa olisi voinut käyttää paremmin esimerkiksi sairaanhoitajien ahdingon helpottamiseen tai sähkökriisin lievittämiseen.

Yksityisestä sektorista puheenollen, kokeillaanpa lopuksi millaista Chatbot-palvelua Suomen kansalaisille on tällä hetkellä tarjolla täysin ilmaiseksi yksityisen OpenAI:n ChatGPT-palvelusta:

<re-img
    src="openai1.jpg"
    title="ChatGPT osaa suositella kirjaa"
    >
</re-img>

Ihan osuva suositus, mutta tällainen toisella puolen maailmaa majaileva tekoäly ei voisi mitenkään kertoa meille, onko kirjaa saatavilla Kuopion kirjastosta... eihän?

<re-img
    src="openai2.jpg"
    title="ChatGPT osaa kertoa kirjan saatavuudesta Kuopion kirjastossa"
    >
</re-img>
