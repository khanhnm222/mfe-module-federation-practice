import { useNavigate } from "react-router-dom";

import { mountRemoteComponent } from "@/utils/loadComponent";
import globalStorage from "@/utils/loadStorage";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const token = globalStorage.getToken();

  return mountRemoteComponent({
    module: "checkout",
    component: "PaymentSuccess",
    props: {
      navigate,
      token,
    },
  });
};

export default PaymentSuccess;

