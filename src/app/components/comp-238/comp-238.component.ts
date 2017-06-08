/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service238Service } from '../../services/service-238.service';

@Component({
  selector: 'app-comp-238',
  templateUrl: './comp-238.component.html',
  styleUrls: ['./comp-238.component.css']
})
export class Comp238Component implements OnInit {

  constructor(private _service: Service238Service) { }

  ngOnInit() {
  }

}
