// Author: Inigo Quiles
// Title: Expo

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 coord, float powRes){
  return  smoothstep( powRes-0.02, powRes, coord.y) - smoothstep( powRes, powRes+0.02, coord.y);
}

void main() {
   vec2 coord = gl_FragCoord.xy/u_resolution;
   // Find relationship between x an powRes coordinates
   float powRes = pow(coord.x,5.0);
   // Display brightness of above relationship
   vec3 color = vec3(powRes);

   // Find out dots on screen which will on the functional line
   color += plot(coord,powRes) * vec3(0.0,1.0,0.0);
   //color += smoothstep(0.04,0.03,coord.x - powRes) * vec3(0.0,1.0,0.0);;

   gl_FragColor = vec4(color,1.0);
}
