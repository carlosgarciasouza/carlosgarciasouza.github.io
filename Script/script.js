//comportamento barras da "Areas de Conhecimento"
const conhecimento = window.document.getElementById('conhecimento');
const item_html = document.getElementById('item-html');
const item_css = document.getElementById('item-css');
const item_js = document.getElementById('item-js');
const item_sql = document.getElementById('item-sql');
const item_git = document.getElementById('item-git');
const item_en = document.getElementById('item-en');
const item_lp = document.getElementById('item-lp');



// Animação quando ocorrer o loading da pagina
    item_html.style.animation="htmlLoading 1.3s linear"
    item_css.style.animation="cssLoading 1.5s linear"
    item_js.style.animation="jsLoading 1.7s linear"
    item_sql.style.animation="sqlLoading 1.5s linear"
    item_git.style.animation="gitLoading 1.7s linear"
    item_en.style.animation="enLoading 1.5s linear"
    item_lp.style.animation="lpLoading 1.3s linear"



// animações para mouseenter na aba de conhecimentos
//definir primeiro animation como nome para depois ser chamada atraves do callback 
conhecimento.addEventListener("mouseenter", ()=>{
    
    //conhecimento1 = HTML
    item_html.style.animation = ""
    setTimeout(()=> item_html.style.animation = "html-mouseenter 1s linear");
    
    //conhecimento2 = CSS
    item_css.style.animation=""
    setTimeout(()=> item_css.style.animation = "css-mouseenter 1.5s linear");
    
    //conhecimento3 = JS
    item_js.style.animation=""
    setTimeout(()=> item_js.style.animation = "js-mouseenter 1.7s linear")
    
    //conhecimento4 = MySQL
    item_sql.style.animation=""
    setTimeout(()=> item_sql.style.animation = "sql-mouseenter 1s linear")

    item_git.style.animation=""
    setTimeout(()=> item_git.style.animation="git-mouseenter 1.5s linear")

    item_en.style.animation=""
    setTimeout(()=> item_en.style.animation="en-mouseenter 1.5s linear")

    item_lp.style.animation=""
    setTimeout(()=> item_lp.style.animation="lp-mouseenter 1.5s linear")
});


const block = document.querySelectorAll("[data-anime]")

const animeScroll = () => {

    const windownTop = window.pageYOffset + window.innerHeight * 1;

    block.forEach((element) => {
        if (windownTop > element.offsetTop) {
            element.classList.add("animate");
        }
        else{
            element.classList.remove("animate")
        }
    });

};
animeScroll();
window.addEventListener("scroll", () => {
    animeScroll();
})
