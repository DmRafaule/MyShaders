#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
const float pi = 3.14159265359;

/* Draw squre root function
   return 1.0, if pixel in right place and use specified color
*/
vec3 lineSQRT(vec2 coord, vec3 color){
   return smoothstep(0.01, 0.001, abs(coord.x - sqrt(coord.y))) * color;
}
/* Draw pow function
   return 1.0, if pixel in right place and use specified color 
*/
vec3 linePOW(vec2 coord, float power, vec3 color){
   return smoothstep(0.01, 0.001, abs(coord.x - pow(coord.y,power))) * color;
}
/* Draw logarithmic function
   return 1.0, if pixel in right place and use specified color 
*/
vec3 lineLOG(vec2 coord, float base, vec3 color){
   return smoothstep(0.01, 0.001, abs(coord.x - log(coord.y + 1.0))) * color;
}
/* Draw linear function
   return 1.0, if pixel in right place and use specified color 
*/
vec3 lineLINEAR(vec2 coord, vec3 color){
   return smoothstep(0.01, 0.001, abs(coord.x - coord.y )) * color;
}
vec3 lineEXP(vec2 coord, vec3 color){
   return smoothstep(0.01, 0.001, abs(coord.x + 1. - exp(coord.y))) * color;
}
vec3 lineSINE(vec2 coord, float freaquency, float lengthOfWave,vec3 color){
   return smoothstep(0.04,0.03, abs((2.0 - sin(coord.x*freaquency + u_time )  - coord.y * lengthOfWave ))) * color;
}
vec3 lineSECANS(vec2 coord, float freaquency, float lengthOfWave,vec3 color){
   return smoothstep(0.04,0.03, abs((2.0 - 1.0 / sin(coord.x*freaquency + u_time )  - coord.y * lengthOfWave ))) * color;
}
vec3 lineCOSINE(vec2 coord, float freaquency, float lengthOfWave,vec3 color){
   return smoothstep(0.04,0.03, abs((2.0 - cos(coord.x*freaquency + u_time )  - coord.y * lengthOfWave ))) * color;
}
vec3 lineCOSECANS(vec2 coord, float freaquency, float lengthOfWave,vec3 color){
   return smoothstep(0.04,0.03, abs((2.0 - 1.0 / cos(coord.x*freaquency + u_time )  - coord.y * lengthOfWave ))) * color;
}
vec3 lineTAN(vec2 coord, float freaquency, float lengthOfWave,vec3 color){
   return smoothstep(0.04,0.03, abs((2.0 - tan(coord.x*freaquency + u_time ) - coord.y * lengthOfWave ))) * color;
}
vec3 lineCOTAN(vec2 coord, float freaquency, float lengthOfWave,vec3 color){
   return smoothstep(0.04,0.03, abs((2.0 - tan(coord.x*freaquency + u_time ) * - 1.0  - coord.y * lengthOfWave ))) * color;
}
vec3 vaweLine(vec2 coord, vec3 color){
   return smoothstep(0.04,0.03,abs(coord.x - 1.0 - cos((coord.y - u_time * pi) / 2.0))) * color;
}

void main() {
   vec2 coord = gl_FragCoord.xy/u_resolution; 
   vec3 color = vec3(0.0, 0.0, 0.0);
   
   color += vaweLine(coord,vec3(0.8, 0.0627, 0.0627));


   gl_FragColor = vec4(color, 1.0);
}