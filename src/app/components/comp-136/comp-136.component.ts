/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service136Service } from '../../services/service-136.service';

@Component({
  selector: 'app-comp-136',
  templateUrl: './comp-136.component.html',
  styleUrls: ['./comp-136.component.css']
})
export class Comp136Component implements OnInit {

  constructor(private _service: Service136Service) { }

  ngOnInit() {
  }

}
