<template>
    <div class="day-event" :style="getEventBackgroundColor">
        <div v-if="!event.edit">
            <span class="has-text-centered details">{{event.details}}</span>
            <div class="has-text-centered icons">
                <i class="fa fa-pencil-square edit-icon"
                    @click="editEvent(day.id, event.details)">
                </i>
                <i class="fa fa-trash-o delete-icon"></i>
            </div>
        </div>
        <div v-if="event.edit">
            <input type="text"
                   :placeholder="event.details"
                    v-model="newEventDetails"/>
            <div class="has=text-centered icons">
                <i class="fa fa-check"
                    @click="updateEvent(day.id, event.details, newEventDetails)"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from "../store.js";
    export default {
        name: "CalendarEvent",
        props: ["event", "day"],
        computed: {
            getEventBackgroundColor() {
                const colors = ['#FF9999', '#85D6FF', '#99FF99'];
                let randomColor = colors[Math.floor(Math.random() * colors.length)];
                return `background-color: ${randomColor}`;
            }
        },
        methods: {
            editEvent (dayId, eventDetails) {
                store.editEvent(dayId, eventDetails);
            },
            updateEvent (dayId, originalEventDetails, updateEventDetails) {
                // If no changes are made, events stay unchanged
                if (updateEventDetails === '') updateEventDetails = originalEventDetails;
                // Make changes in edit mode
                store.updateEvent(dayId, originalEventDetails, updateEventDetails);
                // Set input valie back to empty string
                this.newEventDetails = '';
            }
        },
        data () {
            return {
                newEventDetails: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .day-event {
        margin-top: 6px;
        margin-bottom: 6px;
        display: block;
        color: #4C4C4C;
        padding: 5px;
        text-align: center;

        .details {
            display: block;
            border-bottom: 1px solid #040404;
            margin: 3px 0;
        }

        .icons .fa {
            padding: 0 5px;
        }

        input {
            background: none;
            border: 0;
            border-bottom: 1px solid #FFF;
            width: 100%;

            &:focus {
                outline: none;
            }
        }
    }
</style>