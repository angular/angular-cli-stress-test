/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service230Service } from '../../services/service-230.service';

@Component({
  selector: 'app-comp-230',
  templateUrl: './comp-230.component.html',
  styleUrls: ['./comp-230.component.css']
})
export class Comp230Component implements OnInit {

  constructor(private _service: Service230Service) { }

  ngOnInit() {
  }

}
