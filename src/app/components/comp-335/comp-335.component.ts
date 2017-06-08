/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service335Service } from '../../services/service-335.service';

@Component({
  selector: 'app-comp-335',
  templateUrl: './comp-335.component.html',
  styleUrls: ['./comp-335.component.css']
})
export class Comp335Component implements OnInit {

  constructor(private _service: Service335Service) { }

  ngOnInit() {
  }

}
