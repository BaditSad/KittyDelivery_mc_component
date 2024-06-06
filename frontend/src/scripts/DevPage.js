import { getComponents } from "@/services/HandlerGetComponents";

export default {
  data() {
    return {
      components: [],
    };
  },
  async created() {
    try {
      this.components = await getComponents();
    } catch (error) {
      console.error("Erreur lors de la récupération des composants:", error);
    }
  },
  methods: {
    async downloadComponent(component) {
      const blob = new Blob([component.component_template], {
        type: "text/html",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = component.component_name;
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    },
  },
};
