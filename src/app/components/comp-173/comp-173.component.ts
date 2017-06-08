/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service173Service } from '../../services/service-173.service';

@Component({
  selector: 'app-comp-173',
  templateUrl: './comp-173.component.html',
  styleUrls: ['./comp-173.component.css']
})
export class Comp173Component implements OnInit {

  constructor(private _service: Service173Service) { }

  ngOnInit() {
  }

}
