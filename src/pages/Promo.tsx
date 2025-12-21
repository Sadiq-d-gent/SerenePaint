import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Gift, User, Mail, Phone, Ticket, CheckCircle2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const COMPANY_WHATSAPP_NUMBER = "2348012345678"; 
const PROMO_EXPIRY_DATE = new Date("2025-12-31T23:59:59");

const PRODUCTS = [
  "Wooding Coating",
  "Satin Paint",
  "Floor Coating",
  "Marine Coating",
  "Automotive Paint",
  "Industrial Coating",
  "Waterseal Coating",
];

const Promo = () => {
  const { toast } = useToast();

  const [showSuccess, setShowSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    promoCode: "",
    product: "",
  });

  // ⏳ Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = PROMO_EXPIRY_DATE.getTime() - now;

      if (distance <= 0) {
        setIsExpired(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isExpired) {
      toast({
        title: "Promo Ended",
        description: "This promo campaign has expired.",
        variant: "destructive",
      });
      return;
    }

    const message = `
🎁 *New Promo Code Submission*

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📦 Product: ${formData.product}
🎟 Promo Code: ${formData.promoCode}

Submitted via website.
    `;

    const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setShowSuccess(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setShowSuccess(false);
    }, 1800);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      promoCode: "",
      product: "",
    });
  };

  return (
    <Layout>
      {/* ✅ SUCCESS OVERLAY */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center text-primary-foreground"
            >
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-lime-400 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Promo Submitted!</h2>
              <p className="text-primary-foreground/80">Redirecting to WhatsApp…</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="py-24 bg-primary">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Claim Your Promo Reward
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-6">
            Enter your promo code before time runs out.
          </p>

          {/* ⏳ Countdown - Scholarship style */}
          {!isExpired && (
            <div className="flex justify-center gap-4 flex-wrap mb-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card rounded-xl px-6 py-4 text-center min-w-[90px] shadow-card"
                >
                  <p className="text-2xl font-bold text-lime-400">{item.value}</p>
                  <p className="text-xs uppercase text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FORM */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          {isExpired ? (
            <div className="bg-card rounded-2xl p-10 shadow-card text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Promo Ended</h3>
              <p className="text-muted-foreground">
                The promotional campaign has expired.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto bg-card p-8 rounded-2xl shadow-card space-y-6"
            >
              <div>
                <Label className="flex gap-2 items-center">
                  <User className="w-4 h-4" /> Full Name
                </Label>
                <Input name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>

              <div>
                <Label className="flex gap-2 items-center">
                  <Mail className="w-4 h-4" /> Email
                </Label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <Label className="flex gap-2 items-center">
                  <Phone className="w-4 h-4" /> Phone
                </Label>
                <Input name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div>
                <Label className="flex gap-2 items-center">
                  <Package className="w-4 h-4" /> Product Purchased
                </Label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full h-11 rounded-lg border px-3 text-sm"
                >
                  <option value="">Select product</option>
                  {PRODUCTS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label className="flex gap-2 items-center">
                  <Ticket className="w-4 h-4" /> Promo Code
                </Label>
                <Input name="promoCode" value={formData.promoCode} onChange={handleChange} required />
              </div>

              <Button className="w-full" size="lg">
                Submit Promo Code
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Promo;
