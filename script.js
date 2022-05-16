let email = document.getElementById("email")
let email2 = document.getElementById("email2")
let emailModal = document.getElementById("emailModal")
let closeModal = document.getElementById("closeModal")
let mobileMenu = document.getElementById("mobileMenu")
let mobileMenuOpen = document.getElementById("mobileMenuOpen")
let mobileMenuClose = document.getElementById("mobileMenuClose")



email.addEventListener("click", function(event){
    event.preventDefault()
    emailModal.classList.remove('hidden')
    document.body.classList.add('remove-scrolling')
})

email2.addEventListener("click", function(event){
    event.preventDefault()
    emailModal.classList.remove('hidden')
    document.body.classList.add('remove-scrolling')
})

closeModal.addEventListener("click", function(event){
    emailModal.classList.add('hidden')
    document.body.classList.remove('remove-scrolling')
})

mobileMenuOpen.addEventListener("click", function(event){
    mobileMenu.classList.remove('hidden')
    document.body.classList.add('remove-scrolling')
})

mobileMenuClose.addEventListener("click", function(event){
    mobileMenu.classList.add('hidden')
    document.body.classList.remove('remove-scrolling')
})


// Menu section

let pizzaModal = document.getElementById("pizzaModal")
let pizzaOpen = document.getElementById("pizzaOpen")
let pizzaClose = document.getElementById("pizzaClose")

pizzaOpen.addEventListener("click", function(event){
    pizzaModal.classList.remove('hidden')
    document.body.classList.add('remove-scrolling')
})

pizzaClose.addEventListener("click", function(event){
    pizzaModal.classList.add('hidden')
    document.body.classList.remove('remove-scrolling')

    tomatosauseImage2.classList.add("hidden")
    standartsauseImage2.classList.add("hidden")
    baconImage2.classList.add("hidden")
    bellpepperImage2.classList.add("hidden")
    cornImage2.classList.add("hidden")
    hamImage2.classList.add("hidden")
    mushroomsImage2.classList.add("hidden")
    olivesImage2.classList.add("hidden")
    onionsImage2.classList.add("hidden")
    pineapplesImage2.classList.add("hidden")
    sausagesImage2.classList.add("hidden")
    shrimpsImage2.classList.add("hidden")
    spicypepperImage2.classList.add("hidden")
    tomatoesImage2.classList.add("hidden")

    tomatosauseImage.classList.add("hidden")
    standartsauseImage.classList.add("hidden")
    baconImage.classList.add("hidden")
    bellpepperImage.classList.add("hidden")
    cornImage.classList.add("hidden")
    hamImage.classList.add("hidden")
    mushroomsImage.classList.add("hidden")
    olivesImage.classList.add("hidden")
    onionsImage.classList.add("hidden")
    pineapplesImage.classList.add("hidden")
    sausagesImage.classList.add("hidden")
    shrimpsImage.classList.add("hidden")
    spicypepperImage.classList.add("hidden")
    tomatoesImage.classList.add("hidden")

    tomatoSause.checked = false
    standartSause.checked = false
    bacon.checked = false
    bellPepper.checked = false
    corn.checked = false
    ham.checked = false
    mushrooms.checked = false
    olives.checked = false
    onions.checked = false
    pineapples.checked = false
    sausages.checked = false
    shrimps.checked = false
    spicyPepper.checked = false
    tomatoes.checked = false
})

let tomatosauseImage = document.getElementById("tomatosauseImage")
let standartsauseImage = document.getElementById("standartsauseImage")
let baconImage = document.getElementById("baconImage")
let bellpepperImage = document.getElementById("bellpepperImage")
let cornImage = document.getElementById("cornImage")
let hamImage = document.getElementById("hamImage")
let mushroomsImage = document.getElementById("mushroomsImage")
let olivesImage = document.getElementById("olivesImage")
let onionsImage = document.getElementById("onionsImage")
let pineapplesImage = document.getElementById("pineapplesImage")
let sausagesImage = document.getElementById("sausagesImage")
let shrimpsImage = document.getElementById("shrimpsImage")
let spicypepperImage = document.getElementById("spicypepperImage")
let tomatoesImage = document.getElementById("tomatoesImage")

let tomatosauseImage2 = document.getElementById("tomatosauseImage2")
let standartsauseImage2 = document.getElementById("standartsauseImage2")
let baconImage2 = document.getElementById("baconImage2")
let bellpepperImage2 = document.getElementById("bellpepperImage2")
let cornImage2 = document.getElementById("cornImage2")
let hamImage2 = document.getElementById("hamImage2")
let mushroomsImage2 = document.getElementById("mushroomsImage2")
let olivesImage2 = document.getElementById("olivesImage2")
let onionsImage2 = document.getElementById("onionsImage2")
let pineapplesImage2 = document.getElementById("pineapplesImage2")
let sausagesImage2 = document.getElementById("sausagesImage2")
let shrimpsImage2 = document.getElementById("shrimpsImage2")
let spicypepperImage2 = document.getElementById("spicypepperImage2")
let tomatoesImage2 = document.getElementById("tomatoesImage2")

