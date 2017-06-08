/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service938Service } from '../../services/service-938.service';

@Component({
  selector: 'app-comp-938',
  templateUrl: './comp-938.component.html',
  styleUrls: ['./comp-938.component.css']
})
export class Comp938Component implements OnInit {

  constructor(private _service: Service938Service) { }

  ngOnInit() {
  }

}
