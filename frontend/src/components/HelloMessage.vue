<template>
    <div class="d-flex flex-column align-items-start">
    <h1>Witaj {{ this.name }}</h1>
    <p class="info">
        <slot name="info"></slot>
    </p>
    <img v-if="this.iconName" :src="require(`@/assets/images/icons/${iconName}.png`)" />
</div>
</template>

<script>
//import router from '@/router';

export default {
    name: "HelloMessage",
    props: {
        iconName: {
            type: String,
            required: false
        }
    },  
    
    data(){
        return {
            name: "Grzegorz",
            info: "",
        }
    }
}
</script>


<style lang="scss" scoped>

div {
    margin: 50px 0;
    position: relative;
    p.breadcrumbs {
    
        span.span-text {
            font-weight: 600;
            font-size: 14px;
            color: $secondary;


            span.span-icon {
                margin: 0 10px;
            }
        }
    }

    h1 {
        font-size: 28px;
    }

    p.info {
        text-align: left;
    }

    img {
        width: 70px;
        position: absolute;
        bottom: 5px;
        right: 0;

        @media (max-width: 768px) { 
            display: none;
        }
    }

}

</style>