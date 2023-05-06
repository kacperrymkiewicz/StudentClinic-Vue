<template>
    <div @click="$emit('click')" class="overlay"></div>
    <dialog open>
        <div class="outer-wrapper">
            <svg class="info-icon" data-v-7858c59e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path data-v-7858c59e="" d="M12 17L12 10M12 6.5794V6.63843M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" stroke="#5F6D7E" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            <svg class="close-button" @click="$emit('click')" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M15 15L5 5.00001" stroke="#5F6D7E" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <div class="inner-wrapper">
                <p class="title"><slot name="title"></slot></p>
                <p class="subtitle"><slot name="subtitle"></slot></p>
                <div class="content"><slot name="content"></slot></div>
            </div>
        </div>
    </dialog>
</template>

<script>
    export default {
        //
    }
</script>

<style lang="scss" scoped>
div.overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
dialog {
    border: 0;
    padding: 0;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0);
    div.outer-wrapper {
        border: 1.5px solid $secondary;
        background-color: $base-modal-background;
        border-radius: 10px;
        filter: drop-shadow(0 0 30px #999);
        padding: 30px;
        position: relative;

        svg.info-icon {
            position: absolute;
            top: 30px;
            left: 30px;
        }

        svg.close-button {
            position: absolute;
            top: 30px;
            right: 30px;
            cursor: pointer;
        }

        div.inner-wrapper {
            padding: 25px 50px;
            text-align: left;
            color: $secondary;

            p {
                margin-bottom: 0;
                font-size: 25px;
            }
            p.title {
                font-weight: 700;
            }
            p.subtitle {
                font-weight: 500;
                text-transform: uppercase;
            }

            div.content {
                :slotted(p) {
                    margin: 0;
                    font-size: 18px;
                    span {
                        font-weight: 600;
                    }
                }
            }
        }

    }
}
</style>