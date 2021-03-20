import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Navbar from "../components/Navbar";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: "Free",
        price: "0",
        description: [
            "Max of 5 influencers",
            "x Amount of CC",
            "Help center access",
            "Email support",
        ],
        buttonText: "Sign up for free",
        buttonVariant: "outlined",
    },
    {
        title: "Pro",
        subheader: "Most popular",
        price: "0.1",
        description: [
            "Max of 20 influencers",
            "x Amount of CC",
            "Help center access",
            "Priority email support",
        ],
        buttonText: "Get started",
        buttonVariant: "contained",
    },
    {
        title: "Enterprise",
        price: "1",
        description: [
            "Max of 100 influencers",
            "x Amount of CC",
            "Help center access",
            "Phone & email support",
        ],
        buttonText: "Contact us",
        buttonVariant: "outlined",
    },
];

export default function LandingPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* Hero unit */}
            <Container
                maxWidth="md"
                component="main"
                className={classes.heroContent}
            >
                <Typography
                    variant="h3"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    INVITED TO INFLUENCE
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Typography variant="h3" align="center" gutterBottom>
                    Plans
                </Typography>
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === "Enterprise" ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: "center" }}
                                    subheaderTypographyProps={{
                                        align: "center",
                                    }}
                                    action={
                                        tier.title === "Pro" ? (
                                            <StarIcon />
                                        ) : null
                                    }
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="textPrimary"
                                        >
                                            <Image
                                                src="/eth.png"
                                                width={50}
                                                height={50}
                                            />
                                            {tier.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="textSecondary"
                                        >
                                            /mo
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        fullWidth
                                        variant={tier.buttonVariant}
                                        color="primary"
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
