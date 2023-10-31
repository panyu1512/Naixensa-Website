'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { ModalAuth } from "./modalAuth";
import {useDisclosure} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import React from "react";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	IconParkOutlinePregnantWomen,
} from "@/components/icons";
import { logoName } from "@/components/primitives";

export const Navbar = () => {

	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-3" href="/">
						<IconParkOutlinePregnantWomen />
						<p className={logoName({ color: "violet"})}>NAIXENÇA</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-4">
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden md:flex gap-2">
					<Button
						onPress={onOpen}
						className="text-sm font-normal text-default-600 bg-default-100"
						variant="flat"
					>
						Iniciar sessió
					</Button>
					<Button
						onPress={onOpen}
						color="secondary"
						className="text-sm font-normal"
						variant="shadow"
					>
						Registrarse
					</Button>
					<ModalAuth isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" placement="center"/>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					<Button
						onPress={onOpen}
						className="text-sm font-normal text-default-600 bg-default-100"
						variant="flat"
					>
						Iniciar sessió
					</Button>
					<Button
						onPress={onOpen}
						color="secondary"
						className="text-sm font-normal"
						variant="shadow"
					>
						Registrarse
					</Button>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
