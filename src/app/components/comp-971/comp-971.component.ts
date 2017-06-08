/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service971Service } from '../../services/service-971.service';

@Component({
  selector: 'app-comp-971',
  templateUrl: './comp-971.component.html',
  styleUrls: ['./comp-971.component.css']
})
export class Comp971Component implements OnInit {

  constructor(private _service: Service971Service) { }

  ngOnInit() {
  }

}
