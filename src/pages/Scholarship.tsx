import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { GraduationCap, CheckCircle, FileText, Calendar, User, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SCHOLARSHIP_DEADLINE = new Date("2025-12-25T23:59:59"); // Edit deadline here

const eligibilityRequirements = [
  "Must be a Nigerian citizen",
  "Must have completed SSCE with at least 5 credits including English and Mathematics",
  "Must be between 16-25 years of age",
  "Must demonstrate financial need",
  "Must not be a recipient of any other full scholarship",
];

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara"
];

const Scholarship = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    ssceResult: "",
    address: "",
    nationality: "Nigerian",
    stateOfOrigin: "",
    phone: "",
    email: "",
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = SCHOLARSHIP_DEADLINE.getTime() - now;

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-form-email", {
        body: {
          type: "scholarship",
          ...formData,
        },
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We will review your application and contact you soon.",
      });

      setFormData({
        fullName: "",
        dateOfBirth: "",
        ssceResult: "",
        address: "",
        nationality: "Nigerian",
        stateOfOrigin: "",
        phone: "",
        email: "",
      });
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-lime-400 font-semibold">Education Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Serene Paint Scholarship Program
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Investing in the future through education. Apply for our scholarship 
              program and take the first step towards achieving your dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Overview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
                Program Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Tomorrow's Leaders
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  The ProPaint Scholarship Program was established to support talented 
                  Nigerian students who demonstrate academic excellence and financial need. 
                  We believe that education is the key to unlocking potential and creating 
                  positive change in our communities.
                </p>
                <p>
                  Each year, we award scholarships to deserving students to help them 
                  pursue higher education. The scholarship covers tuition fees and provides 
                  a monthly stipend for living expenses.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Students Supported" },
                  { value: "₦5M+", label: "Total Awarded" },
                  { value: "5+", label: "Years Running" },
                  { value: "100%", label: "Success Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted rounded-xl p-4">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Eligibility Requirements
                </h3>
                <ul className="space-y-4">
                  {eligibilityRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Application Deadline</h4>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span>March 31, 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-medium mb-4">
              Apply Now
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Scholarship Application Form
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete the form below to submit your application. All fields are required.
            </p>
          </motion.div>

          {/* Countdown */}
          {!isExpired && (
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card rounded-xl px-6 py-4 text-center min-w-[350px] shadow-card"
                >
                  <p className="text-2xl font-bold text-lime-400">
                    {item.value}
                  </p>
                  <p className="text-xs uppercase text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            {isExpired ? (
              <div className="bg-card rounded-2xl p-10 shadow-card text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Applications Closed
                </h3>
                <p className="text-muted-foreground">
                  The scholarship application deadline has passed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date of Birth
                  </Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* SSCE Result */}
                <div className="space-y-2">
                  <Label htmlFor="ssceResult" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    SSCE Result Summary
                  </Label>
                  <Textarea
                    id="ssceResult"
                    name="ssceResult"
                    value={formData.ssceResult}
                    onChange={handleChange}
                    placeholder="List your subjects and grades (e.g., English - A1, Mathematics - B2)"
                    rows={3}
                    required
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Residential Address
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your full residential address"
                    rows={2}
                    required
                  />
                </div>

                {/* Nationality */}
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="Nigerian"
                    required
                  />
                </div>

                {/* State of Origin */}
                <div className="space-y-2">
                  <Label htmlFor="stateOfOrigin">State of Origin (Indigene)</Label>
                  <select
                    id="stateOfOrigin"
                    name="stateOfOrigin"
                    value={formData.stateOfOrigin}
                    onChange={handleChange}
                    required
                    className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select your state</option>
                    {nigerianStates.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 xxx xxx xxxx"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our terms and conditions 
                  and confirm that all information provided is accurate.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarship;
