import { writable } from 'svelte/store';

export const AreaChartDocs = writable([
  {
    variable: 'data',
    value: 'sampleData',
    dataType: 'Array',
    description: 'An array of objects converted from csv input data.',
    defaultValue: 'sampleData',
  },
  {
    variable: 'r',
    value: 3,
    dataType: 'Number',
    description: 'The top margin, in pixels.',
    defaultValue: 3,
    min: 1,
    max: 10,
  },
  {
    variable: 'marginTop',
    value: 20,
    dataType: 'Number',
    description: 'The top margin, in pixels.',
    defaultValue: 20,
    min: 0,
    max: 40,
  },
  {
    variable: 'marginRight',
    value: 0,
    dataType: 'Number',
    description: 'The right margin, in pixels.',
    defaultValue: 0,
    min: -5,
    max: 150,
  },
  {
    variable: 'marginBottom',
    value: 30,
    dataType: 'Number',
    description: 'The bottom margin, in pixels.',
    defaultValue: 30,
    min: 20,
    max: 50,
  },
  {
    variable: 'marginLeft',
    value: 40,
    dataType: 'Number',
    description: 'The left margin, in pixels.',
    defaultValue: 40,
    min: 30,
    max: 100,
  },
  {
    variable: 'inset',
    value: 0,
    dataType: 'Number',
    description: 'Inset the default range, in pixels.',
    defaultValue: 0,
    min: 0,
    max: 50,
  },
  {
    variable: 'width',
    value: 600,
    dataType: 'Number',
    description: 'The outer width of the chart, in pixels.',
    defaultValue: 600,
    min: 570,
    max: 700,
  },
  {
    variable: 'height',
    value: 350,
    dataType: 'Number',
    description: 'The outer height of the chart, in pixels.',
    defaultValue: 350,
    min: 160,
    max: 400,
  },
  {
    variable: 'xLabel',
    value: '',
    dataType: 'String',
    description: 'The label for the x-axis.',
    defaultValue: '',
  },
  {
    variable: 'yLabel',
    value: '↑ Daily Close',
    dataType: 'String',
    description: 'The label for the y-axis.',
    defaultValue: '↑ Daily Close',
  },
  {
    variable: 'xFormat',
    value: '',
    dataType: 'String',
    description:
      'The format specifier string attached to the end of each x-axis value.',
    defaultValue: '',
  },
  {
    variable: 'yFormat',
    value: '%',
    dataType: 'String',
    description:
      'The format specifier string attached to the end of each y-axis value.',
    defaultValue: '%',
  },
  {
    variable: 'horizontalGrid',
    value: true,
    dataType: 'Boolean',
    description: 'Show horizontal grid lines.',
    defaultValue: true,
  },
  {
    variable: 'verticalGrid',
    value: false,
    dataType: 'Boolean',
    description: 'Show horizontal grid lines.',
    defaultValue: false,
  },
  {
    variable: 'colors',
    value: ['#687AE8', '#6ED7E0', '#52B4EE'],
    dataType: 'Array',
    description:
      'The Array of colors representing each data set.  Number of array element must match number of data sets.',
    defaultValue: ['#687AE8', '#6ED7E0', '#52B4EE'],
  },
  {
    variable: 'strokeWidth',
    value: 1,
    dataType: 'Number',
    description: 'The stroke width of line, in pixels.',
    defaultValue: 1,
    max: 10,
  },
  {
    variable: 'strokeOpacity',
    value: 0.8,
    dataType: 'Number',
    description: 'The stroke opacity of the line.',
    defaultValue: 0.8,
    max: 0.9,
  },
  {
    variable: 'tooltipBackground',
    value: 'black',
    dataType: 'String | RGB | Hex',
    description: 'The background color of tooltip.',
    defaultValue: 'black',
  },
  {
    variable: 'tooltipTextColor',
    value: 'white',
    dataType: 'String | RGB | Hex',
    description: 'The text color of tooltip.',
    defaultValue: 'white',
  },
]);
