/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service848Service } from './service-848.service';

describe('Service848Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service848Service]
    });
  });

  it('should ...', inject([Service848Service], (service: Service848Service) => {
    expect(service).toBeTruthy();
  }));
});
