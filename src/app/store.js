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
    }
};
