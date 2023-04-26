<template>
    <button class="btn btn-primary">
        <span class="span-text">
            <slot></slot>
        </span>
    </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
    button {
        background-color: $dark;
        border-color: $dark;
        padding: 10px 20px;
        margin: 30px 0;
        font-weight: 500;

        &:hover {
            background-color: $dark-hover;
            border-color: $dark-hover;
        }
    }
</style>