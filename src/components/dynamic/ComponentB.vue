<template>
    <div class="ComponentB">
        <h3>{{ $options.name }}</h3>
        <div />
    </div>
</template>

<script>
export default {
    name: 'ComponentB',
};
</script>

<style>
.ComponentB div {
    width: 32px;
    height: 32px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: #0f0;
}
</style>
