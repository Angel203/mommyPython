document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        // Configure FullCalendar options here
        // Example: events, initialView, headerToolbar, ...
    });

    calendar.render();
});
