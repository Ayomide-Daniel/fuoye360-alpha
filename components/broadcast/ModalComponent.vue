<template>
  <div>
    <div
      v-if="showCreateBroadcast"
      id="tweet-box"
      class="vs-wrapper"
      style="padding-top: 0; z-index: 11"
      @click="closeBroadcastModal($event, 'broadcast')"
    >
      <div
        class="vs-container"
        style="
          margin: 0 0 1rem;
          padding: 0 0 1rem;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        "
      >
        <div class="vs-content" style="border-radius: 1rem">
          <form
            style="border-radius: 1rem"
            @submit.prevent="newBroadcast($event)"
          >
            <div class="div-header" style="color: limegreen">
              <h3><i class="fas fa-bullhorn"></i> Broadcast</h3>
              <span class="hr-line"></span>
            </div>
            <div class="input-div">
              <textarea
                id="new-broadcast"
                v-model="form.body"
                name="tweet"
                cols="30"
                rows="10"
                placeholder="What's happening?"
                maxlength="250"
                :autofocus="showCreateBroadcast"
                required
              ></textarea>
            </div>
            <div class="broadcast-func-div">
              <input
                id="broadcast-image-input"
                type="file"
                name="images[]"
                accept=".jpeg, .jpg, .png"
                multiple
                @change="previewImage($event)"
              />
              <button type="button">
                <i class="fas fa-image" @click="triggerClick"></i>
              </button>
            </div>
            <div id="preview-div" class="image-preview"></div>
            <div class="input-div tweet-btn-div">
              <button
                type="button"
                class="closeTweetBox"
                @click="showCreateBroadcast = false"
              >
                Close
              </button>
              <button
                type="submit"
                class="tweet-btn"
                style="min-width: 121.05px"
                :disabled="form.body.length <= 0"
                :style="form.body.length <= 0 ? 'opacity:.75;' : ''"
              >
                <span v-if="loading"
                  ><v-progress-circular
                    indeterminate
                    color="white"
                    width="3"
                    size="20"
                  ></v-progress-circular
                ></span>

                <span v-else><i class="fas fa-bullhorn"></i> Broadcast</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div
      v-if="showShare"
      class="vs-wrapper blog-modal"
      data-name="Share"
      @click="closeBroadcastModal($event, 'share')"
    >
      <div
        class="vs-container"
        style="
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        "
      >
        <div
          class="vs-content"
          style="border-radius: 1rem 1rem 0 0; position: relative"
        >
          <a href="#l-div" class="share-scroll-down"></a>
          <h3>What would you like to do?</h3>
          <form action="" method="post" style="border-radius: 1rem 1rem 0 0">
            <div class="input-div">
              <button
                v-if="!tweet.bookmarked"
                type="button"
                class="add-to-bookmark"
                @click="addToBookmarks(tweet.id)"
              >
                <i class="fas fa-bookmark"></i> Add to Bookmark
              </button>
              <button
                v-else
                type="button"
                class="remove-from-bookmark"
                @click="removeFromBookmarks(tweet.id)"
              >
                <i class="fas fa-times"></i> Remove from Bookmark
              </button>
            </div>
            <div class="input-div">
              <button type="button" class="share-broadcast">
                <i class="fas fa-share-alt"></i> Share Broadcast
              </button>
            </div>
            <div class="input-div">
              <button type="button" class="share-copy-link">
                <i class="fas fa-link"></i> Copy link
              </button>
            </div>
            <div id="l-div"></div>
          </form>
        </div>
      </div>
    </div>

    <div
      v-if="showOption"
      class="vs-wrapper blog-modal"
      data-name="Option"
      @click="closeBroadcastModal($event, 'option')"
    >
      <div
        class="vs-container"
        style="
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        "
      >
        <div
          class="vs-content"
          style="border-radius: 1rem 1rem 0 0; position: relative"
        >
          <a href="#l-div" class="share-scroll-down"></a>
          <h3>What would you like to do?</h3>
          <form action="" method="post" style="border-radius: 1rem 1rem 0 0">
            <div v-if="tweet.user_id === user.id">
              <button
                type="button"
                class="delete-broadcast"
                @click="deleteBroadcast(tweet.id)"
              >
                <i class="fas fa-trash"></i> Delete broadcast
              </button>
            </div>
            <div v-if="tweet.user_id != user.id">
              <div class="input-div">
                <button
                  v-if="tweet.is_following === true"
                  type="button"
                  class="report-broadcast"
                  @click="unflwUser(tweet.user_id)"
                >
                  <i class="fas fa-times"></i> Unfollow
                  <b>{{ tweet.user.name }}</b>
                </button>
                <button
                  v-else
                  type="button"
                  class="report-broadcast"
                  @click="flwUser(tweet.user_id)"
                >
                  <i class="fas fa-plus"></i> Follow
                  <b>{{ tweet.user.name }}</b>
                </button>
              </div>
              <div class="input-div">
                <button
                  type="button"
                  class="report-broadcast"
                  @click="reportBroadcast(tweet.id)"
                >
                  <i class="fas fa-flag"></i> Report Broadcast
                </button>
              </div>
            </div>
            <div id="l-div"></div>
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="showComment"
      id="#comment-box"
      class="vs-wrapper"
      data-name="Comment"
      @click="closeBroadcastModal($event, 'comment')"
    >
      <div class="vs-container">
        <div class="vs-content" style="">
          <div class="div-header" style="color: limegreen">
            <!-- <h3><i class="fas fa-comment"></i> REPLY</h3> -->
          </div>
          <div class="tweet-div" style="margin-top: 0.5rem; border: none">
            <div class="tweet-content-div">
              <div style="display: grid; height: 100%">
                <img
                  :src="$asset('storage/profile_images/' + tweet.user.image)"
                  :alt="tweet.user.name"
                  class="tweeter-img comment-tweeter-img"
                  style="height: 35px; width: 35px"
                />
              </div>
              <div class="tweet-txt-div">
                <div class="tweet-profile-div">
                  <span class="tweet-username">{{ tweet.user.name }}</span
                  ><span class="tweet-time">. {{ tweet.timeago }}</span>
                </div>
                <div class="tweet-body" v-html="tweet.body"></div>
                <div v-if="tweet.media != null" class="broadcast-media">
                  <img
                    v-for="img in tweet.media"
                    :key="img.id"
                    :src="$asset('storage/broadcast_images/' + img)"
                    alt=""
                    load="lazy"
                    @click="
                      viewImage($asset('storage/broadcast_images/' + img))
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <form id="comment-form" @submit.prevent="newComment">
            <div class="tweet-div" style="margin-top: 0.5rem">
              <div class="tweet-content-div">
                <div>
                  <img
                    :src="$asset('storage/profile_images/' + user.image)"
                    :alt="user.name"
                    class="tweeter-img"
                    style="height: 35px; width: 35px"
                  />
                </div>

                <div class="tweet-txt-div">
                  <textarea
                    id="tweet-comment"
                    v-model="comment.body"
                    style="width: inherit; outline: none"
                    rows="10"
                    placeholder="What's on your mind?"
                    @input="checkComment"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <div
            style="
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 0.5rem;
              padding: 0.5rem;
            "
            class="comment-btn-div"
          >
            <button type="button" @click="showComment = false">Close</button>
            <button
              id="post-comment"
              type="submit"
              style="background: limegreen; color: #fff"
              :disabled="!comment.submit"
              :style="!comment.submit ? 'opacity:.75;' : ''"
              @click.prevent="newComment"
            >
              <span v-if="loading"
                ><v-progress-circular
                  indeterminate
                  color="white"
                  width="3"
                  size="20"
                ></v-progress-circular
              ></span>
              <span v-else> Reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import Broadcast from '~/assets/js/api/Broadcast'
