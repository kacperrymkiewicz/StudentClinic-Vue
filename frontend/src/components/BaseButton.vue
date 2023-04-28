<template>
    <button :class="classes" class="base-button btn btn-primary">
        <span class="span-text">
            <slot></slot>
        </span>
    </button>
</template>


<script>
export default {
    props: ['type'],
    computed: {
    classes() {
      return {
        'button-dark': this.type === 'dark',
        'button-light': this.type === 'light',
      };
    },
  }
}

</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
    .btn.btn-primary {
        padding: 10px 20px;
        font-weight: 500;

        
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