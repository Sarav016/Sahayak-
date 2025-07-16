
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
    page: {
      home: 'হোম',
      contentGeneration: 'বিষয়বস্তু তৈরি',
      imageWizard: 'চিত্র উইজার্ড',
      essayGrader: 'প্রবন্ধ গ্রেডার',
      visualExplorer: 'ভিজ্যুয়াল এক্সপ্লোরার',
      classroomManagement: 'শ্রেণীকক্ষ ব্যবস্থাপনা',
    },
    contentGeneration: {
      title: 'এআই বিষয়বস্তু তৈরি',
      description:
        'সহজেই শিক্ষামূলক বিষয়বস্তু তৈরি করুন। একটি বিষয়বস্তুর ধরন এবং বিষয় চয়ন করুন, এবং এআই আপনাকে সহায়তা করবে।',
      form: {
        contentType: 'বিষয়বস্তুর ধরন',
        topic: 'বিষয়',
        topicPlaceholder: 'যেমন, সৌরজগত',
        generate: 'তৈরি করুন',
        generating: 'তৈরি হচ্ছে...',
      },
      mic: {
        speakTopic: 'আপনার বিষয় বলুন',
        listening: 'শুনছি...',
        useMicrophone: 'মাইক্রোফোন ব্যবহার করুন',
      },
      response: {
        title: 'তৈরি করা বিষয়বস্তু',
      },
      error: 'বিষয়বস্তু তৈরি করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।',
      placeholders: {
        blogPost: 'যেমন, জলচক্র সম্পর্কে একটি ব্লগ পোস্ট',
        lessonPlan: 'যেমন, ভগ্নাংশ শেখানোর জন্য একটি পাঠ পরিকল্পনা',
        quiz: 'যেমন, দ্বিতীয় বিশ্বযুদ্ধের উপর ৫-প্রশ্নের একাধিক পছন্দের কুইজ',
        summary: 'যেমন, "টু কিল এ মকিংবার্ড" বইটির সারসংক্ষেপ',
      },
    },
    imageWizard: {
      title: 'এআই চিত্র উইজার্ড',
      description:
        'আপনার পাঠ্য বিবরণ থেকে অত্যাশ্চর্য চিত্র তৈরি করুন। আপনি যে চিত্রটি চান তা বর্ণনা করুন, এবং এআই এটিকে জীবন্ত করে তুলবে।',
      form: {
        prompt: 'চিত্র প্রম্পট',
        promptPlaceholder: 'যেমন, সূর্যাস্তের সময় সাভানায় একটি মহিমান্বিত সিংহ',
        generate: 'চিত্র তৈরি করুন',
        generating: 'তৈরি হচ্ছে...',
      },
      response: {
        title: 'তৈরি করা চিত্র',
      },
      error: 'চিত্র তৈরি করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।',
    },
    essayGrader: {
      title: 'এআই প্রবন্ধ গ্রেডার',
      description:
        'প্রবন্ধের উপর তাত্ক্ষণিক প্রতিক্রিয়া পান। গ্রেড, মন্তব্য এবং উন্নতির জন্য পরামর্শ পেতে নীচে প্রবন্ধটি পেস্ট করুন।',
      form: {
        essay: 'প্রবন্ধ পাঠ্য',
        essayPlaceholder: 'ছাত্রের প্রবন্ধ এখানে পেস্ট করুন...',
        grade: 'প্রবন্ধ গ্রেড করুন',
        grading: 'গ্রেডিং হচ্ছে...',
      },
      response: {
        grade: 'গ্রেড',
        remarks: 'মন্তব্য',
        strengths: 'শক্তি',
        areasForImprovement: 'উন্নতির ক্ষেত্র',
        brainstormingIdeas: 'মস্তিষ্কপ্রসূত ধারণা',
      },
      error: 'প্রবন্ধ গ্রেড করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।',
    },
    visualExplorer: {
      title: 'এআই ভিজ্যুয়াল এক্সপ্লোরার',
      description:
        'পাঠ্য থেকে 3D-শৈলীর মডেল তৈরি করুন। একটি বস্তুর বর্ণনা দিন, এবং AI একটি ভিজ্যুয়াল উপস্থাপনা তৈরি করবে।',
      form: {
        prompt: 'অবজেক্ট প্রম্পট',
        promptPlaceholder: 'যেমন, একটি মানব হৃদপিণ্ডের বিস্তারিত মডেল',
        generate: 'মডেল তৈরি করুন',
        generating: 'তৈরি হচ্ছে...',
      },
      response: {
        title: 'তৈরি করা মডেল',
      },
      error: 'মডেল তৈরি করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।',
    },
    classroomManagement: {
      title: 'শ্রেণীকক্ষ ব্যবস্থাপনা',
      description: 'ছাত্রদের পরিচালনা করুন এবং আপনার ক্লাসের জন্য ওয়ার্কশিট তৈরি করুন।',
      students: {
        title: 'ছাত্র',
        add: 'ছাত্র যোগ করুন',
        table: {
          name: 'নাম',
          email: 'ইমেল',
          actions: 'কর্ম',
        },
        dialog: {
          addTitle: 'নতুন ছাত্র যোগ করুন',
          addDescription:
            'নীচে নতুন ছাত্রের বিবরণ লিখুন। হয়ে গেলে সেভ ক্লিক করুন।',
          editTitle: 'ছাত্র সম্পাদনা করুন',
          editDescription:
            'নীচে ছাত্রের বিবরণ আপডেট করুন। হয়ে গেলে সেভ ক্লিক করুন।',
          name: 'নাম',
          email: 'ইমেল',
          cancel: 'বাতিল করুন',
          save: 'পরিবর্তনগুলি সংরক্ষণ করুন',
        },
      },
      worksheets: {
        title: 'ওয়ার্কশিট',
        create: 'ওয়ার্কশিট তৈরি করুন',
        dialog: {
          title: 'একটি নতুন ওয়ার্কশিট তৈরি করুন',
          description:
            'আপনি যে ওয়ার্কশিটটি তৈরি করতে চান তা বর্ণনা করুন। এআই এটি আপনার জন্য তৈরি করবে।',
          prompt: 'ওয়ার্কশিট প্রম্পট',
          promptPlaceholder:
            'যেমন, ৮ম শ্রেণীর জন্য বীজগণিতের উপর ১০-প্রশ্নের গণিত ওয়ার্কশিট',
          generate: 'তৈরি করুন',
          generating: 'তৈরি হচ্ছে...',
          cancel: 'বাতিল করুন',
        },
        error: 'ওয়ার্কশিট তৈরি করতে ব্যর্থ।',
      },
    },
    languageToggle: {
      toggle: 'ভাষা পরিবর্তন করুন',
      en: 'ইংরেজি',
      as: 'অসমীয়া',
      bn: 'বাংলা',
      gu: 'গুজরাটি',
      hi: 'হিন্দি',
      kn: 'কন্নড়',
      ks: 'কাশ্মীরি',
      kok: 'কোঙ্কনি',
      ml: 'মালায়ালাম',
      mni: 'মণিপুরি',
      mr: 'মারাঠি',
      ne: 'নেপালি',
      or: 'ওড়িয়া',
      pa: 'পাঞ্জাবি',
      sa: 'সংস্কৃত',
      sd: 'সিন্ধি',
      ta: 'তামিল',
      te: 'তেলুগু',
      ur: 'উর্দু',
      brx: 'বোড়ো',
      sat: 'সাঁওতালি',
      mai: 'মৈথিলী',
      doi: 'ডোগরি',
    },
  },
  ta: {
    page: {
      home: 'முகப்பு',
      contentGeneration: 'உள்ளடக்க உருவாக்கம்',
      imageWizard: 'பட வழிகாட்டி',
      essayGrader: 'கட்டுரை மதிப்பீட்டாளர்',
      visualExplorer: 'காட்சி ஆய்வாளர்',
      classroomManagement: 'வகுப்பறை மேலாண்மை',
    },
    contentGeneration: {
      title: 'AI உள்ளடக்க உருவாக்கம்',
      description:
        'கல்வி உள்ளடக்கத்தை சிரமமின்றி உருவாக்கவும். ஒரு உள்ளடக்க வகை மற்றும் தலைப்பைத் தேர்வுசெய்து, AI உங்களுக்கு உதவட்டும்.',
      form: {
        contentType: 'உள்ளடக்க வகை',
        topic: 'தலைப்பு',
        topicPlaceholder: 'எ.கா., சூரிய மண்டலம்',
        generate: 'உருவாக்கு',
        generating: 'உருவாக்குகிறது...',
      },
      mic: {
        speakTopic: 'உங்கள் தலைப்பைப் பேசுங்கள்',
        listening: 'கேட்கிறது...',
        useMicrophone: 'மைக்ரோஃபோனைப் பயன்படுத்தவும்',
      },
      response: {
        title: 'உருவாக்கப்பட்ட உள்ளடக்கம்',
      },
      error: 'உள்ளடக்கத்தை உருவாக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
      placeholders: {
        blogPost: 'எ.கா., நீர் சுழற்சி பற்றிய ஒரு வலைப்பதிவு இடுகை',
        lessonPlan: 'எ.கா., பின்னங்களை கற்பிப்பதற்கான ஒரு பாடத் திட்டம்',
        quiz: 'எ.கா., இரண்டாம் உலகப் போர் குறித்த 5-கேள்வி பல தேர்வு வினாடி வினா',
        summary: 'எ.கா., "டு கில் எ மாக்கிங்பேர்ட்" புத்தகத்தைச் சுருக்கவும்',
      },
    },
    imageWizard: {
      title: 'AI பட வழிகாட்டி',
      description:
        'உங்கள் உரை விளக்கங்களிலிருந்து அற்புதமான படங்களை உருவாக்கவும். நீங்கள் விரும்பும் படத்தை விவரிக்கவும், AI அதை உயிர்ப்பிக்கும்.',
      form: {
        prompt: 'படத் தூண்டுதல்',
        promptPlaceholder:
          'எ.கா., சூரிய அஸ்தமனத்தில் சவன்னாவில் ஒரு கம்பீரமான சிங்கம்',
        generate: 'படத்தை உருவாக்கு',
        generating: 'உருவாக்குகிறது...',
      },
      response: {
        title: 'உருவாக்கப்பட்ட படம்',
      },
      error: 'படத்தை உருவாக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    },
    essayGrader: {
      title: 'AI கட்டுரை மதிப்பீட்டாளர்',
      description:
        'கட்டுரைகளுக்கு உடனடி கருத்துக்களைப் பெறுங்கள். தரம், குறிப்புகள் மற்றும் முன்னேற்றத்திற்கான பரிந்துரைகளைப் பெற கீழே உள்ள கட்டுரையை ஒட்டவும்.',
      form: {
        essay: 'கட்டுரை உரை',
        essayPlaceholder: 'மாணவரின் கட்டுரையை இங்கே ஒட்டவும்...',
        grade: 'கட்டுரையை மதிப்பிடு',
        grading: 'மதிப்பிடுகிறது...',
      },
      response: {
        grade: 'தரம்',
        remarks: 'குறிப்புகள்',
        strengths: 'பலங்கள்',
        areasForImprovement: 'மேம்பாட்டிற்கான பகுதிகள்',
        brainstormingIdeas: 'மூளைச்சலவை யோசனைகள்',
      },
      error: 'கட்டுரையை மதிப்பிட முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    },
    visualExplorer: {
      title: 'AI காட்சி ஆய்வாளர்',
      description:
        'உரையிலிருந்து 3D-பாணி மாதிரிகளை உருவாக்கவும். ஒரு பொருளை விவரிக்கவும், AI ஒரு காட்சிப் பிரதிநிதித்துவத்தை உருவாக்கும்.',
      form: {
        prompt: 'பொருள் தூண்டுதல்',
        promptPlaceholder: 'எ.கா., மனித இதயத்தின் விரிவான மாதிரி',
        generate: 'மாதிரியை உருவாக்கு',
        generating: 'உருவாக்குகிறது...',
      },
      response: {
        title: 'உருவாக்கப்பட்ட மாதிரி',
      },
      error: 'மாதிரியை உருவாக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    },
    classroomManagement: {
      title: 'வகுப்பறை மேலாண்மை',
      description:
        'மாணவர்களை நிர்வகிக்கவும், உங்கள் வகுப்புகளுக்கு பணித்தாள்களை உருவாக்கவும்.',
      students: {
        title: 'மாணவர்கள்',
        add: 'மாணவரைச் சேர்',
        table: {
          name: 'பெயர்',
          email: 'மின்னஞ்சல்',
          actions: 'செயல்கள்',
        },
        dialog: {
          addTitle: 'புதிய மாணவரைச் சேர்',
          addDescription:
            'கீழே புதிய மாணவரின் விவரங்களை உள்ளிடவும். முடிந்ததும் சேமி என்பதைக் கிளிக் செய்க.',
          editTitle: 'மாணவரைத் திருத்து',
          editDescription:
            'கீழே மாணவரின் விவரங்களைப் புதுப்பிக்கவும். முடிந்ததும் சேமி என்பதைக் கிளிக் செய்க.',
          name: 'பெயர்',
          email: 'மின்னஞ்சல்',
          cancel: 'ரத்துசெய்',
          save: 'மாற்றங்களைச் சேமி',
        },
      },
      worksheets: {
        title: 'பணித்தாள்கள்',
        create: 'பணித்தாளை உருவாக்கு',
        dialog: {
          title: 'ஒரு புதிய பணித்தாளை உருவாக்கு',
          description:
            'நீங்கள் உருவாக்க விரும்பும் பணித்தாளை விவரிக்கவும். AI அதை உங்களுக்காக உருவாக்கும்.',
          prompt: 'பணித்தாள் தூண்டுதல்',
          promptPlaceholder:
            'எ.கா., 8 ஆம் வகுப்புக்கு இயற்கணிதத்தில் 10-கேள்வி கணிதப் பணித்தாள்',
          generate: 'உருவாக்கு',
          generating: 'உருவாக்குகிறது...',
          cancel: 'ரத்துசெய்',
        },
        error: 'பணித்தாளை உருவாக்க முடியவில்லை.',
      },
    },
    languageToggle: {
      toggle: 'மொழியை மாற்று',
      en: 'ஆங்கிலம்',
      as: 'அசாமி',
      bn: 'பெங்காலி',
      gu: 'குஜராத்தி',
      hi: 'இந்தி',
      kn: 'கன்னடம்',
      ks: 'காஷ்மீரி',
      kok: 'கொங்கனி',
      ml: 'மலையாளம்',
      mni: 'மணிப்பூரி',
      mr: 'மராத்தி',
      ne: 'நேபாளி',
      or: 'ஒரியா',
      pa: 'பஞ்சாபி',
      sa: 'சமஸ்கிருதம்',
      sd: 'சிந்தி',
      ta: 'தமிழ்',
      te: 'தெலுங்கு',
      ur: 'உருது',
      brx: 'போடோ',
      sat: 'சந்தாலி',
      mai: 'மைதிலி',
      doi: 'டோக்ரி',
    },
  },
  te: {
    page: {
      home: 'హోమ్',
      contentGeneration: 'కంటెంట్ జనరేషన్',
      imageWizard: 'ఇమేజ్ విజార్డ్',
      essayGrader: 'వ్యాసం గ్రేడర్',
      visualExplorer: 'విజువల్ ఎక్స్ప్లోరర్',
      classroomManagement: 'తరగతి గది నిర్వహణ',
    },
    contentGeneration: {
      title: 'AI కంటెంట్ జనరేషన్',
      description:
        'విద్యా కంటెంట్ను అప్రయత్నంగా రూపొందించండి. కంటెంట్ రకం మరియు అంశాన్ని ఎంచుకోండి మరియు AI మీకు సహాయం చేయనివ్వండి.',
      form: {
        contentType: 'కంటెంట్ రకం',
        topic: 'అంశం',
        topicPlaceholder: 'ఉదా., సౌర వ్యవస్థ',
        generate: 'రూపొందించండి',
        generating: 'రూపొందిస్తోంది...',
      },
      mic: {
        speakTopic: 'మీ అంశాన్ని మాట్లాడండి',
        listening: 'వింటోంది...',
        useMicrophone: 'మైక్రోఫోన్ ఉపయోగించండి',
      },
      response: {
        title: 'రూపొందించబడిన కంటెంట్',
      },
      error: 'కంటెంట్ను రూపొందించడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
      placeholders: {
        blogPost: 'ఉదా., నీటి చక్రం గురించి ఒక బ్లాగ్ పోస్ట్',
        lessonPlan: 'ఉదా., భిన్నాలను బోధించడానికి ఒక పాఠ ప్రణాళిక',
        quiz: 'ఉదా., రెండవ ప్రపంచ యుద్ధంపై 5-ప్రశ్నల బహుళైచ్ఛిక క్విజ్',
        summary: 'ఉదా., "టు కిల్ ఎ మాకింగ్బర్డ్" పుస్తకాన్ని సంగ్రహించండి',
      },
    },
    imageWizard: {
      title: 'AI ఇమేజ్ విజార్డ్',
      description:
        'మీ టెక్స్ట్ వివరణల నుండి అద్భుతమైన చిత్రాలను సృష్టించండి. మీకు కావలసిన చిత్రాన్ని వివరించండి మరియు AI దానిని జీవం పోస్తుంది.',
      form: {
        prompt: 'చిత్ర ప్రాంప్ట్',
        promptPlaceholder: 'ఉదా., సూర్యాస్తమయం వద్ద సవన్నాలో ఒక గంభీరమైన సింహం',
        generate: 'చిత్రాన్ని రూపొందించండి',
        generating: 'రూపొందిస్తోంది...',
      },
      response: {
        title: 'రూపొందించబడిన చిత్రం',
      },
      error: 'చిత్రాన్ని రూపొందించడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    },
    essayGrader: {
      title: 'AI వ్యాసం గ్రేడర్',
      description:
        'వ్యాసాలపై తక్షణ అభిప్రాయాన్ని పొందండి. గ్రేడ్, వ్యాఖ్యలు మరియు అభివృద్ధి కోసం సూచనలను స్వీకరించడానికి దిగువ వ్యాసాన్ని అతికించండి.',
      form: {
        essay: 'వ్యాసం టెక్స్ట్',
        essayPlaceholder: 'విద్యార్థి వ్యాసాన్ని ఇక్కడ అతికించండి...',
        grade: 'వ్యాసాన్ని గ్రేడ్ చేయండి',
        grading: 'గ్రేడింగ్ చేస్తోంది...',
      },
      response: {
        grade: 'గ్రేడ్',
        remarks: 'వ్యాఖ్యలు',
        strengths: 'బలాలు',
        areasForImprovement: 'అభివృద్ధి కోసం ప్రాంతాలు',
        brainstormingIdeas: 'మెదడును కదిలించే ఆలోచనలు',
      },
      error: 'వ్యాసాన్ని గ్రేడ్ చేయడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    },
    visualExplorer: {
      title: 'AI విజువల్ ఎక్స్ప్లోరర్',
      description:
        'టెక్స్ట్ నుండి 3D-శైలి మోడళ్లను రూపొందించండి. ఒక వస్తువును వివరించండి మరియు AI ఒక దృశ్య ప్రాతినిధ్యాన్ని సృష్టిస్తుంది.',
      form: {
        prompt: 'వస్తువు ప్రాంప్ట్',
        promptPlaceholder: 'ఉదా., మానవ గుండె యొక్క వివరణాత్మక నమూనా',
        generate: 'మోడల్ను రూపొందించండి',
        generating: 'రూపొందిస్తోంది...',
      },
      response: {
        title: 'రూపొందించబడిన మోడల్',
      },
      error: 'మోడల్ను రూపొందించడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    },
    classroomManagement: {
      title: 'తరగతి గది నిర్వహణ',
      description:
        'విద్యార్థులను నిర్వహించండి మరియు మీ తరగతుల కోసం వర్క్షీట్లను సృష్టించండి.',
      students: {
        title: 'విద్యార్థులు',
        add: 'విద్యార్థిని జోడించండి',
        table: {
          name: 'పేరు',
          email: 'ఇమెయిల్',
          actions: 'చర్యలు',
        },
        dialog: {
          addTitle: 'కొత్త విద్యార్థిని జోడించండి',
          addDescription:
            'దిగువ కొత్త విద్యార్థి వివరాలను నమోదు చేయండి. మీరు పూర్తి చేసినప్పుడు సేవ్ క్లిక్ చేయండి.',
          editTitle: 'విద్యార్థిని సవరించండి',
          editDescription:
            'దిగువ విద్యార్థి వివరాలను నవీకరించండి. మీరు పూర్తి చేసినప్పుడు సేవ్ క్లిక్ చేయండి.',
          name: 'పేరు',
          email: 'ఇమెయిల్',
          cancel: 'రద్దు చేయండి',
          save: 'మార్పులను సేవ్ చేయండి',
        },
      },
      worksheets: {
        title: 'వర్క్షీట్లు',
        create: 'వర్క్షీట్ను సృష్టించండి',
        dialog: {
          title: 'కొత్త వర్క్షీట్ను సృష్టించండి',
          description:
            'మీరు సృష్టించాలనుకుంటున్న వర్క్షీట్ను వివరించండి. AI మీ కోసం దానిని రూపొందిస్తుంది.',
          prompt: 'వర్క్షీట్ ప్రాంప్ట్',
          promptPlaceholder:
            'ఉదా., 8వ తరగతికి బీజగణితంపై 10-ప్రశ్నల గణిత వర్క్షీట్',
          generate: 'రూపొందించండి',
          generating: 'రూపొందిస్తోంది...',
          cancel: 'రద్దు చేయండి',
        },
        error: 'వర్క్షీట్ను సృష్టించడంలో విఫలమైంది.',
      },
    },
    languageToggle: {
      toggle: 'భాషను మార్చండి',
      en: 'ఇంగ్లీష్',
      as: 'అస్సామీ',
      bn: 'బెంగాలీ',
      gu: 'గుజరాతీ',
      hi: 'హిందీ',
      kn: 'కన్నడ',
      ks: 'కాశ్మీరీ',
      kok: 'కొంకణి',
      ml: 'మలయాళం',
      mni: 'మణిపురి',
      mr: 'మరాఠీ',
      ne: 'నేపాలీ',
      or: 'ఒరియా',
      pa: 'పంజాబీ',
      sa: 'సంస్కృతం',
      sd: 'సింధి',
      ta: 'తమిళం',
      te: 'తెలుగు',
      ur: 'ఉర్దూ',
      brx: 'బోడో',
      sat: 'సంతాలి',
      mai: 'మైథిలి',
      doi: 'డోగ్రి',
    },
  },
  gu: {
    page: {
      home: 'હોમ',
      contentGeneration: 'સામગ્રી જનરેશન',
      imageWizard: 'ઇમેજ વિઝાર્ડ',
      essayGrader: 'નિબંધ ગ્રેડર',
      visualExplorer: 'વિઝ્યુઅલ એક્સપ્લોરર',
      classroomManagement: 'વર્ગખંડ સંચાલન',
    },
    contentGeneration: {
      title: 'એઆઈ સામગ્રી જનરેશન',
      description:
        'શૈક્ષણિક સામગ્રી વિના પ્રયાસે બનાવો. સામગ્રીનો પ્રકાર અને વિષય પસંદ કરો, અને એઆઈને તમારી સહાય કરવા દો.',
      form: {
        contentType: 'સામગ્રીનો પ્રકાર',
        topic: 'વિષય',
        topicPlaceholder: 'દા.ત., સૌરમંડળ',
        generate: 'બનાવો',
        generating: 'બનાવી રહ્યું છે...',
      },
      mic: {
        speakTopic: 'તમારો વિષય બોલો',
        listening: 'સાંભળી રહ્યું છે...',
        useMicrophone: 'માઇક્રોફોનનો ઉપયોગ કરો',
      },
      response: {
        title: 'બનાવેલી સામગ્રી',
      },
      error: 'સામગ્રી બનાવવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.',
      placeholders: {
        blogPost: 'દા.ત., જળ ચક્ર વિશેનો બ્લોગ પોસ્ટ',
        lessonPlan: 'દા.ત., અપૂર્ણાંક શીખવવા માટેનો પાઠ યોજના',
        quiz: 'દા.ત., બીજા વિશ્વયુદ્ધ પર 5-પ્રશ્નોની બહુવિધ પસંદગીની ક્વિઝ',
        summary: 'દા.ત., "ટુ કિલ અ મોકિંગબર્ડ" પુસ્તકનો સારાંશ આપો',
      },
    },
    imageWizard: {
      title: 'એઆઈ ઇમેજ વિઝાર્ડ',
      description:
        'તમારા ટેક્સ્ટ વર્ણનોમાંથી અદભૂત છબીઓ બનાવો. તમને જોઈતી છબીનું વર્ણન કરો, અને એઆઈ તેને જીવંત બનાવશે.',
      form: {
        prompt: 'છબી પ્રોમ્પ્ટ',
        promptPlaceholder: 'દા.ત., સૂર્યાસ્ત સમયે સવાનામાં એક જાજરમાન સિંહ',
        generate: 'છબી બનાવો',
        generating: 'બનાવી રહ્યું છે...',
      },
      response: {
        title: 'બનાવેલી છબી',
      },
      error: 'છબી બનાવવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.',
    },
    essayGrader: {
      title: 'એઆઈ નિબંધ ગ્રેડર',
      description:
        'નિબંધો પર ત્વરિત પ્રતિસાદ મેળવો. ગ્રેડ, ટિપ્પણીઓ અને સુધારણા માટેના સૂચનો મેળવવા માટે નીચે નિબંધ પેસ્ટ કરો.',
      form: {
        essay: 'નિબંધ ટેક્સ્ટ',
        essayPlaceholder: 'વિદ્યાર્થીનો નિબંધ અહીં પેસ્ટ કરો...',
        grade: 'નિબંધ ગ્રેડ કરો',
        grading: 'ગ્રેડિંગ કરી રહ્યું છે...',
      },
      response: {
        grade: 'ગ્રેડ',
        remarks: 'ટિપ્પણીઓ',
        strengths: 'શક્તિઓ',
        areasForImprovement: 'સુધારણા માટેના ક્ષેત્રો',
        brainstormingIdeas: 'વિચાર-મંથન વિચારો',
      },
      error: 'નિબંધ ગ્રેડ કરવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.',
    },
    visualExplorer: {
      title: 'એઆઈ વિઝ્યુઅલ એક્સપ્લોરર',
      description:
        'ટેક્સ્ટમાંથી 3D-શૈલીના મોડેલ્સ બનાવો. કોઈ વસ્તુનું વર્ણન કરો, અને AI દ્રશ્ય પ્રતિનિધિત્વ બનાવશે.',
      form: {
        prompt: 'ઑબ્જેક્ટ પ્રોમ્પ્ટ',
        promptPlaceholder: 'દા.ત., માનવ હૃદયનું વિગતવાર મોડેલ',
        generate: 'મોડેલ બનાવો',
        generating: 'બનાવી રહ્યું છે...',
      },
      response: {
        title: 'બનાવેલું મોડેલ',
      },
      error: 'મોડેલ બનાવવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.',
    },
    classroomManagement: {
      title: 'વર્ગખંડ સંચાલન',
      description: 'વિદ્યાર્થીઓનું સંચાલન કરો અને તમારા વર્ગો માટે વર્કશીટ બનાવો.',
      students: {
        title: 'વિદ્યાર્થીઓ',
        add: 'વિદ્યાર્થી ઉમેરો',
        table: {
          name: 'નામ',
          email: 'ઇમેઇલ',
          actions: 'ક્રિયાઓ',
        },
        dialog: {
          addTitle: 'નવો વિદ્યાર્થી ઉમેરો',
          addDescription:
            'નીચે નવા વિદ્યાર્થીની વિગતો દાખલ કરો. જ્યારે તમે પૂર્ણ કરી લો ત્યારે સાચવો ક્લિક કરો.',
          editTitle: 'વિદ્યાર્થીને સંપાદિત કરો',
          editDescription:
            'નીચે વિદ્યાર્થીની વિગતો અપડેટ કરો. જ્યારે તમે પૂર્ણ કરી લો ત્યારે સાચવો ક્લિક કરો.',
          name: 'નામ',
          email: 'ઇમેઇલ',
          cancel: 'રદ કરો',
          save: 'ફેરફારો સાચવો',
        },
      },
      worksheets: {
        title: 'વર્કશીટ્સ',
        create: 'વર્કશીટ બનાવો',
        dialog: {
          title: 'નવી વર્કશીટ બનાવો',
          description:
            'તમે જે વર્કશીટ બનાવવા માંગો છો તેનું વર્ણન કરો. એઆઈ તે તમારા માટે બનાવશે.',
          prompt: 'વર્કશીટ પ્રોમ્પ્ટ',
          promptPlaceholder:
            'દા.ત., 8મા ધોરણ માટે બીજગણિત પર 10-પ્રશ્નોની ગણિતની વર્કશીટ',
          generate: 'બનાવો',
          generating: 'બનાવી રહ્યું છે...',
          cancel: 'રદ કરો',
        },
        error: 'વર્કશીટ બનાવવામાં નિષ્ફળ.',
      },
    },
    languageToggle: {
      toggle: 'ભાષા બદલો',
      en: 'અંગ્રેજી',
      as: 'આસામી',
      bn: 'બંગાળी',
      gu: 'ગુજરાતી',
      hi: 'હિન્દી',
      kn: 'કન્નડ',
      ks: 'કાશ્મીરી',
      kok: 'કોંકણી',
      ml: 'મલયાલમ',
      mni: 'મણિપુરી',
      mr: 'મરાઠી',
      ne: 'નેપાળી',
      or: 'ઉડિયા',
      pa: 'પંજાબી',
      sa: 'સંસ્કૃત',
      sd: 'સિંધી',
      ta: 'તમિલ',
      te: 'તેલુગુ',
      ur: 'ઉર્દૂ',
      brx: 'બોડો',
      sat: 'સંથાલી',
      mai: 'મૈથિલી',
      doi: 'ડોગરી',
    },
  },
};
