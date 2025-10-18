// common/words.js
export const WORDS = {
  en: {
    brand: "Mirjalol",
    menu: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      techs: "Techs",
      experience: "Experience",
      others: "Others",
      contact: "Contact"
    },

    common: {
      live: "Live",
      details: "Details",
      email: "Email",
      years: "yrs experience",
      connectCta: "Contact with Me",
      emailPlaceholder: "Your email address"
    },

    home: {
      kicker: "Hey there,",
      title: "Hello, I'm <span class='accent'>Mirjalol</span>",
      subtitle: "Full-stack developer (React, Node, NestJS). Welcome to my portfolio.",
      heroHeading: "Building modern web & mobile applications <br><span class='accent'>experience</span>",
      heroDesc:
        "I’m a <b>Full-stack Developer</b> with 3+ years of experience building dynamic, scalable, and user-friendly web and mobile apps."
    },

    about: {
      title: "About Me",
      p1: "I’m a full-stack developer based in South Korea.",
      p2:
        "My journey started with a strong foundation in mathematics and a passion for problem-solving. From early programming contests to modern product work, I’ve focused on building user-centered applications that combine functionality and meaningful design."
    },

    projects: {
      title: "Projects",
      items: {
        cozypick: {
          name: "CozyPick",
          stack: "Next.js • NestJS • GraphQL",
          live: "http://cozypick.online/"
        },
        greencart: {
          name: "GreenCart",
          stack: "React • Express • Node.js",
          live: "http://green-cart.store/"
        },
        digidine: {
          name: "Digi-Dine (Ongoing)",
          stack: "NestJS • GraphQL • JWT",
          aboutTitle: "About",
          aboutPoints: [
            "Role-based auth (JWT, refresh)",
            "GraphQL schema & resolvers",
            "Order flow with real-time updates (Socket.IO)",
            "MongoDB + Mongoose"
          ]
        }
      }
    },

    techs: {
      title: "Tech Stack",
      subtitle: "Languages, frameworks, and tools I use most frequently",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools"
      }
    },

    experience: {
      title: "Experience",
      subtitle: "Professional experience & contributions",
      items: {
        brightwave: {
          company: "BrightWave Web Solutions",
          period: "Sep 2023 – Mar 2025",
          role: "Full Stack Developer (Remote) · London, United Kingdom",
          points: [
            "Redesigned backend with NestJS & GraphQL; improved API speed by 40%.",
            "Added real-time chat & notifications (Socket.IO), +25% session duration.",
            "Applied modular MVC patterns for scalable, maintainable systems.",
            "Docker Compose + PM2 + NGINX deployment; monitored with Grafana.",
            "Delivered responsive, multi-language frontends with optimized performance."
          ]
        },
        atmos: {
          company: "ATMOS",
          period: "Apr 2022 – May 2023",
          role: "Backend Developer (Remote)",
          points: [
            "Integrated 3rd-party services (payments, cloud storage, email/SMS).",
            "Unit & integration tests reduced production bugs significantly.",
            "Maintained cloud infra (AWS/GCP) with focus on scalability & logging.",
            "Agile/Scrum participation: sprint planning, code reviews, stand-ups.",
            "Continuous improvement across teams and services."
          ]
        }
      }
    },

    others: {
      title: "Others",
      p: "Blog, certificates, hobbies and more."
    },

    contact: {
      title: "Contact",
      email: "Email"
    }
  },

  ko: {
    brand: "아담",
    menu: {
      home: "홈",
      about: "소개",
      projects: "프로젝트",
      techs: "기술",
      experience: "경력",
      others: "기타",
      contact: "연락처"
    },

    common: {
      live: "사이트",
      details: "자세히",
      email: "이메일",
      years: "년 경력",
      connectCta: "메일 보내기",
      emailPlaceholder: "이메일 주소"
    },

    home: {
      kicker: "안녕하세요,",
      title: "안녕하세요, <span class='accent'>Mirjalol</span> 입니다",
      subtitle: "풀스택 개발자(React, Node, NestJS). 포트폴리오에 오신 것을 환영합니다.",
      heroHeading: "모던한 웹 & 모바일 애플리케이션을 구축합니다 <br><span class='accent'>경험</span>",
      heroDesc:
        "3년+ 경력의 <b>풀스택 개발자</b>로서 확장 가능하고 사용자 친화적인 웹/모바일 앱을 만듭니다."
    },

    about: {
      title: "소개",
      p1: "대한민국에 거주하는 풀스택 개발자입니다.",
      p2:
        "수학적 사고와 문제 해결 능력을 바탕으로 사용자 중심의 제품을 만들고 있습니다. 초기 대회 경험부터 현재의 제품 개발까지 기능성과 의미 있는 디자인을 결합하는 데 집중합니다."
    },

    projects: {
      title: "프로젝트",
      items: {
        cozypick: {
          name: "CozyPick",
          stack: "Next.js • NestJS • GraphQL",
          live: "http://cozypick.online/"
        },
        greencart: {
          name: "GreenCart",
          stack: "React • Express • Node.js",
          live: "http://green-cart.store/"
        },
        digidine: {
          name: "Digi-Dine (진행중)",
          stack: "NestJS • GraphQL • JWT",
          aboutTitle: "소개",
          aboutPoints: [
            "역할 기반 인증(JWT, refresh)",
            "GraphQL 스키마/리졸버",
            "주문 흐름 & 실시간 업데이트(Socket.IO)",
            "MongoDB + Mongoose"
          ]
        }
      }
    },

    techs: {
      title: "기술 스택",
      subtitle: "가장 자주 사용하는 언어, 프레임워크, 도구",
      groups: {
        frontend: "프론트엔드",
        backend: "백엔드",
        devops: "데브옵스 & 도구"
      }
    },

    experience: {
      title: "경력",
      subtitle: "프로페셔널 경험과 기여 사항",
      items: {
        brightwave: {
          company: "BrightWave Web Solutions",
          period: "2023.09 – 2025.03",
          role: "풀스택 개발자(원격) · 영국 런던",
          points: [
            "NestJS & GraphQL 기반 백엔드 재설계로 API 속도 40% 향상.",
            "실시간 채팅/알림(Socket.IO) 도입으로 세션 지속시간 25% 증가.",
            "모듈러 MVC 패턴 적용으로 확장성과 유지보수성 강화.",
            "Docker Compose + PM2 + NGINX 배포, Grafana 모니터링.",
            "다국어 대응 프론트엔드 성능 최적화."
          ]
        },
        atmos: {
          company: "ATMOS",
          period: "2022.04 – 2023.05",
          role: "백엔드 개발자(원격)",
          points: [
            "결제/클라우드/이메일·SMS 등 외부 API 연동.",
            "단위/통합 테스트로 운영 버그 대폭 감소.",
            "AWS/GCP 인프라 운영(확장성·로그·모니터링 중심).",
            "Agile/Scrum 스프린트 참여(기획, 코드리뷰, 데일리).",
            "팀 간 협업으로 지속적인 개선."
          ]
        }
      }
    },

    others: {
      title: "기타",
      p: "블로그, 자격증, 취미 등."
    },

    contact: {
      title: "연락처",
      email: "이메일"
    }
  },

  // Russian
  ru: {
    brand: "Миржалол",
    menu: {
      home: "Главная",
      about: "Обо мне",
      projects: "Проекты",
      techs: "Технологии",
      experience: "Опыт",
      others: "Другое",
      contact: "Контакты"
    },

    common: {
      live: "Сайт",
      details: "Подробнее",
      email: "Эл. почта",
      years: "года опыта",
      connectCta: "Связаться со мной",
      emailPlaceholder: "Ваш адрес эл. почты"
    },

    home: {
      kicker: "Привет,",
      title: "Здравствуйте, я <span class='accent'>Миржалол</span>",
      subtitle:
        "Full-stack разработчик (React, Node, NestJS). Добро пожаловать в моё портфолио.",
      heroHeading:
        "Создаю современные веб и мобильные приложения <br><span class='accent'>с опытом</span>",
      heroDesc:
        "Я <b>Full-stack разработчик</b> с опытом более 3 лет, создающий масштабируемые и удобные веб/мобильные приложения."
    },

    about: {
      title: "Обо мне",
      p1: "Я full-stack разработчик, живущий в Южной Корее.",
      p2:
        "Моё путь начался с крепкой базы в математике и любви к решению задач. От ранних соревнований по программированию до современных продуктов — я создаю ориентированные на пользователя приложения, совмещающие функциональность и продуманный дизайн."
    },

    projects: {
      title: "Проекты",
      items: {
        cozypick: {
          name: "CozyPick",
          stack: "Next.js • NestJS • GraphQL",
          live: "http://cozypick.online/"
        },
        greencart: {
          name: "GreenCart",
          stack: "React • Express • Node.js",
          live: "http://green-cart.store/"
        },
        digidine: {
          name: "Digi-Dine (в процессе)",
          stack: "NestJS • GraphQL • JWT",
          aboutTitle: "Описание",
          aboutPoints: [
            "Ролевая аутентификация (JWT, refresh)",
            "Схема и резолверы GraphQL",
            "Поток заказа и обновления в реальном времени (Socket.IO)",
            "MongoDB + Mongoose"
          ]
        }
      }
    },

    techs: {
      title: "Технологический стек",
      subtitle:
        "Языки, фреймворки и инструменты, которые я использую чаще всего",
      groups: {
        frontend: "Фронтенд",
        backend: "Бэкенд",
        devops: "DevOps и инструменты"
      }
    },

    experience: {
      title: "Опыт",
      subtitle: "Профессиональный опыт и вклад",
      items: {
        brightwave: {
          company: "BrightWave Web Solutions",
          period: "Сен 2023 – Мар 2025",
          role: "Full Stack разработчик (удалённо) · Лондон, Великобритания",
          points: [
            "Перепроектировал бэкенд на NestJS и GraphQL; ускорение API на 40%.",
            "Добавил чат и уведомления в реальном времени (Socket.IO), +25% к длительности сессии.",
            "Применил модульный MVC-подход для масштабируемости и поддержки.",
            "Деплой через Docker Compose, PM2 и NGINX; мониторинг в Grafana.",
            "Создал адаптивные, многоязычные фронтенды с высокой производительностью."
          ]
        },
        atmos: {
          company: "ATMOS",
          period: "Апр 2022 – Май 2023",
          role: "Бэкенд-разработчик (удалённо)",
          points: [
            "Интеграция сторонних сервисов (платежи, облако, email/SMS).",
            "Юнит- и интеграционные тесты значительно снизили баги в проде.",
            "Поддерживал AWS/GCP с акцентом на масштабируемость и логи.",
            "Участвовал в Agile/Scrum: планирование, код-ревью, стендапы.",
            "Постоянные улучшения благодаря межкомандному взаимодействию."
          ]
        }
      }
    },

    others: {
      title: "Другое",
      p: "Блог, сертификаты, хобби и другое."
    },

    contact: {
      title: "Контакты",
      email: "Эл. почта"
    }
  },

  // Uzbek
  uz: {
    brand: "Mirjalol",
    menu: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      projects: "Loyihalar",
      techs: "Texnologiyalar",
      experience: "Tajriba",
      others: "Boshqalar",
      contact: "Aloqa"
    },

    common: {
      live: "Sayt",
      details: "Batafsil",
      email: "Email",
      years: "yil tajriba",
      connectCta: "Men bilan bog‘laning",
      emailPlaceholder: "Email manzilingiz"
    },

    home: {
      kicker: "Salom,",
      title: "Salom, men <span class='accent'>Mirjalol</span>",
      subtitle:
        "Full-stack dasturchi (React, Node, NestJS). Portfoliomga xush kelibsiz.",
      heroHeading:
        "Zamonaviy veb va mobil ilovalar yarataman <br><span class='accent'>tajriba</span>",
      heroDesc:
        "Men 3+ yillik tajribaga ega <b>Full-stack</b> dasturchiman; dinamik, kengaytiriladigan va foydalanuvchiga qulay ilovalar ishlab chiqaman."
    },

    about: {
      title: "Men haqimda",
      p1: "Janubiy Koreyada yashovchi full-stack dasturchiman.",
      p2:
        "Matematika va muammolarni hal qilishga bo‘lgan ishtiyoqim dasturlash yo‘lini tanlashimga sabab bo‘lgan. Dastlabki tanlovlardan tortib zamonaviy mahsulotlargacha — foydalanuvchi markazidagi funksionallik va mazmunli dizayn uyg‘unligiga e’tibor beraman."
    },

    projects: {
      title: "Loyihalar",
      items: {
        cozypick: {
          name: "CozyPick",
          stack: "Next.js • NestJS • GraphQL",
          live: "http://cozypick.online/"
        },
        greencart: {
          name: "GreenCart",
          stack: "React • Express • Node.js",
          live: "http://green-cart.store/"
        },
        digidine: {
          name: "Digi-Dine (Jarayonda)",
          stack: "NestJS • GraphQL • JWT",
          aboutTitle: "Haqida",
          aboutPoints: [
            "Rollar asosida autentifikatsiya (JWT, refresh)",
            "GraphQL sxemasi va resolverlar",
            "Buyurtmalar oqimi va real vaqt yangilanishlari (Socket.IO)",
            "MongoDB + Mongoose"
          ]
        }
      }
    },

    techs: {
      title: "Texnologiyalar to‘plami",
      subtitle: "Eng ko‘p ishlatadigan tillar, freymvorklar va vositalar",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps va vositalar"
      }
    },

    experience: {
      title: "Tajriba",
      subtitle: "Professional tajriba va hissalar",
      items: {
        brightwave: {
          company: "BrightWave Web Solutions",
          period: "2023-sentabr – 2025-mart",
          role: "Full Stack dasturchi (Masofadan) · London, Buyuk Britaniya",
          points: [
            "NestJS va GraphQL bilan backend qayta ishlab chiqilib, API tezligi 40% ga oshirildi.",
            "Socket.IO bilan real vaqt chat va bildirishnomalar joriy etilib, sessiya davomiyligi 25% ga uzaydi.",
            "Modulli MVC yondashuvi qo‘llanilib, kengayish va qo‘llab-quvvatlash osonlashtirildi.",
            "Docker Compose + PM2 + NGINX orqali deploy; Grafana orqali monitoring.",
            "Yuqori samarali, moslashuvchan va ko‘p tilli frontendlar yaratildi."
          ]
        },
        atmos: {
          company: "ATMOS",
          period: "2022-aprel – 2023-may",
          role: "Backend dasturchi (Masofadan)",
          points: [
            "Uchinchi tomon xizmatlari integratsiyasi (to‘lov, bulut, email/SMS).",
            "Birlik va integratsiya testlari ishlab chiqarishdagi xatolarni kamaytirdi.",
            "AWS/GCP infratuzilmasi: kengayish, monitoring va loglarga e’tibor.",
            "Agile/Scrum: rejalashtirish, kod ko‘rib chiqish, kunlik yig‘ilishlar.",
            "Jamoalararo hamkorlik orqali doimiy yaxshilanish boshqarildi."
          ]
        }
      }
    },

    others: {
      title: "Boshqalar",
      p: "Blog, sertifikatlar, sevimli mashg‘ulotlar va boshqalar."
    },

    contact: {
      title: "Aloqa",
      email: "Email"
    }
  }
};
