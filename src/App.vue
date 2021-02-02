<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <component v-bind:is="componentName" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import getDynamicComponentRegistration from './component-registration';

export default {
    name: 'App',

    components: {
        HelloWorld,
        ...getDynamicComponentRegistration(process.env.COMPONENT_INDEX),
    },

    computed: {
        componentName () {
            // This list does not have to be hardcoded,
            //   we can also fetch it from a server, for example.
            const componentNames = Object.keys(getDynamicComponentRegistration(process.env.COMPONENT_INDEX));

            // For sake of simplicity, we are just returning
            //   a random component name here.
            return componentNames[Math.floor(Math.random() * componentNames.length)];
        },
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
