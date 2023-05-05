<template>
    <button :class="classes" class="base-button btn btn-primary">
        <span class="span-text">
            <slot></slot>
        </span>
        <span v-if="this.hasIcon" class="span-icon"><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66663 6H12.5M8.33329 1L12.744 5.41074C13.0695 5.73618 13.0695 6.26382 12.744 6.58926L8.33329 11" stroke="#F8F9FB" stroke-width="1.5" stroke-linecap="round"/></svg></span>
    </button>
</template>


<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        hasIcon: {
            type: Boolean,
            required: false,
        }
    },
    computed: {
        classes() {
            return {
                'button-dark': this.type === 'dark',
                'button-light': this.type === 'light',
            };
        },
    },
}

</script>

<style lang="scss" scoped>
    button {
        padding: 10px 20px;
        font-weight: 500;
        margin: 30px 0;

        .span-icon {
            margin-left: 10px;
            display: inline-block;
            transition: all 0.2s ease-in-out;
        }

        &:hover .span-icon {
            transform: translateX(5px);
        }
    }

    .button-dark {
        background-color: $button-dark;
        border-color: $button-dark;

        &:hover, &:active {
            background-color: $button-dark-hover;
            border-color: $button-dark-hover;
        }
    }
    .button-light {
        background-color: $button-light;
        border-color: $button-light;
        color: $secondary;

        &:hover, &:active {
            background-color: $button-light-hover;
            border-color: $button-light-hover;
        }
    }
</style>