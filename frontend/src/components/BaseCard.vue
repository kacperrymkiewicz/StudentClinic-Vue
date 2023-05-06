<template>
    <div class="container">
        <div class="outer-wrapper">
            <svg class="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17L12 10M12 6.5794V6.63843M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" stroke="#5F6D7E" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="inner-wrapper">
                <p class="title"><slot name="title"></slot></p>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
div.container {
    @media (max-width: 992px) { 
        margin-bottom: 30px;
    }
    margin: 10px;

    div.outer-wrapper {
        display: flex;
        padding: 24px;
        background-color: #F8F9FB;
        border: 1.5px solid $secondary;
        border-radius: 5px;
        color: $secondary;
        position: relative;

        .title {
            font-weight: 500;
            font-size: 22px;
            line-height: 24px;
            letter-spacing: -0.01em;
            margin-bottom: 10px;
        }

        div.inner-wrapper {
            margin-left: 20px;
            text-align: left;

            div.content {
                :slotted(p){
                    font-size: 16px;
                    margin-bottom: 0px;
                    
                    span {
                        font-weight: 600;
                    }
                }
            }
        }

        .button {
            position: absolute;
            margin: 0;
            bottom: 20px;
            right: 20px;

        }
    }
}
</style>