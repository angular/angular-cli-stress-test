/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service92Service } from '../../services/service-92.service';

@Component({
  selector: 'app-comp-92',
  templateUrl: './comp-92.component.html',
  styleUrls: ['./comp-92.component.css']
})
export class Comp92Component implements OnInit {

  constructor(private _service: Service92Service) { }

  ngOnInit() {
  }

}
