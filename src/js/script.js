let msg = " | Web Developer | Software Developer | Currently based in Hengelo, Netherlands |";
    msg = "| Andrei-Sebastian Ciolacu |" + msg + " | Andrei-Sebastian Ciolacu |" + msg; // Extend the message for smooth looping
    let position = 0;
    const scrollSpeed = 5; // Smaller values for slower, smoother scrolling
    const fps = 60; // Target frames per second
    const interval = 1000 / fps;

    function scrollTitle() {
        // Calculate current position with fractional support
        const length = msg.length;
        const currentPosition = Math.floor(position);
        const nextChar = msg[(currentPosition + 1) % length];
        const nextPosition = position % 1;

        // Update title with smooth transition between characters
        document.title = msg.substring(currentPosition, length) + msg.substring(0, currentPosition);

        // Increment position
        position += scrollSpeed / fps;
        if (position >= length) position = 0;

        // Schedule next frame
        setTimeout(() => requestAnimationFrame(scrollTitle), interval/fps);
    }

    scrollTitle(); // Start the scrolling



    document.addEventListener('DOMContentLoaded', function () {
        const messages = [
                "Hey! I'm Andrei and this is my Web Development portfolio!" + '<p style="font-size:32px"> <img src="./src/img/US-United-States-Flag-icon.png" width="64px" height="64px"> | <img src="./src/img/uk.png" width="64px" height="64px"> </p>',
                "Salut! Sunt Andrei si acesta este portofoliul meu de Web Development!" + '<p> <img src="./src/img/RO-Romania-Flag-icon.png" width="64px" height="64px"> </p>',
                "Hoi! Ik ben Andrei en dit is mijn webontwikkelingsportfolio!" + '<p><img src="./src/img/Wikipedia-Flags-NL-Netherlands-Flag.1024.png" width="64px" height="64px"></p>',
                "Hola! Soy Andrei y este es mi portafolio de desarrollo web!" + '<p> <img src="./src/img/ES-Spain-Flag-icon.png" width="64px" height="64px"> </p>',
                "Hallo! Ich bin Andrei und dies ist mein Webentwicklungsportfolio!" + '<p> <img src="./src/img/Wikipedia-Flags-DE-Germany-Flag.1024.png" width="64px" height="64px"> </p>'
            ];
        let currentMessageIndex = 0;
        const messageContainer = document.getElementById('messageContainer');
        const displayDuration = 5000; // time each message is displayed
        const fadeDuration = 1000; // time for fade in and fade out

        function showNextMessage() {
            // Start fade-out
            messageContainer.classList.remove('visible');
            messageContainer.classList.add('hidden');

            setTimeout(() => {
                // Change message when fade-out is complete
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                messageContainer.innerHTML = messages[currentMessageIndex];

                // Start fade-in
                messageContainer.classList.remove('hidden');
                messageContainer.classList.add('visible');
            }, fadeDuration);
        }

        // Initial display setup
        messageContainer.innerHTML = messages[currentMessageIndex];
        messageContainer.classList.add('visible');

        // Interval to change messages
        setInterval(showNextMessage, displayDuration + fadeDuration);
    });