let tomatoSause = document.getElementById("tomatoSause")
let standartSause = document.getElementById("standartSause")
let bacon = document.getElementById("bacon")
let bellPepper = document.getElementById("bellPepper")
let corn = document.getElementById("corn")
let ham = document.getElementById("ham")
let mushrooms = document.getElementById("mushrooms")
let olives = document.getElementById("olives")
let onions = document.getElementById("onions")
let pineapples = document.getElementById("pineapples")
let sausages = document.getElementById("sausages")
let shrimps = document.getElementById("shrimps")
let spicyPepper = document.getElementById("spicyPepper")
let tomatoes = document.getElementById("tomatoes")

tomatoSause.addEventListener("change", function(event){
    standartsauseImage.classList.add("hidden")
    tomatosauseImage.classList.toggle('hidden')
    tomatosauseImage2.classList.toggle('hidden')
})

standartSause.addEventListener("change", function(event){
    tomatosauseImage.classList.add("hidden")
    standartsauseImage.classList.toggle('hidden')
    standartsauseImage2.classList.toggle('hidden')
})

bacon.addEventListener("change", function(event){
    baconImage.classList.toggle('hidden')
    baconImage2.classList.toggle('hidden')
})

bellPepper.addEventListener("change", function(event){
    bellpepperImage.classList.toggle('hidden')
    bellpepperImage2.classList.toggle('hidden')
})

corn.addEventListener("change", function(event){
    cornImage.classList.toggle('hidden')
    cornImage2.classList.toggle('hidden')
})

ham.addEventListener("change", function(event){
    hamImage.classList.toggle('hidden')
    hamImage2.classList.toggle('hidden')
})

mushrooms.addEventListener("change", function(event){
    mushroomsImage.classList.toggle('hidden')
    mushroomsImage2.classList.toggle('hidden')
})

olives.addEventListener("change", function(event){
    olivesImage.classList.toggle('hidden')
    olivesImage2.classList.toggle('hidden')
})

onions.addEventListener("change", function(event){
    onionsImage.classList.toggle('hidden')
    onionsImage2.classList.toggle('hidden')
})

pineapples.addEventListener("change", function(event){
    pineapplesImage.classList.toggle('hidden')
    pineapplesImage2.classList.toggle('hidden')
})

sausages.addEventListener("change", function(event){
    sausagesImage.classList.toggle('hidden')
    sausagesImage2.classList.toggle('hidden')
})

shrimps.addEventListener("change", function(event){
    shrimpsImage.classList.toggle('hidden')
    shrimpsImage2.classList.toggle('hidden')
})

spicyPepper.addEventListener("change", function(event){
    spicypepperImage.classList.toggle('hidden')
    spicypepperImage2.classList.toggle('hidden')
})

tomatoes.addEventListener("change", function(event){
    tomatoesImage.classList.toggle('hidden')
    tomatoesImage2.classList.toggle('hidden')
})


let olvieName = document.getElementById("oliveName")
let olivePrice = document.getElementById("olivePrice")
let olivePlus = document.getElementById("olivePlus")
let oliveMinus = document.getElementById("oliveMinus")
let oliveQuantity = document.getElementById("oliveQuantity")

let minLimit = 0
let maxLimit = 10

olivePlus.addEventListener("click", function(event){
    event.preventDefault()
    oliveQuantity.value = parseInt(oliveQuantity.value) + 1
    if (parseInt(oliveQuantity.value) > maxLimit){
        oliveQuantity.value = parseInt(oliveQuantity.value) * 0 + maxLimit
    } else if(parseInt(oliveQuantity.value) < minLimit){
        oliveQuantity.value = parseInt(oliveQuantity.value) * 0
    }
})

oliveMinus.addEventListener("click", function(event){
    event.preventDefault()
    oliveQuantity.value = parseInt(oliveQuantity.value) - 1
    if (parseInt(oliveQuantity.value) < minLimit){
        oliveQuantity.value = parseInt(oliveQuantity.value) * 0
    } else if(parseInt(oliveQuantity.value) > maxLimit){
        oliveQuantity.value = parseInt(oliveQuantity.value) * 0 + maxLimit
    }
    
})



let hawaiianName = document.getElementById("hawaiianName")
let hawaiianPrice = document.getElementById("hawaiianPrice")
let hawaiianPlus = document.getElementById("hawaiianPlus")
let hawaiianMinus = document.getElementById("hawaiianMinus")
let hawaiianQuantity = document.getElementById("hawaiianQuantity")

