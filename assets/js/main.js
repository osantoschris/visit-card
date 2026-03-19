document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Alternar visualização do menu mobile
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Animação de rolagem suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Fecha o menu mobile ao clicar em um link
            if(navMenu.classList.contains('active')) navMenu.classList.remove('active');
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Carrossel de Portfólio ---
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (track && prevBtn && nextBtn) {
        let currentIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;

        const updateCarousel = () => {
            // Desloca o trilho inteiro com base na largura de 1 slide (100%)
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Volta para o primeiro se estiver no último
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1; // Vai para o último se estiver no primeiro
            }
            updateCarousel();
        });
    }

    // --- Animações ao Scrollar (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Deixa de observar após animar 1 vez
            }
        });
    }, {
        root: null,
        threshold: 0.15 // Inicia a animação quando 15% do elemento estiver visível na tela
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Sistema de Tradução (i18n) ---
    const translations = {
        pt: {
            nav_home: "Início",
            nav_about: "Sobre Nós",
            nav_services: "Serviços",
            nav_portfolio: "Portfólio",
            nav_contact: "Contato",
            hero_tag: "Bem-vindo(a) à Claryum",
            hero_title: "Clareza para decisões que importam.",
            hero_desc: "Transformamos dados em estratégias acionáveis, conduzindo o seu negócio ao próximo nível de excelência e rentabilidade.",
            hero_cta: "Fale com um Especialista",
            about_title: "Sobre Nós",
            about_desc: "A Claryum é uma empresa focada em entregar resultados excepcionais através de inteligência corporativa e inovação tecnológica. Nossa missão é proporcionar a clareza necessária para que líderes e gestores alcancem o sucesso sustentável em mercados competitivos.",
            services_title: "Nossos Serviços",
            srv1_title: "Consultoria Estratégica",
            srv1_desc: "Análises profundas do seu mercado para orientar os próximos passos da sua empresa com segurança.",
            srv2_title: "Inovação & Tecnologia",
            srv2_desc: "Implementação de soluções modernas para otimizar processos, reduzir custos e aumentar a eficiência.",
            srv3_title: "Gestão de Dados",
            srv3_desc: "Estruturação e análise de dados complexos para facilitar tomadas de decisões rápidas e precisas.",
            port_title: "Casos de Sucesso",
            port1_title: "Otimização de Vendas",
            port1_desc: "Criação de um painel interativo que permitiu à equipe identificar gargalos em tempo real, resultando em um aumento de 25% na taxa de conversão em apenas 3 meses.",
            port2_title: "Visibilidade Financeira",
            port2_desc: "Estruturação de dados financeiros complexos em um dashboard claro e objetivo, reduzindo o tempo de fechamento mensal de 10 para apenas 2 dias.",
            port3_title: "Gerenciamento Operacional",
            port3_desc: "Implementação de uma solução de gestão integrada que melhorou a eficiência operacional em 30%, reduzindo custos e aumentando a produtividade.",
            port4_title: "Automação de Processos",
            port4_desc: "Implementação de soluções automatizadas que reduziram o tempo de processamento em 50% e melhoraram a precisão dos resultados.",
            cont_tag: "Contato",
            cont_title: "Vamos conversar?",
            cont_desc: "Estamos prontos para entender seu cenário e propor soluções sob medida para sua empresa.",
            cont_email_lbl: "Email direto",
            cont_wpp_lbl: "WhatsApp",
            form_name: "Nome *",
            form_email: "Email corporativo *",
            form_comp: "Empresa *",
            form_msg: "Mensagem",
            form_btn: "Enviar Mensagem",
            footer_txt: "© 2026 Claryum. Todos os direitos reservados.",
            cookie_txt: "Utilizamos cookies para personalizar conteúdo e melhorar a sua experiência. Ao continuar navegando, você concorda com a nossa política de privacidade.",
            cookie_btn: "Aceitar",
            toast_success: "Mensagem enviada com sucesso!"
        },
        en: {
            nav_home: "Home",
            nav_about: "About Us",
            nav_services: "Services",
            nav_portfolio: "Portfolio",
            nav_contact: "Contact",
            hero_tag: "Welcome to Claryum",
            hero_title: "Clarity for decisions that matter.",
            hero_desc: "We transform data into actionable strategies, driving your business to the next level of excellence and profitability.",
            hero_cta: "Speak with an Expert",
            about_title: "About Us",
            about_desc: "Claryum is a company focused on delivering exceptional results through corporate intelligence and technological innovation. Our mission is to provide the clarity needed for leaders and managers to achieve sustainable success in competitive markets.",
            services_title: "Our Services",
            srv1_title: "Strategic Consulting",
            srv1_desc: "Deep analysis of your market to safely guide your company's next steps.",
            srv2_title: "Innovation & Technology",
            srv2_desc: "Implementation of modern solutions to optimize processes, reduce costs, and increase efficiency.",
            srv3_title: "Data Management",
            srv3_desc: "Structuring and analyzing complex data to facilitate fast and accurate decision-making.",
            port_title: "Success Stories",
            port1_title: "Sales Optimization",
            port1_desc: "Creation of an interactive dashboard that allowed the team to identify bottlenecks in real-time, resulting in a 25% conversion rate increase in just 3 months.",
            port2_title: "Financial Visibility",
            port2_desc: "Structuring complex financial data into a clear and objective dashboard, reducing monthly closing time from 10 to just 2 days.",
            port3_title: "Operational Management",
            port3_desc: "Implementation of an integrated management solution that improved operational efficiency by 30%, reducing costs and increasing productivity.",
            port4_title: "Process Automation",
            port4_desc: "Implementation of automated solutions that reduced processing time by 50% and improved results accuracy.",
            cont_tag: "Contact",
            cont_title: "Let's talk?",
            cont_desc: "We are ready to understand your scenario and propose tailored solutions for your company.",
            cont_email_lbl: "Direct Email",
            cont_wpp_lbl: "WhatsApp",
            form_name: "Name *",
            form_email: "Corporate email *",
            form_comp: "Company *",
            form_msg: "Message",
            form_btn: "Send Message",
            footer_txt: "© 2026 Claryum. All rights reserved.",
            cookie_txt: "We use cookies to personalize content and improve your experience. By continuing to browse, you agree to our privacy policy.",
            cookie_btn: "Accept",
            toast_success: "Message sent successfully!"
        }
    };

    const placeholders = {
        pt: {
            ph_name: "Seu nome completo",
            ph_email: "nome@empresa.com",
            ph_comp: "Nome da empresa",
            ph_msg: "Conte-nos sobre seu projeto ou necessidade..."
        },
        en: {
            ph_name: "Your full name",
            ph_email: "name@company.com",
            ph_comp: "Company name",
            ph_msg: "Tell us about your project or need..."
        }
    };

    let currentLang = 'pt';
    const langToggle = document.getElementById('langToggle');

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            // Alterna a linguagem
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            // Atualiza o texto do botão (mostra a linguagem disponível para clicar)
            langToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';

            // Atualiza os textos normais
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });

            // Atualiza os placeholders dos inputs
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (placeholders[currentLang][key]) {
                    el.placeholder = placeholders[currentLang][key];
                }
            });
        });
    }

    // --- Aviso de Cookies (LGPD) ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (cookieBanner && acceptCookiesBtn) {
        // Verifica se o usuário já aceitou os cookies anteriormente
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => { cookieBanner.classList.add('show'); }, 1000); // 1 segundo de atraso para aparecer
        }

        // Salva a decisão no localStorage e oculta a barra
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('show');
        });
    }

    // --- Envio de Formulário via AJAX (Sem Redirecionar) ---
    const contactForm = document.getElementById('contact-form');
    const toastAlert = document.getElementById('toast-alert');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o redirecionamento padrão
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.style.opacity = '0.6';
            submitButton.style.pointerEvents = 'none'; // Desabilita múltiplos cliques

            // Prepara os dados para o Netlify
            const formData = new FormData(contactForm);
            const params = new URLSearchParams(formData);
            params.append('form-name', 'contact'); // Requisito do Netlify para AJAX

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString()
            })
            .then(() => {
                // Mostra o alerta de sucesso e reseta os campos
                if (toastAlert) {
                    toastAlert.classList.add('show');
                    setTimeout(() => { toastAlert.classList.remove('show'); }, 4000); // Some após 4s
                }
                contactForm.reset();
            })
            .catch((error) => console.error('Erro no envio do formulário:', error))
            .finally(() => {
                submitButton.style.opacity = '1';
                submitButton.style.pointerEvents = 'auto'; // Reabilita o botão
            });
        });
    }
});