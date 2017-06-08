/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service828Service } from './service-828.service';

describe('Service828Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service828Service]
    });
  });

  it('should ...', inject([Service828Service], (service: Service828Service) => {
    expect(service).toBeTruthy();
  }));
});
