import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ToastProps {
  text1?: string;
  text2?: string;
  [key: string]: any;
}

const TOAST_TYPES = {
  success: {
    bgColor: '#ddf5d4',
    borderColor: '#4caf50',
    textColor: '#2e7d32',
    iconColor: '#4caf50',
    icon: 'check-circle-outline' as const,
  },
  error: {
    bgColor: '#fccfc4',
    borderColor: '#f44336',
    textColor: '#c62828',
    iconColor: '#f44336',
    icon: 'error' as const,
  },
  info: {
    bgColor: '#e1f5fe',
    borderColor: '#2196f3',
    textColor: '#1565c0',
    iconColor: '#2196f3',
    icon: 'shield' as const,
  },
};

const ToastContent = ({
  type,
  text1,
  text2,
}: {
  type: keyof typeof TOAST_TYPES;
  text1?: string;
  text2?: string;
}) => {
  const { bgColor, borderColor, textColor, iconColor, icon: Icon } = TOAST_TYPES[type];

  return (
    <View style={[styles.container, { backgroundColor: bgColor, borderColor }]}>
      <View style={styles.contentContainer}>
        <MaterialIcons name={Icon} size={24} color='#ffffff' fill={iconColor} />
        <View style={styles.textContainer}>
          {text1 && <Text style={[styles.title, { color: textColor }]}>{text1}</Text>}
          {text2 && <Text style={[styles.subtitle, { color: textColor }]}>{text2}</Text>}
        </View>
      </View>
    </View>
  );
};

export const toastConfig = {
  success: (props: ToastProps) => <ToastContent type='success' {...props} />,
  error: (props: ToastProps) => <ToastContent type='error' {...props} />,
  info: (props: ToastProps) => <ToastContent type='info' {...props} />,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 18,
    borderWidth: 1,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
});
