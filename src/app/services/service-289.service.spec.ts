/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service289Service } from './service-289.service';

describe('Service289Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service289Service]
    });
  });

  it('should ...', inject([Service289Service], (service: Service289Service) => {
    expect(service).toBeTruthy();
  }));
});
