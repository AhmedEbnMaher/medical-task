// @flow
import { InputBase } from '@mui/material';
import React from 'react';
import styles from './index.module.scss';
type Props = {
  handelInputValueChange: (value: any) => void;
  placeholder: string;
  value: any;
};
const NewRecordInput = ({
  handelInputValueChange,
  placeholder,
  value,
}: Props) => {
  return (
    <div>
      <InputBase
        autoComplete={'true'}
        fullWidth={true}
        type={'text'}
        className={styles.inputBase}
        placeholder={placeholder}
        onChange={(e: any) => handelInputValueChange(e)}
        value={value}
      />
    </div>
  );
};
export default NewRecordInput;