hawaiianPlus.addEventListener("click", function(event){
    event.preventDefault()
    hawaiianQuantity.value = parseInt(hawaiianQuantity.value) + 1
    if (parseInt(hawaiianQuantity.value) > maxLimit){
        hawaiianQuantity.value = parseInt(hawaiianQuantity.value) * 0 + maxLimit
    } else if(parseInt(hawaiianQuantity.value) < minLimit){
        hawaiianQuantity.value = parseInt(hawaiianQuantity.value) * 0
    }
})

hawaiianMinus.addEventListener("click", function(event){
    event.preventDefault()
    hawaiianQuantity.value = parseInt(hawaiianQuantity.value) - 1
    if (parseInt(hawaiianQuantity.value) < minLimit){
        hawaiianQuantity.value = parseInt(hawaiianQuantity.value) * 0
    } else if(parseInt(hawaiianQuantity.value) > maxLimit){
        hawaiianQuantity.value = parseInt(hawaiianQuantity.value) * 0 + maxLimit
    }
    
})



let spicyName = document.getElementById("spicyName")
let spicyPrice = document.getElementById("spicyPrice")
let spicyPlus = document.getElementById("spicyPlus")
let spicyMinus = document.getElementById("spicyMinus")
let spicyQuantity = document.getElementById("spicyQuantity")

spicyPlus.addEventListener("click", function(event){
    event.preventDefault()
    spicyQuantity.value = parseInt(spicyQuantity.value) + 1
    if (parseInt(spicyQuantity.value) > maxLimit){
        spicyQuantity.value = parseInt(spicyQuantity.value) * 0 + maxLimit
    } else if(parseInt(spicyQuantity.value) < minLimit){
        spicyQuantity.value = parseInt(spicyQuantity.value) * 0
    }
})

spicyMinus.addEventListener("click", function(event){
    event.preventDefault()
    spicyQuantity.value = parseInt(spicyQuantity.value) - 1
    if (parseInt(spicyQuantity.value) < minLimit){
        spicyQuantity.value = parseInt(spicyQuantity.value) * 0
    } else if(parseInt(spicyQuantity.value) > maxLimit){
        spicyQuantity.value = parseInt(spicyQuantity.value) * 0 + maxLimit
    }
    
})



let vegetarianName = document.getElementById("vegetarianName")
let vegetarianPrice = document.getElementById("vegetarianPrice")
let vegetarianPlus = document.getElementById("vegetarianPlus")
let vegetarianMinus = document.getElementById("vegetarianMinus")
let vegetarianQuantity = document.getElementById("vegetarianQuantity")

vegetarianPlus.addEventListener("click", function(event){
    event.preventDefault()
    vegetarianQuantity.value = parseInt(vegetarianQuantity.value) + 1
    if (parseInt(vegetarianQuantity.value) > maxLimit){
        vegetarianQuantity.value = parseInt(vegetarianQuantity.value) * 0 + maxLimit
    } else if(parseInt(vegetarianQuantity.value) < minLimit){
        vegetarianQuantity.value = parseInt(vegetarianQuantity.value) * 0
    }
})

vegetarianMinus.addEventListener("click", function(event){
    event.preventDefault()
    vegetarianQuantity.value = parseInt(vegetarianQuantity.value) - 1
    if (parseInt(vegetarianQuantity.value) < minLimit){
        vegetarianQuantity.value = parseInt(vegetarianQuantity.value) * 0
    } else if(parseInt(vegetarianQuantity.value) > maxLimit){
        vegetarianQuantity.value = parseInt(vegetarianQuantity.value) * 0 + maxLimit
    }
    
})



let vegetableName = document.getElementById("vegetableName")
let vegetablePrice = document.getElementById("vegetablePrice")
let vegetablePlus = document.getElementById("vegetablePlus")
let vegetableMinus = document.getElementById("vegetableMinus")
let vegetableQuantity = document.getElementById("vegetableQuantity")

vegetablePlus.addEventListener("click", function(event){
    event.preventDefault()
    vegetableQuantity.value = parseInt(vegetableQuantity.value) + 1
    if (parseInt(vegetableQuantity.value) > maxLimit){
        vegetableQuantity.value = parseInt(vegetableQuantity.value) * 0 + maxLimit
    } else if(parseInt(vegetableQuantity.value) < minLimit){
        vegetableQuantity.value = parseInt(vegetableQuantity.value) * 0
    }
})

vegetableMinus.addEventListener("click", function(event){
    event.preventDefault()
    vegetableQuantity.value = parseInt(vegetableQuantity.value) - 1
    if (parseInt(vegetableQuantity.value) < minLimit){
        vegetableQuantity.value = parseInt(vegetableQuantity.value) * 0
    } else if(parseInt(vegetableQuantity.value) > maxLimit){
        vegetableQuantity.value = parseInt(vegetableQuantity.value) * 0 + maxLimit
    }
    
})




