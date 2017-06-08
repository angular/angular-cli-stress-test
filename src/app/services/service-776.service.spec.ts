/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service776Service } from './service-776.service';

describe('Service776Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service776Service]
    });
  });

  it('should ...', inject([Service776Service], (service: Service776Service) => {
    expect(service).toBeTruthy();
  }));
});
