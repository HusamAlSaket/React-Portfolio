import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GitHubRepos.css";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // List of specific repos you want to fetch
  const specificRepos = ['GoldenFitness-Admin', 'React-Portfolio', 'Netflix-clone','e-commerce-main'];  // Replace with your repo names

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch the repositories from GitHub
        const response = await axios.get('https://api.github.com/users/HusamAlSaket/repos', {
          headers: {
            Authorization: `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`, // Add your GitHub token here
          },
          params: {
            per_page: 30, // Fetch a larger number of repos
            page: 1, // Get the first page of repos
          },
        });

        console.log("Fetched repos:", response.data);

        // Filter the repos by the names you want
        const filteredRepos = response.data.filter(repo =>
          specificRepos.includes(repo.name)
        );

        setRepos(filteredRepos); // Set the filtered repos
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      }
    };

    fetchRepos(); // Call the fetchRepos function
  }, []);

  return (
    <section className="github-repos" id="GitHubRepos">
      <h2>My GitHub Projects</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="repo-cards">
          {repos.length > 0 ? (
            repos.map((repo, index) => (
              <div className="repo-card" key={repo.id}>
                <div className="repo-image">
                  {/* Display the fetched image or a default image */}
                  <img
                    src={`/images/repos/repo${index + 1}.jpg`} // You can dynamically assign an image here
                    alt={repo.name}
                  />
                </div>
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description available."}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              </div>
            ))
          ) : (
            <p>No repositories available.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default GitHubRepos;
