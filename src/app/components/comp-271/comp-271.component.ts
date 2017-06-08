/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service271Service } from '../../services/service-271.service';

@Component({
  selector: 'app-comp-271',
  templateUrl: './comp-271.component.html',
  styleUrls: ['./comp-271.component.css']
})
export class Comp271Component implements OnInit {

  constructor(private _service: Service271Service) { }

  ngOnInit() {
  }

}
