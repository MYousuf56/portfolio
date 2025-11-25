function handleFormSubmit(event) {
    // 1. Prevent the page from refreshing (the default browser behavior)
    event.preventDefault();

    // 2. Logic to "simulate" sending a message
    // In a real app, you would send data to a backend server here.
    console.log("Form submitted!"); 
    
    // 3. Show an alert to the user
    alert("Thank you for your message! \n(Note: This is a demo project, no email was actually sent.)");

    // 4. Clear the form fields (Optional)
    event.target.reset();
}