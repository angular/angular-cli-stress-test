/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service974Service } from '../../services/service-974.service';

@Component({
  selector: 'app-comp-974',
  templateUrl: './comp-974.component.html',
  styleUrls: ['./comp-974.component.css']
})
export class Comp974Component implements OnInit {

  constructor(private _service: Service974Service) { }

  ngOnInit() {
  }

}
