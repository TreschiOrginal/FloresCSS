document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const messageBox = document.getElementById('message-box');
    const thanksMessage = document.getElementById('thanks-message');

    const moveButton = () => {
        const yesBtnRect = yesBtn.getBoundingClientRect();
        let x, y;

        // Keep generating random positions until it's not overlapping with the 'Yes' button
        do {
            x = Math.random() * (window.innerWidth - noBtn.clientWidth);
            y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        } while (
            x > yesBtnRect.left - noBtn.clientWidth &&
            x < yesBtnRect.right &&
            y > yesBtnRect.top - noBtn.clientHeight &&
            y < yesBtnRect.bottom
        );

        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    };

    // Set initial random position
    moveButton();

    noBtn.addEventListener('mouseover', moveButton);

    yesBtn.addEventListener('click', () => {
        messageBox.classList.add('hidden');
        thanksMessage.classList.remove('hidden');
    });
});
