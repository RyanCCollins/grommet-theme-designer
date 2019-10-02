
// (C) Copyright 2017-2019 Hewlett Packard Enterprise Development LP
import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils/object';
import { css } from 'styled-components';

export const apiUrl = 'https://us-central1-grommet-designer.cloudfunctions.net/themes';

const base = deepMerge(hpe, {
  global: {
    size: {
      'main-sidenav': '454px',
      'modal-layer': '420px',
    },
    opacity: {
      weak: '0.1',
    },
    drop: {
      'extend': css`
        margin-top: 10px;
      `,
      'border': {
        'radius': '0px',
      },
    },
  },
  anchor: {
    fontWeight: 'normal',
  },
  button: {
    border: {
      radius: '24px',
    },
  },
});


export const starter = {
  name: 'my theme',
  ...base,
}

export const upgradeTheme = (theme) => {
  return theme; // nothing to upgrade yet.
}
