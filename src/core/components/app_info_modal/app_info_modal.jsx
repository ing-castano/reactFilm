import React from 'react'
import { Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure, Chip } from "@nextui-org/react";


const AppInfoModal = ({isOpen, onOpenChange, backdrop, title, rating, date, description}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='lg' scrollBehavior='inside' backdrop='blur'>
          <ModalContent className='text-white bg-black'>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                <ModalBody>
                  <div className='h-64 w-auto relative p-2'>
                    <img className=" absolute top-0 left-0 z-[-1]" src={backdrop} alt={title}></img>
                    <div className=' h-60 flex flex-col justify-between'>
                      <div className='flex flex-row justify-between '>
                        <Chip size="md" className='p-2'> ⭐️ {rating} </Chip>
                        {rating > 8 && (
                          <Chip className='p-2' size="sm" color="warning" variant="shadow">Recommended</Chip>
                        )}
                      </div>
                      <div className='flex flex-row justify-between '>
                        <Chip size="sm" className='p-2'> {date} </Chip>                    
                      </div>
                    </div>
                  </div>
                  <p>{description}</p>
                </ModalBody>
                <ModalFooter className='flex justify-center ' />                
              </>
            )}
          </ModalContent>
        </Modal>
  )
}

export default AppInfoModal