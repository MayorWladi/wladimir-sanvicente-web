"use client";

import { useState } from "react";
import DiscordStatus from "./DiscordStatus";
import DiscordModal from "./DiscordModal";

export default function DiscordActivityGroup() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="contents">
      <DiscordStatus onToggle={() => setShowModal(true)} />
      {showModal && <DiscordModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
