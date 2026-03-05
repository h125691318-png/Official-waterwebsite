import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Wrench, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  Waves,
  Search,
  Zap,
  Award,
  Facebook,
  MessageCircle,
  Eye,
  Target,
  Info,
  AlertTriangle,
  Shield,
  Activity,
  Check,
  HelpCircle,
  FileText,
  Layers,
  Home,
  Building2,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ isScrolled, isMobileMenuOpen, light = false }: { isScrolled?: boolean, isMobileMenuOpen?: boolean, light?: boolean }) => {
  const textColor = light ? 'text-white' : (isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white');
  const subTextColor = light ? 'text-white/60' : (isScrolled || isMobileMenuOpen ? 'text-slate-400' : 'text-white/60');

  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative w-14 h-14">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>
          
          {/* Droplet Shape */}
          <path 
            d="M50 10 Q 85 45 50 90 Q 15 45 50 10" 
            fill="url(#logoGrad)" 
            className="group-hover:scale-105 transition-transform origin-center duration-500"
          />
          
          {/* Inner Green Core (Leaf/Water drop shape) */}
          <path 
            d="M50 45 Q 65 60 50 80 Q 35 60 50 45" 
            fill="url(#innerGrad)"
            className="animate-pulse"
          />
          
          {/* Text inside the droplet */}
          <text x="50" y="48" textAnchor="middle" fill="white" fontSize="11" fontWeight="900" className="tracking-tighter drop-shadow-md">水道</text>
          <text x="50" y="62" textAnchor="middle" fill="white" fontSize="11" fontWeight="900" className="tracking-tighter drop-shadow-md">渠成</text>
          
          {/* Decorative Waves at bottom of droplet */}
          <path d="M35 70 Q 50 65 65 70" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <span className={`text-2xl font-black tracking-tighter leading-none ${textColor}`}>
          水道渠成
        </span>
        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 ${subTextColor}`}>
          專業管路修復專家
        </span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首頁', href: '#home' },
    { name: '專營項目', href: '#services' },
    { name: '免打牆止漏', href: '#no-dig' },
    { name: '水刀通管清洗', href: '#water-jetting' },
    { name: '專家觀點', href: '#why-us' },
    { name: '關於我們', href: '#about' },
    { name: '施工流程', href: '#process' },
    { name: '聯絡我們', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-3 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0975567591"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
            >
              <Phone size={16} />
              立即預約
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-slate-600 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0975567591"
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                立即撥打電話
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
          alt="Professional Plumbing Service" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-5 py-2.5 rounded-full text-blue-300 text-xs font-bold mb-8 backdrop-blur-md tracking-widest uppercase">
              <Zap size={14} className="text-primary" />
              <span>台灣專業免打牆止漏專家</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] md:leading-[0.9] mb-4 tracking-tighter">
              水道<span className="text-primary">渠成</span><br />
              <span className="text-2xl sm:text-4xl md:text-6xl font-light opacity-90">管路問題的終極者</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl font-light">
              專營 <span className="text-white font-medium">冷熱排水管免打牆止漏</span> 與 <span className="text-white font-medium">排水管水刀通管清洗</span>。<br />
              引進專利數位精密設備，SGS檢驗無毒材料，給您最安心的品質保證。
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="tel:0975567591" className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-3 group">
                <Phone size={20} />
                立即預約檢測
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="https://line.me/ti/p/@770bkai" target="_blank" rel="noreferrer" className="bg-accent text-white px-10 py-5 rounded-2xl text-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-accent/20">
                <MessageCircle size={24} />
                Line 線上諮詢
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-xl">
              <div>
                <div className="text-3xl font-black text-white mb-1">1000+</div>
                <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">服務案例</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">10+</div>
                <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">專業經驗</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">100%</div>
                <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">滿意保證</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-10 border-t border-white/10 pt-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-none mb-1">無效</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest">不收費用</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <ShieldCheck className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-none mb-1">零破壞</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest">施工免打牆</div>
              </div>
            </div>
            <div className="flex items-center gap-4 hidden md:flex">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-none mb-1">當天</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest">即可恢復用水</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: '冷熱排水管免打牆止漏',
      description: '使用SGS檢驗無毒環保綠建材，針對冷熱排水管滲漏進行免打牆修復，不破壞裝潢，當天即可恢復正常用水。',
      icon: <ShieldCheck className="text-primary" size={36} />,
      features: ['SGS無毒材料', '施工零破壞', '保固1年', '冷熱水管皆可'],
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca1f965?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: '排水管水刀通管清洗',
      description: '引進高壓水刀清洗設備，徹底清除管內油脂、水泥渣等頑固堵塞，恢復管路原徑，並配合內視鏡查驗確保品質。',
      icon: <Target className="text-primary" size={36} />,
      features: ['高壓水刀清洗', '徹底清除油垢', '管道內視鏡查驗', '恢復管路順暢'],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Core Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-ink mb-8 tracking-tight">兩大核心技術，解決管路難題</h3>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              我們專注於免打牆止漏與水刀通管兩大專業領域，引進專利設備提供最科學的解決方案。
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 card-hover group"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 md:p-12 relative">
                <div className="w-20 h-20 bg-slate-soft rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                  {service.icon}
                </div>
                <h4 className="text-3xl font-black text-ink mb-6 tracking-tight">{service.title}</h4>
                <p className="text-slate-500 mb-10 text-lg font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-accent" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: '油垢型堆積',
      desc: '廚房油脂冷卻後附著管壁，像膽固醇越積越厚。傳統通管只打穿中心，兩側油垢依然存在。',
      icon: <Droplets className="text-orange-500" size={24} />,
      tag: '最常見'
    },
    {
      title: '皂垢與頭髮',
      desc: '浴室頭髮與皂垢結合形成團塊卡在轉彎處。若只打通不徹底清潔，很快又會再次卡住。',
      icon: <Activity className="text-blue-500" size={24} />,
      tag: '浴室常見'
    },
    {
      title: '老屋管線老化',
      desc: '北部老屋多鑄鐵管生鏽、管內壁粗糙，接縫處容易沉積污垢，導致排水效能逐年下降。',
      icon: <AlertTriangle className="text-amber-500" size={24} />,
      tag: '老屋注意'
    }
  ];

  const comparison = [
    {
      type: '傳統彈簧通管',
      pros: ['價格較低', '適合輕微堵塞'],
      cons: ['只打通不清管壁', '容易復發', '無法看清內部'],
      isRecommended: false
    },
    {
      type: '高壓水刀通管',
      pros: ['清除整層油垢沉積', '大幅減少復發機率', '適合長期反覆堵塞', '可搭配內視鏡確認'],
      cons: ['施工技術要求高'],
      isRecommended: true
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Expert Insights</h2>
              <h3 className="text-4xl md:text-5xl font-black text-ink mb-8 tracking-tight leading-tight">
                為什麼排水會反覆堵塞？<br />
                <span className="text-primary">一次完整說明</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  排水變慢，其實不是突然發生的。多數情況是管線內部長期堆積，直到某一天水流開始明顯受阻。
                </p>
                <p>
                  很多人第一次會選擇傳統通管，但如果幾個月後又堵，代表問題並沒有真正解決。我們希望讓客人清楚知道自己花的是什麼費用。
                </p>
              </div>
              
              <div className="mt-12 p-8 bg-slate-soft rounded-[2rem] border border-slate-100">
                <h4 className="font-black text-ink mb-6 flex items-center gap-3">
                  <Info className="text-primary" size={20} />
                  這篇文章將帶您了解
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {['為什麼會反覆堵塞', '高壓水刀與一般通管差異', '什麼情況適合做水刀', '施工安全注意事項'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Check size={16} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 grid gap-8">
            <h4 className="text-xl font-black text-ink mb-2">為什麼管線會越來越容易堵？</h4>
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                    {reason.tag}
                  </span>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {reason.icon}
                  </div>
                  <div>
                    <h5 className="text-lg font-black text-ink mb-3">{reason.title}</h5>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-ink mb-4">傳統通管 vs 高壓水刀</h3>
            <p className="text-slate-500 font-light">專業的判斷，比直接施工更重要</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
            {comparison.map((item, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border ${item.isRecommended ? 'border-primary bg-primary/5' : 'border-slate-100 bg-white'}`}>
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-2xl font-black text-ink">{item.type}</h4>
                  {item.isRecommended && (
                    <span className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                      推薦方案
                    </span>
                  )}
                </div>
                <div className="space-y-8">
                  <div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">優點</div>
                    <ul className="space-y-3">
                      {item.pros.map((pro, pi) => (
                        <li key={pi} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                          <CheckCircle2 size={16} className="text-emerald-500" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">缺點 / 限制</div>
                    <ul className="space-y-3">
                      {item.cons.map((con, ci) => (
                        <li key={ci} className="flex items-center gap-3 text-sm font-medium text-slate-500">
                          <X size={16} className="text-rose-400" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 p-12 bg-ink rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black mb-10 flex items-center gap-3">
                <Shield className="text-primary" size={28} />
                施工安全為什麼很重要？
              </h4>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-slate-400 font-light leading-relaxed">
                    很多人以為水壓越高越好。其實錯誤的壓力設定，可能會傷到老舊管線。尤其北部老屋常見管線年限久、材質不明。
                  </p>
                  <p className="text-slate-400 font-light leading-relaxed">
                    施工前必須判斷管徑大小、材質、轉彎角度與年限狀況。經驗不足的操作，反而可能造成風險。
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h5 className="font-black mb-4 text-primary">什麼情況適合做高壓水刀？</h5>
                  <ul className="space-y-3 text-sm font-medium text-slate-300">
                    {['三個月內反覆堵塞', '排水慢已持續一段時間', '廚房油垢厚重', '商用廚房長期未清', '主幹管阻塞', '全面性預防保養'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h4 className="text-2xl font-black text-ink flex items-center gap-3">
                服務範圍
                <span className="text-primary text-sm font-bold tracking-widest ml-2">台中 苗栗 新竹 桃園 台北 宜蘭</span>
              </h4>
            </div>
            <div className="p-10 bg-slate-soft rounded-[3rem] border-2 border-dashed border-primary/20 h-full flex flex-col justify-between">
              <div>
                <p className="text-slate-500 font-light mb-8 leading-relaxed">
                  我們是桃園在地團隊，熟悉北部住宅與老屋結構，服務範圍涵蓋整個北部地區。
                </p>
                <div className="flex flex-wrap gap-2">
                  {['台中', '苗栗', '新竹', '桃園', '台北', '宜蘭'].map((city, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-black text-ink">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-ink font-black text-lg mb-1">專業處理，安心使用</p>
                <p className="text-slate-500 text-xs font-light">一次說清楚，比多做一次更重要。</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <div className="inline-block p-1 px-4 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
            Final Thought
          </div>
          <h4 className="text-2xl font-black text-ink mb-6">與其反覆處理，不如理解原因</h4>
          <p className="text-slate-500 font-light leading-relaxed">
            排水問題不是「通一次」就算結束。真正重要的是判斷問題成因。如果您已經反覆花費通管費用，或排水開始出現異常，可以先安排評估，了解是否需要高壓水刀處理。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const NoDigLeakRepair = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "免打牆止漏真的有效嗎？",
      a: "適用於水管細裂縫與滲漏問題，若管線嚴重破裂則需評估是否重新配管。"
    },
    {
      q: "施工需要多久？",
      a: "一般施工時間約 2～4小時。"
    },
    {
      q: "會破壞裝潢嗎？",
      a: "免打牆施工，不會破壞牆面與裝潢。"
    },
    {
      q: "是否提供保固？",
      a: "施工完成後會提供保固與售後服務。"
    }
  ];

  return (
    <section id="no-dig" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">專業水管修復</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              免打牆水管止漏專業服務
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              不敲牆、不破壞裝潢，快速解決水管漏水問題
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <AlertTriangle className="text-accent" />
                常見水管漏水問題
              </h3>
              <p className="text-slate-400 leading-relaxed">
                家中出現水費異常增加、牆壁滲水、地板潮濕等情況，往往是水管漏水所造成。傳統修復方式需要敲牆找管，不僅工程時間長，也容易破壞裝潢。
              </p>
              <ul className="space-y-4">
                {[
                  "水費突然增加",
                  "牆壁或天花板出現水漬",
                  "地板潮濕或磁磚隆起",
                  "水壓變小或忽大忽小",
                  "聽到牆內有水流聲"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check size={14} className="text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Zap className="text-primary" />
                水管漏水常見原因
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "管線老化", desc: "長期使用導致管壁腐蝕或出現細小裂縫。" },
                  { title: "接頭鬆動", desc: "水管接頭長期使用後容易產生滲水。" },
                  { title: "水壓不穩", desc: "水壓過高容易造成管線疲勞破裂。" },
                  { title: "熱脹冷縮", desc: "熱水管長期高溫使用容易產生裂縫。" }
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{reason.title}</h4>
                      <p className="text-slate-400 text-sm">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Technology Principle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 rounded-[2rem] p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck size={120} className="text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-6">免打牆止漏技術原理</h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                  免打牆水管修復是一種 <span className="text-primary font-bold">管內修復技術</span>。透過專業設備將特殊補漏材料注入管線內部，材料會在漏水點形成防水層，封住裂縫，達到止漏效果。
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: <Droplets />, text: "修復細小裂縫" },
                    { icon: <Target />, text: "封堵滲漏點" },
                    { icon: <Activity />, text: "延長水管壽命" }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="text-primary">{benefit.icon}</div>
                      <span className="text-white font-bold">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Digital Detection Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="border-2 border-dashed border-primary/40 rounded-[2rem] p-8 text-center bg-primary/5 h-full flex flex-col justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 mx-auto">
                  <Activity size={32} />
                </div>
                <p className="text-lg text-slate-300 font-medium leading-relaxed">
                  採用測漏設備檢測，數據均採數位式顯示精準度較傳統指針壓力錶高10倍。
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-2xl font-black text-primary tracking-[0.2em]">保固1年</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3 className="text-3xl font-black text-white mb-10 text-center">我們的施工流程</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: "1", title: "漏水檢測", desc: "數位測漏設備檢測，數據採數位式顯示，精準度較傳統指針壓力錶高10倍。" },
                { step: "2", title: "管線清潔", desc: "清除雜質確保效果" },
                { step: "3", title: "補漏施工", desc: "注入材料修復漏點" },
                { step: "4", title: "壓力測試", desc: "數據監控確保不再滲漏" },
                { step: "5", title: "完工驗收", desc: "確認管線正常" }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all">
                    <div className="text-4xl font-black text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">{item.step}</div>
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 z-20">
                      <ChevronRight className="text-white/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              { icon: <Search />, title: "專業抓漏設備", desc: "採用測漏設備檢測，數據均採數位式顯示精準度較傳統指針壓力錶高10倍，且不易誤判。" },
              { icon: <Award />, title: "多年施工經驗", desc: "技術成熟案例豐富" },
              { icon: <Shield />, title: "免打牆施工", desc: "不破壞裝潢省成本" },
              { icon: <Clock />, title: "施工快速", desc: "大部分當天即可完成" },
              { icon: <DollarSign />, title: "收費透明", desc: "檢測後清楚報價" },
              { icon: <ShieldCheck />, title: "完整售後服務", desc: "提供保固諮詢" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
                <div className="text-primary mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Applicable Pipes */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">適用管線種類</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["冷水管", "熱水管", "銅管", "鐵管", "PVC管"].map((pipe, idx) => (
                <span key={idx} className="px-6 py-3 bg-primary/10 text-primary rounded-full font-bold border border-primary/20">
                  ✔ {pipe}
                </span>
              ))}
            </div>
            <p className="mt-8 text-slate-400">適用於住宅、公寓、透天厝等各類型建築。</p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-3xl font-black text-white mb-10 text-center">常見問題</h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                  >
                    <span className="text-white font-bold">{faq.q}</span>
                    <ChevronRight className={`text-primary transition-transform duration-300 ${openFaq === idx ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WaterJetting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "水刀通管會傷到水管嗎？",
      a: "專業技師會根據管材（如PVC、鑄鐵管）調整適當壓力，並配合內視鏡查驗，確保施工安全不傷管。"
    },
    {
      q: "清洗後可以維持多久？",
      a: "水刀能恢復管路原徑，若配合良好使用習慣（如減少油脂排入），通常可維持數年不堵塞。"
    },
    {
      q: "為什麼比一般通管貴？",
      a: "一般通管只是「打通」，水刀是「清洗」。水刀設備昂貴且能徹底清除管壁油垢，大幅降低復發機率。"
    },
    {
      q: "施工需要多久時間？",
      a: "視管路長度與油垢硬化程度而定，一般住家約需 1.5～3 小時。"
    }
  ];

  return (
    <section id="water-jetting" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">高壓水刀技術</span>
            <h2 className="text-4xl md:text-5xl font-black text-ink mb-6">
              排水管水刀通管清洗
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              徹底清除管內油脂、水泥渣，恢復管路原徑
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-ink flex items-center gap-3">
                <AlertTriangle className="text-orange-500" />
                為什麼排水會反覆堵塞？
              </h3>
              <p className="text-slate-600 leading-relaxed">
                傳統彈簧通管只能在油垢中打出一個小洞，水流暫時恢復，但殘留的油垢很快又會吸附雜物造成再次堵塞。
              </p>
              <ul className="space-y-4">
                {[
                  "廚房油脂冷卻硬化",
                  "裝潢水泥渣沉積",
                  "毛髮與皂垢結合",
                  "管路坡度不足積垢",
                  "主幹管長期未清理"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                      <Check size={14} className="text-orange-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-ink mb-8 flex items-center gap-3">
                <Waves className="text-primary" />
                水刀清洗核心優勢
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "360度全方位清洗", desc: "旋轉噴頭無死角沖刷管壁，徹底清除油垢。" },
                  { title: "恢復管路原徑", desc: "不只是打通，而是讓管路內部恢復如新。" },
                  { title: "內視鏡查驗", desc: "施工前後影像比對，效果看得見。" },
                  { title: "減少復發機率", desc: "徹底清除根源，大幅延長使用壽命。" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-ink font-bold mb-1">{benefit.title}</h4>
                      <p className="text-slate-500 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Principle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-ink rounded-[2rem] p-10 mb-12 relative overflow-hidden text-white"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">高壓水刀施工原理</h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
                利用高壓泵浦將水壓提升至數千磅，透過特殊設計的 <span className="text-primary font-bold">後噴式旋轉噴頭</span>，利用水的反作用力向前推進，同時向後方 360 度噴射強力水柱，將管壁上的油脂、污垢徹底粉碎並沖出管外。
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="text-primary mt-1"><Zap size={24} /></div>
                  <div>
                    <h4 className="font-bold mb-2">強力沖刷</h4>
                    <p className="text-sm text-slate-500">足以粉碎硬化如石的油脂與水泥渣。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="text-primary mt-1"><Eye size={24} /></div>
                  <div>
                    <h4 className="font-bold mb-2">內視鏡輔助</h4>
                    <p className="text-sm text-slate-500">精準定位堵塞點，確認清洗潔淨度。</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <div className="mb-12">
            <h3 className="text-3xl font-black text-ink mb-10 text-center">方案選擇建議</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-6 text-left text-slate-500 font-bold border-b border-slate-200">比較項目</th>
                    <th className="p-6 text-left text-slate-500 font-bold border-b border-slate-200">傳統彈簧通管</th>
                    <th className="p-6 text-left text-primary font-bold border-b border-slate-200 bg-primary/5">高壓水刀清洗</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "清除效果", trad: "僅打穿中心孔洞", water: "徹底清除管壁油垢" },
                    { label: "復發機率", trad: "高（油垢仍在）", water: "極低（恢復原徑）" },
                    { label: "適用情況", trad: "毛髮、抹布等異物", water: "油脂堆積、水泥渣" },
                    { label: "施工時間", trad: "約 30-60 分鐘", water: "約 1.5-3 小時" },
                    { label: "保固服務", trad: "通常無保固", water: "提供施工保固" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 border-b border-slate-100 font-bold text-slate-700">{row.label}</td>
                      <td className="p-6 border-b border-slate-100 text-slate-500">{row.trad}</td>
                      <td className="p-6 border-b border-slate-100 text-ink font-medium bg-primary/5">{row.water}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-3xl font-black text-ink mb-10 text-center">水刀通管常見問題</h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-100 transition-all"
                  >
                    <span className="text-ink font-bold">{faq.q}</span>
                    <ChevronRight className={`text-primary transition-transform duration-300 ${openFaq === idx ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Equipment" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -left-10 glass-morphism p-8 rounded-[2rem] shadow-2xl z-20 hidden sm:block border-slate-200/50"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <Award size={32} />
                </div>
                <div>
                  <div className="text-xl font-black text-ink">專業保固</div>
                  <div className="text-sm text-slate-500 font-medium tracking-wide">責任施工，安心有保障</div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-black text-ink mb-8 tracking-tight leading-tight">專業管路修復專家：<br /><span className="text-primary">水道渠成</span></h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                「水道渠成」象徵著我們以專業技術，讓每一條水道都恢復順暢。
                我們專精於免打牆止漏與排水管水刀清洗，以專業技術、精準施工與誠信服務，確保您的居家水路順暢無阻。
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="group">
                  <h4 className="font-black text-ink mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    無效不收費
                  </h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">我們對技術有絕對信心，解決不了問題絕不收費。</p>
                </div>
                <div className="group">
                  <h4 className="font-black text-ink mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    施工零破壞
                  </h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">採用免打牆技術，完整保留您的居家裝潢與磁磚。</p>
                </div>
                <div className="group">
                  <h4 className="font-black text-ink mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    當天可用水
                  </h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">施工快速高效，當天即可恢復正常用水，不影響生活。</p>
                </div>
                <div className="group">
                  <h4 className="font-black text-ink mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    SGS認證材料
                  </h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">使用無毒環保材料，確保飲用水安全無虞。</p>
                </div>
              </div>

              <div className="flex gap-6">
                <a href="https://www.facebook.com/profile.php?id=61587621912293" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ink font-black hover:text-primary transition-all group">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Facebook size={20} />
                  </div>
                  追蹤我們的粉絲專頁
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: '01',
      title: '現場了解狀況',
      description: '抵達現場後，透過訪談與初步觀察，全面了解排水問題的發生頻率與現況。',
      icon: <Search size={24} />
    },
    {
      number: '02',
      title: '評估施工方案',
      description: '評估是否適合使用高壓水刀，或建議其他更符合經濟效益的處理方式。',
      icon: <Target size={24} />
    },
    {
      number: '03',
      title: '風險說明與報價',
      description: '詳細說明施工方式、潛在風險，並提供透明公開的報價，確認後才動工。',
      icon: <Info size={24} />
    },
    {
      number: '04',
      title: '專業水刀施工',
      description: '使用專業高壓水刀設備進行管壁沖刷，徹底清除油垢與沉積物。',
      icon: <Wrench size={24} />
    },
    {
      number: '05',
      title: '完工排水確認',
      description: '施工完成後進行多次排水測試，確保管路恢復原徑順暢，驗收無誤。',
      icon: <CheckCircle2 size={24} />
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#2563eb_0%,transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4">Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">科學施工，品質保證</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              我們堅持標準化的作業流程，讓每一項工程都經得起時間的考驗。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center text-3xl font-black mx-auto mb-10 shadow-2xl border border-white/5 group-hover:border-primary/50 group-hover:bg-primary transition-all duration-500 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-black shadow-lg">
                  {step.number}
                </div>
                <div className="text-white group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-2xl font-black mb-5 tracking-tight group-hover:text-primary transition-colors">{step.title}</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[40%] bg-ink p-12 lg:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black mb-8 tracking-tight">聯繫我們</h3>
                <p className="text-slate-400 text-lg mb-16 font-light leading-relaxed">
                  專業解決您的管路難題，歡迎隨時聯繫我們進行諮詢與預約。
                </p>
                
                <div className="space-y-10">
                  <a href="tel:0975567591" className="flex items-center gap-8 group">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 border border-white/10">
                      <Phone size={28} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">服務專線</div>
                      <div className="text-2xl font-black group-hover:text-primary transition-colors">0975-567-591</div>
                    </div>
                  </a>
                  <a href="mailto:garland314@gmail.com" className="flex items-center gap-8 group">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 border border-white/10">
                      <Mail size={28} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">電子信箱</div>
                      <div className="text-xl font-black group-hover:text-primary transition-colors">garland314@gmail.com</div>
                    </div>
                  </a>
                  <a href="https://line.me/ti/p/@770bkai" target="_blank" rel="noreferrer" className="flex items-center gap-8 group">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all duration-500 border border-white/10">
                      <MessageCircle size={28} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Line ID</div>
                      <div className="text-2xl font-black group-hover:text-accent transition-colors">@770bkai</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">服務地址</div>
                      <div className="text-lg font-bold">桃園市中壢區中福路599-18號</div>
                    </div>
                  </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5">
                  <a href="https://www.facebook.com/profile.php?id=61587621912293" target="_blank" rel="noreferrer" className="flex items-center gap-5 hover:opacity-80 transition-all">
                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <div className="font-black">Facebook 粉絲專頁</div>
                      <div className="text-sm text-slate-500">水道渠成</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-[60%] p-12 lg:p-20">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-ink uppercase tracking-widest">姓名</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-5 bg-slate-soft border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium"
                      placeholder="您的稱呼"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-ink uppercase tracking-widest">電話</label>
                    <input 
                      type="tel" 
                      className="w-full px-6 py-5 bg-slate-soft border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium"
                      placeholder="您的聯絡電話"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-ink uppercase tracking-widest">服務項目</label>
                  <select className="w-full px-6 py-5 bg-slate-soft border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium appearance-none">
                    <option>請選擇服務項目</option>
                    <option>冷熱排水管免打牆止漏</option>
                    <option>排水管水刀通管清洗</option>
                    <option>其他管路問題</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-ink uppercase tracking-widest">問題描述</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-5 bg-slate-soft border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium"
                    placeholder="請簡述您的問題或需求..."
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white py-6 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 active:scale-[0.98]">
                  送出諮詢訊息
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink pt-16 pb-12 text-white overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mb-48 -mr-48"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-24">
          <div className="col-span-2">
            <Logo light />
            <p className="text-slate-400 max-w-sm mb-10 text-lg font-light leading-relaxed mt-8">
              水道渠成：專業冷熱排水管免打牆止漏、排水管水刀通管清洗。我們以誠信與技術，守護您的居家品質。
            </p>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/profile.php?id=61587621912293" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all">
                <Facebook size={22} />
              </a>
              <a href="https://line.me/ti/p/@770bkai" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">快速連結</h4>
            <ul className="space-y-5">
              <li><a href="#home" className="text-slate-400 hover:text-primary transition-all font-medium">首頁</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary transition-all font-medium">專營項目</a></li>
              <li><a href="#no-dig" className="text-slate-400 hover:text-primary transition-all font-medium">免打牆止漏</a></li>
              <li><a href="#water-jetting" className="text-slate-400 hover:text-primary transition-all font-medium">水刀通管清洗</a></li>
              <li><a href="#why-us" className="text-slate-400 hover:text-primary transition-all font-medium">專家觀點</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-primary transition-all font-medium">關於我們</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-primary transition-all font-medium">聯絡我們</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">服務時間</h4>
            <ul className="space-y-5">
              <li className="flex justify-between text-slate-400 font-medium">
                <span>週一至週五</span>
                <span className="text-white">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-slate-400 font-medium">
                <span>週六</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-slate-400 font-medium">
                <span>週日</span>
                <span className="text-primary font-black">預約制</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © 2024 水道渠成 版權所有.
          </p>
          <div className="flex gap-10 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-white transition-all">隱私權政策</a>
            <a href="#" className="hover:text-white transition-all">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 md:hidden">
      <motion.a
        href="https://line.me/ti/p/@770bkai"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl shadow-accent/40 border-2 border-white/20"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a
        href="tel:0975567591"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 border-2 border-white/20"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <NoDigLeakRepair />
      <WaterJetting />
      <WhyChooseUs />
      <About />
      <Process />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}
