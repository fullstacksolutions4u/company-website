"use client";

import { useState, useEffect } from "react";

const categories = [
  "ALL",
  "AI",
  "DEVOPS",
  "CLOUD",
  "UI_UX",
  "SECURITY",
  "BACKEND",
  "DATA_ANALYTICS"
];

export default function InsightsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    fetch("https://websiteapi-backend-git-642918032467.asia-south1.run.app/blocks/approved?page=1&page_size=100")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.dates) {
          // Flatten blocks from all dates
          const allBlocks = data.dates.flatMap((d: any) => d.blocks);
          setBlogs(allBlocks);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading insights:", err);
        setLoading(false);
      });
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "ALL" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#F7F8F5] text-[#171A17] font-sans antialiased min-h-screen py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="glass-pill text-[11px] font-bold uppercase tracking-wider text-[#38573D]">
            <span className="h-2 w-2 rounded-full bg-[#6B2D1A]" />
            Latest Insights
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#172019]">
            Technology <span className="italic text-[#4D8B4F]">Insights</span> & <span className="text-[#6B2D1A]">Trends</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#526057]">
            Stay updated with expert articles, DevOps strategies, AI integrations, design excellence, and enterprise software tutorials.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#4D8B4F] text-white shadow-sm"
                    : "border border-white/60 bg-white/35 hover:bg-white/60 text-[#525b54]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-white/80 bg-white/40 px-5 py-2.5 text-xs outline-none focus:border-[#4D8B4F] backdrop-blur-md"
            />
          </div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-24 text-sm text-[#525b54]">
            Retrieving article blocks from database...
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="group relative flex flex-col justify-between rounded-[32px] border border-white bg-white/40 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-md cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-[#4D8B4F]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4D8B4F]">
                      {blog.category}
                    </span>
                    <span className="text-[10px] text-[#525b54] font-medium">Article #{blog.id}</span>
                  </div>
                  <h2 className="text-base font-bold text-[#171A17] leading-snug group-hover:text-[#4D8B4F] transition-colors">
                    {blog.title}
                  </h2>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-[#F2F5F0] pt-4 text-[10px] text-[#525b54] font-semibold">
                  <span>Read Full Article</span>
                  <svg className="h-4.5 w-4.5 text-[#4D8B4F] transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-card max-w-xl mx-auto flex flex-col items-center gap-4">
            <svg className="h-12 w-12 text-[#6B2D1A]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-serif font-bold text-[#172019]">No Articles Found</h3>
            <p className="text-xs text-[#526057]">
              There are no articles matching your filter parameters. Try checking other categories or clearing your search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
