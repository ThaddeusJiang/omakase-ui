import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { DevTool } from '@hookform/devtools';

import { useTranslation } from 'react-i18next';

// TODO:
// autocomplete
// zipcode -> prefecture, city, street, building
type Props = {
  disableAutoComplete?: boolean;
  onSubmit: (data: any) => void;
};

const AddressForm = ({ onSubmit, disableAutoComplete = false }: Props) => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    zipcode: yup
      .string()
      .matches(
        /^\d{3}-\d{4}$/,
        t('postal code must be in the format 000-0000') ??
          'postal code must be in the format 000-0000'
      )
      .required(),
    prefecture: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    building: yup.string(),
    yomi: yup.string(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form
        className=" form-control container"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete={disableAutoComplete ? 'off' : 'on'}
      >
        <h3 className=" text-2xl font-bold capitalize">{t('address')}</h3>
        <div>
          <label htmlFor="zipcode" className=" label">
            <span className=" label-text ">
              <span className="font-bold capitalize">
                {t('address (zipcode)')}
              </span>
              <span className=" badge-secondary badge ml-2">
                {t('required')}
              </span>
            </span>
          </label>
          <input
            type="text"
            id="zipcode"
            className="input-bordered input w-full max-w-xl"
            placeholder="106-0041"
            {...register('zipcode')}
          />
          <p className=" text-error">{errors.zipcode?.message}</p>
          <label htmlFor="zipcode" className="label">
            <span className="label-alt capitalize">
              {t('example: 106-0041')}
            </span>
          </label>
        </div>
        <div>
          <label htmlFor="prefecture" className=" label">
            <span className=" label-text ">
              <span className="font-bold capitalize">
                {t('address (prefecture)')}
              </span>
              <span className=" badge-secondary badge ml-2">
                {t('required')}
              </span>
            </span>
          </label>
          <input
            type="text"
            id="prefecture"
            className="input-bordered input w-full max-w-xl"
            {...register('prefecture')}
          />
          <p className=" text-error">{errors.prefecture?.message}</p>
        </div>
        <div>
          <label htmlFor="city" className=" label">
            <span className=" label-text ">
              <span className="font-bold capitalize">
                {t('address (city)')}
              </span>
              <span className=" badge-secondary badge ml-2">
                {t('required')}
              </span>
            </span>
          </label>
          <input
            type="text"
            id="city"
            className="input-bordered input w-full max-w-xl"
            {...register('city')}
          />
          <p className=" text-error">{errors.city?.message}</p>
        </div>
        <div>
          <label htmlFor="street" className=" label">
            <span className=" label-text ">
              <span className="font-bold capitalize">
                {t('address (street)')}
              </span>
              <span className=" badge-secondary badge ml-2">
                {t('required')}
              </span>
            </span>
          </label>
          <input
            type="text"
            id="street"
            className="input-bordered input w-full max-w-xl"
            {...register('street')}
          />
          <p className=" text-error">{errors.street?.message}</p>
        </div>
        <div>
          <label htmlFor="building" className=" label">
            <span className=" label-text ">
              <span className="font-bold capitalize">
                {t('address (building)')}
              </span>
            </span>
          </label>
          <input
            type="text"
            id="building"
            className="input-bordered input w-full max-w-xl"
            {...register('building')}
          />
          <p className=" text-error">{errors.building?.message}</p>
        </div>
        <div>
          <label htmlFor="yomi" className=" label">
            <span className=" label-text ">
              <span className="font-bold capitalize">
                {t('address (yomigana)')}
              </span>
            </span>
          </label>
          <input
            type="text"
            id="yomi"
            className="input-bordered input w-full max-w-xl"
            {...register('yomi')}
          />
          <p className=" text-error">{errors.yomi?.message}</p>
        </div>

        <div className="py-3">
          <button type="submit" className=" btn btn-primary capitalize">
            {t('submit')}
          </button>
        </div>
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
};

export default AddressForm;