let mushroomName = document.getElementById("mushroomName")
let mushroomPrice = document.getElementById("mushroomPrice")
let mushroomPlus = document.getElementById("mushroomPlus")
let mushroomMinus = document.getElementById("mushroomMinus")
let mushroomQuantity = document.getElementById("mushroomQuantity")

mushroomPlus.addEventListener("click", function(event){
    event.preventDefault()
    mushroomQuantity.value = parseInt(mushroomQuantity.value) + 1
    if (parseInt(mushroomQuantity.value) > maxLimit){
        mushroomQuantity.value = parseInt(mushroomQuantity.value) * 0 + maxLimit
    } else if(parseInt(mushroomQuantity.value) < minLimit){
        mushroomQuantity.value = parseInt(mushroomQuantity.value) * 0
    }
})

mushroomMinus.addEventListener("click", function(event){
    event.preventDefault()
    mushroomQuantity.value = parseInt(mushroomQuantity.value) - 1
    if (parseInt(mushroomQuantity.value) < minLimit){
        mushroomQuantity.value = parseInt(mushroomQuantity.value) * 0
    } else if(parseInt(mushroomQuantity.value) > maxLimit){
        mushroomQuantity.value = parseInt(mushroomQuantity.value) * 0 + maxLimit
    }
    
})



let smeatName = document.getElementById("smeatName")
let smeatPrice = document.getElementById("smeatPrice")
let smeatPlus = document.getElementById("smeatPlus")
let smeatMinus = document.getElementById("smeatMinus")
let smeatQuantity = document.getElementById("smeatQuantity")

smeatPlus.addEventListener("click", function(event){
    event.preventDefault()
    smeatQuantity.value = parseInt(smeatQuantity.value) + 1
    if (parseInt(smeatQuantity.value) > maxLimit){
        smeatQuantity.value = parseInt(smeatQuantity.value) * 0 + maxLimit
    } else if(parseInt(smeatQuantity.value) < minLimit){
        smeatQuantity.value = parseInt(smeatQuantity.value) * 0
    }
})

smeatMinus.addEventListener("click", function(event){
    event.preventDefault()
    smeatQuantity.value = parseInt(smeatQuantity.value) - 1
    if (parseInt(smeatQuantity.value) < minLimit){
        smeatQuantity.value = parseInt(smeatQuantity.value) * 0
    } else if(parseInt(smeatQuantity.value) > maxLimit){
        smeatQuantity.value = parseInt(smeatQuantity.value) * 0 + maxLimit
    }
    
})



let seaName = document.getElementById("seaName")
let seaPrice = document.getElementById("seaPrice")
let seaPlus = document.getElementById("seaPlus")
let seaMinus = document.getElementById("seaMinus")
let seaQuantity = document.getElementById("seaQuantity")

seaPlus.addEventListener("click", function(event){
    event.preventDefault()
    seaQuantity.value = parseInt(seaQuantity.value) + 1
    if (parseInt(seaQuantity.value) > maxLimit){
        seaQuantity.value = parseInt(seaQuantity.value) * 0 + maxLimit
    } else if(parseInt(seaQuantity.value) < minLimit){
        seaQuantity.value = parseInt(seaQuantity.value) * 0
    }
})

seaMinus.addEventListener("click", function(event){
    event.preventDefault()
    seaQuantity.value = parseInt(seaQuantity.value) - 1
    if (parseInt(seaQuantity.value) < minLimit){
        seaQuantity.value = parseInt(seaQuantity.value) * 0
    } else if(parseInt(seaQuantity.value) > maxLimit){
        seaQuantity.value = parseInt(seaQuantity.value) * 0 + maxLimit
    }
    
})



let baconName = document.getElementById("baconName")
let baconPrice = document.getElementById("baconPrice")
let baconPlus = document.getElementById("baconPlus")
let baconMinus = document.getElementById("baconMinus")
let baconQuantity = document.getElementById("baconQuantity")

baconPlus.addEventListener("click", function(event){
    event.preventDefault()
    baconQuantity.value = parseInt(baconQuantity.value) + 1
    if (parseInt(baconQuantity.value) > maxLimit){
        baconQuantity.value = parseInt(baconQuantity.value) * 0 + maxLimit
    } else if(parseInt(baconQuantity.value) < minLimit){
        baconQuantity.value = parseInt(baconQuantity.value) * 0
    }
})

baconMinus.addEventListener("click", function(event){
    event.preventDefault()
    baconQuantity.value = parseInt(baconQuantity.value) - 1
    if (parseInt(baconQuantity.value) < minLimit){
        baconQuantity.value = parseInt(baconQuantity.value) * 0
    } else if(parseInt(baconQuantity.value) > maxLimit){
        baconQuantity.value = parseInt(baconQuantity.value) * 0 + maxLimit
    }
    
})



