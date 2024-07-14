(async () => {
    const inquirer = await import('inquirer');
    const chalk = (await import('chalk')).default;
    const figlet = (await import('figlet')).default;
    const boxen = (await import('boxen')).default;
    const chalkAnimation = await import('chalk-animation');
  
    const displayLoadingScreen = async () => {
      for (let i = 0; i <= 100; i++) {
        console.clear();
        const loadingText = figlet.textSync(`Loading... ${i}%`, { horizontalLayout: 'full' });
        const animation = chalkAnimation.default.rainbow(loadingText);
        await new Promise(resolve => setTimeout(() => {
          animation.stop();
          resolve();
        }, 30));
      }
      console.clear(); 
    };
  
    const displayHeader = () => {
      console.log(
        chalk.yellowBright(
          figlet.textSync('My Resume', { horizontalLayout: 'full' })
        )
      );
    };
  
    const displayBio = () => {
      console.log(
        boxen(
          `${chalk.yellow('Name:')} ${chalk.redBright('Sk Mirajul Islam')}\n${chalk.yellow('Title:')} ${chalk.redBright('Software Developer')} \n${chalk.yellow('Location:')}  ${chalk.redBright('Hooghly, West Bengal, India')} \n${chalk.yellow('Email:')} ${chalk.redBright('skmirajulislam181@gmail.com')}`,
          { padding: 1, borderColor: 'green', margin: 1, float: 'center' }
        )
      );
    };
  
    const displaySection = async (title, content) => {
      console.log(chalk.yellow.bold(`\n${title}\n`));
      for (const item of content) {
        const animation = chalkAnimation.default.rainbow(`• ${item}`);
        await new Promise(resolve => setTimeout(() => {
          animation.stop();
          resolve();
        }, 1000));
      }
    };
  
    const mainMenu = [
      {
        type: 'list',
        name: 'mainMenu',
        message: 'Which section would you like to view?',
        choices: ['Education', 'Experience', 'Skills', 'Projects', 'Contact', 'Exit']
      }
    ];
  
    const education = [
      'Bachelor of Science in Computer Science, University XYZ (2024 - 2028)',
      'Diploma in Computer Science, Technique polytechnique institute (2021 - 2024)'
    ];
  
    const experience = [
      'Software Developer at Octanet pvt (2022 - 2022)',
      'Junior Developer at Topstack India (2022 - 2022)'
    ];
  
    const skills = [
      'JavaScript, Node.js, React, CSS3, ML, HTML',
      'Python, Core Java, C, DSA',
      'Git, Docker, github, Google Cloud',
      'SQL, MongoDB, Fire base'
    ];
  
    const projects = [
      'JourneyCusine: its A hotel booking management platform for the travellers',
      'YOLO-V3-Object-Tracker: OBJECT DETC YOLO DEEP LEARNING MODEL'
    ];
  
    const contact = [
      'Email: skmirajulislam181@gmail.com',
      'LinkedIn: https://www.linkedin.com/in/sk-mirajul-islam-876438261/',
      'GitHub: https://github.com/skmirajulislam'
    ];
  
    const sectionContent = {
      Education: education,
      Experience: experience,
      Skills: skills,
      Projects: projects,
      Contact: contact
    };
  
    const handleSection = async (section) => {
      await displaySection(section, sectionContent[section]);
      const { action } = await inquirer.default.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Choose an option:',
          choices: ['Back to Main Menu', 'Exit']
        }
      ]);
  
      if (action === 'Exit') {
        console.log(chalk.red('Goodbye!'));
        process.exit();
      }
    };
  
    const main = async () => {
      await displayLoadingScreen();
      displayHeader();
      displayBio();
  
      while (true) {
        const { mainMenu: section } = await inquirer.default.prompt(mainMenu);
  
        if (section === 'Exit') {
          console.log(chalk.red('Goodbye!'));
          break;
        }
  
        await handleSection(section);
      }
    };
  
    main();
  })();
  