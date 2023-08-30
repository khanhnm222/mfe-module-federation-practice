import { DATE_FORMAT } from "@/utils/constants";
import moment from "moment";
// import { createApp } from "vue";

export default {
  methods: {
    formatDate(date: string, format = DATE_FORMAT.default){
      return moment(date).format(format);
    }
  },
};

// createApp({
//   mixins: [mixin],
// });
