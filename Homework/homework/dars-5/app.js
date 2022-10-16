let select = document.querySelector(".select")
let uzbFlag = document.querySelector(".flag_uzb")
let russianFlag = document.querySelector(".flag_russian")
let britishFlag = document.querySelector(".flag_british")
let japaneseFlag = document.querySelector(".flag_japanese")
let arabicFlag = document.querySelector(".flag_arabic")
let chineseFlag = document.querySelector(".flag_chinese")

let langs = document.querySelector(".langs_collection")
let colectionItem = document.querySelector(".collection_item")
let pText = document.querySelector(".lang_name")
let english = document.querySelector("#english")
let russian = document.querySelector("#russian")
let uzbek = document.querySelector("#uzbek")
let japanese = document.querySelector("#japanese")
let chinese = document.querySelector("#chinese")
let arabian = document.querySelector("#arabic")

select.addEventListener('click', ()=>{
    langs.classList.toggle("lang_collection_appear")
})

english.addEventListener('click', ()=>{
    langs.classList.remove("lang_collection_appear")
    uzbFlag.style.display = "none"
    arabicFlag.style.display = "none"
    japaneseFlag.style.display = "none"
    chineseFlag.style.display = "none"

    russianFlag.style.display = "none"
    britishFlag.style.display = "block"
    pText.innerHTML = "English"
})
russian.addEventListener('click', ()=>{
    langs.classList.remove("lang_collection_appear")
    uzbFlag.style.display = "none"
    arabicFlag.style.display = "none"
    japaneseFlag.style.display = "none"
    chineseFlag.style.display = "none"

    russianFlag.style.display = "block"
    britishFlag.style.display = "none"
    pText.innerHTML = "Russian"
})
uzbek.addEventListener('click', ()=>{
    langs.classList.remove("lang_collection_appear")
    uzbFlag.style.display = "block"
    arabicFlag.style.display = "none"
    japaneseFlag.style.display = "none"
    chineseFlag.style.display = "none"

    russianFlag.style.display = "none"
    britishFlag.style.display = "none"
    pText.innerHTML = "Uzbek"
})
arabic.addEventListener('click', ()=>{
    langs.classList.remove("lang_collection_appear")
    uzbFlag.style.display = "none"
    arabicFlag.style.display = "block"
    japaneseFlag.style.display = "none"
    chineseFlag.style.display = "none"

    russianFlag.style.display = "none"
    britishFlag.style.display = "none"
    pText.innerHTML = "Arabic"
})
japanese.addEventListener('click', ()=>{
    langs.classList.remove("lang_collection_appear")
    uzbFlag.style.display = "none"
    arabicFlag.style.display = "none"
    japaneseFlag.style.display = "block"
    chineseFlag.style.display = "none"

    russianFlag.style.display = "none"
    britishFlag.style.display = "none"
    pText.innerHTML = "Japanese"
})
chinese.addEventListener('click', ()=>{
    langs.classList.remove("lang_collection_appear")
    uzbFlag.style.display = "none"
    arabicFlag.style.display = "none"
    japaneseFlag.style.display = "none"
    chineseFlag.style.display = "block"

    russianFlag.style.display = "none"
    britishFlag.style.display = "none"
    pText.innerHTML = "Chinese"
})