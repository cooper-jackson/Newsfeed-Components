// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Why Aragorn is the coolest character in any movie part 1',
    date: '1/1/2001',
    firstParagraph: `If by my life or death I can protect you, I will.`,
    secondParagraph: `My Friends… You Bow To No One.`,
    thirdParagraph: `A Day May Come When The Courage Of Men Fails, When We Forsake Our Friends And Break All Bonds Of Fellowship, But It Is Not This Day.`
  },
  {
    title: 'Why Aragorn is the coolest character in any movie part 2',
    date: '1/1/2001',
    firstParagraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique enim. Mauris mollis viverra mi. Praesent luctus quam sit amet placerat mollis. Nullam vitae auctor nunc. Phasellus convallis non dui in tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id eleifend lacus, non placerat felis. Morbi id turpis ultricies, efficitur sapien a, tempus mi.`,
    secondParagraph: `Vestibulum porttitor lacus luctus luctus porta. Pellentesque magna lorem, pulvinar sit amet commodo a, efficitur vehicula odio. In elit neque, luctus et mattis et, ullamcorper ut augue. Aliquam id cursus tortor. Ut cursus mauris urna, ac varius justo efficitur id. Praesent semper lorem quis rutrum aliquam. Pellentesque quam nisl, posuere sed ipsum vulputate, finibus ornare nunc. Sed feugiat nulla diam, non molestie mauris sollicitudin a. Nulla massa dolor, vestibulum ut nisi vitae, scelerisque blandit risus. Nulla mi lectus, vehicula lobortis dictum quis, commodo vitae neque. Nulla vel est enim. Suspendisse ipsum felis, molestie at dolor a, posuere malesuada magna. Proin vulputate sapien in felis tincidunt, vel laoreet massa molestie. Proin commodo ornare nunc. Phasellus varius risus eget risus tincidunt, ut porttitor enim ornare.`,
    thirdParagraph: `Quisque aliquet felis sit amet magna aliquam commodo. Phasellus vitae augue ut ipsum consequat finibus. Curabitur vitae ornare lacus, eu tristique libero. Nam sapien elit, posuere eget porttitor at, luctus ac erat. Ut id odio est. Proin venenatis justo ac cursus consequat. Fusce at lobortis odio, id sagittis ex.`
  },
  {
    title: 'Why Aragorn is the coolest character in any movie part 3',
    date: '1/1/2001',
    firstParagraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at accumsan orci. Morbi sollicitudin felis a arcu dignissim iaculis. Donec lacus urna, semper ac convallis et, dignissim eget tellus. Quisque rutrum fermentum pellentesque. Donec sem nibh, elementum sed molestie sed, sollicitudin pulvinar velit. Suspendisse quis ipsum in erat pulvinar rhoncus aliquet cursus libero. Vivamus diam diam, lacinia ut luctus id, auctor in metus. Praesent nec erat quis purus sodales rutrum. Vestibulum tincidunt pulvinar pulvinar. Nunc lectus orci, gravida ac tincidunt eget, viverra sed enim. In leo ante, varius vel aliquet ut, bibendum et lacus. Etiam sed cursus ligula. Maecenas dapibus sapien ac risus laoreet interdum. Aenean sapien est, viverra vitae tellus ac, ornare bibendum nibh. Vivamus vel efficitur ligula. Praesent in libero cursus nulla finibus aliquet.`,
    secondParagraph: `Praesent viverra, leo ultrices facilisis dapibus, orci justo vehicula tortor, venenatis vulputate nisi dui suscipit orci. Sed ut mi tincidunt, tempus metus vel, tempus diam. Curabitur commodo, mi eget faucibus lobortis, tortor metus auctor augue, et posuere tortor nulla eu tortor. Aenean efficitur odio ut dignissim posuere. Phasellus eget justo at ex cursus pharetra. Vestibulum rhoncus nisl sit amet viverra feugiat. Pellentesque facilisis ex nec ultricies congue. Etiam tincidunt sed dolor sed auctor. Sed a dolor maximus, sollicitudin risus in, ullamcorper neque. Donec finibus urna urna. In quis mauris sed dolor pulvinar tempor. Phasellus dictum, urna ut scelerisque cursus, velit est fringilla justo, quis tincidunt est massa id lectus. Donec ac odio ac sem pretium gravida sed ut urna.`,
    thirdParagraph: `In ac nisl hendrerit, tempor magna non, convallis justo. Vivamus augue tellus, aliquet in condimentum congue, vehicula at dolor. Quisque maximus sit amet lorem nec tempor. Aliquam malesuada consequat lacus a blandit. Ut ullamcorper, est vel lobortis elementum, neque ante accumsan magna, ultricies commodo erat nulla non odio. Curabitur vulputate, nulla in condimentum euismod, felis mi rutrum magna, vitae accumsan nibh metus ut lorem. Cras arcu eros, placerat eget vulputate vel, fermentum sed mi. Nam ex risus, tincidunt vitae nibh ut, pulvinar bibendum tellus. In in sem at massa euismod varius eget vel neque. Ut ornare, nunc id dictum vulputate, nibh mi blandit lacus, id consequat mi justo non ligula. Phasellus ornare pretium felis.`
  }
];

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

function titleMaker(data) {
  let title = document.createElement('h2')
  title.textContent = data["title"]
  return title
}

function dateMaker(data) {
  let date = document.createElement('p')
  date.className = 'date'
  date.textContent = data["date"]
  return date
}

function paragraphMaker(data, paragraphIndex) {
  let paragraph = document.createElement('p')
  paragraph.textContent = data[paragraphIndex]
  return paragraph
}

function buttonMaker() {
  let button = document.createElement('span')
  button.className = 'expandButton'
  button.textContent = '+'
  return button
}

function articleMaker(article) {
  let articleDiv = document.createElement('div')
  articleDiv.classList.add('article')

  let titleHeader = titleMaker(article)
  articleDiv.appendChild(titleHeader)

  let date = dateMaker(article)
  articleDiv.appendChild(date)

  let firstParagraph = paragraphMaker(article, "firstParagraph")
  articleDiv.appendChild(firstParagraph)

  let secondParagraph = paragraphMaker(article, "secondParagraph")
  articleDiv.appendChild(secondParagraph)

  let thirdParagraph = paragraphMaker(article, "thirdParagraph")
  articleDiv.appendChild(thirdParagraph)

  let button = buttonMaker()
  articleDiv.appendChild(button)

  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('article-open')
    console.log(button.parentElement)
  })

  return articleDiv
}

// Populates the article list with articles thanks to articleMaker
data.forEach(e => {
  document.querySelector('.articles').append(articleMaker(e))
})
