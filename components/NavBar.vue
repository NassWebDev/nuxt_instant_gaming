<template>
    <header>
        <!-- <div class="logo">
            <Icon name="vscode-icons:file-type-nuxt" size="5em"/>
            <h1>
                Instant Gaming
            </h1>
        </div> -->
        <NuxtLink to="/">
        </NuxtLink>
        <div class="nav-middle">
            <ul>
                <li>
                    Tendances
                </li>
                <li>
                    Précommandes
                </li>
                <li>
                    Prochaines sorties
                </li>
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

        // .logo{
        //     width: 200px;
        //     display: flex;
        //     align-items: center;
        //     column-gap: 15px;
        //     z-index: 1;
        //     padding-left: 20px;

        //     h1{
        //         color: #e8e8e8;
        //         line-height: 1.7rem
        //     }
        // }

        a{
            z-index: 9999;
            width: 150px;
            height: 40px;
            background-image: url("../assets/images/logo-horizontal.svg");
            background-size: 100%;
            background-repeat: no-repeat;
            margin-left: 20px;
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

                li{
                    list-style: none;
                    color: #e8e8e8;
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
            margin-right: 20px;
            column-gap: 30px;
        }
    }
</style>