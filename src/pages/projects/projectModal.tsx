import React from "react";

import {
  AspectRatio,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onProjectModal: () => void;
  dataProject: any;
};

function ProjectModal({ isOpen, onProjectModal, dataProject }: Props) {
  return (
    <Modal
      size="xl"
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onProjectModal}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="relative">
          <div className="text-2xl">{dataProject.title}</div>
          <div className="absolute top-5 right-5 text-3xl text-primary-800">
            {dataProject.icon_to_use}
          </div>
        </ModalHeader>
        <ModalBody>
          <AspectRatio maxW="700px" ratio={16 / 9}>
            <iframe
              title={dataProject.title}
              src={dataProject.link}
              allowFullScreen
            />
          </AspectRatio>
          <p className="mt-3 text-lg ">
            <a href={dataProject.presenter_url}>
              <span className="font-semibold text-primary-900">
                {dataProject.presenter_name}
              </span>
            </a>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="solid"
            colorScheme="red"
            mr={3}
            onClick={onProjectModal}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ProjectModal;
