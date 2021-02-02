<template>
    <div class="ComponentA">
        <h3>{{ $options.name }}</h3>
        <div />
    </div>
</template>

<script>
export default {
    name: 'ComponentA',
};
</script>

<style>
.ComponentA div {
    width: 32px;
    height: 32px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: #f00;
}
</style>
