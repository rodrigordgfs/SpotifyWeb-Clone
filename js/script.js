function wishAsPerTime () {
    const date = new Date();
    const hour = date.getHours();
    const greeting_text = document.getElementById("greeting_text");
    if (hour >= 0 && hour < 12) {
        greeting_text.textContent = "Good morning";
    } else if (hour == 12) {
        greeting_text.textContent = "Good noon";
    } else if (hour > 12 && hour < 18) {
        greeting_text.textContent = "Good afternoon";
    } else {
        greeting_text.textContent = "Good evening";
    }
}

wishAsPerTime();