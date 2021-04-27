import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

export interface DashedLineProps {
    axis?: 'horizontal' | 'vertical';
    dashColor?: string;
    dashGap?: number;
    dashLength?: number;
    dashStyle?: StyleProp<ViewStyle>;
    dashThickness?: number;
    style?: StyleProp<ViewStyle>;
}

export default class DashedLine extends React.Component<DashedLineProps> {}
