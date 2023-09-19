<template>
    <div class="details-container">
        <div class="banner">
            <img src="@/assets/images/rdr.jpg" alt="">
            <div class="details">
                <p>
                    Red Dead Redemption 2
                </p>
                <table>
                  <tr>
                    <td>Classification:</td>
                    <td>PEGI 18</td>
                  </tr>
                  <tr>
                    <td>Développeur:</td>
                    <td>Rockstar Games</td>
                  </tr>
                  <tr>
                    <td>Editeur:</td>
                    <td>Rockstar Games</td>
                  </tr>
                  <tr>
                    <td>Date de sortie:</td>
                    <td>5 décembre 2019</td>
                  </tr>
                  <tr>
                    <td>Genre:</td>
                    <td>Jeux solo, Action, Aventure</td>
                  </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="description">
      <p>
        
      </p>
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
        column-gap: 60px;

        img{
            width: 600px;
            aspect-ratio: 16/9;
        }

        .details{
            min-width: 600px;
            color: #fff;
            border: 1px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            table{
                min-width: 100%;
                border-collapse: collapse;
                display: flex;
                justify-content: center;

                td{
                    padding: 8px;
                    width: 150px;
                }
            }
        }

    }
}
</style>