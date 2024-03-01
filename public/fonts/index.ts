import localFont from "next/font/local";


const robotoRegularNC = localFont({ src: './Roboto-Regular.ttf' })
const robotoMediumNC = localFont({ src: './Roboto-Medium.ttf' })
const robotoBoldNC = localFont({ src: './Roboto-Bold.ttf' })

const poppinsMediumNC = localFont({ src: './Poppins-Medium.ttf' })

const montserratSubrayadaNC = localFont({ src: './MontserratSubrayada-Regular.ttf'})

export const robotoRegular = robotoRegularNC.className
export const robotoMedium = robotoMediumNC.className
export const robotoBold = robotoBoldNC.className

export const poppinsMedium = poppinsMediumNC.className

export const montserratSubrayada = montserratSubrayadaNC.className