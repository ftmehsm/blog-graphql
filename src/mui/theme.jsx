import { createTheme } from "@mui/material";

const theme = createTheme({
    typography:{
        fontFamily :    `"Yekan Bakh","Roboto" ,"Arial"`,
        fontWeightRegular : 300,
        fontWeightMedium : 400,
        fontWeightSemiBold :600,
        fontWeightBold: 700,
        fontWeightHeavy : 800,
        fontWeightFat :900
    },
    direction : "rtl"
})

export default theme;