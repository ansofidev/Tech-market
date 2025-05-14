import React, { useState } from 'react';
import Button from '@/components/atoms/button/Button';
import { ButtonTypes } from '@/types/ButtonTypes';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const validateCardNumber = (number: string) => {
  const regex = /^[0-9]{16}$/;
  return regex.test(number);
};

const validateExpiry = (expiry: string) => {
  const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  return regex.test(expiry);
};

const isExpiryValid = (expiry: string) => {
  const [month, year] = expiry.split('/').map((part) => parseInt(part, 10));
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear() % 100;
  return year > currentYear || (year === currentYear && month >= currentMonth);
};

const validateCVC = (cvc: string) => {
  const regex = /^[0-9]{3}$/;
  return regex.test(cvc);
};

const validateCardholderName = (name: string) => {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
};

export const CheckoutPage = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const [errors, setErrors] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    if (name === 'name') {
      if (/^[\p{L}\s]*$/u.test(value)) {
        setState((prev) => ({ ...prev, [name]: value }));
      }
    } else if (name === 'number') {
      const rawValue = value.replace(/\D/g, '').slice(0, 16);
      const formatted = rawValue.replace(/(.{4})/g, '$1 ').trim();
      setState((prev) => ({ ...prev, [name]: formatted }));
    } else if (name === 'expiry') {
      let rawValue = value.replace(/\D/g, '').slice(0, 4);
      if (rawValue.length >= 3) {
        rawValue = `${rawValue.slice(0, 2)}/${rawValue.slice(2)}`;
      }
      setState((prev) => ({ ...prev, [name]: rawValue }));
    } else if (name === 'cvc' && /^[0-9]*$/.test(value)) {
      setState((prev) => ({ ...prev, [name]: value.slice(0, 3) }));
    }
  };

  const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { number: '', expiry: '', cvc: '', name: '' };

    if (!state.number || !validateCardNumber(state.number)) {
      isValid = false;
      newErrors.number = 'Invalid card number';
    }

    if (!state.name || !validateCardholderName(state.name)) {
      isValid = false;
      newErrors.name = 'Cardholder name should only contain letters';
    }

    if (
      !state.expiry ||
      !validateExpiry(state.expiry) ||
      !isExpiryValid(state.expiry)
    ) {
      isValid = false;
      newErrors.expiry = 'Invalid or expired date';
    }

    if (!state.cvc || !validateCVC(state.cvc)) {
      isValid = false;
      newErrors.cvc = 'Invalid CVV';
    }

    setErrors(newErrors);

    if (isValid) {
      console.log('Form submitted');
    }
  };

  const { t } = useTranslation();

  return (
    <div
      className="checkoutPage relative grid grid-cols-4 gap-4 
      sm:grid-cols-12
      lg:grid-cols-24 px-4
      sm:px-6
      lg:px-0
      lg:max-w-[1136px] mx-auto
      pt-6 pb-16
      sm:pt-10 sm:pb-16
      lg:pt-10 lg:pb-20 
      gap-y-10"
    >
      {/* Title */}
      <h1 className="col-span-4 sm:col-span-12 lg:col-span-24 text-4xl font-bold mb-10">
        {t('checkoutPage.button.checkout')}
      </h1>

      {/* Card Preview */}
      <div className="col-span-4 sm:col-span-6 lg:col-span-10 flex items-center justify-center">
        <div
          className={clsx(
            'w-72 h-44 bg-gradient-to-br from-[#323542] to-[#161827] rounded-xl p-4 relative shadow-xl transform transition-all duration-500',
            {
              'rotate-y-180': state.focus === 'cvc',
            },
          )}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
            {state.focus !== 'cvc' && (
              <div className="mt-6">
                <div className="text-lg font-semibold">
                  {state.number || '•••• •••• •••• ••••'}
                </div>
              </div>
            )}

            {state.focus !== 'cvc' && (
              <div className="mt-4 text-sm">
                <div>{state.name || 'Your Name Here'}</div>
              </div>
            )}

            {state.focus !== 'cvc' && (
              <div className="absolute bottom-4 right-4 text-xs">
                {state.expiry || 'MM/YY'}
              </div>
            )}
          </div>

          <div
            className={clsx(
              'absolute inset-0 flex items-center justify-center text-white text-xl font-semibold transform rotate-y-180',
              {
                'rotate-y-0': state.focus === 'cvc',
                'opacity-0': state.focus !== 'cvc',
              },
            )}
          >
            <div className="text-center">{state.cvc || '•••'}</div>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <form
        onSubmit={handleSubmit}
        className="col-span-4 sm:col-span-6 lg:col-span-14 bg-[#161827] p-6 sm:p-8 rounded-2xl shadow-md flex flex-col gap-6"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="number" className="mb-2 text-[#75767f] text-sm">
            {t('checkoutPage.form.cardNumber.label')}
          </label>
          <input
            type="text"
            name="number"
            id="number"
            placeholder={t('checkoutPage.form.cardNumber.placeholder')}
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="p-3 rounded-lg bg-[#323542] border border-[#3b3e4a] focus:outline-none focus:ring-2 focus:ring-[#905bff] text-[#f1f2f9]"
          />
          {errors.number && (
            <p className="text-red-500 text-xs mt-2">{errors.number}</p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2 text-[#75767f] text-sm">
            {t('checkoutPage.form.cardHolder.label')}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t('checkoutPage.form.cardHolder.placeholder')}
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="p-3 rounded-lg bg-[#323542] border border-[#3b3e4a] focus:outline-none focus:ring-2 focus:ring-[#905bff] text-[#f1f2f9]"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-2">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1 flex flex-col">
            <label htmlFor="expiry" className="mb-2 text-[#75767f] text-sm">
              {t('checkoutPage.form.expiry.label')}
            </label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              placeholder={t('checkoutPage.form.expiry.placeholder')}
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="p-3 rounded-lg bg-[#323542] border border-[#3b3e4a] focus:outline-none focus:ring-2 focus:ring-[#905bff] text-[#f1f2f9]"
            />
            {errors.expiry && (
              <p className="text-red-500 text-xs mt-2">{errors.expiry}</p>
            )}
          </div>

          <div className="flex flex-col w-full sm:w-auto sm:max-w-[160px]">
            <label htmlFor="cvc" className="mb-2 text-[#75767f] text-sm">
              {t('checkoutPage.form.cvc.label')}
            </label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              placeholder={t('checkoutPage.form.cvc.placeholder')}
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="w-full p-3 rounded-lg bg-[#323542] border border-[#3b3e4a] focus:outline-none focus:ring-2 focus:ring-[#905bff] text-[#f1f2f9]"
            />
            {errors.cvc && (
              <p className="text-red-500 text-xs mt-2">{errors.cvc}</p>
            )}
          </div>
        </div>

        <Button
          variant={ButtonTypes.primary}
          content={t('checkoutPage.form.button.purchase')}
          width="100%"
        />
      </form>
    </div>
  );
};

export default CheckoutPage;
