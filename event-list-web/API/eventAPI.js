const todoAPI = (() => {
    const BASE_TODO_API = "http://localhost:3000/events";
    const fetchEventAPI = async () => {
        return fetch(BASE_TODO_API).then((res) => res.json());
    };

    const postEventAPI = async (newEvent) => {
        return fetch(BASE_TODO_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        }).then((res) => res.json());
    };

    const deleteEventAPI = async (EventId) => {
        return fetch(`${BASE_TODO_API}/${todoId}`, {
            method: "DELETE",
        }).then((res) => res.json());
    };

    const patchEventAPI = async (EventId, NewEvent) => {
        const url = `${BASE_POST_API}/${EventId}`;

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(NewEvent),
        });

        const updatedEvent = await response.json();

        return updatedEvent;
    }

    return {
        fetchEventAPI,
        postEventAPI,
        deleteEventAPI,
        patchEventAPI,
    };
})();