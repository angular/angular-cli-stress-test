/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service597Service } from '../../services/service-597.service';

@Component({
  selector: 'app-comp-597',
  templateUrl: './comp-597.component.html',
  styleUrls: ['./comp-597.component.css']
})
export class Comp597Component implements OnInit {

  constructor(private _service: Service597Service) { }

  ngOnInit() {
  }

}
