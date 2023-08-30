import { useNavigate } from "react-router-dom";

import { mountRemoteComponent } from "@/utils/loadComponent";
import globalStorage from "@/utils/loadStorage";

const PaymentFailed = () => {
  const navigate = useNavigate();
  const token = globalStorage.getToken();

  return mountRemoteComponent({
    module: "checkout",
    component: "PaymentFailed",
    props: {
      navigate,
      token,
    },
  });
};

export default PaymentFailed;

