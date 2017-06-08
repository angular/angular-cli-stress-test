/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service340Service } from './service-340.service';

describe('Service340Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service340Service]
    });
  });

  it('should ...', inject([Service340Service], (service: Service340Service) => {
    expect(service).toBeTruthy();
  }));
});
