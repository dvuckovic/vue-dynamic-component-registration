<template>
    <div class="ComponentC">
        <h3>{{ $options.name }}</h3>
        <div />
    </div>
</template>

<script>
export default {
    name: 'ComponentC',
};
</script>

<style>
.ComponentC div {
    width: 32px;
    height: 32px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: #00f;
}
</style>
