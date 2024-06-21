class EventView {
    constructor() {
        this.eventInput = document.getElementById("event-input");
        this.startDateInput = document.getElementById("start-date");
        this.endDateInput = document.getElementById("end-date");
        this.AddNewEventBtn = document.querySelector("add-event-form__submit");
        this.EventTableHeader = document.querySelector("event-table-head");
        this.EventList = document.querySelector("event-table-body")

        this.eventUpdate = document.getElementById("event-update");
        this.startDateUpdate = document.getElementById("start-date-update");
        this.endDateUpdate = document.getElementById("end-date-update");
        this.updateEventForm = document.getElementById("event-form-update");
    }

    renderEventElement(event) {
        const { id, title, start, end } = event;
        const eventItems = document.createElement("tr");
        eventItems.classList.add("event-list-row");
        eventItems.id = id;

        const eventName = document.createElement("th");
        eventName.classList.add("event-name-cell__input");
        eventName.id = id;
        const eventNameInput = document.createElement("input");
        eventNameInput.type = "text";
        if (eventNameValue) eventNameInput.value = eventNameValue;
        eventName.appendChild(eventNameInput);

        const startDate = document.createElement("th")
        startDate.classList.add("event-start-date__input")
        startDate.textContent = date;

        const endDate = document.createElement("td");
        endDate.classList.add("event-end-date__input");
        endDate.textContent = date;

        const editBtn = document.createElement("button");
        editBtn.classList.add("event-item__edit");
        editBtn.textContent = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon"
            aria-label="fontSize small">
            <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
            </path>
        </svg>;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("event-item__delete");
        deleteBtn.textContent = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon"
            aria-label="fontSize small">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
            </path>
        </svg>;

        eventItems.append(eventName, startDate, endDate, editBtn, deleteBtn);

        this.EventList.appendChild(eventItems);
    }

    deleteEvent(eventId) {
        const events = document.getElementById(eventId);
        events.remove();
    }

    updateEventElements(eventId) {
        const EventID = document.getElementById(eventId);
    }
}