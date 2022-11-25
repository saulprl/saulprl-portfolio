import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
} from "@chakra-ui/react";

const MainDrawer = () => {
  return (
    <Drawer isOpen={true} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Saúl Ramos</DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default MainDrawer;
