<template>
    <form>
        <div class="form_fio_block">
            <ui-input placeholder="First Name" />
            <ui-input placeholder="Last Name" />
        </div>
        <ui-input placeholder="Email Address" class="form_email" />
        <ui-submit-button text="Create Account" />
    </form>
</template>

<style lang="scss" scoped>
.form {
    &_fio_block {
        display: flex;
        justify-content: space-between;
        gap: 42px;
        max-width: 560px;
    }

    &_email {
        max-width: 560px;
        box-sizing: border-box;
        margin-top: 32px;
    }
}
</style>
