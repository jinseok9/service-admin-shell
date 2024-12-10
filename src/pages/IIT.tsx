import { useEffect } from "react";
import { Root } from "service-admin-iit/root";

export default function IIT() {
  useEffect(() => {
    const root = new Root("iit");

    root.render();

    return () => {
      root.unmount();
    };
  }, []);

  return <div id="iit"></div>;
}
