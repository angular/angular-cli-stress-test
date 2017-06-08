/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service936Service } from '../../services/service-936.service';

@Component({
  selector: 'app-comp-936',
  templateUrl: './comp-936.component.html',
  styleUrls: ['./comp-936.component.css']
})
export class Comp936Component implements OnInit {

  constructor(private _service: Service936Service) { }

  ngOnInit() {
  }

}
