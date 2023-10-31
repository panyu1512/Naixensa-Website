import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import { Divider } from "@nextui-org/react";
import React from "react";
interface modalAuthProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  size:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "full"
    | "xs"
    | "3xl"
    | "4xl"
    | "5xl"
    | undefined;
  placement:
    | "center"
    | "auto"
    | "top"
    | "bottom"
    | "top-center"
    | "bottom-center"
    | undefined;
}

export const ModalRegister = (props: modalAuthProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [email, setEmail] = React.useState("");
  const [label, setLabel] = React.useState("Email");
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? "valid" : "invalid";
  }, [email]);

  const onValueEmailChange = React.useCallback(
    (value: string) => {
      setEmail(value);
      setLabel(value === "" ? "Email" : "");
    },
    [setEmail, setLabel]
  );

  return (
    <Modal
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      size={props.size}
      placement={props.placement}
    >
      <ModalContent className="items-center">
        {(onClose: undefined) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Crea una conta
            </ModalHeader>
            <Divider />
            <ModalBody>
              <form>
                <Input
                  className="max-w-xs py-2"
                  variant="bordered"
                  labelPlacement="outside"
                  type="text"
                  label="Nom"
                  placeholder="Introdueix el teu nom"
                  isRequired
                />
                <Input
                  className="max-w-xs py-2"
                  variant="bordered"
                  labelPlacement="outside"
                  type="text"
                  label="Cognom"
                  placeholder="Introdueix el teu cognom"
                  isRequired
                />
                <Input
                  isRequired
                  value={email}
                  type="email"
                  label={label}
                  className="max-w-xs py-2"
                  placeholder="Introdueix el teu email"
                  required
                  description="No compartirem el teu email amb ningú."
                  labelPlacement="outside"
                  variant="bordered"
                  color={isInvalid === "invalid" ? "danger" : "default"}
                  errorMessage={
                    isInvalid === "invalid" &&
                    "Per favor, introdueix un email vàlid."
                  }
                  onValueChange={onValueEmailChange}
                />
                <Input
                  className="max-w-xs py-2"
                  label="Contrassenya"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Introdueix la contrassenya"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  isRequired
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" variant="solid" type="submit">
                Registrarte
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
