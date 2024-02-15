function copyUrlToClipboard() {
    // Create a temporary input element
    var tempInput = document.createElement("input");

    // Set its value to the current URL
    tempInput.value = window.location.href;

    // Append it to the body
    document.body.appendChild(tempInput);

    // Select the input's content
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, provide user feedback (e.g., alert or change button text)
    alert("URL copied to clipboard!");
}