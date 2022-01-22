// IIFE - Immediately invoked function expression
// AKA - Anonymous Self-Executing Function

(function()
{
    function DisplayHomePage()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            //redirect to about page
            location.href = "about.html";

        });
        
        // Step 1 get a reference to an entry point(s) (insertion point/)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        
        // Step 2 create an element to insert
        let MainParagraph = document.createElement("p");
        let Article=document.createElement("article");
        let ArticleParagraph=`<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph`;

        // Step 3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        let FirstString = "This is";
        let SecondString = `${FirstString} the Main Paragraph`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class", "container");

        // Step 4 add/insert new element
        // exaple of insert after (append)
        MainContent.appendChild(MainParagraph);
        Article.innerHTML=ArticleParagraph;
        DocumentBody.appendChild(Article);
        // DocumentBody.innerHTML = `
        // <div class="container">
        // <h1 class="display-1">Hello, World!</h1>
        // <p clas="mt-5">and...whato do you think of this!</p>
        // </div>
        // `;
        //example of insert before
        //MainContent.before(MainParagraph);
        //example of deletion
        //document.getElementById("AboutUsButton").remove();
        //AboutUsButton.remove();
        // ES6 and HTML5
    }
/* 
    function DisplayProductsPage()
    {

    }
    function DisplayServicesPage()
    {

    }
    function DisplayAboutPage()
    {

    }
    function DisplayContactPage()
    {

    } */
    
    // named function option
    function Start()
    {
        console.log("App Started!");
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            /* case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break; */
        }        
    }
    
    
    window.addEventListener("load", Start);

})();