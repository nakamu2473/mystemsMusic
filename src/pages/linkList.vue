<script>
import LinkItem from '../components/LinkItem.vue'
import { musicList } from "../data/musicList"


export default {
  components: {
    LinkItem
   }
   ,
  data() {
    return {
      musicList: musicList,
    }
  }
}


</script>
<template> 
    <div class="linkList" > 
      <div class="page_title" > 
        <p></p>
      </div>
      <LinkItem v-for="(nakami, key) in musicList" :key="key">
        <template #heading>
          <a v-if="nakami.spotify_url" :href="nakami.spotify_url"   target="_blank" rel="noopener noreferrer">
            {{ nakami.music_name }}
          </a>
          <span v-if="!nakami.spotify_url" class="music_name">
            {{ nakami.music_name }}
          </span>
          <span class="artist_name">
             / {{ nakami.artist_name }}
          </span>

        </template>
          <template #artist_name> </template>
          {{ nakami.comment }}
        <a :href="nakami.mystems_url"   target="_blank" rel="noopener noreferrer">
          {{ nakami.mystems_name }}さん
        </a>
      </LinkItem>
  </div>
</template>

<style scoped>
.description {
  /* width: 300px; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 0.9rem;
}
.music_name {
  color : #4E94AA
}
.artist_name {
  color : #4E94AA;
  font-size: 1rem;
}

</style>
