/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service820Service } from '../../services/service-820.service';

@Component({
  selector: 'app-comp-820',
  templateUrl: './comp-820.component.html',
  styleUrls: ['./comp-820.component.css']
})
export class Comp820Component implements OnInit {

  constructor(private _service: Service820Service) { }

  ngOnInit() {
  }

}
