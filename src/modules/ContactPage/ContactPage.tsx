import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

type TeamMember = {
  name: string;
  photo: string;
  github: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Dmytro Kashchenko',
    photo: '/img/team/Dmytro.jpg',
    github: 'https://github.com/reb0rned',
    linkedin: 'https://www.linkedin.com/in/dmytro-kashchenko-1983981a9/',
  },
  {
    name: 'Maksym Bilous',
    photo: '/img/team/Maksym .jpg',
    github: 'https://github.com/maxbilfed',
    linkedin: 'https://www.linkedin.com/in/maksym-bil-fedev/',
  },
  {
    name: 'Daria Radtkina',
    photo: '/img/team/Darya.jpg',
    github: 'https://github.com/DariaRadtkina',
    linkedin: 'https://www.linkedin.com/in/daria-r-9268bb360/',
  },
  {
    name: 'Sofiya An',
    photo: '/img/team/Sofiya.jpeg',
    github: 'https://github.com/ansofidev',
    linkedin: 'https://www.linkedin.com/in/sofiya-a-566937360/',
  },
];

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div
      id="contact-page"
      className="min-h-screen bg-[#0F111A] px-4 sm:px-10 py-10 text-[#F1F2F9]"
    >
      <h1 className="text-3xl sm:text-4xl font-[montBold] text-center mb-12">
        {t('contactsPage.title')}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            id="contact-page-user"
            key={idx}
            className="bg-[#161827] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 rounded-xl overflow-hidden cursor-pointer flex flex-col items-center text-center p-6 h-full"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border border-[#2A2D3A]"
            />
            <h2 className="text-lg font-[montBold] mb-2">{member.name}</h2>
            <div className="flex gap-4 text-xl mt-2">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F1F2F9] hover:text-[#905BFF]"
              >
                <FaGithub />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F1F2F9] hover:text-[#905BFF]"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
