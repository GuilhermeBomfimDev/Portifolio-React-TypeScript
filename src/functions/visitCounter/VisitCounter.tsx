import { useEffect, useState } from "react";

function VisitCounter() {
    const [visits, setVisits] = useState(() => {
        return Number(localStorage.getItem("visitCounter")) || 0;
      });

      useEffect(() => {
        if (!sessionStorage.getItem("visited")) {
          const newVisits = visits + 1;
          localStorage.setItem("visitCounter", newVisits.toString());
          sessionStorage.setItem("visited", "true");
          setVisits(newVisits);
        }
      }, []);

  console.log(`Visitas: ${visits}`);

  return null;
}

export default VisitCounter;
