<template>
    <div class="container">
        <div class="outside-wrapper">
            <svg class="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17L12 10M12 6.5794V6.63843M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" stroke="#5F6D7E" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="inside-wrapper">
                <p class="title"><slot name="title"></slot></p>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
div.container {
    margin-bottom: 30px;

    div.outside-wrapper {
        display: flex;
        padding: 24px;
        background-color: #E6E9EC;
        border: 1.5px solid $base-card-elements;
        border-radius: 5px;
        color: $base-card-elements;


        .title {
            font-weight: 500;
            font-size: 22px;
            line-height: 24px;
            letter-spacing: -0.01em;
        }

        div.inside-wrapper {
            margin-left: 20px;
            text-align: left;

            div.content {
                :slotted(p){
                    font-size: 16px;
                    
                    span {
                        font-weight: 600;
                    }
                }
            }
        }
    }
}
</style>