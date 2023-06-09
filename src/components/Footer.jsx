import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" sx={{ alignItems: "center" }} px="40px" py="24px">
                <img src={Logo} alt="logo" height="40px" width="200px" />
            </Stack>
        </Box>
    );
};

export default Footer;
