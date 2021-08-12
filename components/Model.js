import React, { useState } from 'react'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'

export default function Model({
  input,
  setInput,
  addtodb,
  showModal,
  setShowModal,
}) {
  return (
    <>
      <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          Document name
        </ModalHeader>
        <ModalBody>
          <input
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="Document name"
            className="text-base outline-none leading-relaxed text-gray-600 font-normal"
            value={input}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={e => setShowModal(false)}
            ripple="dark"
          >
            Close
          </Button>

          <Button color="green" onClick={addtodb} ripple="light">
            Add Document
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