export default {
  data() {
    return {
      showCreateBroadcast: false,
      showShare: false,
      showOption: false,
      showComment: false,
      comment: {
        submit: false,
        body: '',
        blogger_id: '',
        post_id: '',
        comment_id: '',
      },
      form: {
        id: '',
        broadcast: '',
        page: '',
        receiverid: '',
        action: '',
        body: '',
      },
      tweet: {},
      loading: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  watch: {
    tweet(data) {
      this.comment.blogger_id = data.user_id
      this.comment.post_id = data.id
    },
  },
  mounted() {
    this.$root.$on('showModal', ({ tweet, type, modal }) => {
      if (modal === 'broadcast') {
        return (this.showCreateBroadcast = true)
      }
      this.tweet = tweet
      if (modal === 'option') {
        return (this.showOption = true)
      }
      if (modal === 'share') {
        return (this.showShare = true)
      }
      if (modal === 'comment') {
        return (this.showComment = true)
      }
    })
  },
  methods: {
    addToBookmarks() {
      Broadcast.addToBookmarks(this.tweet.id)
        .then(() => {
          this.tweet.bookmarked = true
          this.$root.$emit('addedFromBookmark', this.tweet.id)
          this.$root.$emit('alertNotification', {
            message: 'Added To Bookmarks',
          })
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
    removeFromBookmarks() {
      Broadcast.removeFromBookmarks(this.tweet.id)
        .then(() => {
          this.tweet.bookmarked = false
          this.$root.$emit('removedFromBookmark', this.tweet.id)
          this.$root.$emit('alertNotification', {
            message: 'Removed From Bookmarks',
          })
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
    closeBroadcastModal(e, modal) {
      if ($(e.target).closest('.vs-content').length === 0) {
        if (modal === 'broadcast') {
          return (this.showCreateBroadcast = false)
        }
        if (modal === 'option') {
          return (this.showOption = false)
        }
        if (modal === 'share') {
          return (this.showShare = false)
        }
        if (modal === 'comment') {
          this.comment.body = ''
          return (this.showComment = false)
        }
      }
    },
    closeTweetBox() {
      this.$root.$emit('closeBroadcast')
    },
    checkToCloseBroadcast(e, modal) {
      if ($(e.target).closest('.vs-content').length === 0) {
        if (modal === 'option') {
          return (this.showOption = false)
        }
        if (modal === 'share') {
          return (this.showShare = false)
        }
        if (modal === 'comment') {
          this.comment.body = ''
          return (this.showComment = false)
        }
      }
    },
    newBroadcast(e) {
      this.loading = true
      const fd = new FormData(e.target)
      Broadcast.createBroadcast(fd)
        .then((res) => {
          this.showCreateBroadcast = false
          this.loading = false
          this.$root.$emit('appendBroadcast', res.data.data.broadcast)
          this.form.body = ''
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },
    checkComment() {
      if (this.comment.body.length <= 0) {
        this.comment.submit = false
      } else {
        this.comment.submit = true
      }
    },
    closeComment() {
      this.comment.body = ''
      this.showComment = false
    },
    // unflwUser(id) {
    //   axios
    //     .post('/api/account/' + id + '/unfollow')
    //     .then((res) => {
    //       this.$emit('updateUser', {
    //         user: {
    //           following: res.data.data.sender_count,
    //         },
    //       })
    //       this.$emit('updateBroadcasts', id)
    //       this.tweet.is_following = false
    //     })
    //     .catch(() => {})
    // },

    // flwUser(id) {
    //   axios
    //     .post('/api/account/' + id + '/follow')
    //     .then((res) => {
    //       this.$emit('updateUser', {
    //         user: {
    //           following: res.data.data.sender_count,
    //         },
    //       })
    //       this.$emit('closeOption')
    //       this.tweet.is_following = true
    //     })
    //     .catch(() => {})
    // },
    triggerClick() {
      $('#broadcast-image-input').click()
    },
    previewImage(e) {
      $('.image-preview').empty()
      const files = e.target.files
      if (files) {
        if (files.length > 2) {
          alert(
            'You can only upload a maximum of 2 images. Happy Broadcasting!'
          )
          $('button[type=submit]').attr('disabled', 'disabled')
        } else {
          for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const reader = new FileReader()
            reader.addEventListener('load', function (e) {
              const pic = e.target
              const image = document.createElement('img')
              $(image).attr('src', pic.result).addClass('preview')
              $('.image-preview').append(image, null)
            })
            reader.readAsDataURL(file)
          }
        }
      }
    },
    newComment(e) {
      this.loading = true
      Broadcast.createComment(this.comment)
        .then((res) => {
          if (
            this.tweet.post_id == null &&
            this.tweet.user_id === this.user.id
          ) {
            this.$root.$emit('createdThread', true)
          }

          this.$root.$emit('updateComment', res.data.data.comment)
          this.closeComment()
          this.loading = false
        })
        .catch((err) => {
          this.$root.$emit('alertNotification', { status: err.response.status })
        })
    },

    viewImage(src) {
      this.$root.$emit('viewImage', src)
    },
  },
}
</script>

<style scoped>
#tweet-box .tweet-btn-div {
  display: flex;
  justify-content: flex-end;
}
.tweet-btn-div button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font: inherit;
  margin: 0.5rem 0.25rem 0.5rem 0;
  border: 2px solid var(--brand-color);
  background: var(--white-color);
  color: var(--brand-color);
}
.tweet-btn-div .tweet-btn {
  background: var(--brand-color);
  color: var(--white-color);
  font-weight: bold;
}
#tweet-box form {
  background: none;
}
#tweet-box form .input-div {
  width: 100%;
}
#tweet-box textarea {
  width: inherit;
  border: none;
  resize: none;
  font: inherit;
  outline: none;
}

.image-preview .preview {
  object-fit: cover;
}
#preview-div img {
  margin: 0.5rem;
}

#tweet-box form {
  background: none;
}
#tweet-box form .input-div {
  width: 100%;
}
#tweet-box textarea {
  width: inherit;
  border: none;
  resize: none;
  font: inherit;
  outline: none;
}
#tweet-box .tweet-btn-div {
  display: flex;
  justify-content: flex-end;
}
#comment-box textarea {
  max-width: inherit;
  outline: none;
  border: none;
  resize: none;
  background: none;
  width: 100%;
  font: inherit;
}
#comment-box button {
  border: 2px solid rgb(147, 197, 147);
  padding: 0.5rem;
  border-radius: 1rem;
  background: none;
  color: limegreen;
  font-weight: bold;
  text-transform: uppercase;
}

.blog-modal .share-scroll-down {
  content: '';
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 5px;
  display: block;
  width: 15%;
  height: 8px;
  background: var(--bg-color);
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
}
.blog-modal h3 {
  margin: 1rem 0;
  text-align: center;
}
.blog-modal form {
  padding: 1rem;
}
.blog-modal .input-div {
  width: 100%;
}
.blog-modal button {
  padding: 0.8rem 0.5rem;
  font: inherit;
  width: inherit;
  text-align: left;
  background: none;
  border: none;
}
.comment-btn-div button {
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid var(--brand-color);
  color: var(--brand-color);
  font-weight: bold;
  text-transform: uppercase;
}
</style>
