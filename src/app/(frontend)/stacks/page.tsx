import Title from "@/components/Title";
import PostPageHeader from "@/components/PostPageHeader";
import StackCard from "@/components/StackCard";
import { authenticationStacks, databaseStacks, designStacks, developmentStacks, productivityStacks, visionControlStacks } from "@/lib/stacksData";

export const metadata = {
  title: "Stacks",
};

export default function page() {
  return (
    <main className="px-8">
      <section className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Stacks</Title>
          <div className="text-muted-foreground">My tech toolbox</div>
        </PostPageHeader>
        <hr />
        <div className="mb-10 mt-6 md:mb-20 md:mt-9 lg:mb-24 lg:mt-12">
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Development
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {developmentStacks.length >= 1 &&
                developmentStacks.map((developmentStack) => (
                  <StackCard
                    key={developmentStack.title}
                    padding={developmentStack.padding}
                    size={developmentStack.size}
                    icon={developmentStack.icon}
                    iconAlt={developmentStack.iconAlt}
                    title={developmentStack.title}
                    description={developmentStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Version Control
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {visionControlStacks.length >= 1 &&
                visionControlStacks.map((visionControlStack) => (
                  <StackCard
                    key={visionControlStack.title}
                    padding={visionControlStack.padding}
                    size={visionControlStack.size}
                    icon={visionControlStack.icon}
                    iconAlt={visionControlStack.iconAlt}
                    title={visionControlStack.title}
                    description={visionControlStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Authentication
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {authenticationStacks.length >= 1 &&
                authenticationStacks.map((authenticationStack) => (
                  <StackCard
                    key={authenticationStack.title}
                    padding={authenticationStack.padding}
                    size={authenticationStack.size}
                    icon={authenticationStack.icon}
                    iconAlt={authenticationStack.iconAlt}
                    title={authenticationStack.title}
                    description={authenticationStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Database
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {databaseStacks.length >= 1 &&
                databaseStacks.map((databaseStack) => (
                  <StackCard
                    key={databaseStack.title}
                    padding={databaseStack.padding}
                    size={databaseStack.size}
                    icon={databaseStack.icon}
                    iconAlt={databaseStack.iconAlt}
                    title={databaseStack.title}
                    description={databaseStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Design
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {designStacks.length >= 1 &&
                designStacks.map((designStack) => (
                  <StackCard
                    key={designStack.title}
                    padding={designStack.padding}
                    size={designStack.size}
                    icon={designStack.icon}
                    iconAlt={designStack.iconAlt}
                    title={designStack.title}
                    description={designStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Productivity
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {productivityStacks.length >= 1 &&
                productivityStacks.map((productivityStack) => (
                  <StackCard
                    key={productivityStack.title}
                    padding={productivityStack.padding}
                    size={productivityStack.size}
                    icon={productivityStack.icon}
                    iconAlt={productivityStack.iconAlt}
                    title={productivityStack.title}
                    description={productivityStack.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
