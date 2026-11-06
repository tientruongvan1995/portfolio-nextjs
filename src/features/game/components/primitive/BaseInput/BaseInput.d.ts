import type { ChangeEvent, ComponentPropsWithoutRef, ReactElement, Ref } from 'react';

export type BaseInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> & {
  label?: string;
  inputType?: 'text' | 'search';
  inputRef?: Ref<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  classNameLabel?: string;
  classNameInput?: string;
};

declare const BaseInput: (props: BaseInputProps) => ReactElement | null;

export default BaseInput;
