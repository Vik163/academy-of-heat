import { ChangeEvent, SyntheticEvent, memo, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import cls from './Postman.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { usePhoneValidator } from '@/shared/lib/hooks/usePhoneValidator';
import { PageLoader } from '@/widgets/PageLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useResize } from '@/shared/lib/hooks/useResize';

export interface PostmanProps {
   closeForm?: () => void;
   isOpen?: boolean;
   title?: string;
   buttonText: string;
   commentText?: string;
   kategory?: string;
   nonModal?: boolean;
}

export const Postman = memo((props: PostmanProps) => {
   const { closeForm, isOpen, title, buttonText, commentText, kategory, nonModal } = props;
   const messageRef = useRef<HTMLTextAreaElement>(null);
   const phoneRef = useRef<HTMLInputElement>(null);
   const [err, setErr] = useState('');
   const [confirmSend, setConfirmSend] = useState(false);
   const [loading, setLoading] = useState(false);
   const { phoneValidator } = usePhoneValidator();
   const [isOpenForm, setIsOpenForm] = useState(false);
   const [smallScreen, setSmallScreen] = useState(false);
   const { isMobile, isHorizontal } = useResize();
   const formRef = useRef<HTMLDivElement>(null);
   const [cursor, setCursor] = useState({ cursor: 0, len: 0 });
   const [toSend, setToSend] = useState({
      copyemail: '',
      title: title || kategory,
      phone: '',
      message: '',
   });

   useEffect(() => {
      if (cursor) phoneRef.current?.setSelectionRange(cursor.cursor + 1, cursor.cursor + 1);
   }, [phoneRef, cursor, toSend.phone]);

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (formRef.current)
            if (window.innerHeight < formRef.current.clientHeight) {
               setSmallScreen(true);
            } else {
               setSmallScreen(false);
            }

         return () => {
            clearTimeout(timeout);
         };
      }, 30);
   }, [isHorizontal]);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeModal = () => {
      setIsOpenForm(false);
   };

   const checkValid = () => {
      if (phoneRef.current) {
         if (!phoneRef.current.value || phoneRef.current.value.length < 18) {
            setErr('phone');
            return true;
         }
         setErr('');
      }

      setErr('');
      return false;
   };

   const handleFocusPhone = () => {
      setToSend({ ...toSend, phone: '+7' });
   };

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { target } = e;

      //! Костыль ------------------------------------------
      if (target.selectionStart)
         if (target.value.length > target.selectionStart) {
            console.log('cursor:', cursor);

            setCursor({
               cursor: target.value.length === 7 ? 10 : target.selectionStart - 1,
               len: target.value.length,
            });
         } else {
            setCursor({
               cursor: target.value.length === 7 ? 10 : target.selectionStart,
               len: target.value.length,
            });
         }
      //!-----------------------------------------------------

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
      <div ref={formRef} className={cls.container}>
         {title && (
            <div>
               <Text
                  title={HeaderTagType.H_3}
                  className={classNames(cls.title, { [cls.horizontal]: smallScreen }, [])}
               >
                  {title}
               </Text>
               {!smallScreen && (
                  <Text className={classNames(cls.subtitle, { [cls.horizontal]: smallScreen }, [])}>
                     Заполните поля ниже, наш менеджер свяжется с Вами и ответит на ваши вопросы
                  </Text>
               )}
            </div>
         )}
         <form
            className={classNames(cls.form, { [cls.nonModal]: nonModal, [cls.horizontal]: smallScreen }, [])}
            onSubmit={handleSubmit}
         >
            <input
               type='text'
               name='copyemail'
               placeholder='Email для копии'
               defaultValue={toSend.copyemail}
            ></input>
            <input
               className={classNames(
                  cls.phone,
                  { [cls.nonModal]: nonModal, [cls.horizontal]: smallScreen },
                  [],
               )}
               id='phone'
               ref={phoneRef}
               name='phone'
               type='tel'
               placeholder='Введите Ваш телефон'
               onChange={handleChange}
               onFocus={handleFocusPhone}
               value={toSend.phone}
            />
            {err === 'phone' && (
               <span
                  id='phone'
                  className={classNames(
                     cls.error,
                     { [cls.nonModal]: nonModal, [cls.horizontal]: smallScreen },
                     [],
                  )}
               >
                  Введите Ваш номер телефона
               </span>
            )}
            {commentText && (
               <textarea
                  className={classNames(
                     cls.message,
                     { [cls.nonModal]: nonModal, [cls.horizontal]: smallScreen },
                     [],
                  )}
                  id='message'
                  ref={messageRef}
                  name='message'
                  onChange={handleChange}
                  placeholder={commentText}
                  value={toSend.message}
               ></textarea>
            )}
            {commentText && err === 'message' && (
               <span id='message' className={classNames(cls.error, { [cls.nonModal]: nonModal }, [])}>
                  Введите Ваш номер телефона
               </span>
            )}
            <Button
               className={classNames(
                  cls.btn,
                  { [cls.nonModal]: nonModal, [cls.horizontal]: smallScreen },
                  [],
               )}
               type='submit'
               variant={ButtonVariant.FILLED}
            >
               {buttonText}
            </Button>
         </form>
      </div>
   );

   const answerPopup = (
      <div className={cls.container}>
         <Text title={HeaderTagType.H_3} fontWeight={FontWeight.TEXT_700} className={cls.answerTitle}>
            Спасибо за заявку!
         </Text>
         <Text fontSize={FontSize.SIZE_15} fontWeight={FontWeight.TEXT_600} className={cls.textPopup}>
            Наш менеджер перезвонит <br /> Вам в ближайшее время
         </Text>
      </div>
   );

   if (loading && nonModal)
      return (
         <div className={cls.formContainer}>
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
         buttonCloseTop={isMobile ? -30 : 20}
         buttonCloseWidth={20}
         className={classNames(cls.modal, { [cls.horizontal]: smallScreen }, [])}
      >
         {!confirmSend ? form : answerPopup}
      </Modal>
   ) : (
      <div className={cls.answer}>
         {form}
         {confirmSend && (
            <Modal
               onClose={closeModal}
               isOpen={isOpenForm}
               buttonCloseHeight={20}
               buttonCloseRight={20}
               buttonCloseTop={isMobile ? -30 : 20}
               buttonCloseWidth={20}
               className={cls.modal}
            >
               {answerPopup}
            </Modal>
         )}
      </div>
   );
});