let vilageName = document.getElementById("vilageName")
let vilagePrice = document.getElementById("vilagePrice")
let vilagePlus = document.getElementById("vilagePlus")
let vilageMinus = document.getElementById("vilageMinus")
let vilageQuantity = document.getElementById("vilageQuantity")

vilagePlus.addEventListener("click", function(event){
    event.preventDefault()
    vilageQuantity.value = parseInt(vilageQuantity.value) + 1
    if (parseInt(vilageQuantity.value) > maxLimit){
        vilageQuantity.value = parseInt(vilageQuantity.value) * 0 + maxLimit
    } else if(parseInt(vilageQuantity.value) < minLimit){
        vilageQuantity.value = parseInt(vilageQuantity.value) * 0
    }
})

vilageMinus.addEventListener("click", function(event){
    event.preventDefault()
    vilageQuantity.value = parseInt(vilageQuantity.value) - 1
    if (parseInt(vilageQuantity.value) < minLimit){
        vilageQuantity.value = parseInt(vilageQuantity.value) * 0
    } else if(parseInt(vilageQuantity.value) > maxLimit){
        vilageQuantity.value = parseInt(vilageQuantity.value) * 0 + maxLimit
    }
    
})


let constructedName = document.getElementById("constructedName")
let constructedPrice = document.getElementById("constructedPrice")
let constructedPlus = document.getElementById("constructedPlus")
let constructedMinus = document.getElementById("constructedMinus")
let constructedQuantity = document.getElementById("constructedQuantity")
let constructedDescription = document.getElementById("constructedDescription")

constructedPlus.addEventListener("click", function(event){
    event.preventDefault()
    constructedQuantity.value = parseInt(constructedQuantity.value) + 1
    if (parseInt(constructedQuantity.value) > maxLimit){
        constructedQuantity.value = parseInt(constructedQuantity.value) * 0 + maxLimit
    } else if(parseInt(constructedQuantity.value) < minLimit){
        constructedQuantity.value = parseInt(constructedQuantity.value) * 0
    }

    if(parseInt(constructedPrice.textContent) == 0){
        constructedQuantity.value = parseInt(constructedQuantity.value) * 0
    }
})

constructedMinus.addEventListener("click", function(event){
    event.preventDefault()
    constructedQuantity.value = parseInt(constructedQuantity.value) - 1
    if (parseInt(constructedQuantity.value) < minLimit){
        constructedQuantity.value = parseInt(constructedQuantity.value) * 0
    } else if(parseInt(constructedQuantity.value) > maxLimit){
        constructedQuantity.value = parseInt(constructedQuantity.value) * 0 + maxLimit
    }

    if(parseInt(constructedPrice.textContent) == 0){
        constructedQuantity.value = parseInt(constructedQuantity.value) * 0
    }
    
})

let constructorFinish = document.getElementById("constructorFinish")

price = 10

constructorFinish.addEventListener("click", function(event){
    event.preventDefault()
    pizzaModal.classList.add('hidden')
    document.body.classList.remove('remove-scrolling')
    constructedDescription.textContent = ""

    if(tomatosauseImage.classList.contains('hidden')){
    }else{
        constructedDescription.textContent += " Tomato Sause,"
    }

    if(standartsauseImage.classList.contains('hidden')){
    }else{
        constructedDescription.textContent += " Standart Sause,"
    }

    if(baconImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Bacon,"
    }

    if(bellpepperImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Bell Pepper,"
    }

    if(cornImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Corn,"
    }

    if(hamImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Ham,"
    }

    if(mushroomsImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Mushrooms,"
    }

    if(olivesImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Olives,"
    }

    if(onionsImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Onions,"
    }

    if(pineapplesImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Pineapples,"
    }

    if(sausagesImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Sausages,"
    }

    if(shrimpsImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Shrimps,"
    }

    if(spicypepperImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Spicy Pepper,"
    }

    if(tomatoesImage.classList.contains('hidden')){
    }else{
        price += 1
        constructedDescription.textContent += " Tomatoes,"
    }

    constructedDescription.textContent += " Mozarella"
    constructedPrice.textContent = price + ".00"
})

let olivePizza = document.getElementById("olivePizza")
let hawaiianPizza = document.getElementById("hawaiianPizza")
let spicymeatPizza = document.getElementById("spicymeatPizza")
let vegetarianPizza = document.getElementById("vegetarianPizza")
let vegetablePizza = document.getElementById("vegetablePizza")
let mushroomPizza = document.getElementById("mushroomPizza")
let smeatPizza = document.getElementById("smeatPizza")
let seaPizza = document.getElementById("seaPizza")
let baconPizza = document.getElementById("baconPizza")
let vilagePizza = document.getElementById("vilagePizza")
let constructedPizza = document.getElementById("constructedPizza")

let search = document.getElementById("search")


