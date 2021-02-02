<template>
    <div class="ComponentE">
        <h3>{{ $options.name }}</h3>
        <div />
    </div>
</template>

<script>
export default {
    name: 'ComponentE',
};
</script>

<style>
.ComponentE div {
    width: 32px;
    height: 32px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: #0ff;
}
</style>
