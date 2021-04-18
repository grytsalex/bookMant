import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      boxShadow: '0 0 10px rgba(0,0,0,0.5) !important'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: '28px !important',
      margin: 4,
    },
    logos: {
      fontSize: '48px !important',
    },
    title: {
      color: '#DDDDDD',
      lineHeight: "70% !important",
    }, 
    cardMedia: {
      paddingTop: "56.25%",
    },
    cards: {
      justifyContent: 'space-between',
      maxWidth: '1280px'
    },
    cardContent: {
      flexGrow: 1,
    },
    cardGrid: {
      marginTop: theme.spacing(4)
    },
    cardActions: {
      justifyContent: 'space-between'
    }
}});