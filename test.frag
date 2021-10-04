#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

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

void main() {
   vec2 coord = gl_FragCoord.xy/u_resolution; 
   vec3 color = vec3(0);
  
   color += linePOW(coord,3.0,vec3(0.42, 0.01, 0.01));
   color += lineSQRT(coord,vec3(0.05, 0.64, 0.51));
   color += lineLOG(coord,2.0,vec3(0.13, 0.61, 0.08));
   color += lineLINEAR(coord,vec3(0.61, 0.08, 0.5));
   color += lineEXP(coord,vec3(0.69, 0.68, 0.24));

   gl_FragColor = vec4(color, 1.0);
}