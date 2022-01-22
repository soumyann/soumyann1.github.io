// IIFE - Immediately invoked function expression
// AKA - Anonymous Self-Executing Function

(function()
{
    function DisplayHomePage()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";

        })        
    }

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

    }
    
    // named function option
    function Start()
    {
        console.log("App Started!");
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
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
                break;
        }        
    }
    /* let Start = function()
    {
        console.log("App Started");
    } */
    
    window.addEventListener("load", Start);

})();