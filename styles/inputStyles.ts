import { SxProps, Theme } from '@mui/material';

const inputStyles = (
  inputColor: string,
  inputHoverColor: string,
  inputBGColor: string,
  inputHoverBgColor: string
): SxProps<Theme> => {
  return (theme: Theme) => ({
    '& .MuiInputBase-root': { background: inputBGColor },
    '&:hover .MuiInputBase-root': { background: inputHoverBgColor },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: inputColor,
    },
    '& :not(.MuiInputBase-multiline) .MuiOutlinedInput-notchedOutline': {
      px: 5.5,
    },
    '&:hover :not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
      borderColor: inputHoverColor,
    },
    '&:hover :not(.Mui-focused) .MuiInputAdornment-root': {
      color: inputHoverColor,
    },
    '&:hover :not(.Mui-focused) .MuiInputLabel-outlined': {
      color: inputHoverColor,
    },
    '&:hover .MuiInputLabel-root:not(.Mui-focused)': {
      color: inputHoverColor,
    },
    '& .MuiInputLabel-root:not(.Mui-focused):not(.Mui-error)': {
      color: inputColor,
    },
    '& .MuiInputAdornment-root': {
      color: inputColor,
    },
    '& .Mui-focused .MuiInputAdornment-root': {
      color: theme.palette.primary.main,
    },
    '& .Mui-error .MuiInputAdornment-root': {
      color: theme.palette.error.main,
    },
    input: { color: inputColor, pl: 0.5 },
    textArea: { color: inputColor },
    fontSize: '1em',
    '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus':
      {
        backgroundClip: 'text',
        WebkitTextFillColor: inputColor,
      },
  });
};

export default inputStyles;
