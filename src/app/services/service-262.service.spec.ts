/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service262Service } from './service-262.service';

describe('Service262Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service262Service]
    });
  });

  it('should ...', inject([Service262Service], (service: Service262Service) => {
    expect(service).toBeTruthy();
  }));
});
