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
        editBtn.textContent = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("event-item__delete");
        deleteBtn.textContent = "Delete";

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