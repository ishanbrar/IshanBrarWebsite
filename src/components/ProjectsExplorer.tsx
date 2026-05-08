"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import {
  allCategories,
  allTags,
  type Project,
  type ProjectCategory,
  type ProjectTag,
} from "@/data/projects";
import { ProjectCardV2 } from "@/components/ProjectCardV2";
import { TagPill } from "@/components/TagPill";

const ALL = "All" as const;

type ProjectsExplorerProps = {
  projects: Project[];
  initialCategory?: string;
  initialTag?: string;
  limit?: number;
};

function normalizeCategory(value?: string) {
  return allCategories.includes(value as ProjectCategory)
    ? (value as ProjectCategory)
    : ALL;
}

function normalizeTag(value?: string) {
  return allTags.includes(value as ProjectTag) ? (value as ProjectTag) : ALL;
}

export function ProjectsExplorer({
  projects,
  initialCategory,
  initialTag,
  limit,
}: ProjectsExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | typeof ALL
  >(normalizeCategory(initialCategory));
  const [selectedTag, setSelectedTag] = useState<ProjectTag | typeof ALL>(
    normalizeTag(initialTag),
  );

  const categories = useMemo(
    () => [ALL, ...allCategories.filter((category) => projects.some((project) => project.category === category))],
    [projects],
  );

  const tags = useMemo(
    () => [
      ALL,
      ...allTags.filter((tag) =>
        projects.some(
          (project) =>
            (selectedCategory === ALL || project.category === selectedCategory) &&
            project.tags.includes(tag),
        ),
      ),
    ],
    [projects, selectedCategory],
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === ALL || project.category === selectedCategory;
      const tagMatch = selectedTag === ALL || project.tags.includes(selectedTag);
      return categoryMatch && tagMatch;
    });
  }, [projects, selectedCategory, selectedTag]);

  const visibleProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  function handleCategoryChange(next: ProjectCategory | typeof ALL) {
    setSelectedCategory(next);
    if (
      selectedTag !== ALL &&
      !projects.some(
        (project) =>
          (next === ALL || project.category === next) &&
          project.tags.includes(selectedTag),
      )
    ) {
      setSelectedTag(ALL);
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <TagPill active={selectedCategory === category}>{category}</TagPill>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <TagPill active={selectedTag === tag}>{tag}</TagPill>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--muted)]">
          <p>
            {filteredProjects.length} result{filteredProjects.length === 1 ? "" : "s"}
            {selectedCategory !== ALL ? ` in ${selectedCategory}` : ""}
            {selectedTag !== ALL ? ` using ${selectedTag}` : ""}
          </p>
          {limit && filteredProjects.length > limit ? (
            <p>Showing {limit} of {filteredProjects.length}</p>
          ) : null}
        </div>
      </div>

      <m.div layout className="grid gap-5 lg:grid-cols-2">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleProjects.map((project, index) => (
            <m.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.24, delay: index * 0.02 }}
            >
              <ProjectCardV2 project={project} priority={index < 2} />
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>
    </div>
  );
}
