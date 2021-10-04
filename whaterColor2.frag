#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int c_amount = 5;

void main(){
   vec2 coord = 10.0 *(gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y,u_resolution.x);
   vec3 color = vec3(0.4824, 0.5843, 0.8588);
   float len;
   for(int i = 0; i < c_amount; i++){
      len = length(vec2(coord.x,coord.y));

      coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 9.0);
      coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 12.0);
   }

   gl_FragColor = vec4(cos(len)*color.r,cos(len)*color.g,cos(len) * color.b,1.0);
}