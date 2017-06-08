/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service259Service } from '../../services/service-259.service';

@Component({
  selector: 'app-comp-259',
  templateUrl: './comp-259.component.html',
  styleUrls: ['./comp-259.component.css']
})
export class Comp259Component implements OnInit {

  constructor(private _service: Service259Service) { }

  ngOnInit() {
  }

}
