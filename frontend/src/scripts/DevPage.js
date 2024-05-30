import DevPage from '@/components/DevPage.vue'
import axios from 'axios';
export default {
  name: 'DevPage',
  components: {
    DevPage
  }
  ,
  async created() {
    this.message = await axios.get('http://localhost:3000/message');
  }
};

