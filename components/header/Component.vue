<template>
    <header class="header_container">
        <wrapper-global>
            <div class="header_content">
                <NuxtLink to="/">
                    <img
                        src="/img/logo.png"
                        alt="logo"
                        width="216"
                        height="72"
                    />
                </NuxtLink>

                <header-nav-menu />
                <header-auth-block />
            </div>
        </wrapper-global>
    </header>
    <div class="header_stub" />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
    &_container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding-top: 12px;
        background-color: rgba(255, 255, 255, 0.9);
    }
    &_content {
        display: flex;
        justify-content: space-between;
    }

    &_stub {
        width: 100%;
        height: 100px;
    }
}
</style>
