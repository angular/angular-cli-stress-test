/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service647Service } from './service-647.service';

describe('Service647Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service647Service]
    });
  });

  it('should ...', inject([Service647Service], (service: Service647Service) => {
    expect(service).toBeTruthy();
  }));
});
