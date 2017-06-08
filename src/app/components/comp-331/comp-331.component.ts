/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service331Service } from '../../services/service-331.service';

@Component({
  selector: 'app-comp-331',
  templateUrl: './comp-331.component.html',
  styleUrls: ['./comp-331.component.css']
})
export class Comp331Component implements OnInit {

  constructor(private _service: Service331Service) { }

  ngOnInit() {
  }

}
