import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useImageMultiplier } from '../../store/Main';
import { Box, Button, Grid, IconButton, TextField, TextFieldProps, Typography } from '@mui/material';
import ContactHero from '../../assets/Contacto.png';
import MobileImage from '../../assets/ContactoMobile.png';
import { sendMail } from '../../controllers/mailController';
import { WHATSAPP } from '../../constants/routePaths';
import WPIcon from '../../components/Icons/WPIcon';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../routes/Navigator';

const imageHero = {
    width: "98.8vw",
    height: "260vw",
    maxHeight: '3500px',
    minHeight: '2800px',
    backgroundImage: `url(${ContactHero})`,
    backgroundSize: 'cover',
}

const imageMobile = {
    width: "auto",
    height: "50vw",
    backgroundImage: `url(${MobileImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const labelStyles = {
    shrink: true,
}

const filledStyles = {
    color: 'white',
    backgroundColor: 'rgb(255,255,255,0.15)',
    borderRadius: '8px'
}

const styles = {
    socialMediaButtonsStyle: {
        transition: 'filter 0.25s',
        '&:hover': { filter: 'brightness(150%)' }
    },
}

const inputStyles = {
    '& label.Mui-focused': {
        color: '#22B573',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderWidth: '2px',
            borderRadius: '8px',
            borderColor: '#22B573',
        },
        '&:hover fieldset': {
            borderColor: '#22B573',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
}

const helperStyles = {
    color: 'white',
    position: 'absolute',
    bottom: '60px',
    fontSize: '16px'
}

export interface IServicesProps { }

export default function Services(props: IServicesProps) {
    const { imageSizeMultiplier, screenSize } = useImageMultiplier();
    const { t } = useTranslation();
    const [contactFormData, setContactFormData] = useState({});
    const [workFormData, setWorkFormData] = useState({});

    const handleChange = (type: string) => (event: any) => {
        const { id, value } = event.target
        type === 'contact' ? setContactFormData({ ...contactFormData, [id]: value }) : setWorkFormData({ ...workFormData, [id]: value })
    }

    const handleSubmit = (type: string) => (event: React.MouseEvent) => {
        type === 'contact' ? sendMail(contactFormData, 'contact') : sendMail(workFormData, 'work')
    }

    const handleClick = () => {
        window.open(`${Navigate(WHATSAPP)}`)
    }

    const contactFormInputs = [
        {
            id: 'name',
            label: t('contact.form.name')
        },
        {
            id: 'email',
            label: t('contact.form.email')
        },
        {
            id: 'phone',
            label: t('contact.form.phone')
        },
        {
            id: 'comments',
            label: t('contact.form.comments'),
            multiline: true,
        },
    ]

    const workFormInputs1 = [
        {
            id: 'name',
            label: t('contact.form.name')
        },
        {
            id: 'email',
            label: t('contact.form.email')
        },
        {
            id: 'phone',
            label: t('contact.form.phone')
        },
    ]

    const workFormInputs2 = [
        {
            id: 'linkedin',
            label: t('contact.form.linkedin')
        },
        {
            id: 'portfolio',
            label: t('contact.form.portfolio')
        },
        {
            id: 'cover',
            label: t('contact.form.cover'),
            multiline: true,
        },
    ]

    return (
        <Box mb={{ md: 0, sm: 50, xs: 50 }}>
            {(screenSize === 'xs' || screenSize === 'sm') ?
                <Box>
                    <Box style={imageMobile} mt={10} />
                    <Box display="flex" mt={2}>
                        <Grid container mt={{ sm: 2, xs: 1 }}>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='IntegralCF' color='white' fontSize={{ sm: 25, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                    {t('contact.main.main_title')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='Nunito Sans' color='#22B573' mt={{ sm: 2, xs: 1 }} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                    {t('contact.main.main_text1')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                    {t('contact.main.main_text2')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mt={5} justifyContent='center'>
                                <Box
                                    component='img'
                                    src='/assets/contact.png'
                                    borderRadius="20px"
                                    width={{ sm: 300, xs: 250 }}
                                    height={{ sm: 300, xs: 250 }}
                                />
                            </Grid>
                            <Grid item container xs={12} mx={5} mt={5}>
                                <Typography fontFamily='IntegralCF' color='white' fontSize={{ sm: 25, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                    {t('contact.main.contact_title')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                    {t('contact.main.main_text2')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5} justifyContent='center'>
                                {contactFormInputs.map((input) => {
                                    return (
                                        <Grid item xs={12} key={'contact' + input.id}>
                                            <TextField
                                                id={input.id}
                                                helperText={input.label}
                                                InputLabelProps={{ ...labelStyles }}
                                                FormHelperTextProps={{ sx: { ...helperStyles, bottom: input.multiline ? { sm: 130, xs: 110 } : { sm: 60, xs: 55 }, fontSize: { sm: 16, xs: 12 } } }}
                                                InputProps={{ sx: { ...filledStyles, fontSize: { sm: 16, xs: 12 } } }}
                                                sx={{ ...inputStyles, width: '100%', mt: '40px' }}
                                                multiline={input.multiline}
                                                rows={4}
                                                onChange={handleChange('contact')}
                                            />
                                        </Grid>
                                    )
                                })}
                                <Grid item container xs={12} justifyContent='flex-end' mr={20}>
                                    <Button
                                        variant='text'
                                        sx={{ marginTop: '20px', height: '50px', width: '130px', fontSize: '20px' }}
                                        onClick={handleSubmit('contact')}
                                    >
                                        {t('contact.buttons.send')}
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} mx={5} mt={5}>
                                <Typography fontFamily='IntegralCF' color='white' fontSize={{ sm: 25, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                    {t('contact.main.work_title')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5}>
                                <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ sm: 15, xs: 13 }} fontWeight={400} lineHeight={1.2}>
                                    {t('contact.main.work_text1')}
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} mx={5} mt={5} justifyContent='center'>
                                {workFormInputs1.map((input) => {
                                    return (
                                        <Grid item xs={12} key={'contact' + input.id}>
                                            <TextField
                                                id={input.id}
                                                helperText={input.label}
                                                InputLabelProps={{ ...labelStyles }}
                                                FormHelperTextProps={{ sx: { ...helperStyles, fontSize: { sm: 16, xs: 12 } } }}
                                                InputProps={{ sx: { ...filledStyles, fontSize: { sm: 16, xs: 12 } } }}
                                                sx={{ ...inputStyles, width: '100%', mt: '40px' }}
                                                rows={4}
                                                onChange={handleChange('contact')}
                                            />
                                        </Grid>
                                    )
                                })}
                                {workFormInputs2.map((input) => {
                                    return (
                                        <Grid item xs={12} key={'contact' + input.id}>
                                            <TextField
                                                id={input.id}
                                                helperText={input.label}
                                                InputLabelProps={{ ...labelStyles }}
                                                FormHelperTextProps={{ sx: { ...helperStyles, bottom: input.multiline ? { sm: 130, xs: 110 } : { sm: 60, xs: 55 }, fontSize: { sm: 16, xs: 12 } } }}
                                                InputProps={{ sx: { ...filledStyles, fontSize: { sm: 16, xs: 12 } } }}
                                                sx={{ ...inputStyles, width: '100%', mt: '40px' }}
                                                multiline={input.multiline}
                                                rows={4}
                                                onChange={handleChange('contact')}
                                            />
                                        </Grid>
                                    )
                                })}
                                <Grid item container xs={12} justifyContent='flex-end' mr={20}>
                                    <Button
                                        variant='text'
                                        sx={{ marginTop: '20px', height: '50px', width: '130px', fontSize: '20px' }}
                                        onClick={handleSubmit('work')}
                                    >
                                        {t('contact.buttons.send')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                :
                <Box
                    display="flex"
                    mt={-5}
                    flexDirection="column"
                    alignItems="center"
                >
                    <div style={imageHero}>
                        <Box display="flex" mt={12}>
                            <Grid container mt={{ xl: 8, lg: 8, md: 6, sm: 5, xs: 3 }}>
                                <Grid item xs={0.5} />
                                <Grid item container xs={5}>
                                    <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 45, lg: 40, md: 25 }} fontWeight={400} lineHeight={1.5}>
                                        {t('contact.main.main_title')}
                                    </Typography>
                                    <Typography fontFamily='Nunito Sans' color='#22B573' mt={{ xl: 5, lg: 4, md: 3, sm: 2, xs: 1 }} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                        {t('contact.main.main_text1')}
                                    </Typography>
                                    <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                        {t('contact.main.main_text2')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display="flex" mt={{ xl: 30, lg: 30, md: 25, sm: 25, xs: 10 }}>
                            <Grid container mt={{ xl: 8, lg: 8, md: 6, sm: 5, xs: 3 }}>
                                <Grid item xs={0.5} />
                                <Grid item container xs={5}>
                                    <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 50, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                        {t('contact.main.contact_title')}
                                    </Typography>
                                    <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                        {t('contact.main.contact_text1')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display="flex" mt={5}>
                            <Grid container mt={{ xl: 8, lg: 8, md: 6, sm: 5, xs: 3 }}>
                                <Grid item container xs={6} justifyContent='center'>
                                    <Box
                                        component='img'
                                        src='/assets/contact.png'
                                        borderRadius="20px"
                                        width={{ xl: 523, lg: 450, md: 320, sm: 220, xs: 200 }}
                                        height={{ xl: 523, lg: 450, md: 320, sm: 220, xs: 200 }}
                                    />
                                </Grid>
                                <Grid item container xs={6} justifyContent='center'>
                                    {contactFormInputs.map((input) => {
                                        return (
                                            <Grid item xs={12} key={'contact' + input.id}>
                                                <TextField
                                                    id={input.id}
                                                    helperText={input.label}
                                                    InputLabelProps={{ ...labelStyles }}
                                                    FormHelperTextProps={{ sx: { ...helperStyles, bottom: input.multiline ? { xl: 130, lg: 130, md: 120, sm: 110, xs: 90 } : { xl: 60, lg: 60, md: 60, sm: 55, xs: 50 }, fontSize: { xl: 16, lg: 16, md: 14, sm: 12, xs: 8 } } }}
                                                    InputProps={{ sx: { ...filledStyles, fontSize: { xl: 16, lg: 16, md: 14, sm: 12, xs: 8 } } }}
                                                    sx={{ ...inputStyles, width: '80%', mt: '40px' }}
                                                    multiline={input.multiline}
                                                    rows={4}
                                                    onChange={handleChange('contact')}
                                                />
                                            </Grid>
                                        )
                                    })}
                                    <Grid item container xs={12} justifyContent='flex-end' mr={20}>
                                        <Button
                                            variant='outlined'
                                            sx={{ marginTop: '70px', height: '4vw', width: '14vw', fontSize: '1.8vw' }}
                                            onClick={handleSubmit('contact')}
                                        >
                                            {t('contact.buttons.send')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display="flex" mt={10}>
                            <Grid container mt={{ xl: 8, lg: 8, md: 6, sm: 5, xs: 3 }}>
                                <Grid item xs={0.5} />
                                <Grid item container xs={5}>
                                    <Typography fontFamily='IntegralCF' color='white' fontSize={{ xl: 50, lg: 40, md: 30, xs: 20 }} fontWeight={400} lineHeight={1.5}>
                                        {t('contact.main.work_title')}
                                    </Typography>
                                    <Typography fontFamily='Nunito Sans' color='white' mt={1} fontSize={{ xl: 30, lg: 20, md: 15, xs: 10 }} fontWeight={400} lineHeight={1.2}>
                                        {t('contact.main.work_text1')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display="flex" mt={5}>
                            <Grid container mt={{ xl: 8, lg: 8, md: 6, sm: 5, xs: 3 }}>
                                <Grid item container xs={6} justifyContent='center' sx={{ height: '350px' }}>
                                    {workFormInputs1.map((input) => {
                                        return (
                                            <Grid
                                                item
                                                container
                                                xs={12}
                                                justifyContent='center'
                                                alignItems='flex-start'
                                                key={'work1' + input.id}
                                            >
                                                <TextField
                                                    id={input.id}
                                                    helperText={input.label}
                                                    InputLabelProps={{ ...labelStyles }}
                                                    FormHelperTextProps={{ sx: { ...helperStyles, bottom: { xl: 60, lg: 60, md: 60, sm: 55, xs: 50 }, fontSize: { xl: 16, lg: 16, md: 14, sm: 12, xs: 8 } } }}
                                                    InputProps={{ sx: { ...filledStyles, fontSize: { xl: 16, lg: 16, md: 14, sm: 12, xs: 8 } } }}
                                                    sx={{ ...inputStyles, width: '80%', mt: '40px' }}
                                                    onChange={handleChange('work')}
                                                />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                <Grid item container xs={6} justifyContent='center'>
                                    {workFormInputs2.map((input) => {
                                        return (
                                            <Grid
                                                item
                                                xs={12}
                                                key={'work2' + input.id}
                                            >
                                                <TextField
                                                    id={input.id}
                                                    helperText={input.label}
                                                    InputLabelProps={{ ...labelStyles }}
                                                    FormHelperTextProps={{ sx: { ...helperStyles, bottom: input.multiline ? { xl: 200, lg: 200, md: 180, sm: 160, xs: 120 } : { xl: 60, lg: 60, md: 60, sm: 55, xs: 50 }, fontSize: { xl: 16, lg: 16, md: 14, sm: 12, xs: 8 } } }}
                                                    InputProps={{ sx: { ...filledStyles, fontSize: { xl: 16, lg: 16, md: 14, sm: 12, xs: 8 } } }}
                                                    sx={{ ...inputStyles, width: '80%', mt: '40px' }}
                                                    multiline={input.multiline}
                                                    rows={7}
                                                    onChange={handleChange('work')}
                                                />
                                            </Grid>
                                        )
                                    })}
                                    <Grid item container xs={12} justifyContent='flex-end' mr={20}>
                                        <Button
                                            variant='outlined'
                                            sx={{ marginTop: '70px', height: '4vw', width: '14vw', fontSize: '1.8vw' }}
                                            onClick={handleSubmit('work')}
                                        >
                                            {t('contact.buttons.send')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid item container xs={12} mt={{ xl: 10, lg: 10, md: 10 }} justifyContent="center">
                            <Box>
                                <Button
                                    onClick={handleClick}
                                    sx={{
                                        transition: 'filter 0.25s',
                                        '&:hover': { filter: 'brightness(150%)' },
                                        p: '30px'
                                    }}
                                >
                                    <WPIcon sx={{ height: '6vw', width: '6vw' }} />
                                    <Typography
                                        variant='main'
                                        ml={2}
                                        sx={{ color: '#FFF' }}
                                        fontSize={{ xl: 55, lg: 45, md: 35 }}
                                    >
                                        Envíanos un WhatsApp
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </div>
                </Box>
            }
        </Box>
    );
}
