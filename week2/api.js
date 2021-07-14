 data = [
    {
        "fact": "All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog."
    },
    {
        "fact": "Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days."
    },
    {
        "fact": "Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful."
    },
    {
        "fact": "Apple and pear seeds contain arsenic, which may be deadly to dogs."
    },
    {
        "fact": "Rock star Ozzy Osborne saved his wife Sharon’s Pomeranian from a coyote by tackling ad wresting the coyote until it released the dog."
    },
    {
        "fact": "Dogs have sweat glands in between their paws."
    },
    {
        "fact": "In 2003, Dr. Roger Mugford invented the \"wagometer,\" a device that claims to interpret a dog’s exact mood by measuring the wag of its tail."
    },
    {
        "fact": "Dogs have three eyelids. The third lid, called a nictitating membrane or \"haw,\" keeps the eye lubricated and protected."
    },
    {
        "fact": "A dog’s shoulder blades are unattached to the rest of the skeleton to allow greater flexibility for running."
    },
    {
        "fact": "Puppies are sometimes rejected by their mother if they are born by cesarean and cleaned up before being given back to her."
    },
    {
        "fact": "The phrase \"raining cats and dogs\" originated in seventeenth-century England. During heavy rainstorms, many homeless animals would drown and float down the streets, giving the appearance that it had actually rained cats and dogs."
    },
    {
        "fact": "During the Middle Ages, Great Danes and Mastiffs were sometimes suited with armor and spiked collars to enter a battle or to defend supply caravans."
    },
    {
        "fact": "Pekingese and Japanese Chins were so important in the ancient Far East that they had their own servants and were carried around trade routes as gifts for kings and emperors. Pekingese were even worshipped in the temples of China for centuries."
    },
    {
        "fact": "The shape of a dog’s face suggests how long it will live. Dogs with sharp, pointed faces that look more like wolves typically live longer. Dogs with very flat faces, such as bulldogs, often have shorter lives."
    },
    {
        "fact": "After the fall of Rome, human survival often became more important than breeding and training dogs. Legends of werewolves emerged during this time as abandoned dogs traveling in packs commonly roamed streets and terrified villagers."
    },
    {
        "fact": "During the Middle Ages, mixed breeds of peasants’ dogs were required to wear blocks around their necks to keep them from breeding with noble hunting dogs. Purebred dogs were very expensive and hunting became the province of the rich."
    },
    {
        "fact": "The most dogs ever owned by one person were 5,000 Mastiffs owned by Kublai Khan."
    },
    {
        "fact": "The American Kennel Club, the most influential dog club in the United States, was founded in 1884."
    },
    {
        "fact": "The most popular male dog names are Max and Jake. The most popular female dog names are Maggie and Molly."
    },
    {
        "fact": "Scholars have argued over the metaphysical interpretation of Dorothy’s pooch, Toto, in the Wizard of Oz. One theory postulates that Toto represents Anubis, the dog-headed Egyptian god of death, because Toto consistently keeps Dorothy from safely returning home."
    },
    {
        "fact": "Weird dog laws include allowing police offers in Palding, Ohio, to bite a dog to quiet it. In Ventura County, California, cats and dogs are not allowed to have sex without a permit."
    },
    {
        "fact": "The first dog chapel was established in 2001. It was built in St. Johnsbury, Vermont, by Stephan Huneck, a children’s book author whose five dogs helped him recuperate from a serious illness."
    },
    {
        "fact": "Those born under the sign of the dog in Chinese astrology are considered to be loyal and discreet, though slightly temperamental."
    },
    {
        "fact": "In Iran, it is against the law to own a dog as a pet. However, if an owner can prove the dog is a guard or hunting dog, this restriction doesn’t apply. Muslim reticence concerning dogs is perhaps due to the fact that rabies has always been endemic in the Middle East."
    },
    {
        "fact": "The Mayans and Aztecs symbolized every tenth day with the dog, and those born under this sign were believed to have outstanding leadership skills."
    },
    {
        "fact": "The ancient Mbaya Indians of the Gran Chaco in South America believed that humans originally lived underground until dogs dug them up."
    },
    {
        "fact": "Plato once said that \"a dog has the soul of a philosopher.\" "
    },
    {
        "fact": "French poodles did not originate in France but in Germany \"poodle\" comes from the German pudel or pudelhund, meaning \"splashing dog\". Some scholars speculate the poodle’s puffs of hair evolved when hunters shaved the poodle for more efficient swimming, while leaving the pom-poms around the major joints to keep them warm."
    },
    {
        "fact": "The name of the dog on the Cracker Jacks box is Bingo. The Taco Bell Chihuahua is a rescued dog named Gidget."
    },
    {
        "fact": "The first dogs were self-domesticated wolves which, at least 12,000 years ago, became attracted to the first sites of permanent human habitation."
    },
    {
        "fact": "Dachshunds were bred to fight badgers in their dens."
    },
]

console.log(data)

let item = document.getElementById('item')

for (i=0; i < data.length; i++){
    let thisOne = document.createElement('li')
    thisOne.textContent = data[i].fact
    item.appendChild(thisOne)
}