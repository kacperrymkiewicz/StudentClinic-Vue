<template>
    <div class="d-flex flex-column align-items-start">
    <p class="breadcrumbs">
        <span class="span-text">{{ capitalize(setPatient) }}</span>
        <span class="span-text" v-for="breadcrumb in setBreadCrumb" :key="breadcrumb.id" >
            <span class="span-icon" v-if="breadcrumb.charAt(0) !== ''">
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33331 1L5.74406 5.41074C6.06949 5.73618 6.06949 6.26382 5.74406 6.58926L1.33331 11" stroke="#5F6D7E" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </span>
            {{ capitalize(breadcrumb) }}
        </span>
    </p>
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
    computed: {
        setPatient(){
            if(this.isPatient) {
                return "panel pacjenta";
            } else {
                return "panel pracownika";
            }
        },
        setBreadCrumb() { 
            return this.activeTab.split("/").join(' ').split(' ');
        }
    },
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
            isPatient: true,
            activeTab: this.$route.path,
            info: "",
            breadcrumb: "",
        }
    },
    data2(){
        return {
            name: "Cononi",
            isPatient: false,
            activeTab: this.$route.path,
            info: "",
            breadcrumb: "",
        }
    },
    methods: {
        capitalize(str) {
            return str.charAt(0).toUpperCase(0) + str.slice(1).replace("-", " ");
        }
    }
}
</script>


<style lang="scss" scoped>

div {
    margin: 20px 0;
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
        bottom: 0;
        right: 0;

        @media (max-width: 768px) { 
            display: none;
        }
    }

}

</style>