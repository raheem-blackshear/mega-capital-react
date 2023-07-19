import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack';
import copyFill from '@iconify/icons-eva/copy-fill';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// material
import { Tooltip, TextField, IconButton, InputAdornment } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// ----------------------------------------------------------------------

CopyClipboard.propTypes = {
  value: PropTypes.string
};

export default function CopyClipboard({ value, ...other }) {
  const { enqueueSnackbar } = useSnackbar();

  const onCopy = () => {
    enqueueSnackbar('Copied', { variant: 'success' });
  };

  return (
    <CopyToClipboard text={value} onCopy={onCopy}>
      <Tooltip title="Copy">
        <IconButton>
          <ContentCopyIcon sx={{ fontSize: 12, color: 'white' }} />
        </IconButton>
      </Tooltip>
    </CopyToClipboard>
  );
}
