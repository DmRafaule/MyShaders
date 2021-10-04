#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
   vec2 coord = (gl_FragCoord.xy / u_resolution);
   vec3 colorD = vec3(0.1059, 0.5294, 0.8118);
   float color = 0.0;


   color += sin(coord.x * 6.0 + sin(u_time + coord.y * 90.0 + cos(coord.x * 30.0 + u_time))) * 0.5;
   color += cos(coord.y * 6.0 + cos(u_time + coord.x * 20.0 + sin(coord.y * 30.0 + u_time))) * 0.9;

   gl_FragColor = vec4(vec3(color + coord.x + colorD.r ,color + coord.x + colorD.g,color + colorD.b),1.0);
}