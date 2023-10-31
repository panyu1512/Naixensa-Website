
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

interface modalAuthProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    size: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "xs" | "3xl" | "4xl" | "5xl" | undefined;
    placement: "center" | "auto" | "top" | "bottom" | "top-center" | "bottom-center" | undefined;
}

export const ModalAuth = (props: modalAuthProps) => {
    return (
        <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange} size={props.size} placement={props.placement}>
            <ModalContent>
            {(onClose: undefined) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                    <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                    Action
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    )
}