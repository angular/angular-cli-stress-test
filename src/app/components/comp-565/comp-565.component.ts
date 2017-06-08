/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service565Service } from '../../services/service-565.service';

@Component({
  selector: 'app-comp-565',
  templateUrl: './comp-565.component.html',
  styleUrls: ['./comp-565.component.css']
})
export class Comp565Component implements OnInit {

  constructor(private _service: Service565Service) { }

  ngOnInit() {
  }

}
