/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service245Service } from '../../services/service-245.service';

@Component({
  selector: 'app-comp-245',
  templateUrl: './comp-245.component.html',
  styleUrls: ['./comp-245.component.css']
})
export class Comp245Component implements OnInit {

  constructor(private _service: Service245Service) { }

  ngOnInit() {
  }

}
