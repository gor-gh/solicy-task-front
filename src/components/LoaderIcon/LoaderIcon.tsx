import useStyles from './styles';

const LoaderIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.ldsRipple}>
      <div />
      <div />
    </div>
  )
};

export default LoaderIcon;