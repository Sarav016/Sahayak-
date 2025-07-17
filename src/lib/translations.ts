
import { type Language } from '@/hooks/use-language';

export const translations: Record<
  Language,
  { [key: string]: string | { [key: string]: string } }
> = {
  en: {
    page: {
      home: 'Home',
      contentGeneration: 'Content Generation',
      imageWizard: 'Image Wizard',
      essayGrader: 'Essay Grader',
      visualExplorer: 'Visual Explorer',
      classroomManagement: 'Classroom Management',
    },
    contentGeneration: {
      title: 'AI Content Generation',
      description:
        'Generate educational content effortlessly. Choose a content type and topic, and let the AI assist you.',
      form: {
        contentType: 'Content Type',
        topic: 'Topic',
        topicPlaceholder: 'e.g., The Solar System',
        generate: 'Generate',
        generating: 'Generating...',
      },
      mic: {
        speakTopic: 'Speak your topic',
        listening: 'Listening...',
        useMicrophone: 'Use Microphone',
      },
      response: {
        title: 'Generated Content',
      },
      error: 'Failed to generate content. Please try again.',
      placeholders: {
        blogPost: 'e.g., A blog post about the water cycle',
        lessonPlan: 'e.g., A lesson plan for teaching fractions',
        quiz: 'e.g., A 5-question multiple choice quiz on World War II',
        summary: 'e.g., Summarize the book "To Kill a Mockingbird"',
      },
    },
    imageWizard: {
      title: 'AI Image Wizard',
      description:
        'Create stunning images from your text descriptions. Describe the image you want, and the AI will bring it to life.',
      form: {
        prompt: 'Image Prompt',
        promptPlaceholder: 'e.g., A majestic lion in the savanna at sunset',
        generate: 'Generate Image',
        generating: 'Generating...',
      },
      response: {
        title: 'Generated Image',
      },
      error: 'Failed to generate image. Please try again.',
    },
    essayGrader: {
      title: 'AI Essay Grader',
      description:
        'Get instant feedback on essays. Paste the essay below to receive a grade, remarks, and suggestions for improvement.',
      form: {
        essay: 'Essay Text',
        essayPlaceholder: 'Paste the student`s essay here...',
        grade: 'Grade Essay',
        grading: 'Grading...',
      },
      response: {
        grade: 'Grade',
        remarks: 'Remarks',
        strengths: 'Strengths',
        areasForImprovement: 'Areas for Improvement',
        brainstormingIdeas: 'Brainstorming Ideas',
      },
      error: 'Failed to grade essay. Please try again.',
    },
    visualExplorer: {
      title: 'AI Visual Explorer',
      description:
        'Generate 3D-style models from text. Describe an object, and the AI will create a visual representation.',
      form: {
        prompt: 'Object Prompt',
        promptPlaceholder: 'e.g., A detailed model of a human heart',
        generate: 'Generate Model',
        generating: 'Generating...',
      },
      response: {
        title: 'Generated Model',
      },
      error: 'Failed to generate model. Please try again.',
    },
    classroomManagement: {
      title: 'Classroom Management',
      description: 'Manage students and create worksheets for your classes.',
      students: {
        title: 'Students',
        add: 'Add Student',
        table: {
          name: 'Name',
          email: 'Email',
          actions: 'Actions',
        },
        dialog: {
          addTitle: 'Add New Student',
          addDescription:
            'Enter the details of the new student below. Click save when you`re done.',
          editTitle: 'Edit Student',
          editDescription:
            'Update the student`s details below. Click save when you`re done.',
          name: 'Name',
          email: 'Email',
          cancel: 'Cancel',
          save: 'Save Changes',
        },
      },
      worksheets: {
        title: 'Worksheets',
        create: 'Create Worksheet',
        dialog: {
          title: 'Create a New Worksheet',
          description:
            'Describe the worksheet you want to create. The AI will generate it for you.',
          prompt: 'Worksheet Prompt',
          promptPlaceholder:
            'e.g., A 10-question math worksheet on algebra for 8th grade',
          generate: 'Generate',
          generating: 'Generating...',
          cancel: 'Cancel',
        },
        error: 'Failed to create worksheet.',
      },
    },
    languageToggle: {
      toggle: 'Toggle language',
      en: 'English',
      as: 'Assamese',
      bn: 'Bengali',
      gu: 'Gujarati',
      hi: 'Hindi',
      kn: 'Kannada',
      ks: 'Kashmiri',
      kok: 'Konkani',
      ml: 'Malayalam',
      mni: 'Manipuri',
      mr: 'Marathi',
      ne: 'Nepali',
      or: 'Oriya',
      pa: 'Punjabi',
      sa: 'Sanskrit',
      sd: 'Sindhi',
      ta: 'Tamil',
      te: 'Telugu',
      ur: 'Urdu',
      brx: 'Bodo',
      sat: 'Santhali',
      mai: 'Maithili',
      doi: 'Dogri',
    },
  },
  hi: {
    page: {
      home: 'होम',
      contentGeneration: 'कंटेंट जनरेशन',
      imageWizard: 'इमेज विजार्ड',
      essayGrader: 'निबंध ग्रेडर',
      visualExplorer: 'विजुअल एक्सप्लोरर',
      classroomManagement: 'कक्षा प्रबंधन',
    },
    contentGeneration: {
      title: 'एआई कंटेंट जनरेशन',
      description:
        'शैक्षिक सामग्री सहजता से उत्पन्न करें। एक सामग्री प्रकार और विषय चुनें, और एआई को आपकी सहायता करने दें।',
      form: {
        contentType: 'सामग्री का प्रकार',
        topic: 'विषय',
        topicPlaceholder: 'जैसे, सौर मंडल',
        generate: 'उत्पन्न करें',
        generating: 'उत्पन्न हो रहा है...',
      },
      mic: {
        speakTopic: 'अपना विषय बोलें',
        listening: 'सुन रहा है...',
        useMicrophone: 'माइक्रोफोन का प्रयोग करें',
      },
      response: {
        title: 'उत्पन्न सामग्री',
      },
      error: 'सामग्री उत्पन्न करने में विफल। कृपया फिर से प्रयास करें।',
      placeholders: {
        blogPost: 'जैसे, जल चक्र के बारे में एक ब्लॉग पोस्ट',
        lessonPlan: 'जैसे, भिन्न सिखाने के लिए एक पाठ योजना',
        quiz: 'जैसे, द्वितीय विश्व युद्ध पर 5-प्रश्नों का बहुविकल्पीय प्रश्नोत्तरी',
        summary: 'जैसे, "टू किल ए मॉकिंगबर्ड" पुस्तक का सारांश',
      },
    },
    imageWizard: {
      title: 'एआई इमेज विजार्ड',
      description:
        'अपने टेक्स्ट विवरण से शानदार छवियां बनाएं। आप जो छवि चाहते हैं उसका वर्णन करें, और एआई उसे जीवंत कर देगा।',
      form: {
        prompt: 'छवि प्रॉम्प्ट',
        promptPlaceholder: 'जैसे, सूर्यास्त के समय सवाना में एक राजसी शेर',
        generate: 'छवि उत्पन्न करें',
        generating: 'उत्पन्न हो रहा है...',
      },
      response: {
        title: 'उत्पन्न छवि',
      },
      error: 'छवि उत्पन्न करने में विफल। कृपया फिर से प्रयास करें।',
    },
    essayGrader: {
      title: 'एआई निबंध ग्रेडर',
      description:
        'निबंधों पर तुरंत प्रतिक्रिया प्राप्त करें। ग्रेड, टिप्पणियां और सुधार के लिए सुझाव प्राप्त करने के लिए नीचे निबंध पेस्ट करें।',
      form: {
        essay: 'निबंध पाठ',
        essayPlaceholder: 'छात्र का निबंध यहां पेस्ट करें...',
        grade: 'निबंध ग्रेड करें',
        grading: 'ग्रेडिंग हो रही है...',
      },
      response: {
        grade: 'ग्रेड',
        remarks: 'टिप्पणियां',
        strengths: 'ताकत',
        areasForImprovement: 'सुधार के क्षेत्र',
        brainstormingIdeas: 'विचार-मंथन के विचार',
      },
      error: 'निबंध ग्रेड करने में विफल। कृपया फिर से प्रयास करें।',
    },
    visualExplorer: {
      title: 'एआई विजुअल एक्सप्लोरर',
      description:
        'टेक्स्ट से 3डी-शैली के मॉडल बनाएं। किसी वस्तु का वर्णन करें, और एआई एक दृश्य प्रतिनिधित्व बनाएगा।',
      form: {
        prompt: 'वस्तु प्रॉम्प्ट',
        promptPlaceholder: 'जैसे, मानव हृदय का एक विस्तृत मॉडल',
        generate: 'मॉडल उत्पन्न करें',
        generating: 'उत्पन्न हो रहा है...',
      },
      response: {
        title: 'उत्पन्न मॉडल',
      },
      error: 'मॉडल उत्पन्न करने में विफल। कृपया फिर से प्रयास करें।',
    },
    classroomManagement: {
      title: 'कक्षा प्रबंधन',
      description: 'छात्रों का प्रबंधन करें और अपनी कक्षाओं के लिए वर्कशीट बनाएं।',
      students: {
        title: 'छात्र',
        add: 'छात्र जोड़ें',
        table: {
          name: 'नाम',
          email: 'ईमेल',
          actions: 'कार्रवाइयाँ',
        },
        dialog: {
          addTitle: 'नया छात्र जोड़ें',
          addDescription:
            'नीचे नए छात्र का विवरण दर्ज करें। जब हो जाए तो सेव पर क्लिक करें।',
          editTitle: 'छात्र संपादित करें',
          editDescription:
            'नीचे छात्र का विवरण अपडेट करें। जब हो जाए तो सेव पर क्लिक करें।',
          name: 'नाम',
          email: 'ईमेल',
          cancel: 'रद्द करें',
          save: 'बदलाव सहेजें',
        },
      },
      worksheets: {
        title: 'वर्कशीट',
        create: 'वर्कशीट बनाएं',
        dialog: {
          title: 'एक नई वर्कशीट बनाएं',
          description:
            'आप जो वर्कशीट बनाना चाहते हैं उसका वर्णन करें। एआई इसे आपके लिए उत्पन्न करेगा।',
          prompt: 'वर्कशीट प्रॉम्प्ट',
          promptPlaceholder:
            'जैसे, 8वीं कक्षा के लिए बीजगणित पर 10-प्रश्नों की गणित वर्कशीट',
          generate: 'उत्पन्न करें',
          generating: 'उत्पन्न हो रहा है...',
          cancel: 'रद्द करें',
        },
        error: 'वर्कशीट बनाने में विफल।',
      },
    },
    languageToggle: {
      toggle: 'भाषा बदलें',
      en: 'अंग्रेजी',
      as: 'असमिया',
      bn: 'बंगाली',
      gu: 'गुजराती',
      hi: 'हिंदी',
      kn: 'कन्नड़',
      ks: 'कश्मीरी',
      kok: 'कोंकणी',
      ml: 'मलयालम',
      mni: 'मणिपुरी',
      mr: 'मराठी',
      ne: 'नेपाली',
      or: 'उड़िया',
      pa: 'पंजाबी',
      sa: 'संस्कृत',
      sd: 'सिंधी',
      ta: 'तमिल',
      te: 'तेलुगु',
      ur: 'उर्दू',
      brx: 'बोडो',
      sat: 'संथाली',
      mai: 'मैथिली',
      doi: 'डोगरी',
    },
  },
  mr: {
    page: {
      home: 'होम',
      contentGeneration: 'सामग्री निर्मिती',
      imageWizard: 'प्रतिमा विझार्ड',
      essayGrader: 'निबंध ग्रेडर',
      visualExplorer: 'व्हिज्युअल एक्सप्लोरर',
      classroomManagement: 'वर्ग व्यवस्थापन',
    },
    contentGeneration: {
      title: 'एआय सामग्री निर्मिती',
      description:
        'शैक्षणिक सामग्री सहजतेने तयार करा. सामग्रीचा प्रकार आणि विषय निवडा आणि एआयला तुमची मदत करू द्या.',
      form: {
        contentType: 'सामग्रीचा प्रकार',
        topic: 'विषय',
        topicPlaceholder: 'उदा. सूर्यमाला',
        generate: 'तयार करा',
        generating: 'तयार होत आहे...',
      },
      mic: {
        speakTopic: 'तुमचा विषय बोला',
        listening: 'ऐकत आहे...',
        useMicrophone: 'मायक्रोफोन वापरा',
      },
      response: {
        title: 'तयार केलेली सामग्री',
      },
      error: 'सामग्री तयार करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
      placeholders: {
        blogPost: 'उदा. जलचक्राबद्दल एक ब्लॉग पोस्ट',
        lessonPlan: 'उदा. अपूर्णांक शिकवण्यासाठी एक पाठ योजना',
        quiz: 'उदा. दुसऱ्या महायुद्धावर ५ प्रश्नांची बहुपर्यायी प्रश्नमंजुषा',
        summary: 'उदा. "टू किल ए मॉकिंगबर्ड" पुस्तकाचा सारांश',
      },
    },
    imageWizard: {
      title: 'एआय प्रतिमा विझार्ड',
      description:
        'तुमच्या मजकूर वर्णनांमधून आकर्षक प्रतिमा तयार करा. तुम्हाला हव्या असलेल्या प्रतिमेचे वर्णन करा आणि एआय ते जिवंत करेल.',
      form: {
        prompt: 'प्रतिमा प्रॉम्प्ट',
        promptPlaceholder: 'उदा. सूर्यास्ताच्या वेळी सवानामध्ये एक भव्य सिंह',
        generate: 'प्रतिमा तयार करा',
        generating: 'तयार होत आहे...',
      },
      response: {
        title: 'तयार केलेली प्रतिमा',
      },
      error: 'प्रतिमा तयार करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
    },
    essayGrader: {
      title: 'एआय निबंध ग्रेडर',
      description:
        'निबंधांवर त्वरित अभिप्राय मिळवा. ग्रेड, टिप्पण्या आणि सुधारणेसाठी सूचना मिळवण्यासाठी खाली निबंध पेस्ट करा.',
      form: {
        essay: 'निबंध मजकूर',
        essayPlaceholder: 'विद्यार्थ्याचा निबंध येथे पेस्ट करा...',
        grade: 'निबंध ग्रेड करा',
        grading: 'ग्रेडिंग होत आहे...',
      },
      response: {
        grade: 'ग्रेड',
        remarks: 'शेरा',
        strengths: 'सामर्थ्ये',
        areasForImprovement: 'सुधारणेसाठी क्षेत्रे',
        brainstormingIdeas: 'विचारमंथन कल्पना',
      },
      error: 'निबंध ग्रेड करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
    },
    visualExplorer: {
      title: 'एआय व्हिज्युअल एक्सप्लोरर',
      description:
        'मजकूरापासून 3D-शैलीचे मॉडेल तयार करा. वस्तूचे वर्णन करा आणि AI एक दृश्य प्रतिनिधित्व तयार करेल.',
      form: {
        prompt: 'वस्तू प्रॉम्प्ट',
        promptPlaceholder: 'उदा. मानवी हृदयाचे तपशीलवार मॉडेल',
        generate: 'मॉडेल तयार करा',
        generating: 'तयार होत आहे...',
      },
      response: {
        title: 'तयार केलेले मॉडेल',
      },
      error: 'मॉडेल तयार करण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
    },
    classroomManagement: {
      title: 'वर्ग व्यवस्थापन',
      description: 'विद्यार्थ्यांचे व्यवस्थापन करा आणि तुमच्या वर्गांसाठी वर्कशीट तयार करा.',
      students: {
        title: 'विद्यार्थी',
        add: 'विद्यार्थी जोडा',
        table: {
          name: 'नाव',
          email: 'ईमेल',
          actions: 'क्रिया',
        },
        dialog: {
          addTitle: 'नवीन विद्यार्थी जोडा',
          addDescription:
            'खाली नवीन विद्यार्थ्याचे तपशील प्रविष्ट करा. झाल्यावर सेव्ह क्लिक करा.',
          editTitle: 'विद्यार्थी संपादित करा',
          editDescription:
            'खाली विद्यार्थ्याचे तपशील अद्यतनित करा. झाल्यावर सेव्ह क्लिक करा.',
          name: 'नाव',
          email: 'ईमेल',
          cancel: 'रद्द करा',
          save: 'बदल जतन करा',
        },
      },
      worksheets: {
        title: 'वर्कशीट',
        create: 'वर्कशीट तयार करा',
        dialog: {
          title: 'नवीन वर्कशीट तयार करा',
          description:
            'तुम्ही तयार करू इच्छित असलेल्या वर्कशीटचे वर्णन करा. एआय ते तुमच्यासाठी तयार करेल.',
          prompt: 'वर्कशीट प्रॉम्प्ट',
          promptPlaceholder:
            'उदा. इयत्ता 8 वी साठी बीजगणितावर 10-प्रश्नांची गणिताची वर्कशीट',
          generate: 'तयार करा',
          generating: 'तयार होत आहे...',
          cancel: 'रद्द करा',
        },
        error: 'वर्कशीट तयार करण्यात अयशस्वी.',
      },
    },
    languageToggle: {
      toggle: 'भाषा बदला',
      en: 'इंग्रजी',
      as: 'आसामी',
      bn: 'बंगाली',
      gu: 'गुजराती',
      hi: 'हिंदी',
      kn: 'कन्नड',
      ks: 'काश्मिरी',
      kok: 'कोंकणी',
      ml: 'मल्याळम',
      mni: 'मणिपुरी',
      mr: 'मराठी',
      ne: 'नेपाळी',
      or: 'ओडिया',
      pa: 'पंजाबी',
      sa: 'संस्कृत',
      sd: 'सिंधी',
      ta: 'तमिळ',
      te: 'तेलुगु',
      ur: 'उर्दू',
      brx: 'बोडो',
      sat: 'संथाळी',
      mai: 'मैथिली',
      doi: 'डोगरी',
    },
  },
  bn: {
    page: {},
  },
  ta: {
    page: {},
  },
  te: {
    page: {},
  },
  gu: {
    page: {},
  },
  kn: {
    page: {},
  },
  ml: {
    page: {},
  },
  or: {
    page: {},
  },
  pa: {
    page: {},
  },
  as: {
    page: {},
  },
  ks: {
    page: {},
  },
  kok: {
    page: {},
  },
  mni: {
    page: {},
  },
  ne: {
    page: {},
  },
  sa: {
    page: {},
  },
  sd: {
    page: {},
  },
  ur: {
    page: {},
  },
  brx: {
    page: {},
  },
  sat: {
    page: {},
  },
  mai: {
    page: {},
  },
  doi: {
    page: {},
  },
};
