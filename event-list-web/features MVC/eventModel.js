class EventModel {
    #events;
    constructor() {
        this.#events = [];
    }

    setEvents(events) {
        this.#events = events;
    }

    get length() {
        return this.#events.length;
    }

    getEvents() {
        return [...this.#events];
    }

    addEvent(newEvent) {
        this.#events.push(newTodo);
    }

    updateEvent(updatedEvent) {
        this.#events = this.#events.map((event) => {
            if (event.id === updatedEvent.id) {
                return { ...event, ...updatedEvent };
            }
            return event;
        })
    }

    removeEvent(id) {
        this.#events = this.#events.filter((event) => event.id !== id);
    }
}