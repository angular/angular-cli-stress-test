/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service247Service } from '../../services/service-247.service';

@Component({
  selector: 'app-comp-247',
  templateUrl: './comp-247.component.html',
  styleUrls: ['./comp-247.component.css']
})
export class Comp247Component implements OnInit {

  constructor(private _service: Service247Service) { }

  ngOnInit() {
  }

}
