<template>
    <header>
        <NuxtLink class="logo" to="/">
        </NuxtLink>
        <div class="nav-middle">
            <ul>
                <NuxtLink to="/populaires"> 
                    Popular
                </NuxtLink>
                <NuxtLink to="/next-release">
                    Next Releases
                </NuxtLink>
            </ul>
            <input type="text">
        </div>
        <div class="icons">
            <Icon name="solar:cart-large-4-outline" size="1.8em"/>
            <Icon name="mdi-light:account" size="2em"/>
        </div>
    </header>
</template>

<style lang="scss">
    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        align-items: center;
        padding: 10px 20px;

        .logo{
            z-index: 999;
            width: 150px;
            height: 40px;
            background-image: url("../assets/images/logo-horizontal.svg");
            background-size: 100%;
            background-repeat: no-repeat;
        }

        .nav-middle{
            width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 15px;

            ul{
                display: flex;
                column-gap: 50px;

                a{
                    color: #e8e8e8;
                    text-decoration: none;
                    z-index: 1;
                }
            }

            input{
                width: 100%;
                height: 40px;
                border-radius: 10px;
                border: solid 1px black;
                z-index: 1;
            }
        }

        .icons{
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            will-change: transform;
            color: #e8e8e8;
            z-index: 1;
            column-gap: 30px;
        }
    }
</style>