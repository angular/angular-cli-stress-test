/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service961Service } from '../../services/service-961.service';

@Component({
  selector: 'app-comp-961',
  templateUrl: './comp-961.component.html',
  styleUrls: ['./comp-961.component.css']
})
export class Comp961Component implements OnInit {

  constructor(private _service: Service961Service) { }

  ngOnInit() {
  }

}
