<template>
    <div class="community_container">
        <p class="community_title">Join the community</p>

        <div class="community_link_block">
            <NuxtLink to="#" class="community_link">
                <img
                    src="@/public/icons/soc/insta.png"
                    alt="instagram"
                    width="44"
                    height="44"
                />
            </NuxtLink>
            <NuxtLink to="#" class="community_link">
                <img
                    src="@/public/icons/soc/twit.png"
                    alt="twiter"
                    width="44"
                    height="40"
                />
            </NuxtLink>
            <NuxtLink to="#" class="community_link">
                <img
                    src="@/public/icons/soc/face.png"
                    alt="facebook"
                    width="44"
                    height="44"
                />
            </NuxtLink>
            <NuxtLink to="#" class="community_link">
                <img
                    src="@/public/icons/soc/li.png"
                    alt="linkedin"
                    width="40"
                    height="40"
                />
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.community {
    &_container {
        margin-bottom: 32px;
    }

    &_title {
        font-size: 26px;
        font-weight: 700;
        text-transform: capitalize;
        margin-bottom: 12px;
    }

    &_link_block {
        display: flex;
    }

    &_link {
        margin-right: 28px;
        opacity: 0.9;

        &:hover {
            opacity: 1;
        }

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
