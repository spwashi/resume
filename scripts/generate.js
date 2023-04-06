const {readFileSync, writeFileSync} = require('fs');
const {resolve}                     = require('path');

const resumeSvgText =
        readFileSync(resolve(__dirname, '..', 'variants/resume.svg.txt'), 'utf-8');

let resumeText = resumeSvgText;

Object.entries({
                 '_A_[name]': 'Honor Services Office', '_A_[city]': 'Naperville',
                 '_B_[name]': 'University of Illinois Extension', '_B_[city]': 'Urbana-Champaign',
                 '_C_[name]': 'EnsembleIQ', '_C_[city]': 'Chicago',
                 '_D_[name]': 'Mbira Technologies', '_D_[city]': 'Chicago',
                 '_E_[name]': 'Ender', '_E_[city]': 'Remote',
                 '_F_[name]': 'Curology', '_F_[city]': 'Remote',
               }).forEach(([search, replacement]) => resumeText = resumeText.replaceAll(search, replacement))

writeFileSync(resolve(__dirname, '..', 'variants/resume.generated.txt'), resumeText);