function hideAll(){
    olivePizza.classList.add('hidden')
    hawaiianPizza.classList.add('hidden')
    spicymeatPizza.classList.add('hidden')
    vegetarianPizza.classList.add('hidden')
    vegetablePizza.classList.add('hidden')
    mushroomPizza.classList.add('hidden')
    smeatPizza.classList.add('hidden')
    seaPizza.classList.add('hidden')
    baconPizza.classList.add('hidden')
    vilagePizza.classList.add('hidden')
    constructedPizza.classList.add('hidden')
}

function showAll(){
    olivePizza.classList.remove('hidden')
    hawaiianPizza.classList.remove('hidden')
    spicymeatPizza.classList.remove('hidden')
    vegetarianPizza.classList.remove('hidden')
    vegetablePizza.classList.remove('hidden')
    mushroomPizza.classList.remove('hidden')
    smeatPizza.classList.remove('hidden')
    seaPizza.classList.remove('hidden')
    baconPizza.classList.remove('hidden')
    vilagePizza.classList.remove('hidden')
    constructedPizza.classList.remove('hidden')
}

search.addEventListener("input", function(event){

    hideAll()


    if (event.target.value.includes("Olive")){
        olivePizza.classList.remove('hidden')
        vegetarianPizza.classList.remove('hidden')
    } else if(event.target.value.includes("olive")){
        olivePizza.classList.remove('hidden')
        vegetarianPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Hawaiian")){
        hawaiianPizza.classList.remove('hidden')
    } else if(event.target.value.includes("hawaiian")){
        hawaiianPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Spicy")){
        spicymeatPizza.classList.remove('hidden')
    } else if(event.target.value.includes("spicy")){
        spicymeatPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Vegetarian")){
        vegetarianPizza.classList.remove('hidden')
    } else if(event.target.value.includes("vegetarian")){
        vegetarianPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Meat")){
        spicymeatPizza.classList.remove('hidden')
        smeatPizza.classList.remove('hidden')
    } else if(event.target.value.includes("meat")){
        spicymeatPizza.classList.remove('hidden')
        smeatPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Vegetable")){
        vegetablePizza.classList.remove('hidden')
    } else if(event.target.value.includes("vegetable")){
        vegetablePizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Mushroom")){
        mushroomPizza.classList.remove('hidden')
    } else if(event.target.value.includes("mushroom")){
        mushroomPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Super")){
        smeatPizza.classList.remove('hidden')
    } else if(event.target.value.includes("super")){
        smeatPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Seafood")){
        seaPizza.classList.remove('hidden')
    } else if(event.target.value.includes("seafood")){
        seaPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Bacon")){
        baconPizza.classList.remove('hidden')
    } else if(event.target.value.includes("bacon")){
        baconPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Vilage")){
        vilagePizza.classList.remove('hidden')
    } else if(event.target.value.includes("vilage")){
        vilagePizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Your")){
        constructedPizza.classList.remove('hidden')
    } else if(event.target.value.includes("your")){
        constructedPizza.classList.remove('hidden')
    }

    if (event.target.value.includes("Own")){
        constructedPizza.classList.remove('hidden')
    } else if(event.target.value.includes("own")){
        constructedPizza.classList.remove('hidden')
    }
    

    if (event.target.value == ""){
        showAll()
    }
})

let sortModal = document.getElementById("sortModal")
let closeSort = document.getElementById("closeSort")
let openSort = document.getElementById("openSort")
let sortVegetarian = document.getElementById("sortVegetarian")
let sortMeat = document.getElementById("sortMeat")
let sortSea = document.getElementById("sortSea")
let sortTomato = document.getElementById("sortTomato")
let sortStandart = document.getElementById("sortStandart")
let sortReset = document.getElementById("sortReset")
let pizza = document.getElementById("pizza")

openSort.addEventListener("click", function(event){
    event.preventDefault()
    sortModal.classList.remove('hidden')
    sortModal.classList.add('remove-scrolling')
})

closeSort.addEventListener("click", function(event){
    sortModal.classList.add('hidden')
    sortModal.classList.remove('remove-scrolling')
})

sortVegetarian.addEventListener("click", function(event){
    sortModal.classList.add('hidden')
    sortModal.classList.remove('remove-scrolling')
    hideAll()
    vegetarianPizza.classList.remove('hidden')
    vegetablePizza.classList.remove('hidden')
})

sortMeat.addEventListener("click", function(event){
    sortModal.classList.add('hidden')
    sortModal.classList.remove('remove-scrolling')
    hideAll()
    olivePizza.classList.remove('hidden')
    hawaiianPizza.classList.remove('hidden')
    spicymeatPizza.classList.remove('hidden')
    mushroomPizza.classList.remove('hidden')
    smeatPizza.classList.remove('hidden')
    baconPizza.classList.remove('hidden')
    vilagePizza.classList.remove('hidden')
})

