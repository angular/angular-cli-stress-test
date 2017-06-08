/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service896Service } from '../../services/service-896.service';

@Component({
  selector: 'app-comp-896',
  templateUrl: './comp-896.component.html',
  styleUrls: ['./comp-896.component.css']
})
export class Comp896Component implements OnInit {

  constructor(private _service: Service896Service) { }

  ngOnInit() {
  }

}
