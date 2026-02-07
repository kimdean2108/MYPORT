import { BookOpen, Monitor, Users, Briefcase, Award, Sprout } from 'lucide-react';

export const PROFILE = {
  name: "김경수",
  engName: "Kim Kyung-su",
  title: "AI 교육 전문가 / 전 DB손해보험 본부장",
  slogan: "테두리 없는 삶, 변화를 리딩하는 AI 전파자",
  phone: "010-8739-7090",
  email: "kksu2108@gmail.com",
  intro: `현대 비즈니스 환경에서 기술은 더 이상 선택이 아닌 생존의 문제입니다. 
  30년이라는 기업 경력을 통해 체득한 비즈니스 통찰력을 현대의 AI 기술과 결합하여, 
  단순한 이론을 넘어선 '실무 최적화 AI 솔루션'을 제시합니다.
  
  "테두리 없는 삶으로 항상 새로운 일을 모색하고 준비한다"는 철학 아래,
  경계에 안주하지 않는 도전 정신으로 조직의 성장을 견인하고 개인의 생산성을 혁신합니다.`,
};

export const COMPETENCIES = [
  {
    title: "비즈니스 리더십 & 전략",
    desc: "30년 본부장 경력의 의사결정 능력과 AI의 결합. 기술을 조직 효율성을 높이는 전략적 자산으로 재해석.",
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "디지털 전환 실행력",
    desc: "부산광역시 '휴먼북' 강사. 프롬프트 엔지니어링부터 나노바나나 이미지 생성까지, 아날로그 경험을 디지털 자산으로 변환.",
    icon: Monitor,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "세대 융합형 소통",
    desc: "시니어와 실무자의 언어를 동시에 구사. 복잡한 기술을 'So What?' 관점으로 풀어내어 실행 의지로 전환.",
    icon: Users,
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export const CURRICULUM = [
  {
    category: "AI 기초 및 인식 전환",
    topics: "챗GPT, 제미나이, 클로드, 퍼플렉시티 등 소개",
    target: "시니어 및 입문자",
    effect: "AI에 대한 심리적 장벽 제거 및 디지털 자신감 회복",
    img: "https://picsum.photos/400/300?random=1"
  },
  {
    category: "실생활에 적용하는 AI",
    topics: "글쓰기, 슬라이드/카드뉴스, 숏폼 작성 등",
    target: "직장인 및 관리자",
    effect: "직관적 업무 탈피, 데이터 중심의 정교한 업무 지시 체계 구축",
    img: "https://picsum.photos/400/300?random=2"
  },
  {
    category: "지식 자산 디지털화",
    topics: "노트북LM 실생활 활용법",
    target: "전문직 및 퇴직 예정자",
    effect: "30년 아날로그 기록을 '나만의 디지털 세컨드 브레인'으로 구축",
    img: "https://picsum.photos/400/300?random=3"
  },
  {
    category: "시각적 비즈니스 구현",
    topics: "나노바나나(Nano-banana) 이미지 생성 기법",
    target: "마케터 및 1인 창업가",
    effect: "특화된 프롬프트로 독창적이고 전문적인 시각 콘텐츠 생성",
    img: "https://picsum.photos/400/300?random=4"
  },
];

export const HISTORY = [
  { year: "1990 - 2020", role: "기업 실무 및 경영 리더십", detail: "한국자동차보험(현 DB손해보험) 교육/마케팅 팀장, 부산본부장 역임 (30년 근속)" },
  { year: "Present", role: "사회적 가치 기반 경제 교육", detail: "부산지역경제교육센터 강사, GA 대상 AI 교육, 취약계층 금융사고 예방 교육" },
  { year: "Future", role: "미래 세대 양성", detail: "초·중·고등학생 대상 기초 금융 및 보험 교육 진행" },
];

export const CERTIFICATIONS = [
  { category: "학문적 기초", items: ["부산대학교 회계학과 졸업"], icon: BookOpen },
  { category: "AI & 디지털", items: ["AI/OA 강사", "시니어티쳐", "챗GPT 활용지도사", "SNS 콘텐츠 전문가"], icon: Monitor },
  { category: "상담 & 인문학", items: ["MBTI 학습진로 상담지도사", "근대문화 자산해설사"], icon: Users },
  { category: "융합 & 라이프", items: ["유기농업기능사", "도시농업관리사", "무인멀티콥터(드론) 3종", "바리스타 1급"], icon: Sprout },
];