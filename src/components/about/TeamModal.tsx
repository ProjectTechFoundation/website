import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

interface TeamModalProps {
  team: TeamMember[];
}

export default function TeamModal({ team }: TeamModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const handleOpenModal = (e: CustomEvent<{ index: number }>) => {
      setSelectedMember(team[e.detail.index]);
      setIsOpen(true);
    };

    window.addEventListener("openTeamModal", handleOpenModal as EventListener);
    return () =>
      window.removeEventListener(
        "openTeamModal",
        handleOpenModal as EventListener
      );
  }, [team]);

  return (
    <AnimatePresence>
      {isOpen && selectedMember && (
        <Dialog
          static
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <div className="relative">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-32 h-32 rounded-full mx-auto"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-0 right-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {selectedMember.name}
                  </Dialog.Title>
                  <p className="text-sm text-primary">{selectedMember.role}</p>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">{selectedMember.bio}</p>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-secondary"
                  >
                    <i className="fab fa-linkedin mr-2"></i>
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
