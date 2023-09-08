<template>
    <header>
        <div class="logo">
            <Icon name="vscode-icons:file-type-nuxt" size="5em"/>
            <h1>
                Instant Gaming
            </h1>
        </div>
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
            <Icon name="ph:basket-light" size="1.8em"/>
            <Icon name="mdi-light:account" size="2em"/>
        </div>
    </header>
    <div class="imageTrending">
    </div>
</template>

<style lang="scss">
    header{
        width: 100vw;
        display: flex;
        justify-content: space-between;
        position: absolute;

        .logo{
            width: 200px;
            display: flex;
            align-items: center;
            column-gap: 15px;
            z-index: 1;

            h1{
                color: #e8e8e8;
            }
        }

        .nav-middle{
            width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

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
        }
    }
    .imageTrending{
        width: 100vw;
        height: 80vh;
        background-image: url("@/assets/images/rdr.jpg");
        background-size: cover;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);


        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 20%;
            background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8));
            pointer-events: none;
        }
    }
</style>