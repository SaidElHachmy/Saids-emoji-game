// Function to prompt for name and validate it
        let name = "";

        while (name.length < 3 || name.length > 30 || !/^[a-zA-Z ]+$/.test(name)) {
            name = prompt("Said ElHachmy says: '' Please enter your name (at least 3 letters, no more than 30, only letters (Latin letters) and spaces ): ''");
            
            // Validate the name length and character restrictions
            if (name.length < 3) {
                alert("Said ElHachmy says: '' Name must be at least 3 characters long. ''");
            } else if (name.length > 30) {
                alert("Said ElHachmy says: '' Name must be no more than 30 characters long. ''");
            } else if (!/^[a-zA-Z ]+$/.test(name)) {
                alert("Said ElHachmy says: '' Name must only contain letters (Latin letters) and spaces . ''");
            }
        }

        // Once a valid name is entered, show the welcome message
        let welcomeMessage = "Welcome to the game, 🎉 " + name + " 🎊";

        // Display the message in the <div> with id 'welcomeMessage'
        document.getElementById("welcomeMessage").innerHTML = "<h3>" + welcomeMessage + "</h3>";
        document.getElementById("welcomeMessage").style.color= "#fff";
        document.getElementById("welcomeMessage").style.backgroundColor= "#4b280a";