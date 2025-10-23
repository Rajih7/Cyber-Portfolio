import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="group from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      {/* Title Bar: Always visible */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      {/* Expanded details: Hidden by default, shown on hover */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 max-h-0 opacity-0 group-hover:max-h-[1000px] group-hover:opacity-100 transition-all duration-300 ease-out py-0 group-hover:py-4 lg:group-hover:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base text-green-400 bg-black p-4 rounded-md block whitespace-pre-wrap">
          <div className="blink">
            <span className="mr-2 text-pink-500">C:\Projects\&gt;{' '}</span>
            <span className="text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{`{`}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools?.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{`'],`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
