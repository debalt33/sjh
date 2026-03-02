import { useState } from "react";
import Metasploit from "../components/Metasploit";
import Shodan from "../components/Shodan";
import Setoolkit from "../components/Ssetoolkit";

export default function Index() {
  return (
    <div className="p-4 space-y-4">
      <Metasploit />
      <Shodan />
      <Setoolkit />
    </div>
  );
}