<template>
  <div id="app">
    <!-- Components closed directly because there is no content-->
    <CalendarWeek/>
    <CalendarEntry/>
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek";
import CalendarEntry from "./components/CalendarEntry";
export default {
  name: 'App',
    components: {
      CalendarWeek,
      CalendarEntry
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
