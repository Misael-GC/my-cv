import { skillsData } from '../data/data'

function skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-dvh mb-20">
      {skillsData.map((category) => (
        <div key={category.category} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">{category.category}</h2>
          <div className="grid grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                {skill.icon}
                <span className="text-white mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default skills