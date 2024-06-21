class EventController {
    #model;
    #view;
    constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.initApp();
    }

    initApp() {
        this.setUpEvents();
        this.fetchEvents();
    }

    setUpEvents() {
        this.setUpDeleteEvent();
        this.setUpAddEvent();
        this.setUpEditEvent();
        this.setUpUpdateEvent();
    }

    fetchEvents() {
        todoAPI.fetchEventAPI().then((events) => {
            this.#model.setEvents(events);
            this.#view.setRemainingCount(this.#model.length);
            events.forEach((event) => {
                this.#view.renderTodoElement(event);
            });
        });
    }

    setUpAddEvent() {
        this.#view.AddNewEventBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.classList.contains("add-event-form__submit")) {
                const newEvent = {
                    title: this.#view.eventInput.value,
                    start: this.#view.startDateInput.value,
                    end: this.#view.endDateInput.value,
                };

                eventAPI.postEventAPI(newEvent).then((_newEvent) => {
                    this.#model.addEvent(_newEvent);
                    this.#view.renderEventElement(_newEvent);
                });
            }
        });
    }

    setUpDeleteEvent() {
        this.#view.EventList.addEventListener("click", (e) => {
            if (e.target.classList.contains("event-item__delete")) {
                const eventId = e.target.closest(".event-item").getAttribute("id");

                eventAPI.deleteEventAPI(eventId).then(() => {
                    this.#model.removeEvent(eventId);
                    this.#view.deleteEvent(eventId);
                });
            }
        });
    }

    setUpEditEvent() {
        this.#view.EventList.addEventListener("click", (e) => {
            e.preventDefault();
            if (e.target.classList.contains("event-item__edit")) {
                this.currentEventId = e.target.parentElement.getAttribute("id");
                const evenInfo = this.#model
                    .getEvents()
                    .find((event) => event.id === this.currentEventId);

                this.#view.eventUpdate.value = evenInfo.event;
                this.#view.startDateUpdate.value = evenInfo.start;
                this.#view.endDateUpdate.value = evenInfo.end;
            }
        });
    }
    setUpUpdateEvent() {
        this.#view.updateEventForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const eventId = this.currentEventId;
            const updatedEvent = {
                title: this.#view.eventUpdate.value,
                start: this.#view.startDateUpdate.value,
                end: this.#view.endDateUpdate.value,
            };

            eventAPI.patchEventAPI(eventId, updatedEvent).then((updatedEventList) => {
                this.#model.updateEvent(updatedEventList);
                this.#view.updateEventElements(eventId);
            });
        });
    }

}