
export interface GithubGraphLanguageNode {
  name: string;
}

export interface IGithubGist {
  description: string;
  html_url: string;
  git_pull_url: string;
  files: Object[];
}

export interface GithubGraphGistNode {
  name: string;
  description: string;
  url: string;
  files: GithubGraphGistFileNode[];
}

export interface GithubGraphGistFileNode {
  name: string;
  language: GithubGraphLanguageNode;
}

export interface IGithubRepo {
  id: number;
  name: string;
  full_name?: string;
  owner?: object;
  private: boolean;
  html_url?: string;
  description?: string;
  fork?: boolean;
  url: string;
  forks_url?: string;
  keys_url?: string;
  collaborators_url?: string;
  teams_url?: string;
  hooks_url?: string;
  issue_events_url?: string;
  events_url?: string;
  assignees_url?: string;
  branches_url?: string;
  created_at?: string;
  updated_at?: string;
  pushed_at?: string;
  git_url?: string;
  ssh_url?: string;
  clone_url?: string;
  svn_url?: string;
  homepage?: string;
  size?: number;
  stargazers_count?: number;
  watchers_count?: number;
  language: string;
  license?: object;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  default_branch: string;
}

export interface GithubGraphRepoNode {
  name: string;
  url: string;
  sshUrl: string;
  description: string;
  languages: {
    nodes: GithubGraphLanguageNode[]
  };
}
