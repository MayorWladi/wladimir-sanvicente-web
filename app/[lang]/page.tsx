import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

import AboutMe from "@/app/_components/widgets/AboutMe";
import LanguageSwitch from "@/app/_components/widgets/LanguageSwitch";
import ProfilePhoto from "@/app/_components/widgets/ProfilePhoto";
import CoffeeLinkedInSection from "@/app/_components/widgets/CoffeeLinkedInSection";
import ProjectsWidget from "@/app/_components/widgets/ProjectsWidget";
import GithubWidget from "@/app/_components/widgets/GithubWidget";
import SkillsGrid from "@/app/_components/widgets/SkillsGrid";
import ExperienceWidget from "@/app/_components/widgets/ExperienceWidget";
import SpotifyWidget from "@/app/_components/widgets/SpotifyWidget";
import DiscordActivityGroup from "@/app/_components/widgets/DiscordActivityGroup";
import MailtoWidget from "@/app/_components/widgets/MailtoWidget";
import { LanyardProvider } from "@/app/_components/LanyardProvider";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <LanyardProvider>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-300 p-3 sm:p-4 auto-rows-[192px]">
        {/* Row 1-2: AboutMe (3col 2row) + Language + Photo */}
        <AboutMe dict={dict} />
        <ProfilePhoto />
        <LanguageSwitch currentLabel={dict.language.current} />

        {/* Row 3: Projects (2col) + Coffee & LinkedIn Animation Section (2col) */}
        <ProjectsWidget
          title={dict.projects.title}
          description={dict.projects.description}
          lang={lang}
        />
        <CoffeeLinkedInSection dict={dict} />

        {/* Row 4: Github (2col) + Experience + Skills */}
        <GithubWidget dict={dict} />
        <ExperienceWidget dict={dict} />
        <SkillsGrid />

        {/* Row 5: Spotify (2col) + Discord + Theme + Mailto */}
        <SpotifyWidget
          listeningLabel={dict.spotify.listening}
          offlineLabel={dict.spotify.offline}
        />
        <DiscordActivityGroup />
        <MailtoWidget />
      </section >
    </LanyardProvider>
  );
}


