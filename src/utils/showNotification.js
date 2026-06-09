let notificationTimeout;

export const showNotification = (message,submsg,time=1500) => {

    const notification = document.getElementById("hover-notification");

    const messageText = document.getElementById("notification-message");

    const progress = document.getElementById("notification-progress");

    const subNotification = document.getElementById("sub-message");

    clearTimeout(notificationTimeout);

    messageText.textContent = message;

    subNotification.textContent = submsg;

    notification.classList.remove(
        "translate-x-[120%]",
        "opacity-0"
    );
    
    notification.classList.add(
        "translate-x-0",
        "opacity-100"
    );

    progress.style.width = "100%";

    progress.style.transition = "none";

    requestAnimationFrame(() => {

        progress.style.transition = `width ${time/1000}s linear`;

        progress.style.width = "0%";
    });

    notificationTimeout = setTimeout(() => {

        hideNotification();

    }, time);
};

export const hideNotification = () => {

    const notification = document.querySelector("#hover-notification");

    notification.classList.remove(
        "translate-x-0",
        "opacity-100"
    );

    notification.classList.add(
        "translate-x-[120%]",
        "opacity-0"
    );
};