/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service190Service } from '../../services/service-190.service';

@Component({
  selector: 'app-comp-190',
  templateUrl: './comp-190.component.html',
  styleUrls: ['./comp-190.component.css']
})
export class Comp190Component implements OnInit {

  constructor(private _service: Service190Service) { }

  ngOnInit() {
  }

}
