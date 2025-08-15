export type SupportedLanguage = 'en-US' | 'pt-BR';

export interface TranslationKeys {
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
    confirm: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    open: string;
    search: string;
    filter: string;
    clear: string;
    submit: string;
    reset: string;
    yes: string;
    no: string;
    attach: string;
  };
  auth: {
    login: string;
    logout: string;
    register: string;
    signUp: string;
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    forgotPassword: string;
    rememberMe: string;
    loginFailed: string;
    registrationFailed: string;
    invalidCredentials: string;
    passwordMismatch: string;
    emailRequired: string;
    passwordRequired: string;
    nameRequired: string;
    alreadyHaveAccount: string;
    dontHaveAccount: string;
    welcomeBack: string;
    createAccount: string;
  };
  navigation: {
    home: string;
    chat: string;
    profile: string;
    settings: string;
    conversations: string;
    loveTokens: string;
    info: string;
  };
  home: {
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    learnMore: string;
    termsAcceptance: string;
    welcomeMessage: string;
    topicPrompt: string;
    publicMode: string;
    theMovement: string;
    donate: string;
    share: string;
  };
  chat: {
    newChat: string;
    startConversation: string;
    selectTopic: string;
    typeMessage: string;
    send: string;
    thinking: string;
    noMessages: string;
    startTyping: string;
    topics: {
      relationship: string;
      communication: string;
      intimacy: string;
      future: string;
      conflict: string;
      appreciation: string;
      qualityTime: string;
      physicalTouch: string;
      actsOfService: string;
      gifts: string;
      wordsOfAffirmation: string;
    };
  };
  profile: {
    personalInfo: string;
    accountSettings: string;
    preferences: string;
    language: string;
    theme: string;
    notifications: string;
    privacy: string;
    security: string;
    updateProfile: string;
    profileUpdated: string;
    profileUpdateFailed: string;
  };
  conversations: {
    title: string;
    noConversations: string;
    startFirstConversation: string;
    recent: string;
    archived: string;
    deleteConversation: string;
    archiveConversation: string;
    unarchiveConversation: string;
  };
  loveTokens: {
    title: string;
    available: string;
    used: string;
    total: string;
    purchase: string;
    history: string;
    noTokens: string;
    buyTokens: string;
  };
  errors: {
    networkError: string;
    serverError: string;
    unauthorized: string;
    notFound: string;
    validationError: string;
    unknownError: string;
  };
  validation: {
    required: string;
    email: string;
    minLength: string;
    maxLength: string;
    passwordStrength: string;
  };
}
