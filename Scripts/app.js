// IIFE - Immediately invoked function expression
// AKA - Anonymous Self-Executing Function

(function()
{
    function DisplayAboutPage()
    {
        console.log("About Us Page");

    }
    function DisplayProductsPage()
    {
        console.log("Product Page");

    }
    function DisplayServicesPage()
    {
        console.log("Service Page");

    }       
    function DisplayHomePage()
    {
        console.log("home page");

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
        let SecondParagraphString = `${FirstString} the Main Paragraph`;

        MainParagraph.textContent = SecondParagraphString;
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

        // test your new Contact
        


    }
 
        
    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault();

            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });

    } 

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

        if(localStorage.length > 0) // check if localStorage has something in it 
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;

            //for every key in the keys collection loop
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // retrieve contact data from localStorage

                let contact = new Contact(); // create an empty Contact Object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;
                
                index++;
            }

            contactList.innerHTML = data;
        }

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
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;  
            case "About Us":
                DisplayAboutPage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            
            
        }        
    }
    
    
    window.addEventListener("load", Start);

})();