<template>
    <header>
        <h1>
            Instant Gaming
        </h1>
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
</template>

<style lang="scss">
    header{
        display: flex;
        justify-content: space-between;
        margin: 10px 20px;

        .nav-middle{
            width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 10px;

            ul{
                display: flex;
                column-gap: 50px;

                li{
                    list-style: none;
                }
            }

            input{
                width: 100%;
                height: 40px;
                border-radius: 10px;
                border: solid 1px black;
            }
        }

        .icons{
            display: flex;
            align-items: center;
            will-change: transform;
        }
    }
</style>