sortSea.addEventListener("click", function(event){
    sortModal.classList.add('hidden')
    sortModal.classList.remove('remove-scrolling')
    hideAll()
    seaPizza.classList.remove('hidden')
})

sortTomato.addEventListener("click", function(event){
    sortModal.classList.add('hidden')
    sortModal.classList.remove('remove-scrolling')
    hideAll()
    hawaiianPizza.classList.remove('hidden')
    spicymeatPizza.classList.remove('hidden')
    mushroomPizza.classList.remove('hidden')
    baconPizza.classList.remove('hidden')
    vilagePizza.classList.remove('hidden')
})

sortStandart.addEventListener("click", function(event){
    sortModal.classList.add('hidden')
    sortModal.classList.remove('remove-scrolling')
    hideAll()
    olivePizza.classList.remove('hidden')
    vegetarianPizza.classList.remove('hidden')
    vegetablePizza.classList.remove('hidden')
    smeatPizza.classList.remove('hidden')
    seaPizza.classList.remove('hidden')
})

sortReset.addEventListener("click", function(event){
    sortModal.classList.add('hidden')
    sortModal.classList.remove('remove-scrolling')
    showAll()
})

let orderModal = document.getElementById("orderModal")
let closeOrder = document.getElementById("closeOrder")
let openOrder = document.getElementById("openOrder")

let orderOlive = document.getElementById("orderOlive")
let oliveAmount = document.getElementById("oliveAmount")
let oliveEndPrice = document.getElementById("oliveEndPrice")

let orderHawaiian = document.getElementById("orderHawaiian")
let hawaiianAmount = document.getElementById("hawaiianAmount")
let hawaiianEndPrice = document.getElementById("hawaiianEndPrice")

let orderSpicy = document.getElementById("orderSpicy")
let spicyAmount = document.getElementById("spicyAmount")
let spicyEndPrice = document.getElementById("spicyEndPrice")

let orderVegetarian = document.getElementById("orderVegetarian")
let vegetarianAmount = document.getElementById("vegetarianAmount")
let vegetarianEndPrice = document.getElementById("vegetarianEndPrice")

let orderVegetable = document.getElementById("orderVegetable")
let vegetableAmount = document.getElementById("vegetableAmount")
let vegetableEndPrice = document.getElementById("vegetableEndPrice")

let orderMushroom = document.getElementById("orderMushroom")
let mushroomAmount = document.getElementById("mushroomAmount")
let mushroomEndPrice = document.getElementById("mushroomEndPrice")

let orderSmeat = document.getElementById("orderSmeat")
let smeatAmount = document.getElementById("smeatAmount")
let smeatEndPrice = document.getElementById("smeatEndPrice")

let orderSea = document.getElementById("orderSea")
let seaAmount = document.getElementById("seaAmount")
let seaEndPrice = document.getElementById("seaEndPrice")

let orderBacon = document.getElementById("orderBacon")
let baconAmount = document.getElementById("baconAmount")
let baconEndPrice = document.getElementById("baconEndPrice")

let orderVilage = document.getElementById("orderVilage")
let vilageAmount = document.getElementById("vilageAmount")
let vilageEndPrice = document.getElementById("vilageEndPrice")

let orderConstructed = document.getElementById("orderConstructed")
let constructedAmount = document.getElementById("constructedAmount")
let constructedEndPrice = document.getElementById("constructedEndPrice")

let finalPrice = document.getElementById("finalPrice")
    
