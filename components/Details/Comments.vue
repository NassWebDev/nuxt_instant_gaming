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
        <ul v-if="allcomments.length">
            <li v-for="comment in allcomments" :key="comment.id">
              <div class="comment-info">
                <p class="username">
                    {{ comment.userName}}
                </p>
                <p>
                    {{ new Date(comment.createdAt).toISOString().split('T')[0] }}
                </p>
              </div>
              <p>
                {{ comment.text }}
              </p>
            </li>
        </ul>
        <p v-else>
            No comments. Add one.
        </p>
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
    const { error: errorComment } = await useFetch(`/api/${idString}/comments/${props.slug}/comment`, {
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

const allcomments = ref([]);

const { error, data: comments } = await useFetch(`/api/${idString}/comments/${props.slug}/comment`);
allcomments.value = comments.value;

const supabase = useSupabaseClient();

const insert = supabase
    .channel('custom-all-channel')
    .on(
        'postgres_changes',
    {
        event: '*',
        schema: 'public',
        table: 'comment',
    },
    (payload) => {
        allcomments.value.unshift(payload.new);
        console.log(toRaw(allcomments.value));
    }
    ).subscribe();

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

            .comment-info{
                display: flex;
                justify-content: space-between;
                border-bottom: 2px solid #636363;
                padding-bottom: 5px;

                .username{
                    font-weight: bold;
                }
            }
        }
    }
}
</style>