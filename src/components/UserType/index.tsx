import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  border: '1px solid #fff',
  '.Mui-focusVisible &': {
    outline: '2px auto #05abc0',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#05abc0',
  border: '2px solid #05abd0',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
type Props = {
  HandelUserType: (value: string) => void;
};
export default function UserType({ HandelUserType }: Props) {
  return (
    <FormControl>
      <RadioGroup
        row
        defaultValue="user"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel
          value="user"
          control={<BpRadio />}
          label="User"
          onClick={() => HandelUserType('user')}
        />
        <FormControlLabel
          value="doctor"
          control={<BpRadio />}
          label="Doctor"
          onClick={() => HandelUserType('doctor')}
        />
      </RadioGroup>
    </FormControl>
  );
}
