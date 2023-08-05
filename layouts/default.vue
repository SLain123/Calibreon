<template>
    <div class="global_wrapper">
        <header-component />
        <main><slot /></main>
        <footer-component />
    </div>
</template>

<style lang="scss" scoped>
.global_wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

main {
    flex: 1;
}
</style>
