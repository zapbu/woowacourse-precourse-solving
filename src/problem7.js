function createFriendsMap(friends) {
  const users = {};

  friends.forEach(([p1, p2]) => {
    if (!users[p1]) users[p1] = [];
    if (!users[p2]) users[p2] = [];
    users[p1].push(p2);
    users[p2].push(p1);
  });
  return users;
}

function isFriend(user, friend, fMap) {
  if (fMap[user] === undefined) return false;
  return fMap[user].find((f) => f === friend) !== undefined;
}

function visitedTimes(n, visitors) {
  return visitors.filter((v) => v === n).length;
}

function createRanking(user, fMap, visitors) {
  const m = {};

  for (const [username, friends] of Object.entries(fMap)) {
    if (isFriend(user, username, fMap) || user === username) continue;
    m[username] = 0;
    m[username] += visitedTimes(username, visitors);

    for (const f of friends) {
      if (isFriend(user, f, fMap)) {
        m[username] += 10;
      }
    }
  }

  visitors.forEach((v) => {
    if (isFriend(user, v, fMap)) return;
    if (!m[v]) m[v] = 0;
    m[v] += 1;
  });

  const r = Object.entries(m).sort((p, c) => {
    return p[1] < c[1];
  });

  return r.map(([n]) => n);
}

function problem7(user, friends, visitors) {
  const fMap = createFriendsMap(friends);
  return createRanking(user, fMap, visitors);
}

module.exports = problem7;
