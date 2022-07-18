import React from 'react'
import { useForm } from 'react-hook-form'
import s from './CreateUser.module.css'

export default function CreateUser() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.position}>
        <div className={s.create}>Создать:</div>
        <div className={s.create_item}>Пользователя</div>
      </div>
      <div className={s.inputs}>
        <div className={s.name}>
          <div>
            <p className={s.title}>Фамилия</p>
            <input
              className={s.input}
              type="text"
              {...register('last_name', {
                required: 'Поле обязательно к заполнению!',
              })}
            />
            <div>
              {errors?.last_name && <p className={s.error}>{errors?.last_name?.message}</p>}
            </div>
          </div>
          <div>
            <p className={s.title}>Имя</p>
            <input
              className={s.input}
              type="text"
              {...register('first_name', {
                required: 'Поле обязательно к заполнению!',
              })}
            />
            <div>
              {errors?.first_name && <p className={s.error}>{errors?.first_name?.message}</p>}
            </div>
          </div>
          <div>
            <p className={s.title}>Отчество</p>
            <input
              className={s.input}
              type="text"
              {...register('middle_name', {
                required: 'Поле обязательно к заполнению!',
              })}
            />
            <div>
              {errors?.middle_name && <p className={s.error}>{errors?.middle_name?.message}</p>}
            </div>
          </div>
        </div>
        <div>
          <p className={s.title}>Дата рождения</p>
          <input
            className={s.input}
            type="text"
            {...register('date_of_birth', {
              required: 'Поле обязательно к заполнению!',
            })}
          />
          <div>
            {errors?.date_of_birth && <p className={s.error}>{errors?.date_of_birth?.message}</p>}
          </div>
        </div>
        <div>
          <p className={s.title}>Номер телефона</p>
          <input
            className={s.input}
            type="phone"
            {...register('phone_number', {
              required: 'Поле обязательно к заполнению!',
            })}
          />
          <div>
            {errors?.phone_number && <p className={s.error}>{errors?.phone_number?.message}</p>}
          </div>
        </div>
        <div>
          <p className={s.title}>Компания</p>
          <input
            className={s.input}
            type="text"
            {...register('company', {
              required: 'Поле обязательно к заполнению!',
            })}
          />
          <div>{errors?.company && <p className={s.error}>{errors?.company?.message}</p>}</div>
        </div>
        <div>
          <p className={s.title}>Отдел</p>
          <input
            className={s.input}
            type="text"
            {...register('department', {
              required: 'Поле обязательно к заполнению!',
            })}
          />
          <div>
            {errors?.department && <p className={s.error}>{errors?.department?.message}</p>}
          </div>
        </div>
        <div>
          <p className={s.title}>Должность</p>
          <input
            className={s.input}
            type="text"
            {...register('position_id', {
              required: 'Поле обязательно к заполнению!',
            })}
          />
          <div>
            {errors?.position_id && <p className={s.error}>{errors?.position_id?.message}</p>}
          </div>
        </div>
        <div>
          <p className={s.title}>Почта</p>
          <input
            className={s.input}
            type="email"
            {...register('email', {
              required: 'Поле обязательно к заполнению!',
            })}
          />
          <div>{errors?.email && <p className={s.error}>{errors?.email?.message}</p>}</div>
        </div>
        <input className={s.btn} type="submit" value="Пригласить" />
      </div>
    </form>
  )
}
