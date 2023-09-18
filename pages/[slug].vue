<template>
    <div class="details-container">
        <div class="banner">
            <img src="@/assets/images/rdr.jpg" alt="">
            <div class="details">
                <p>
                    Red Dead Redemption 2
                </p>
                <p>
                    Classification
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.details-container {
    padding: 100px;
    
    .banner{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .details{
            color: #fff;
        }

    }
}
</style>