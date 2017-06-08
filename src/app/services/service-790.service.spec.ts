/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service790Service } from './service-790.service';

describe('Service790Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service790Service]
    });
  });

  it('should ...', inject([Service790Service], (service: Service790Service) => {
    expect(service).toBeTruthy();
  }));
});
