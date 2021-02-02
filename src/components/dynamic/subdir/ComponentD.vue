<template>
    <div class="ComponentD">
        <h3>{{ $options.name }}</h3>
        <div />
    </div>
</template>

<script>
export default {
    name: 'ComponentD',
};
</script>

<style>
.ComponentD div {
    width: 32px;
    height: 32px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: #f0f;
}
</style>
