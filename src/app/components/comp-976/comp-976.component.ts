/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service976Service } from '../../services/service-976.service';

@Component({
  selector: 'app-comp-976',
  templateUrl: './comp-976.component.html',
  styleUrls: ['./comp-976.component.css']
})
export class Comp976Component implements OnInit {

  constructor(private _service: Service976Service) { }

  ngOnInit() {
  }

}
