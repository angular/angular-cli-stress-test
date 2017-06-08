/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service189Service } from './service-189.service';

describe('Service189Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service189Service]
    });
  });

  it('should ...', inject([Service189Service], (service: Service189Service) => {
    expect(service).toBeTruthy();
  }));
});
