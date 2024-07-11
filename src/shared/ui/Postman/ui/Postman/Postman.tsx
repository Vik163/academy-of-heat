import { ChangeEvent, SyntheticEvent, memo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import cls from './Postman.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { usePhoneValidator } from '@/shared/lib/hooks/usePhoneValidator';
import { PageLoader } from '@/widgets/PageLoader';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface PostmanProps {
   closeForm?: () => void;
   isOpen?: boolean;
   title?: string;
   buttonText: string;
   commentText?: string;
   kategory?: string;
}

export const Postman = memo((props: PostmanProps) => {
   const { closeForm, isOpen, title, buttonText, commentText, kategory } = props;
   const messageRef = useRef<HTMLTextAreaElement>(null);
   const phoneRef = useRef<HTMLInputElement>(null);
   const [err, setErr] = useState('');
   const [confirmSend, setConfirmSend] = useState(false);
   const [loading, setLoading] = useState(false);
   const { phoneValidator } = usePhoneValidator();
   const [isOpenForm, setIsOpenForm] = useState(false);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeModal = () => {
      setIsOpenForm(false);
   };

   const [toSend, setToSend] = useState({
      copyemail: '',
      title: title || kategory,
      phone: '',
      message: '',
   });

   const checkValid = () => {
      if (phoneRef.current) {
         if (!phoneRef.current.value || phoneRef.current.value.length < 18) {
            setErr('phone');
            return true;
         }
         setErr('');
      }
      // if (messageRef.current && !messageRef.current.value) {
      //    setErr('message');
      //    return true;
      // }
      setErr('');
      return false;
   };
   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { target } = e;
      if (err) checkValid();
      if (target) {
         if (target.type === 'tel' && target.value) {
            setToSend({ ...toSend, [target.name]: phoneValidator(target.value) });
         } else {
            setToSend({ ...toSend, [target.name]: target.value });
         }
      }
   };

   const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!checkValid()) {
         const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
         const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
         try {
            if (toSend.copyemail) {
               console.log('spam');
            } else {
               if (!closeForm) openForm();
               setLoading(true);
               await emailjs.send(
                  serviceId,
                  templateId,
                  toSend,
                  process.env.REACT_APP_EMAIL_SERVICE_PUBLIC_KEY,
               );
               setConfirmSend(true);
            }
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      }
   };

   const form = (
      <div className={cls.continer}>
         {title && (
            <div>
               <Text
                  title={HeaderTagType.H_3}
                  className={cls.title}
                  fontSize={FontSize.SIZE_22}
                  fontWeight={FontWeight.TEXT_700}
               >
                  {title}
               </Text>
               <Text className={cls.subtitle} fontSize={FontSize.SIZE_15}>
                  Заполните поля ниже, наш менеджер свяжется с Вами и ответит на ваши вопросы
               </Text>
            </div>
         )}
         <form className={classNames(cls.form, { [cls.nonModal]: !closeForm }, [])} onSubmit={handleSubmit}>
            <input
               type='text'
               name='copyemail'
               placeholder='Email для копии'
               defaultValue={toSend.copyemail}
            ></input>
            <input
               className={classNames(cls.phone, { [cls.nonModal]: !closeForm }, [])}
               id='phone'
               ref={phoneRef}
               name='phone'
               type='tel'
               placeholder='Введите Ваш телефон'
               onChange={handleChange}
               value={toSend.phone}
            />
            {err === 'phone' && (
               <span id='phone' className={classNames(cls.error, { [cls.nonModal]: !closeForm }, [])}>
                  Введите Ваш номер телефона
               </span>
            )}
            {commentText && (
               <textarea
                  className={classNames(cls.message, { [cls.nonModal]: !closeForm }, [])}
                  id='message'
                  ref={messageRef}
                  name='message'
                  onChange={handleChange}
                  placeholder={commentText}
                  value={toSend.message}
               ></textarea>
            )}
            {commentText && err === 'message' && (
               <span id='message' className={classNames(cls.error, { [cls.nonModal]: !closeForm }, [])}>
                  Введите Ваш номер телефона
               </span>
            )}
            <Button
               className={classNames(cls.btn, { [cls.nonModal]: !closeForm }, [])}
               type='submit'
               variant={ButtonVariant.FILLED}
            >
               {buttonText}
            </Button>
         </form>
      </div>
   );

   const answerPopup = (
      <div className={cls.continer}>
         <Text title={HeaderTagType.H_3} fontSize={FontSize.SIZE_24} fontWeight={FontWeight.TEXT_700}>
            Спасибо за заявку!
         </Text>
         <Text fontSize={FontSize.SIZE_15} fontWeight={FontWeight.TEXT_600} className={cls.textPopup}>
            Наш менеджер перезвонит <br /> Вам в ближайшее время
         </Text>
      </div>
   );

   if (loading && !closeForm)
      return (
         <div>
            {form}
            <PageLoader screenFull />
         </div>
      );
   if (loading) return <PageLoader screenFull />;

   // eslint-disable-next-line no-nested-ternary
   return closeForm && isOpen ? (
      <Modal
         onClose={closeForm}
         isOpen={isOpen}
         buttonCloseHeight={20}
         buttonCloseRight={20}
         buttonCloseTop={20}
         buttonCloseWidth={20}
         className={cls.modal}
      >
         {!confirmSend ? form : answerPopup}
      </Modal>
   ) : (
      <div>
         {form}
         {confirmSend && (
            <Modal
               onClose={closeModal}
               isOpen={isOpenForm}
               buttonCloseHeight={20}
               buttonCloseRight={20}
               buttonCloseTop={20}
               buttonCloseWidth={20}
               className={cls.modal}
            >
               {answerPopup}
            </Modal>
         )}
      </div>
   );
});