openOrder.addEventListener("click", function(event){
    event.preventDefault()
    
    if (parseInt(oliveQuantity.value) +
        parseInt(hawaiianQuantity.value) +
        parseInt(spicyQuantity.value) +
        parseInt(vegetarianQuantity.value) +
        parseInt(vegetableQuantity.value) +
        parseInt(mushroomQuantity.value) +
        parseInt(smeatQuantity.value) +
        parseInt(seaQuantity.value) +
        parseInt(baconQuantity.value) +
        parseInt(vilageQuantity.value) +
        parseInt(constructedQuantity.value) < 1){
                    alert("Your Order Is Empty")
        }else{
            orderModal.classList.remove("hidden")
            document.body.classList.add("remove-scrolling")

            if(parseInt(oliveQuantity.value)>0){
                orderOlive.classList.remove("hidden")
                oliveAmount.textContent = oliveQuantity.value
                oliveEndPrice.textContent = parseFloat(olivePrice.textContent) * parseInt(oliveQuantity.value)
            }

            if(parseInt(hawaiianQuantity.value)>0){
                orderHawaiian.classList.remove("hidden")
                hawaiianAmount.textContent = hawaiianQuantity.value
                hawaiianEndPrice.textContent = parseFloat(hawaiianPrice.textContent) * parseInt(hawaiianQuantity.value)
            }

            if(parseInt(spicyQuantity.value)>0){
                orderSpicy.classList.remove("hidden")
                spicyAmount.textContent = spicyQuantity.value
                spicyEndPrice.textContent = parseFloat(spicyPrice.textContent) * parseInt(spicyQuantity.value)
            }

            if(parseInt(vegetarianQuantity.value)>0){
                orderVegetarian.classList.remove("hidden")
                vegetarianAmount.textContent = vegetarianQuantity.value
                vegetarianEndPrice.textContent = parseFloat(vegetarianPrice.textContent) * parseInt(vegetarianQuantity.value)
            }

            if(parseInt(vegetableQuantity.value)>0){
                orderVegetable.classList.remove("hidden")
                vegetableAmount.textContent = vegetableQuantity.value
                vegetableEndPrice.textContent = parseFloat(vegetablePrice.textContent) * parseInt(vegetableQuantity.value)
            }

            if(parseInt(mushroomQuantity.value)>0){
                orderMushroom.classList.remove("hidden")
                mushroomAmount.textContent = mushroomQuantity.value
                mushroomEndPrice.textContent = parseFloat(mushroomPrice.textContent) * parseInt(mushroomQuantity.value)
            }

            if(parseInt(smeatQuantity.value)>0){
                orderSmeat.classList.remove("hidden")
                smeatAmount.textContent = smeatQuantity.value
                smeatEndPrice.textContent = parseFloat(smeatPrice.textContent) * parseInt(smeatQuantity.value)
            }

            if(parseInt(seaQuantity.value)>0){
                orderSea.classList.remove("hidden")
                seaAmount.textContent = seaQuantity.value
                seaEndPrice.textContent = parseFloat(seaPrice.textContent) * parseInt(seaQuantity.value)
            }

            if(parseInt(baconQuantity.value)>0){
                orderBacon.classList.remove("hidden")
                baconAmount.textContent = baconQuantity.value
                baconEndPrice.textContent = parseFloat(baconPrice.textContent) * parseInt(baconQuantity.value)
            }

            if(parseInt(vilageQuantity.value)>0){
                orderVilage.classList.remove("hidden")
                vilageAmount.textContent = vilageQuantity.value
                vilageEndPrice.textContent = parseFloat(vilagePrice.textContent) * parseInt(vilageQuantity.value)
            }

            if(parseInt(constructedQuantity.value)>0){
                orderConstructed.classList.remove("hidden")
                constructedAmount.textContent = constructedQuantity.value
                constructedEndPrice.textContent = parseFloat(constructedPrice.textContent) * parseInt(constructedQuantity.value)
            }

            finalPrice.textContent = parseFloat(constructedEndPrice.textContent) +
                                     parseFloat(vilageEndPrice.textContent) +
                                     parseFloat(baconEndPrice.textContent) +
                                     parseFloat(seaEndPrice.textContent) +
                                     parseFloat(smeatEndPrice.textContent) +
                                     parseFloat(mushroomEndPrice.textContent) +
                                     parseFloat(vegetableEndPrice.textContent) +
                                     parseFloat(vegetarianEndPrice.textContent) +
                                     parseFloat(spicyEndPrice.textContent) +
                                     parseFloat(hawaiianEndPrice.textContent) +
                                     parseFloat(oliveEndPrice.textContent) 
        }
})

closeOrder.addEventListener("click", function(event){
    event.preventDefault()
    orderModal.classList.add("hidden")
    document.body.classList.remove("remove-scrolling")

    orderOlive.classList.add('hidden')
    oliveAmount.textContent = "0"
    oliveEndPrice.textContent = "0"

    orderHawaiian.classList.add('hidden')
    hawaiianAmount.textContent = "0"
    hawaiianEndPrice.textContent = "0"

    orderSpicy.classList.add('hidden')
    spicyAmount.textContent = "0"
    spicyEndPrice.textContent = "0"

    orderVegetarian.classList.add('hidden')
    vegetarianAmount.textContent = "0"
    vegetarianEndPrice.textContent = "0"

    orderVegetable.classList.add('hidden')
    vegetableAmount.textContent = "0"
    vegetableEndPrice.textContent = "0"

    orderMushroom.classList.add('hidden')
    mushroomAmount.textContent = "0"
    mushroomEndPrice.textContent = "0"

    orderSmeat.classList.add('hidden')
    smeatAmount.textContent = "0"
    smeatEndPrice.textContent = "0"

    orderSea.classList.add('hidden')
    seaAmount.textContent = "0"
    seaEndPrice.textContent = "0"

    orderBacon.classList.add('hidden')
    baconAmount.textContent = "0"
    baconEndPrice.textContent = "0"

    orderVilage.classList.add('hidden')
    vilageAmount.textContent = "0"
    vilageEndPrice.textContent = "0"

    orderConstructed.classList.add('hidden')
    constructedAmount.textContent = "0"
    constructedEndPrice.textContent = "0"
})