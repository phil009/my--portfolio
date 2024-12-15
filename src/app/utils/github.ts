export const fetchGitHubProfile = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }
  return response.json();
};
