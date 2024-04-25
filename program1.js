function longestSubstring(s) {
    // Implementation of longestSubstring function
        let longestSubStringLength = 0;
    
        for (let i = 0; i < s.length; i++) {
            let currentStringSet = new Set();
    
            for (let x = i; x < s.length; x++) {
                
                if (currentStringSet.has(s[x])) {
                    
                    break;
                } else {
                    
                    currentStringSet.add(s[x]);
                }
            }
    
            longestSubStringLength = Math.max(
                longestSubStringLength,
                currentStringSet.size
            );
        }
    
        return longestSubStringLength;
    
}

module.exports = { longestSubstring };


