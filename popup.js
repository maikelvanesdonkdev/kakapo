document.getElementById("jokeButton").addEventListener("click", async () => {
  try {
    // Fetch a random joke from the official joke API
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jokeData = await response.json();

    // Display the joke with some effects
    const jokeBox = document.getElementById("jokeBox");
    jokeBox.classList.add('fade-out'); // Start fade-out transition before updating the joke
    setTimeout(() => {
      jokeBox.innerHTML = `<p><strong>${jokeData.setup}</strong></p><p>${jokeData.punchline}</p>`;
      jokeBox.classList.remove('fade-out');
      jokeBox.classList.add('fade-in'); // Apply fade-in effect after updating
    }, 500);

    // Optional: Use speech synthesis for Peedy's voice (just for extra fun!)
    const jokeText = `${jokeData.setup} ${jokeData.punchline}`;
    const speech = new SpeechSynthesisUtterance(jokeText);
    window.speechSynthesis.speak(speech);

  } catch (error) {
    console.error("Error fetching joke:", error);
    alert("Oops! Something went wrong. Try again later.");
  }
});