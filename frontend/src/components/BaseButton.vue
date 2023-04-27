<template>
    <button class="base-button btn btn-primary">
        <span class="span-text">
            <slot></slot>
        </span>
    </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
    .btn.btn-primary {
        background-color: $dark;
        border-color: $dark;
        padding: 10px 20px;
        font-weight: 500;

        &:hover, &:active {
            background-color: $dark-hover;
            border-color: $dark-hover;
        }
    }
</style>