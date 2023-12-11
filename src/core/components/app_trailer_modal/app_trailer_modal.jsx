import { Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure } from "@nextui-org/react";
import React from 'react'
import AppYoutubePlayer from "../app_youtube_player/app_youtube_player";

const AppTrailerModal = ({isOpen, onOpenChange, trailerKey}) => {

  
  return (
    <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='full' scrollBehavior='outside'>
            <ModalContent className='text-white bg-black'>
                {(onClose) => (
                <>
                    <ModalHeader />
                    <ModalBody>
                    {trailerKey && (<AppYoutubePlayer videoId={trailerKey} onClose={onClose}/>)}
                    </ModalBody>
                    <ModalFooter />
                </>
                )}
            </ModalContent>
        </Modal>
    </>
  )
}

export default AppTrailerModal