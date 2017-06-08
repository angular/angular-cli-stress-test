/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service158Service } from '../../services/service-158.service';

@Component({
  selector: 'app-comp-158',
  templateUrl: './comp-158.component.html',
  styleUrls: ['./comp-158.component.css']
})
export class Comp158Component implements OnInit {

  constructor(private _service: Service158Service) { }

  ngOnInit() {
  }

}
