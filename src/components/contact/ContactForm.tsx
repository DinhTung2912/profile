'use client';

import { useRef, useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const fieldClass = (hasError: boolean) =>
  `w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-primary/40 ${
    hasError ? 'border-danger focus:border-danger focus:ring-danger/30' : 'border-border focus:border-primary'
  }`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập tên của bạn';

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Vui lòng nhập tiêu đề';
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung tin nhắn';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Land keyboard focus on the confirmation the form was replaced by.
        requestAnimationFrame(() => successRef.current?.focus());

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const fields = [
    { id: 'name', label: 'Họ tên', placeholder: 'Nhập họ tên của bạn', type: 'text' },
    { id: 'email', label: 'Email', placeholder: 'Nhập địa chỉ email', type: 'email' },
  ] as const;

  return (
    <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="card-title text-xl text-foreground">Gửi lời nhắn cho mình</h2>

      {/* Announced when the async submit resolves. The form unmounts on
          success, so focus is moved here rather than being dropped on <body>. */}
      <div aria-live="polite">
        {isSuccess && (
          <div
            ref={successRef}
            tabIndex={-1}
            className="mt-6 flex items-start gap-3 rounded-lg border border-success/30 bg-success-soft p-4 text-sm text-success"
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>Cảm ơn bạn! Lời nhắn đã được gửi. Mình sẽ phản hồi sớm nhất có thể.</p>
          </div>
        )}
      </div>

      {!isSuccess && (
        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map(({ id, label, placeholder, type }) => (
              <div key={id}>
                <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
                  {label} <span className="text-danger">*</span>
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors[id])}
                  aria-describedby={errors[id] ? `${id}-error` : undefined}
                  className={fieldClass(Boolean(errors[id]))}
                  placeholder={placeholder}
                />
                {errors[id] && (
                  <p id={`${id}-error`} className="mt-1.5 text-xs text-danger">
                    {errors[id]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
              Tiêu đề <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className={fieldClass(Boolean(errors.subject))}
              placeholder="Nhập tiêu đề tin nhắn"
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-danger">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
              Nội dung <span className="text-danger">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${fieldClass(Boolean(errors.message))} resize-y`}
              placeholder="Nhập nội dung tin nhắn..."
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-danger">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <span
                  className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                  aria-hidden="true"
                />
                Đang gửi...
              </>
            ) : (
              <>
                <Send className="size-4" aria-hidden="true" />
                Gửi tin nhắn
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
