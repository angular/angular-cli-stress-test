/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service892Service } from '../../services/service-892.service';

@Component({
  selector: 'app-comp-892',
  templateUrl: './comp-892.component.html',
  styleUrls: ['./comp-892.component.css']
})
export class Comp892Component implements OnInit {

  constructor(private _service: Service892Service) { }

  ngOnInit() {
  }

}
