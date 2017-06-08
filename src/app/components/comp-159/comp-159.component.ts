/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service159Service } from '../../services/service-159.service';

@Component({
  selector: 'app-comp-159',
  templateUrl: './comp-159.component.html',
  styleUrls: ['./comp-159.component.css']
})
export class Comp159Component implements OnInit {

  constructor(private _service: Service159Service) { }

  ngOnInit() {
  }

}
