import {seedData} from "./seed";

export const store = {
    state: {
        seedData
    },
    // Getter
    getActiveDay () {
        return this.state.seedData.find((day) => day.active);
    },
    // Setter
    setActiveDay (dayId) {
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    },
    // Click event on given day
    submitEvent (eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({"details": eventDetails, "edit": false});
    },
    // Edit event on particular day
    editEvent (dayId, eventDetails) {
        this.resetEditOfAllEvents();
        const dayObj = this.state.seedData.find(day => day.id === dayId);
        const eventObj = dayObj.events.find(event => event.details === eventDetails);
        eventObj.edit = true;
    },
    // Allow to edit one event at a time
    resetEditOfAllEvents() {
        this.state.seedData.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false;
            })
        })
    }
};
