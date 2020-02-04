const data: [string, number][] = [
    [ 'ad', 169 ],
    [ 'ae', 87 ],
    [ 'af', 156 ],
    [ 'ag', 60 ],
    [ 'al', 142 ],
    [ 'am', 125 ],
    [ 'ao', 93 ],
    [ 'ar', 83 ],
    [ 'as', 22 ],
    [ 'at', 163 ],
    [ 'au', 205 ],
    [ 'az', 75 ],
    [ 'ba', 138 ],
    [ 'bb', 62 ],
    [ 'bd', 39 ],
    [ 'be', 112 ],
    [ 'bf', 193 ],
    [ 'bg', 160 ],
    [ 'bh', 44 ],
    [ 'bi', 181 ],
    [ 'bj', 98 ],
    [ 'bn', 172 ],
    [ 'bo', 148 ],
    [ 'br', 12 ],
    [ 'bs', 201 ],
    [ 'bt', 197 ],
    [ 'bu', 17 ],
    [ 'bw', 200 ],
    [ 'by', 191 ],
    [ 'bz', 105 ],
    [ 'ca', 29 ],
    [ 'cd', 109 ],
    [ 'cf', 107 ],
    [ 'cg', 150 ],
    [ 'ch', 176 ],
    [ 'ci', 170 ],
    [ 'cl', 56 ],
    [ 'cm', 149 ],
    [ 'cn', 8 ],
    [ 'cnm', 144 ],
    [ 'co', 80 ],
    [ 'cr', 97 ],
    [ 'cu', 203 ],
    [ 'cv', 31 ],
    [ 'cy', 67 ],
    [ 'cz', 192 ],
    [ 'de', 111 ],
    [ 'dj', 180 ],
    [ 'dk', 23 ],
    [ 'dm', 32 ],
    [ 'do', 90 ],
    [ 'dz', 131 ],
    [ 'ec', 204 ],
    [ 'ee', 59 ],
    [ 'eg', 210 ],
    [ 'eh', 151 ],
    [ 'er', 134 ],
    [ 'es', 16 ],
    [ 'et', 133 ],
    [ 'fi', 46 ],
    [ 'fj', 70 ],
    [ 'fm', 7 ],
    [ 'fo', 0 ],
    [ 'fr', 6 ],
    [ 'ga', 119 ],
    [ 'gb', 20 ],
    [ 'gd', 58 ],
    [ 'ge', 174 ],
    [ 'gh', 135 ],
    [ 'gl', 24 ],
    [ 'gm', 175 ],
    [ 'gn', 186 ],
    [ 'gq', 120 ],
    [ 'gr', 21 ],
    [ 'gt', 137 ],
    [ 'gu', 25 ],
    [ 'gw', 103 ],
    [ 'gy', 116 ],
    [ 'hn', 117 ],
    [ 'hr', 104 ],
    [ 'ht', 91 ],
    [ 'hu', 165 ],
    [ 'id', 47 ],
    [ 'ie', 113 ],
    [ 'il', 183 ],
    [ 'in', 5 ],
    [ 'iq', 173 ],
    [ 'ir', 100 ],
    [ 'is', 209 ],
    [ 'it', 63 ],
    [ 'jk', 159 ],
    [ 'jm', 34 ],
    [ 'jo', 139 ],
    [ 'jp', 3 ],
    [ 'ke', 88 ],
    [ 'kg', 211 ],
    [ 'kh', 94 ],
    [ 'ki', 13 ],
    [ 'km', 69 ],
    [ 'kn', 43 ],
    [ 'kp', 114 ],
    [ 'kr', 115 ],
    [ 'kv', 178 ],
    [ 'kw', 110 ],
    [ 'kz', 74 ],
    [ 'la', 155 ],
    [ 'lb', 179 ],
    [ 'lc', 40 ],
    [ 'li', 162 ],
    [ 'lk', 68 ],
    [ 'lr', 171 ],
    [ 'ls', 77 ],
    [ 'lt', 132 ],
    [ 'lu', 168 ],
    [ 'lv', 122 ],
    [ 'ly', 195 ],
    [ 'ma', 79 ],
    [ 'mc', 141 ],
    [ 'md', 198 ],
    [ 'me', 153 ],
    [ 'mg', 208 ],
    [ 'mh', 55 ],
    [ 'mk', 189 ],
    [ 'ml', 184 ],
    [ 'mm', 118 ],
    [ 'mn', 145 ],
    [ 'mp', 26 ],
    [ 'mr', 130 ],
    [ 'mt', 64 ],
    [ 'mu', 48 ],
    [ 'mv', 18 ],
    [ 'mw', 124 ],
    [ 'mx', 15 ],
    [ 'my', 51 ],
    [ 'mz', 96 ],
    [ 'na', 194 ],
    [ 'nc', 129 ],
    [ 'ne', 167 ],
    [ 'ng', 99 ],
    [ 'ni', 121 ],
    [ 'nl', 33 ],
    [ 'no', 42 ],
    [ 'np', 212 ],
    [ 'nr', 41 ],
    [ 'nz', 202 ],
    [ 'om', 36 ],
    [ 'pa', 52 ],
    [ 'pe', 89 ],
    [ 'pg', 92 ],
    [ 'ph', 14 ],
    [ 'pk', 85 ],
    [ 'pl', 188 ],
    [ 'pr', 27 ],
    [ 'pt', 9 ],
    [ 'pw', 53 ],
    [ 'py', 190 ],
    [ 'qa', 161 ],
    [ 'ro', 166 ],
    [ 'rs', 152 ],
    [ 'ru', 71 ],
    [ 'rw', 146 ],
    [ 'sa', 84 ],
    [ 'sb', 207 ],
    [ 'sc', 4 ],
    [ 'sd', 108 ],
    [ 'se', 49 ],
    [ 'sg', 66 ],
    [ 'sh', 11 ],
    [ 'si', 136 ],
    [ 'sk', 158 ],
    [ 'sl', 102 ],
    [ 'sm', 73 ],
    [ 'sn', 185 ],
    [ 'so', 147 ],
    [ 'sp', 19 ],
    [ 'sr', 182 ],
    [ 'ss', 199 ],
    [ 'st', 30 ],
    [ 'sv', 101 ],
    [ 'sw', 10 ],
    [ 'sx', 126 ],
    [ 'sy', 140 ],
    [ 'sz', 164 ],
    [ 'td', 177 ],
    [ 'tg', 154 ],
    [ 'th', 57 ],
    [ 'tj', 76 ],
    [ 'tl', 81 ],
    [ 'tm', 127 ],
    [ 'tn', 196 ],
    [ 'to', 45 ],
    [ 'tr', 38 ],
    [ 'tt', 50 ],
    [ 'tv', 54 ],
    [ 'tw', 61 ],
    [ 'tz', 82 ],
    [ 'ua', 157 ],
    [ 'ug', 123 ],
    [ 'um', 1 ],
    [ 'us', 2 ],
    [ 'uy', 143 ],
    [ 'uz', 78 ],
    [ 'va', 72 ],
    [ 'vc', 37 ],
    [ 've', 206 ],
    [ 'vi', 28 ],
    [ 'vn', 95 ],
    [ 'vu', 65 ],
    [ 'ws', 35 ],
    [ 'ye', 86 ],
    [ 'za', 106 ],
    [ 'zm', 128 ],
    [ 'zw', 187 ]
];

export default data;