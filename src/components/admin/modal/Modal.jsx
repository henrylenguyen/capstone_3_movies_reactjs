import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

function ModalComponent(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsOpen(false);
  };

  return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleFinish}>
            <ModalBody>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" required />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" required />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Cancel
              </Button>
              <Button colorScheme="green" type="submit">
                Sign Up
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
  );
}

export default ModalComponent;
