<template>
    <div class="comments">
        <h2>
            Add a comment
          </h2>
          <textarea type="text" placeholder="Your comment" v-model="comment">
        </textarea>
        <button @click="addComment">
            Submit your review
        </button>
        <ul>
            <li v-for="comment in comments" :key="comment.id">
              <p class="username">
                {{ comment.userName}}
              </p>
              <p>
                {{ comment.text }}
              </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    slug: String
})

const comment = ref('');

const user = useSupabaseUser();
const userEmail = ref(user.value.email);

const { errorUserId, data: userId } = await useFetch(`/api/user/${userEmail.value}`)
if(errorUserId){
    console.log(errorUserId)
}

const id = userId.value.id;
const idString = id.toString();

const addComment = (async () => {
    const { errorComment } = await useFetch(`/api/${idString}/comments/${props.slug}/comment`, {
        method: 'POST',
        body: {
            text: comment.value,
            userName: userId.value.userName
        }
    })
    if (errorComment) {
        console.log(errorComment)
    }
    comment.value = '';
})

const { errorGetComments, data: comments } = await useFetch(`/api/${idString}/comments/${props.slug}/comment`)
if(errorUserId){
    console.log(errorGetComments)
}
</script>

<style lang="scss">
.comments{
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    textarea{
        min-width: 100%;
        max-width: 100%;
        height: 50px;
        background-color: #10101066;
        border: 2px solid #3d3d3d;
        border-radius: 5px;
        padding: 10px;
        color: #fff;
        font-size: 16px;
                    
        &:hover{
            border: 2px solid #ff6000;
        }

        &::placeholder{
            font-size: 16px;
        }
    }

    button{
        width: 100%;
        height: 50px;
        background-color: #ff6000;
        border: transparent;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover{
            transform: scale(1.05);
            cursor: pointer;
        }
    }

    ul{

        li{
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            padding: 20px;
            list-style: none;

            .username{
                font-weight: bold;
                border-bottom: 2px solid #636363;
                padding-bottom: 5px;
            }
        }
    }
}
</style>