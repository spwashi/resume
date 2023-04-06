const {readFileSync, writeFileSync} = require('fs');
const {resolve}                     = require('path');

const resumeSvgText =
        readFileSync(resolve(__dirname, '..', 'variants/resume.svg.txt'), 'utf-8');

let resumeText = resumeSvgText;

Object.entries({
                 A: {name: 'Honor Services Office', city: 'Naperville'},
                 B: {name: 'University of Illinois Extension', city: 'Urbana-Champaign'},
                 C: {name: 'EnsembleIQ', city: 'Chicago'},
                 D: {name: 'Mbira Technologies', city: 'Chicago'},
                 E: {name: 'Ender', city: 'Remote'},
                 F: {name: 'Curology', city: 'Remote'},
               })
      .forEach(([experienceKey, detailObject]) => {
        Object.entries(detailObject)
              .forEach(([index, value]) => resumeText = resumeText.replaceAll(`_${experienceKey}_[${index}]`, value))
        return resumeText;
      })

writeFileSync(resolve(__dirname, '..', 'variants/resume.generated.txt'), resumeText);