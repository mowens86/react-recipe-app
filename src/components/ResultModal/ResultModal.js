import React from 'react';
import { htmlTagRemover } from '../Helpers/Helpers';
import {
  Box,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure
} from "@chakra-ui/react";


const ResultModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  console.log(props.modalInstructions);

  return (
    <>
      <Button 
        onClick={onOpen}
        size="xs"
        mt="2"
        >
          More Info
          </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <Image 
            src={props.modalImage} 
            alt={props.modalName} 
            title={props.modalName}
            borderTopRightRadius="md"
            borderTopLeftRadius="md"
            align="center"
          />
          <ModalHeader>{props.modalName}</ModalHeader>
          <ModalCloseButton backgroundColor="blue.100" _hover={{ backgroundColor: "blue.100" }} />
          <ModalBody>

            <Accordion allowToggle>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Summary
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel>{htmlTagRemover(props.modalSummary)}</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h3>
                  <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Recipe
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel>{htmlTagRemover(props.modalSummary)}</AccordionPanel>
              </AccordionItem>
            </Accordion>


          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Print Recipe</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ResultModal;