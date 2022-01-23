import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import {
  Box,
  Button,
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
  useDisclosure,
  Link,
  Center,
  Spinner
} from "@chakra-ui/react";


const ResultModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const noImage = (
    <Center>
      <Spinner size="xl" color="red.500" />
    </Center>
  )

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
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <Image
            src={props.modalImage}
            alt={props.modalName}
            title={props.modalName}
            onError={noImage}
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
                <AccordionPanel>{ReactHtmlParser(props.modalSummary)}</AccordionPanel>
              </AccordionItem>
            </Accordion>


          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link style={{ textDecoration: 'none' }} href={props.modalInstructions} isExternal>
              <Button colorScheme="red">Go to Recipe</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ResultModal;