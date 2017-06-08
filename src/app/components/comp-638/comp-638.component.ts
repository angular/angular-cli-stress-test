/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service638Service } from '../../services/service-638.service';

@Component({
  selector: 'app-comp-638',
  templateUrl: './comp-638.component.html',
  styleUrls: ['./comp-638.component.css']
})
export class Comp638Component implements OnInit {

  constructor(private _service: Service638Service) { }

  ngOnInit() {
  }

}
