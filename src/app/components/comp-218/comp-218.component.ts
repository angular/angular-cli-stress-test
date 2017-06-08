/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service218Service } from '../../services/service-218.service';

@Component({
  selector: 'app-comp-218',
  templateUrl: './comp-218.component.html',
  styleUrls: ['./comp-218.component.css']
})
export class Comp218Component implements OnInit {

  constructor(private _service: Service218Service) { }

  ngOnInit() {
  }

}
